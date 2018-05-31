export class Log {
    constructor(
      public time: Date,
      public correlationId: string,
      public type: string,
      public source: string,
      public description: string,
      public data: any
    ) {}
}
