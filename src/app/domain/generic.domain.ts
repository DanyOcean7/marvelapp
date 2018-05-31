  export class UriControl {
    constructor(
      public serviceProvider: string,
      public pathParameters: [number, string][],
      public queryParameters: [string, string][]
    ) { }
  }
