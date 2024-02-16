import { render, screen, waitFor } from "@testing-library/react"
import axios from "axios"
import { UserSearch } from "./UserSearch"
import userEvent from "@testing-library/user-event"

jest.mock("axios")
const mokeAxios = jest.mocked(axios)

const user = userEvent.setup()

interface User {
  id: number
  name: string
}

describe("UserSearchComponentテスト", () => {

  beforeEach(() => {
    mokeAxios.get.mockReset()
  })


  it("入力フィールドに入力した内容でAPIリクエストが送信される", async () => {
    const userInfo: User = {
      id: 1,
      name: "Taro"
    };
    const res = { data: userInfo }
    mokeAxios.get.mockResolvedValue(res)

    render(<UserSearch />)

    const input = screen.getByRole("textbox")
    const button = screen.getByRole("button")
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    const query = "dummy text"
    await user.type(input, query)
    expect(screen.getByDisplayValue(query)).toBeInTheDocument()

    await user.click(button)
    expect(mokeAxios.get).toHaveBeenCalledTimes(1)
    expect(mokeAxios.get).toHaveBeenCalledWith(`/api/users?query=${query}`)

  })

  it("APIから取得したユーザー情報が画面に表示される", async () => {
    const userInfo: User = {
      id: 1,
      name: "Taro"
    };
    const res = { data: userInfo }
    mokeAxios.get.mockResolvedValue(res)

    render(<UserSearch />)

    const input = screen.getByRole("textbox")
    const button = screen.getByRole("button")
    expect(input).toBeInTheDocument()
    expect(button).toBeInTheDocument()

    const query = "dummy text"
    await user.type(input, query)
    expect(screen.getByDisplayValue(query)).toBeInTheDocument()

    await user.click(button)
    expect(mokeAxios.get).toHaveBeenCalledTimes(1)
    expect(mokeAxios.get).toHaveBeenCalledWith(`/api/users?query=${query}`)

    await waitFor(() => expect(screen.getByText(userInfo.name)).toBeInTheDocument(),
    )

  })
})
