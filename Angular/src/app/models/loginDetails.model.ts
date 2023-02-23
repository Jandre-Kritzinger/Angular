export interface LoginRequestModel {
  email: String
  password: String
}
export interface LoginResponseModel {
  accessToken: String
  success: boolean
}
