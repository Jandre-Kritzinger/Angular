export interface SignUpRequestModel {
  name: String
  surname: String
  email: String
  password: String
  //profilePic: File
}

export interface SignUpResponseModel {
  accessToken: String
  success: boolean
}
