export enum HttpCode {
  // Success codes
  OK = 200,
  Created = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,

  // Redirection codes
  Found = 302,
  SeeOther = 303,
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  // Client error codes
  BadRequest = 400,
  Unauthorized = 401,
  PaymentRequired = 402,
  Forbidden = 403,
  NotFound = 404,
  MethodNotAllowed = 405,
  RequestTimeout = 408,
  Conflict = 409,
  Gone = 410,
  LengthRequired = 411,
  PreconditionFailed = 412,
  PayloadTooLarge = 413,
  URITooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  ImATeapot = 418,
  EnhanceYourCalm = 420,
  UnprocessableEntity = 422,
  Locked = 423,
  FailedDependency = 424,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  UnavailableForLegalReasons = 451,

  // Server error codes
  InternalServerError = 500,
  NotImplemented = 501,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
  HTTPVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507,
  LoopDetected = 508,
  NetworkAuthenticationRequired = 511,
}
export enum Role {
  doctor = 'DOCTOR',
  patient = 'PATIENT',
}
