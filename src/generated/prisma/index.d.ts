
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Medicament
 * 
 */
export type Medicament = $Result.DefaultSelection<Prisma.$MedicamentPayload>
/**
 * Model Prescription
 * 
 */
export type Prescription = $Result.DefaultSelection<Prisma.$PrescriptionPayload>
/**
 * Model PrescriptionLine
 * 
 */
export type PrescriptionLine = $Result.DefaultSelection<Prisma.$PrescriptionLinePayload>
/**
 * Model Consultation
 * 
 */
export type Consultation = $Result.DefaultSelection<Prisma.$ConsultationPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>
/**
 * Model ReminderData
 * 
 */
export type ReminderData = $Result.DefaultSelection<Prisma.$ReminderDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Unit: {
  mg: 'mg',
  g: 'g',
  ml: 'ml',
  l: 'l',
  unit: 'unit',
  tablet: 'tablet',
  capsule: 'capsule',
  sachet: 'sachet'
};

export type Unit = (typeof Unit)[keyof typeof Unit]


export const Gender: {
  male: 'male',
  female: 'female'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const FoodOrderType: {
  before: 'before',
  after: 'after',
  with: 'with',
  none: 'none'
};

export type FoodOrderType = (typeof FoodOrderType)[keyof typeof FoodOrderType]

}

export type Unit = $Enums.Unit

export const Unit: typeof $Enums.Unit

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type FoodOrderType = $Enums.FoodOrderType

export const FoodOrderType: typeof $Enums.FoodOrderType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicament`: Exposes CRUD operations for the **Medicament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medicaments
    * const medicaments = await prisma.medicament.findMany()
    * ```
    */
  get medicament(): Prisma.MedicamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescription`: Exposes CRUD operations for the **Prescription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prescriptions
    * const prescriptions = await prisma.prescription.findMany()
    * ```
    */
  get prescription(): Prisma.PrescriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prescriptionLine`: Exposes CRUD operations for the **PrescriptionLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PrescriptionLines
    * const prescriptionLines = await prisma.prescriptionLine.findMany()
    * ```
    */
  get prescriptionLine(): Prisma.PrescriptionLineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultation`: Exposes CRUD operations for the **Consultation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultations
    * const consultations = await prisma.consultation.findMany()
    * ```
    */
  get consultation(): Prisma.ConsultationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reminderData`: Exposes CRUD operations for the **ReminderData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReminderData
    * const reminderData = await prisma.reminderData.findMany()
    * ```
    */
  get reminderData(): Prisma.ReminderDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Doctor: 'Doctor',
    Patient: 'Patient',
    Medicament: 'Medicament',
    Prescription: 'Prescription',
    PrescriptionLine: 'PrescriptionLine',
    Consultation: 'Consultation',
    Reminder: 'Reminder',
    ReminderData: 'ReminderData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "doctor" | "patient" | "medicament" | "prescription" | "prescriptionLine" | "consultation" | "reminder" | "reminderData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Medicament: {
        payload: Prisma.$MedicamentPayload<ExtArgs>
        fields: Prisma.MedicamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>
          }
          findFirst: {
            args: Prisma.MedicamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>
          }
          findMany: {
            args: Prisma.MedicamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>[]
          }
          create: {
            args: Prisma.MedicamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>
          }
          createMany: {
            args: Prisma.MedicamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>[]
          }
          delete: {
            args: Prisma.MedicamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>
          }
          update: {
            args: Prisma.MedicamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>
          }
          deleteMany: {
            args: Prisma.MedicamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>[]
          }
          upsert: {
            args: Prisma.MedicamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicamentPayload>
          }
          aggregate: {
            args: Prisma.MedicamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicament>
          }
          groupBy: {
            args: Prisma.MedicamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicamentCountArgs<ExtArgs>
            result: $Utils.Optional<MedicamentCountAggregateOutputType> | number
          }
        }
      }
      Prescription: {
        payload: Prisma.$PrescriptionPayload<ExtArgs>
        fields: Prisma.PrescriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findFirst: {
            args: Prisma.PrescriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          findMany: {
            args: Prisma.PrescriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          create: {
            args: Prisma.PrescriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          createMany: {
            args: Prisma.PrescriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          delete: {
            args: Prisma.PrescriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          update: {
            args: Prisma.PrescriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionPayload>
          }
          aggregate: {
            args: Prisma.PrescriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescription>
          }
          groupBy: {
            args: Prisma.PrescriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionCountAggregateOutputType> | number
          }
        }
      }
      PrescriptionLine: {
        payload: Prisma.$PrescriptionLinePayload<ExtArgs>
        fields: Prisma.PrescriptionLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrescriptionLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrescriptionLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>
          }
          findFirst: {
            args: Prisma.PrescriptionLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrescriptionLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>
          }
          findMany: {
            args: Prisma.PrescriptionLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>[]
          }
          create: {
            args: Prisma.PrescriptionLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>
          }
          createMany: {
            args: Prisma.PrescriptionLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrescriptionLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>[]
          }
          delete: {
            args: Prisma.PrescriptionLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>
          }
          update: {
            args: Prisma.PrescriptionLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>
          }
          deleteMany: {
            args: Prisma.PrescriptionLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrescriptionLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrescriptionLineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>[]
          }
          upsert: {
            args: Prisma.PrescriptionLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrescriptionLinePayload>
          }
          aggregate: {
            args: Prisma.PrescriptionLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrescriptionLine>
          }
          groupBy: {
            args: Prisma.PrescriptionLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrescriptionLineCountArgs<ExtArgs>
            result: $Utils.Optional<PrescriptionLineCountAggregateOutputType> | number
          }
        }
      }
      Consultation: {
        payload: Prisma.$ConsultationPayload<ExtArgs>
        fields: Prisma.ConsultationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findFirst: {
            args: Prisma.ConsultationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          findMany: {
            args: Prisma.ConsultationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          create: {
            args: Prisma.ConsultationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          createMany: {
            args: Prisma.ConsultationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          delete: {
            args: Prisma.ConsultationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          update: {
            args: Prisma.ConsultationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationPayload>
          }
          aggregate: {
            args: Prisma.ConsultationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultation>
          }
          groupBy: {
            args: Prisma.ConsultationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
      ReminderData: {
        payload: Prisma.$ReminderDataPayload<ExtArgs>
        fields: Prisma.ReminderDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>
          }
          findFirst: {
            args: Prisma.ReminderDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>
          }
          findMany: {
            args: Prisma.ReminderDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>[]
          }
          create: {
            args: Prisma.ReminderDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>
          }
          createMany: {
            args: Prisma.ReminderDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReminderDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>[]
          }
          delete: {
            args: Prisma.ReminderDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>
          }
          update: {
            args: Prisma.ReminderDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReminderDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>[]
          }
          upsert: {
            args: Prisma.ReminderDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReminderDataPayload>
          }
          aggregate: {
            args: Prisma.ReminderDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReminderData>
          }
          groupBy: {
            args: Prisma.ReminderDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReminderDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderDataCountArgs<ExtArgs>
            result: $Utils.Optional<ReminderDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    doctor?: DoctorOmit
    patient?: PatientOmit
    medicament?: MedicamentOmit
    prescription?: PrescriptionOmit
    prescriptionLine?: PrescriptionLineOmit
    consultation?: ConsultationOmit
    reminder?: ReminderOmit
    reminderData?: ReminderDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    patients: number
    consultations: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | DoctorCountOutputTypeCountPatientsArgs
    consultations?: boolean | DoctorCountOutputTypeCountConsultationsArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    doctors: number
    consultations: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | PatientCountOutputTypeCountDoctorsArgs
    consultations?: boolean | PatientCountOutputTypeCountConsultationsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountConsultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
  }


  /**
   * Count Type MedicamentCountOutputType
   */

  export type MedicamentCountOutputType = {
    prescriptions: number
    prescriptionLines: number
  }

  export type MedicamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | MedicamentCountOutputTypeCountPrescriptionsArgs
    prescriptionLines?: boolean | MedicamentCountOutputTypeCountPrescriptionLinesArgs
  }

  // Custom InputTypes
  /**
   * MedicamentCountOutputType without action
   */
  export type MedicamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicamentCountOutputType
     */
    select?: MedicamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicamentCountOutputType without action
   */
  export type MedicamentCountOutputTypeCountPrescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }

  /**
   * MedicamentCountOutputType without action
   */
  export type MedicamentCountOutputTypeCountPrescriptionLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionLineWhereInput
  }


  /**
   * Count Type PrescriptionCountOutputType
   */

  export type PrescriptionCountOutputType = {
    medicaments: number
    prescriptionLines: number
  }

  export type PrescriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicaments?: boolean | PrescriptionCountOutputTypeCountMedicamentsArgs
    prescriptionLines?: boolean | PrescriptionCountOutputTypeCountPrescriptionLinesArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionCountOutputType
     */
    select?: PrescriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountMedicamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentWhereInput
  }

  /**
   * PrescriptionCountOutputType without action
   */
  export type PrescriptionCountOutputTypeCountPrescriptionLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionLineWhereInput
  }


  /**
   * Count Type PrescriptionLineCountOutputType
   */

  export type PrescriptionLineCountOutputType = {
    reminders: number
  }

  export type PrescriptionLineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminders?: boolean | PrescriptionLineCountOutputTypeCountRemindersArgs
  }

  // Custom InputTypes
  /**
   * PrescriptionLineCountOutputType without action
   */
  export type PrescriptionLineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLineCountOutputType
     */
    select?: PrescriptionLineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PrescriptionLineCountOutputType without action
   */
  export type PrescriptionLineCountOutputTypeCountRemindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderDataWhereInput
  }


  /**
   * Count Type ConsultationCountOutputType
   */

  export type ConsultationCountOutputType = {
    prescription: number
  }

  export type ConsultationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | ConsultationCountOutputTypeCountPrescriptionArgs
  }

  // Custom InputTypes
  /**
   * ConsultationCountOutputType without action
   */
  export type ConsultationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationCountOutputType
     */
    select?: ConsultationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConsultationCountOutputType without action
   */
  export type ConsultationCountOutputTypeCountPrescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
  }


  /**
   * Count Type ReminderCountOutputType
   */

  export type ReminderCountOutputType = {
    reminderData: number
  }

  export type ReminderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminderData?: boolean | ReminderCountOutputTypeCountReminderDataArgs
  }

  // Custom InputTypes
  /**
   * ReminderCountOutputType without action
   */
  export type ReminderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderCountOutputType
     */
    select?: ReminderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReminderCountOutputType without action
   */
  export type ReminderCountOutputTypeCountReminderDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderDataWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    address: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    address: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    address?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    address: string | null
    phone: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    address?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "address" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | User$doctorArgs<ExtArgs>
    patient?: boolean | User$patientArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      address: string | null
      phone: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends User$doctorArgs<ExtArgs> = {}>(args?: Subset<T, User$doctorArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patient<T extends User$patientArgs<ExtArgs> = {}>(args?: Subset<T, User$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.doctor
   */
  export type User$doctorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * User.patient
   */
  export type User$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    specialty: string | null
    licenseNumber: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    specialty: string | null
    licenseNumber: string | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    specialty: number
    licenseNumber: number
    _all: number
  }


  export type DoctorMinAggregateInputType = {
    id?: true
    specialty?: true
    licenseNumber?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    specialty?: true
    licenseNumber?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    specialty?: true
    licenseNumber?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    specialty: string
    licenseNumber: string
    _count: DoctorCountAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    user?: boolean | Doctor$userArgs<ExtArgs>
    patients?: boolean | Doctor$patientsArgs<ExtArgs>
    consultations?: boolean | Doctor$consultationsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    user?: boolean | Doctor$userArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    specialty?: boolean
    licenseNumber?: boolean
    user?: boolean | Doctor$userArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    id?: boolean
    specialty?: boolean
    licenseNumber?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "specialty" | "licenseNumber", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Doctor$userArgs<ExtArgs>
    patients?: boolean | Doctor$patientsArgs<ExtArgs>
    consultations?: boolean | Doctor$consultationsArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Doctor$userArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Doctor$userArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      patients: Prisma.$PatientPayload<ExtArgs>[]
      consultations: Prisma.$ConsultationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      specialty: string
      licenseNumber: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `id`
     * const doctorWithIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Doctor$userArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    patients<T extends Doctor$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultations<T extends Doctor$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly specialty: FieldRef<"Doctor", 'String'>
    readonly licenseNumber: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.user
   */
  export type Doctor$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Doctor.patients
   */
  export type Doctor$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Doctor.consultations
   */
  export type Doctor$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    birthdate: Date | null
    gender: $Enums.Gender | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    birthdate: Date | null
    gender: $Enums.Gender | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    birthdate: number
    gender: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    birthdate?: true
    gender?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    birthdate?: true
    gender?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    birthdate?: true
    gender?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    birthdate: Date
    gender: $Enums.Gender
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthdate?: boolean
    gender?: boolean
    user?: boolean | Patient$userArgs<ExtArgs>
    doctors?: boolean | Patient$doctorsArgs<ExtArgs>
    consultations?: boolean | Patient$consultationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthdate?: boolean
    gender?: boolean
    user?: boolean | Patient$userArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    birthdate?: boolean
    gender?: boolean
    user?: boolean | Patient$userArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    birthdate?: boolean
    gender?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "birthdate" | "gender", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Patient$userArgs<ExtArgs>
    doctors?: boolean | Patient$doctorsArgs<ExtArgs>
    consultations?: boolean | Patient$consultationsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Patient$userArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Patient$userArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      doctors: Prisma.$DoctorPayload<ExtArgs>[]
      consultations: Prisma.$ConsultationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      birthdate: Date
      gender: $Enums.Gender
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Patient$userArgs<ExtArgs> = {}>(args?: Subset<T, Patient$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    doctors<T extends Patient$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultations<T extends Patient$consultationsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$consultationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly birthdate: FieldRef<"Patient", 'DateTime'>
    readonly gender: FieldRef<"Patient", 'Gender'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.user
   */
  export type Patient$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Patient.doctors
   */
  export type Patient$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Patient.consultations
   */
  export type Patient$consultationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    cursor?: ConsultationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Medicament
   */

  export type AggregateMedicament = {
    _count: MedicamentCountAggregateOutputType | null
    _avg: MedicamentAvgAggregateOutputType | null
    _sum: MedicamentSumAggregateOutputType | null
    _min: MedicamentMinAggregateOutputType | null
    _max: MedicamentMaxAggregateOutputType | null
  }

  export type MedicamentAvgAggregateOutputType = {
    quantityPerPack: number | null
  }

  export type MedicamentSumAggregateOutputType = {
    quantityPerPack: number | null
  }

  export type MedicamentMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    quantityPerPack: number | null
    unit: $Enums.Unit | null
  }

  export type MedicamentMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    quantityPerPack: number | null
    unit: $Enums.Unit | null
  }

  export type MedicamentCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    sideEffects: number
    contraindications: number
    interactions: number
    quantityPerPack: number
    unit: number
    _all: number
  }


  export type MedicamentAvgAggregateInputType = {
    quantityPerPack?: true
  }

  export type MedicamentSumAggregateInputType = {
    quantityPerPack?: true
  }

  export type MedicamentMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    quantityPerPack?: true
    unit?: true
  }

  export type MedicamentMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    quantityPerPack?: true
    unit?: true
  }

  export type MedicamentCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    sideEffects?: true
    contraindications?: true
    interactions?: true
    quantityPerPack?: true
    unit?: true
    _all?: true
  }

  export type MedicamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicament to aggregate.
     */
    where?: MedicamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicaments to fetch.
     */
    orderBy?: MedicamentOrderByWithRelationInput | MedicamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medicaments
    **/
    _count?: true | MedicamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicamentMaxAggregateInputType
  }

  export type GetMedicamentAggregateType<T extends MedicamentAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicament[P]>
      : GetScalarType<T[P], AggregateMedicament[P]>
  }




  export type MedicamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicamentWhereInput
    orderBy?: MedicamentOrderByWithAggregationInput | MedicamentOrderByWithAggregationInput[]
    by: MedicamentScalarFieldEnum[] | MedicamentScalarFieldEnum
    having?: MedicamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicamentCountAggregateInputType | true
    _avg?: MedicamentAvgAggregateInputType
    _sum?: MedicamentSumAggregateInputType
    _min?: MedicamentMinAggregateInputType
    _max?: MedicamentMaxAggregateInputType
  }

  export type MedicamentGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string
    sideEffects: string[]
    contraindications: string[]
    interactions: string[]
    quantityPerPack: number
    unit: $Enums.Unit
    _count: MedicamentCountAggregateOutputType | null
    _avg: MedicamentAvgAggregateOutputType | null
    _sum: MedicamentSumAggregateOutputType | null
    _min: MedicamentMinAggregateOutputType | null
    _max: MedicamentMaxAggregateOutputType | null
  }

  type GetMedicamentGroupByPayload<T extends MedicamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicamentGroupByOutputType[P]>
            : GetScalarType<T[P], MedicamentGroupByOutputType[P]>
        }
      >
    >


  export type MedicamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    sideEffects?: boolean
    contraindications?: boolean
    interactions?: boolean
    quantityPerPack?: boolean
    unit?: boolean
    prescriptions?: boolean | Medicament$prescriptionsArgs<ExtArgs>
    prescriptionLines?: boolean | Medicament$prescriptionLinesArgs<ExtArgs>
    _count?: boolean | MedicamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicament"]>

  export type MedicamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    sideEffects?: boolean
    contraindications?: boolean
    interactions?: boolean
    quantityPerPack?: boolean
    unit?: boolean
  }, ExtArgs["result"]["medicament"]>

  export type MedicamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    sideEffects?: boolean
    contraindications?: boolean
    interactions?: boolean
    quantityPerPack?: boolean
    unit?: boolean
  }, ExtArgs["result"]["medicament"]>

  export type MedicamentSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    sideEffects?: boolean
    contraindications?: boolean
    interactions?: boolean
    quantityPerPack?: boolean
    unit?: boolean
  }

  export type MedicamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "sideEffects" | "contraindications" | "interactions" | "quantityPerPack" | "unit", ExtArgs["result"]["medicament"]>
  export type MedicamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescriptions?: boolean | Medicament$prescriptionsArgs<ExtArgs>
    prescriptionLines?: boolean | Medicament$prescriptionLinesArgs<ExtArgs>
    _count?: boolean | MedicamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MedicamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MedicamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medicament"
    objects: {
      prescriptions: Prisma.$PrescriptionPayload<ExtArgs>[]
      prescriptionLines: Prisma.$PrescriptionLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string
      sideEffects: string[]
      contraindications: string[]
      interactions: string[]
      quantityPerPack: number
      unit: $Enums.Unit
    }, ExtArgs["result"]["medicament"]>
    composites: {}
  }

  type MedicamentGetPayload<S extends boolean | null | undefined | MedicamentDefaultArgs> = $Result.GetResult<Prisma.$MedicamentPayload, S>

  type MedicamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicamentCountAggregateInputType | true
    }

  export interface MedicamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medicament'], meta: { name: 'Medicament' } }
    /**
     * Find zero or one Medicament that matches the filter.
     * @param {MedicamentFindUniqueArgs} args - Arguments to find a Medicament
     * @example
     * // Get one Medicament
     * const medicament = await prisma.medicament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicamentFindUniqueArgs>(args: SelectSubset<T, MedicamentFindUniqueArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medicament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicamentFindUniqueOrThrowArgs} args - Arguments to find a Medicament
     * @example
     * // Get one Medicament
     * const medicament = await prisma.medicament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicamentFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentFindFirstArgs} args - Arguments to find a Medicament
     * @example
     * // Get one Medicament
     * const medicament = await prisma.medicament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicamentFindFirstArgs>(args?: SelectSubset<T, MedicamentFindFirstArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medicament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentFindFirstOrThrowArgs} args - Arguments to find a Medicament
     * @example
     * // Get one Medicament
     * const medicament = await prisma.medicament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicamentFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medicaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medicaments
     * const medicaments = await prisma.medicament.findMany()
     * 
     * // Get first 10 Medicaments
     * const medicaments = await prisma.medicament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicamentWithIdOnly = await prisma.medicament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicamentFindManyArgs>(args?: SelectSubset<T, MedicamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medicament.
     * @param {MedicamentCreateArgs} args - Arguments to create a Medicament.
     * @example
     * // Create one Medicament
     * const Medicament = await prisma.medicament.create({
     *   data: {
     *     // ... data to create a Medicament
     *   }
     * })
     * 
     */
    create<T extends MedicamentCreateArgs>(args: SelectSubset<T, MedicamentCreateArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medicaments.
     * @param {MedicamentCreateManyArgs} args - Arguments to create many Medicaments.
     * @example
     * // Create many Medicaments
     * const medicament = await prisma.medicament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicamentCreateManyArgs>(args?: SelectSubset<T, MedicamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medicaments and returns the data saved in the database.
     * @param {MedicamentCreateManyAndReturnArgs} args - Arguments to create many Medicaments.
     * @example
     * // Create many Medicaments
     * const medicament = await prisma.medicament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medicaments and only return the `id`
     * const medicamentWithIdOnly = await prisma.medicament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicamentCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medicament.
     * @param {MedicamentDeleteArgs} args - Arguments to delete one Medicament.
     * @example
     * // Delete one Medicament
     * const Medicament = await prisma.medicament.delete({
     *   where: {
     *     // ... filter to delete one Medicament
     *   }
     * })
     * 
     */
    delete<T extends MedicamentDeleteArgs>(args: SelectSubset<T, MedicamentDeleteArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medicament.
     * @param {MedicamentUpdateArgs} args - Arguments to update one Medicament.
     * @example
     * // Update one Medicament
     * const medicament = await prisma.medicament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicamentUpdateArgs>(args: SelectSubset<T, MedicamentUpdateArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medicaments.
     * @param {MedicamentDeleteManyArgs} args - Arguments to filter Medicaments to delete.
     * @example
     * // Delete a few Medicaments
     * const { count } = await prisma.medicament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicamentDeleteManyArgs>(args?: SelectSubset<T, MedicamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medicaments
     * const medicament = await prisma.medicament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicamentUpdateManyArgs>(args: SelectSubset<T, MedicamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medicaments and returns the data updated in the database.
     * @param {MedicamentUpdateManyAndReturnArgs} args - Arguments to update many Medicaments.
     * @example
     * // Update many Medicaments
     * const medicament = await prisma.medicament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medicaments and only return the `id`
     * const medicamentWithIdOnly = await prisma.medicament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicamentUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medicament.
     * @param {MedicamentUpsertArgs} args - Arguments to update or create a Medicament.
     * @example
     * // Update or create a Medicament
     * const medicament = await prisma.medicament.upsert({
     *   create: {
     *     // ... data to create a Medicament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medicament we want to update
     *   }
     * })
     */
    upsert<T extends MedicamentUpsertArgs>(args: SelectSubset<T, MedicamentUpsertArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medicaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentCountArgs} args - Arguments to filter Medicaments to count.
     * @example
     * // Count the number of Medicaments
     * const count = await prisma.medicament.count({
     *   where: {
     *     // ... the filter for the Medicaments we want to count
     *   }
     * })
    **/
    count<T extends MedicamentCountArgs>(
      args?: Subset<T, MedicamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medicament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicamentAggregateArgs>(args: Subset<T, MedicamentAggregateArgs>): Prisma.PrismaPromise<GetMedicamentAggregateType<T>>

    /**
     * Group by Medicament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicamentGroupByArgs['orderBy'] }
        : { orderBy?: MedicamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medicament model
   */
  readonly fields: MedicamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medicament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescriptions<T extends Medicament$prescriptionsArgs<ExtArgs> = {}>(args?: Subset<T, Medicament$prescriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    prescriptionLines<T extends Medicament$prescriptionLinesArgs<ExtArgs> = {}>(args?: Subset<T, Medicament$prescriptionLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medicament model
   */
  interface MedicamentFieldRefs {
    readonly id: FieldRef<"Medicament", 'String'>
    readonly code: FieldRef<"Medicament", 'String'>
    readonly name: FieldRef<"Medicament", 'String'>
    readonly description: FieldRef<"Medicament", 'String'>
    readonly sideEffects: FieldRef<"Medicament", 'String[]'>
    readonly contraindications: FieldRef<"Medicament", 'String[]'>
    readonly interactions: FieldRef<"Medicament", 'String[]'>
    readonly quantityPerPack: FieldRef<"Medicament", 'Int'>
    readonly unit: FieldRef<"Medicament", 'Unit'>
  }
    

  // Custom InputTypes
  /**
   * Medicament findUnique
   */
  export type MedicamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * Filter, which Medicament to fetch.
     */
    where: MedicamentWhereUniqueInput
  }

  /**
   * Medicament findUniqueOrThrow
   */
  export type MedicamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * Filter, which Medicament to fetch.
     */
    where: MedicamentWhereUniqueInput
  }

  /**
   * Medicament findFirst
   */
  export type MedicamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * Filter, which Medicament to fetch.
     */
    where?: MedicamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicaments to fetch.
     */
    orderBy?: MedicamentOrderByWithRelationInput | MedicamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicaments.
     */
    cursor?: MedicamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicaments.
     */
    distinct?: MedicamentScalarFieldEnum | MedicamentScalarFieldEnum[]
  }

  /**
   * Medicament findFirstOrThrow
   */
  export type MedicamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * Filter, which Medicament to fetch.
     */
    where?: MedicamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicaments to fetch.
     */
    orderBy?: MedicamentOrderByWithRelationInput | MedicamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medicaments.
     */
    cursor?: MedicamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medicaments.
     */
    distinct?: MedicamentScalarFieldEnum | MedicamentScalarFieldEnum[]
  }

  /**
   * Medicament findMany
   */
  export type MedicamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * Filter, which Medicaments to fetch.
     */
    where?: MedicamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medicaments to fetch.
     */
    orderBy?: MedicamentOrderByWithRelationInput | MedicamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medicaments.
     */
    cursor?: MedicamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medicaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medicaments.
     */
    skip?: number
    distinct?: MedicamentScalarFieldEnum | MedicamentScalarFieldEnum[]
  }

  /**
   * Medicament create
   */
  export type MedicamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Medicament.
     */
    data: XOR<MedicamentCreateInput, MedicamentUncheckedCreateInput>
  }

  /**
   * Medicament createMany
   */
  export type MedicamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medicaments.
     */
    data: MedicamentCreateManyInput | MedicamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicament createManyAndReturn
   */
  export type MedicamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * The data used to create many Medicaments.
     */
    data: MedicamentCreateManyInput | MedicamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medicament update
   */
  export type MedicamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Medicament.
     */
    data: XOR<MedicamentUpdateInput, MedicamentUncheckedUpdateInput>
    /**
     * Choose, which Medicament to update.
     */
    where: MedicamentWhereUniqueInput
  }

  /**
   * Medicament updateMany
   */
  export type MedicamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medicaments.
     */
    data: XOR<MedicamentUpdateManyMutationInput, MedicamentUncheckedUpdateManyInput>
    /**
     * Filter which Medicaments to update
     */
    where?: MedicamentWhereInput
    /**
     * Limit how many Medicaments to update.
     */
    limit?: number
  }

  /**
   * Medicament updateManyAndReturn
   */
  export type MedicamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * The data used to update Medicaments.
     */
    data: XOR<MedicamentUpdateManyMutationInput, MedicamentUncheckedUpdateManyInput>
    /**
     * Filter which Medicaments to update
     */
    where?: MedicamentWhereInput
    /**
     * Limit how many Medicaments to update.
     */
    limit?: number
  }

  /**
   * Medicament upsert
   */
  export type MedicamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Medicament to update in case it exists.
     */
    where: MedicamentWhereUniqueInput
    /**
     * In case the Medicament found by the `where` argument doesn't exist, create a new Medicament with this data.
     */
    create: XOR<MedicamentCreateInput, MedicamentUncheckedCreateInput>
    /**
     * In case the Medicament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicamentUpdateInput, MedicamentUncheckedUpdateInput>
  }

  /**
   * Medicament delete
   */
  export type MedicamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    /**
     * Filter which Medicament to delete.
     */
    where: MedicamentWhereUniqueInput
  }

  /**
   * Medicament deleteMany
   */
  export type MedicamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medicaments to delete
     */
    where?: MedicamentWhereInput
    /**
     * Limit how many Medicaments to delete.
     */
    limit?: number
  }

  /**
   * Medicament.prescriptions
   */
  export type Medicament$prescriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Medicament.prescriptionLines
   */
  export type Medicament$prescriptionLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    where?: PrescriptionLineWhereInput
    orderBy?: PrescriptionLineOrderByWithRelationInput | PrescriptionLineOrderByWithRelationInput[]
    cursor?: PrescriptionLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionLineScalarFieldEnum | PrescriptionLineScalarFieldEnum[]
  }

  /**
   * Medicament without action
   */
  export type MedicamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
  }


  /**
   * Model Prescription
   */

  export type AggregatePrescription = {
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  export type PrescriptionMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    date: Date | null
    dosage: string | null
    duration: string | null
    consultationId: string | null
  }

  export type PrescriptionMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    date: Date | null
    dosage: string | null
    duration: string | null
    consultationId: string | null
  }

  export type PrescriptionCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    date: number
    dosage: number
    duration: number
    consultationId: number
    _all: number
  }


  export type PrescriptionMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    date?: true
    dosage?: true
    duration?: true
    consultationId?: true
  }

  export type PrescriptionMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    date?: true
    dosage?: true
    duration?: true
    consultationId?: true
  }

  export type PrescriptionCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    date?: true
    dosage?: true
    duration?: true
    consultationId?: true
    _all?: true
  }

  export type PrescriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescription to aggregate.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prescriptions
    **/
    _count?: true | PrescriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionMaxAggregateInputType
  }

  export type GetPrescriptionAggregateType<T extends PrescriptionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescription[P]>
      : GetScalarType<T[P], AggregatePrescription[P]>
  }




  export type PrescriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithAggregationInput | PrescriptionOrderByWithAggregationInput[]
    by: PrescriptionScalarFieldEnum[] | PrescriptionScalarFieldEnum
    having?: PrescriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionCountAggregateInputType | true
    _min?: PrescriptionMinAggregateInputType
    _max?: PrescriptionMaxAggregateInputType
  }

  export type PrescriptionGroupByOutputType = {
    id: string
    doctorId: string
    patientId: string
    date: Date
    dosage: string
    duration: string
    consultationId: string | null
    _count: PrescriptionCountAggregateOutputType | null
    _min: PrescriptionMinAggregateOutputType | null
    _max: PrescriptionMaxAggregateOutputType | null
  }

  type GetPrescriptionGroupByPayload<T extends PrescriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    dosage?: boolean
    duration?: boolean
    consultationId?: boolean
    medicaments?: boolean | Prescription$medicamentsArgs<ExtArgs>
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
    prescriptionLines?: boolean | Prescription$prescriptionLinesArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    dosage?: boolean
    duration?: boolean
    consultationId?: boolean
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    dosage?: boolean
    duration?: boolean
    consultationId?: boolean
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }, ExtArgs["result"]["prescription"]>

  export type PrescriptionSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    dosage?: boolean
    duration?: boolean
    consultationId?: boolean
  }

  export type PrescriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "date" | "dosage" | "duration" | "consultationId", ExtArgs["result"]["prescription"]>
  export type PrescriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medicaments?: boolean | Prescription$medicamentsArgs<ExtArgs>
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
    prescriptionLines?: boolean | Prescription$prescriptionLinesArgs<ExtArgs>
    _count?: boolean | PrescriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrescriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }
  export type PrescriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultation?: boolean | Prescription$consultationArgs<ExtArgs>
  }

  export type $PrescriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prescription"
    objects: {
      medicaments: Prisma.$MedicamentPayload<ExtArgs>[]
      consultation: Prisma.$ConsultationPayload<ExtArgs> | null
      prescriptionLines: Prisma.$PrescriptionLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      patientId: string
      date: Date
      dosage: string
      duration: string
      consultationId: string | null
    }, ExtArgs["result"]["prescription"]>
    composites: {}
  }

  type PrescriptionGetPayload<S extends boolean | null | undefined | PrescriptionDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionPayload, S>

  type PrescriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionCountAggregateInputType | true
    }

  export interface PrescriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prescription'], meta: { name: 'Prescription' } }
    /**
     * Find zero or one Prescription that matches the filter.
     * @param {PrescriptionFindUniqueArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionFindUniqueArgs>(args: SelectSubset<T, PrescriptionFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prescription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionFindUniqueOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionFindFirstArgs>(args?: SelectSubset<T, PrescriptionFindFirstArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prescription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindFirstOrThrowArgs} args - Arguments to find a Prescription
     * @example
     * // Get one Prescription
     * const prescription = await prisma.prescription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prescriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prescriptions
     * const prescriptions = await prisma.prescription.findMany()
     * 
     * // Get first 10 Prescriptions
     * const prescriptions = await prisma.prescription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionFindManyArgs>(args?: SelectSubset<T, PrescriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prescription.
     * @param {PrescriptionCreateArgs} args - Arguments to create a Prescription.
     * @example
     * // Create one Prescription
     * const Prescription = await prisma.prescription.create({
     *   data: {
     *     // ... data to create a Prescription
     *   }
     * })
     * 
     */
    create<T extends PrescriptionCreateArgs>(args: SelectSubset<T, PrescriptionCreateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prescriptions.
     * @param {PrescriptionCreateManyArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionCreateManyArgs>(args?: SelectSubset<T, PrescriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prescriptions and returns the data saved in the database.
     * @param {PrescriptionCreateManyAndReturnArgs} args - Arguments to create many Prescriptions.
     * @example
     * // Create many Prescriptions
     * const prescription = await prisma.prescription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prescription.
     * @param {PrescriptionDeleteArgs} args - Arguments to delete one Prescription.
     * @example
     * // Delete one Prescription
     * const Prescription = await prisma.prescription.delete({
     *   where: {
     *     // ... filter to delete one Prescription
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionDeleteArgs>(args: SelectSubset<T, PrescriptionDeleteArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prescription.
     * @param {PrescriptionUpdateArgs} args - Arguments to update one Prescription.
     * @example
     * // Update one Prescription
     * const prescription = await prisma.prescription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionUpdateArgs>(args: SelectSubset<T, PrescriptionUpdateArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prescriptions.
     * @param {PrescriptionDeleteManyArgs} args - Arguments to filter Prescriptions to delete.
     * @example
     * // Delete a few Prescriptions
     * const { count } = await prisma.prescription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionDeleteManyArgs>(args?: SelectSubset<T, PrescriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionUpdateManyArgs>(args: SelectSubset<T, PrescriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prescriptions and returns the data updated in the database.
     * @param {PrescriptionUpdateManyAndReturnArgs} args - Arguments to update many Prescriptions.
     * @example
     * // Update many Prescriptions
     * const prescription = await prisma.prescription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prescriptions and only return the `id`
     * const prescriptionWithIdOnly = await prisma.prescription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prescription.
     * @param {PrescriptionUpsertArgs} args - Arguments to update or create a Prescription.
     * @example
     * // Update or create a Prescription
     * const prescription = await prisma.prescription.upsert({
     *   create: {
     *     // ... data to create a Prescription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prescription we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionUpsertArgs>(args: SelectSubset<T, PrescriptionUpsertArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prescriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionCountArgs} args - Arguments to filter Prescriptions to count.
     * @example
     * // Count the number of Prescriptions
     * const count = await prisma.prescription.count({
     *   where: {
     *     // ... the filter for the Prescriptions we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionCountArgs>(
      args?: Subset<T, PrescriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrescriptionAggregateArgs>(args: Subset<T, PrescriptionAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionAggregateType<T>>

    /**
     * Group by Prescription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrescriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrescriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prescription model
   */
  readonly fields: PrescriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prescription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medicaments<T extends Prescription$medicamentsArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$medicamentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    consultation<T extends Prescription$consultationArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$consultationArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prescriptionLines<T extends Prescription$prescriptionLinesArgs<ExtArgs> = {}>(args?: Subset<T, Prescription$prescriptionLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Prescription model
   */
  interface PrescriptionFieldRefs {
    readonly id: FieldRef<"Prescription", 'String'>
    readonly doctorId: FieldRef<"Prescription", 'String'>
    readonly patientId: FieldRef<"Prescription", 'String'>
    readonly date: FieldRef<"Prescription", 'DateTime'>
    readonly dosage: FieldRef<"Prescription", 'String'>
    readonly duration: FieldRef<"Prescription", 'String'>
    readonly consultationId: FieldRef<"Prescription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Prescription findUnique
   */
  export type PrescriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findUniqueOrThrow
   */
  export type PrescriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription findFirst
   */
  export type PrescriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findFirstOrThrow
   */
  export type PrescriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescription to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prescriptions.
     */
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription findMany
   */
  export type PrescriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter, which Prescriptions to fetch.
     */
    where?: PrescriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prescriptions to fetch.
     */
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prescriptions.
     */
    cursor?: PrescriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prescriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prescriptions.
     */
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Prescription create
   */
  export type PrescriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Prescription.
     */
    data: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
  }

  /**
   * Prescription createMany
   */
  export type PrescriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prescription createManyAndReturn
   */
  export type PrescriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Prescriptions.
     */
    data: PrescriptionCreateManyInput | PrescriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription update
   */
  export type PrescriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Prescription.
     */
    data: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
    /**
     * Choose, which Prescription to update.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription updateMany
   */
  export type PrescriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
  }

  /**
   * Prescription updateManyAndReturn
   */
  export type PrescriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * The data used to update Prescriptions.
     */
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyInput>
    /**
     * Filter which Prescriptions to update
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Prescription upsert
   */
  export type PrescriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Prescription to update in case it exists.
     */
    where: PrescriptionWhereUniqueInput
    /**
     * In case the Prescription found by the `where` argument doesn't exist, create a new Prescription with this data.
     */
    create: XOR<PrescriptionCreateInput, PrescriptionUncheckedCreateInput>
    /**
     * In case the Prescription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionUpdateInput, PrescriptionUncheckedUpdateInput>
  }

  /**
   * Prescription delete
   */
  export type PrescriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    /**
     * Filter which Prescription to delete.
     */
    where: PrescriptionWhereUniqueInput
  }

  /**
   * Prescription deleteMany
   */
  export type PrescriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prescriptions to delete
     */
    where?: PrescriptionWhereInput
    /**
     * Limit how many Prescriptions to delete.
     */
    limit?: number
  }

  /**
   * Prescription.medicaments
   */
  export type Prescription$medicamentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medicament
     */
    select?: MedicamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medicament
     */
    omit?: MedicamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicamentInclude<ExtArgs> | null
    where?: MedicamentWhereInput
    orderBy?: MedicamentOrderByWithRelationInput | MedicamentOrderByWithRelationInput[]
    cursor?: MedicamentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicamentScalarFieldEnum | MedicamentScalarFieldEnum[]
  }

  /**
   * Prescription.consultation
   */
  export type Prescription$consultationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    where?: ConsultationWhereInput
  }

  /**
   * Prescription.prescriptionLines
   */
  export type Prescription$prescriptionLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    where?: PrescriptionLineWhereInput
    orderBy?: PrescriptionLineOrderByWithRelationInput | PrescriptionLineOrderByWithRelationInput[]
    cursor?: PrescriptionLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionLineScalarFieldEnum | PrescriptionLineScalarFieldEnum[]
  }

  /**
   * Prescription without action
   */
  export type PrescriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
  }


  /**
   * Model PrescriptionLine
   */

  export type AggregatePrescriptionLine = {
    _count: PrescriptionLineCountAggregateOutputType | null
    _avg: PrescriptionLineAvgAggregateOutputType | null
    _sum: PrescriptionLineSumAggregateOutputType | null
    _min: PrescriptionLineMinAggregateOutputType | null
    _max: PrescriptionLineMaxAggregateOutputType | null
  }

  export type PrescriptionLineAvgAggregateOutputType = {
    dosage: number | null
  }

  export type PrescriptionLineSumAggregateOutputType = {
    dosage: number | null
  }

  export type PrescriptionLineMinAggregateOutputType = {
    id: string | null
    prescriptionId: string | null
    medicamentId: string | null
    dosage: number | null
    duration: string | null
    morning: boolean | null
    afternoon: boolean | null
    evening: boolean | null
    night: boolean | null
    foodOrder: $Enums.FoodOrderType | null
  }

  export type PrescriptionLineMaxAggregateOutputType = {
    id: string | null
    prescriptionId: string | null
    medicamentId: string | null
    dosage: number | null
    duration: string | null
    morning: boolean | null
    afternoon: boolean | null
    evening: boolean | null
    night: boolean | null
    foodOrder: $Enums.FoodOrderType | null
  }

  export type PrescriptionLineCountAggregateOutputType = {
    id: number
    prescriptionId: number
    medicamentId: number
    dosage: number
    duration: number
    morning: number
    afternoon: number
    evening: number
    night: number
    foodOrder: number
    _all: number
  }


  export type PrescriptionLineAvgAggregateInputType = {
    dosage?: true
  }

  export type PrescriptionLineSumAggregateInputType = {
    dosage?: true
  }

  export type PrescriptionLineMinAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicamentId?: true
    dosage?: true
    duration?: true
    morning?: true
    afternoon?: true
    evening?: true
    night?: true
    foodOrder?: true
  }

  export type PrescriptionLineMaxAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicamentId?: true
    dosage?: true
    duration?: true
    morning?: true
    afternoon?: true
    evening?: true
    night?: true
    foodOrder?: true
  }

  export type PrescriptionLineCountAggregateInputType = {
    id?: true
    prescriptionId?: true
    medicamentId?: true
    dosage?: true
    duration?: true
    morning?: true
    afternoon?: true
    evening?: true
    night?: true
    foodOrder?: true
    _all?: true
  }

  export type PrescriptionLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionLine to aggregate.
     */
    where?: PrescriptionLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionLines to fetch.
     */
    orderBy?: PrescriptionLineOrderByWithRelationInput | PrescriptionLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrescriptionLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PrescriptionLines
    **/
    _count?: true | PrescriptionLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrescriptionLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrescriptionLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrescriptionLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrescriptionLineMaxAggregateInputType
  }

  export type GetPrescriptionLineAggregateType<T extends PrescriptionLineAggregateArgs> = {
        [P in keyof T & keyof AggregatePrescriptionLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrescriptionLine[P]>
      : GetScalarType<T[P], AggregatePrescriptionLine[P]>
  }




  export type PrescriptionLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrescriptionLineWhereInput
    orderBy?: PrescriptionLineOrderByWithAggregationInput | PrescriptionLineOrderByWithAggregationInput[]
    by: PrescriptionLineScalarFieldEnum[] | PrescriptionLineScalarFieldEnum
    having?: PrescriptionLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrescriptionLineCountAggregateInputType | true
    _avg?: PrescriptionLineAvgAggregateInputType
    _sum?: PrescriptionLineSumAggregateInputType
    _min?: PrescriptionLineMinAggregateInputType
    _max?: PrescriptionLineMaxAggregateInputType
  }

  export type PrescriptionLineGroupByOutputType = {
    id: string
    prescriptionId: string
    medicamentId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    _count: PrescriptionLineCountAggregateOutputType | null
    _avg: PrescriptionLineAvgAggregateOutputType | null
    _sum: PrescriptionLineSumAggregateOutputType | null
    _min: PrescriptionLineMinAggregateOutputType | null
    _max: PrescriptionLineMaxAggregateOutputType | null
  }

  type GetPrescriptionLineGroupByPayload<T extends PrescriptionLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrescriptionLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrescriptionLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrescriptionLineGroupByOutputType[P]>
            : GetScalarType<T[P], PrescriptionLineGroupByOutputType[P]>
        }
      >
    >


  export type PrescriptionLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicamentId?: boolean
    dosage?: boolean
    duration?: boolean
    morning?: boolean
    afternoon?: boolean
    evening?: boolean
    night?: boolean
    foodOrder?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medicament?: boolean | MedicamentDefaultArgs<ExtArgs>
    reminders?: boolean | PrescriptionLine$remindersArgs<ExtArgs>
    _count?: boolean | PrescriptionLineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionLine"]>

  export type PrescriptionLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicamentId?: boolean
    dosage?: boolean
    duration?: boolean
    morning?: boolean
    afternoon?: boolean
    evening?: boolean
    night?: boolean
    foodOrder?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medicament?: boolean | MedicamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionLine"]>

  export type PrescriptionLineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prescriptionId?: boolean
    medicamentId?: boolean
    dosage?: boolean
    duration?: boolean
    morning?: boolean
    afternoon?: boolean
    evening?: boolean
    night?: boolean
    foodOrder?: boolean
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medicament?: boolean | MedicamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prescriptionLine"]>

  export type PrescriptionLineSelectScalar = {
    id?: boolean
    prescriptionId?: boolean
    medicamentId?: boolean
    dosage?: boolean
    duration?: boolean
    morning?: boolean
    afternoon?: boolean
    evening?: boolean
    night?: boolean
    foodOrder?: boolean
  }

  export type PrescriptionLineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prescriptionId" | "medicamentId" | "dosage" | "duration" | "morning" | "afternoon" | "evening" | "night" | "foodOrder", ExtArgs["result"]["prescriptionLine"]>
  export type PrescriptionLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medicament?: boolean | MedicamentDefaultArgs<ExtArgs>
    reminders?: boolean | PrescriptionLine$remindersArgs<ExtArgs>
    _count?: boolean | PrescriptionLineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PrescriptionLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medicament?: boolean | MedicamentDefaultArgs<ExtArgs>
  }
  export type PrescriptionLineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | PrescriptionDefaultArgs<ExtArgs>
    medicament?: boolean | MedicamentDefaultArgs<ExtArgs>
  }

  export type $PrescriptionLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PrescriptionLine"
    objects: {
      prescription: Prisma.$PrescriptionPayload<ExtArgs>
      medicament: Prisma.$MedicamentPayload<ExtArgs>
      reminders: Prisma.$ReminderDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prescriptionId: string
      medicamentId: string
      dosage: number
      duration: string
      morning: boolean
      afternoon: boolean
      evening: boolean
      night: boolean
      foodOrder: $Enums.FoodOrderType
    }, ExtArgs["result"]["prescriptionLine"]>
    composites: {}
  }

  type PrescriptionLineGetPayload<S extends boolean | null | undefined | PrescriptionLineDefaultArgs> = $Result.GetResult<Prisma.$PrescriptionLinePayload, S>

  type PrescriptionLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrescriptionLineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrescriptionLineCountAggregateInputType | true
    }

  export interface PrescriptionLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PrescriptionLine'], meta: { name: 'PrescriptionLine' } }
    /**
     * Find zero or one PrescriptionLine that matches the filter.
     * @param {PrescriptionLineFindUniqueArgs} args - Arguments to find a PrescriptionLine
     * @example
     * // Get one PrescriptionLine
     * const prescriptionLine = await prisma.prescriptionLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrescriptionLineFindUniqueArgs>(args: SelectSubset<T, PrescriptionLineFindUniqueArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PrescriptionLine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrescriptionLineFindUniqueOrThrowArgs} args - Arguments to find a PrescriptionLine
     * @example
     * // Get one PrescriptionLine
     * const prescriptionLine = await prisma.prescriptionLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrescriptionLineFindUniqueOrThrowArgs>(args: SelectSubset<T, PrescriptionLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineFindFirstArgs} args - Arguments to find a PrescriptionLine
     * @example
     * // Get one PrescriptionLine
     * const prescriptionLine = await prisma.prescriptionLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrescriptionLineFindFirstArgs>(args?: SelectSubset<T, PrescriptionLineFindFirstArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PrescriptionLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineFindFirstOrThrowArgs} args - Arguments to find a PrescriptionLine
     * @example
     * // Get one PrescriptionLine
     * const prescriptionLine = await prisma.prescriptionLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrescriptionLineFindFirstOrThrowArgs>(args?: SelectSubset<T, PrescriptionLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PrescriptionLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PrescriptionLines
     * const prescriptionLines = await prisma.prescriptionLine.findMany()
     * 
     * // Get first 10 PrescriptionLines
     * const prescriptionLines = await prisma.prescriptionLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const prescriptionLineWithIdOnly = await prisma.prescriptionLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrescriptionLineFindManyArgs>(args?: SelectSubset<T, PrescriptionLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PrescriptionLine.
     * @param {PrescriptionLineCreateArgs} args - Arguments to create a PrescriptionLine.
     * @example
     * // Create one PrescriptionLine
     * const PrescriptionLine = await prisma.prescriptionLine.create({
     *   data: {
     *     // ... data to create a PrescriptionLine
     *   }
     * })
     * 
     */
    create<T extends PrescriptionLineCreateArgs>(args: SelectSubset<T, PrescriptionLineCreateArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PrescriptionLines.
     * @param {PrescriptionLineCreateManyArgs} args - Arguments to create many PrescriptionLines.
     * @example
     * // Create many PrescriptionLines
     * const prescriptionLine = await prisma.prescriptionLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrescriptionLineCreateManyArgs>(args?: SelectSubset<T, PrescriptionLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PrescriptionLines and returns the data saved in the database.
     * @param {PrescriptionLineCreateManyAndReturnArgs} args - Arguments to create many PrescriptionLines.
     * @example
     * // Create many PrescriptionLines
     * const prescriptionLine = await prisma.prescriptionLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PrescriptionLines and only return the `id`
     * const prescriptionLineWithIdOnly = await prisma.prescriptionLine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrescriptionLineCreateManyAndReturnArgs>(args?: SelectSubset<T, PrescriptionLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PrescriptionLine.
     * @param {PrescriptionLineDeleteArgs} args - Arguments to delete one PrescriptionLine.
     * @example
     * // Delete one PrescriptionLine
     * const PrescriptionLine = await prisma.prescriptionLine.delete({
     *   where: {
     *     // ... filter to delete one PrescriptionLine
     *   }
     * })
     * 
     */
    delete<T extends PrescriptionLineDeleteArgs>(args: SelectSubset<T, PrescriptionLineDeleteArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PrescriptionLine.
     * @param {PrescriptionLineUpdateArgs} args - Arguments to update one PrescriptionLine.
     * @example
     * // Update one PrescriptionLine
     * const prescriptionLine = await prisma.prescriptionLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrescriptionLineUpdateArgs>(args: SelectSubset<T, PrescriptionLineUpdateArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PrescriptionLines.
     * @param {PrescriptionLineDeleteManyArgs} args - Arguments to filter PrescriptionLines to delete.
     * @example
     * // Delete a few PrescriptionLines
     * const { count } = await prisma.prescriptionLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrescriptionLineDeleteManyArgs>(args?: SelectSubset<T, PrescriptionLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PrescriptionLines
     * const prescriptionLine = await prisma.prescriptionLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrescriptionLineUpdateManyArgs>(args: SelectSubset<T, PrescriptionLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PrescriptionLines and returns the data updated in the database.
     * @param {PrescriptionLineUpdateManyAndReturnArgs} args - Arguments to update many PrescriptionLines.
     * @example
     * // Update many PrescriptionLines
     * const prescriptionLine = await prisma.prescriptionLine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PrescriptionLines and only return the `id`
     * const prescriptionLineWithIdOnly = await prisma.prescriptionLine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrescriptionLineUpdateManyAndReturnArgs>(args: SelectSubset<T, PrescriptionLineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PrescriptionLine.
     * @param {PrescriptionLineUpsertArgs} args - Arguments to update or create a PrescriptionLine.
     * @example
     * // Update or create a PrescriptionLine
     * const prescriptionLine = await prisma.prescriptionLine.upsert({
     *   create: {
     *     // ... data to create a PrescriptionLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PrescriptionLine we want to update
     *   }
     * })
     */
    upsert<T extends PrescriptionLineUpsertArgs>(args: SelectSubset<T, PrescriptionLineUpsertArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PrescriptionLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineCountArgs} args - Arguments to filter PrescriptionLines to count.
     * @example
     * // Count the number of PrescriptionLines
     * const count = await prisma.prescriptionLine.count({
     *   where: {
     *     // ... the filter for the PrescriptionLines we want to count
     *   }
     * })
    **/
    count<T extends PrescriptionLineCountArgs>(
      args?: Subset<T, PrescriptionLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrescriptionLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PrescriptionLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrescriptionLineAggregateArgs>(args: Subset<T, PrescriptionLineAggregateArgs>): Prisma.PrismaPromise<GetPrescriptionLineAggregateType<T>>

    /**
     * Group by PrescriptionLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrescriptionLineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrescriptionLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrescriptionLineGroupByArgs['orderBy'] }
        : { orderBy?: PrescriptionLineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrescriptionLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrescriptionLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PrescriptionLine model
   */
  readonly fields: PrescriptionLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PrescriptionLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrescriptionLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescription<T extends PrescriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionDefaultArgs<ExtArgs>>): Prisma__PrescriptionClient<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medicament<T extends MedicamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicamentDefaultArgs<ExtArgs>>): Prisma__MedicamentClient<$Result.GetResult<Prisma.$MedicamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reminders<T extends PrescriptionLine$remindersArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionLine$remindersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PrescriptionLine model
   */
  interface PrescriptionLineFieldRefs {
    readonly id: FieldRef<"PrescriptionLine", 'String'>
    readonly prescriptionId: FieldRef<"PrescriptionLine", 'String'>
    readonly medicamentId: FieldRef<"PrescriptionLine", 'String'>
    readonly dosage: FieldRef<"PrescriptionLine", 'Int'>
    readonly duration: FieldRef<"PrescriptionLine", 'String'>
    readonly morning: FieldRef<"PrescriptionLine", 'Boolean'>
    readonly afternoon: FieldRef<"PrescriptionLine", 'Boolean'>
    readonly evening: FieldRef<"PrescriptionLine", 'Boolean'>
    readonly night: FieldRef<"PrescriptionLine", 'Boolean'>
    readonly foodOrder: FieldRef<"PrescriptionLine", 'FoodOrderType'>
  }
    

  // Custom InputTypes
  /**
   * PrescriptionLine findUnique
   */
  export type PrescriptionLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionLine to fetch.
     */
    where: PrescriptionLineWhereUniqueInput
  }

  /**
   * PrescriptionLine findUniqueOrThrow
   */
  export type PrescriptionLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionLine to fetch.
     */
    where: PrescriptionLineWhereUniqueInput
  }

  /**
   * PrescriptionLine findFirst
   */
  export type PrescriptionLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionLine to fetch.
     */
    where?: PrescriptionLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionLines to fetch.
     */
    orderBy?: PrescriptionLineOrderByWithRelationInput | PrescriptionLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionLines.
     */
    cursor?: PrescriptionLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionLines.
     */
    distinct?: PrescriptionLineScalarFieldEnum | PrescriptionLineScalarFieldEnum[]
  }

  /**
   * PrescriptionLine findFirstOrThrow
   */
  export type PrescriptionLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionLine to fetch.
     */
    where?: PrescriptionLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionLines to fetch.
     */
    orderBy?: PrescriptionLineOrderByWithRelationInput | PrescriptionLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PrescriptionLines.
     */
    cursor?: PrescriptionLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PrescriptionLines.
     */
    distinct?: PrescriptionLineScalarFieldEnum | PrescriptionLineScalarFieldEnum[]
  }

  /**
   * PrescriptionLine findMany
   */
  export type PrescriptionLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * Filter, which PrescriptionLines to fetch.
     */
    where?: PrescriptionLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PrescriptionLines to fetch.
     */
    orderBy?: PrescriptionLineOrderByWithRelationInput | PrescriptionLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PrescriptionLines.
     */
    cursor?: PrescriptionLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PrescriptionLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PrescriptionLines.
     */
    skip?: number
    distinct?: PrescriptionLineScalarFieldEnum | PrescriptionLineScalarFieldEnum[]
  }

  /**
   * PrescriptionLine create
   */
  export type PrescriptionLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * The data needed to create a PrescriptionLine.
     */
    data: XOR<PrescriptionLineCreateInput, PrescriptionLineUncheckedCreateInput>
  }

  /**
   * PrescriptionLine createMany
   */
  export type PrescriptionLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PrescriptionLines.
     */
    data: PrescriptionLineCreateManyInput | PrescriptionLineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PrescriptionLine createManyAndReturn
   */
  export type PrescriptionLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * The data used to create many PrescriptionLines.
     */
    data: PrescriptionLineCreateManyInput | PrescriptionLineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionLine update
   */
  export type PrescriptionLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * The data needed to update a PrescriptionLine.
     */
    data: XOR<PrescriptionLineUpdateInput, PrescriptionLineUncheckedUpdateInput>
    /**
     * Choose, which PrescriptionLine to update.
     */
    where: PrescriptionLineWhereUniqueInput
  }

  /**
   * PrescriptionLine updateMany
   */
  export type PrescriptionLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PrescriptionLines.
     */
    data: XOR<PrescriptionLineUpdateManyMutationInput, PrescriptionLineUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionLines to update
     */
    where?: PrescriptionLineWhereInput
    /**
     * Limit how many PrescriptionLines to update.
     */
    limit?: number
  }

  /**
   * PrescriptionLine updateManyAndReturn
   */
  export type PrescriptionLineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * The data used to update PrescriptionLines.
     */
    data: XOR<PrescriptionLineUpdateManyMutationInput, PrescriptionLineUncheckedUpdateManyInput>
    /**
     * Filter which PrescriptionLines to update
     */
    where?: PrescriptionLineWhereInput
    /**
     * Limit how many PrescriptionLines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PrescriptionLine upsert
   */
  export type PrescriptionLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * The filter to search for the PrescriptionLine to update in case it exists.
     */
    where: PrescriptionLineWhereUniqueInput
    /**
     * In case the PrescriptionLine found by the `where` argument doesn't exist, create a new PrescriptionLine with this data.
     */
    create: XOR<PrescriptionLineCreateInput, PrescriptionLineUncheckedCreateInput>
    /**
     * In case the PrescriptionLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrescriptionLineUpdateInput, PrescriptionLineUncheckedUpdateInput>
  }

  /**
   * PrescriptionLine delete
   */
  export type PrescriptionLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
    /**
     * Filter which PrescriptionLine to delete.
     */
    where: PrescriptionLineWhereUniqueInput
  }

  /**
   * PrescriptionLine deleteMany
   */
  export type PrescriptionLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PrescriptionLines to delete
     */
    where?: PrescriptionLineWhereInput
    /**
     * Limit how many PrescriptionLines to delete.
     */
    limit?: number
  }

  /**
   * PrescriptionLine.reminders
   */
  export type PrescriptionLine$remindersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    where?: ReminderDataWhereInput
    orderBy?: ReminderDataOrderByWithRelationInput | ReminderDataOrderByWithRelationInput[]
    cursor?: ReminderDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderDataScalarFieldEnum | ReminderDataScalarFieldEnum[]
  }

  /**
   * PrescriptionLine without action
   */
  export type PrescriptionLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PrescriptionLine
     */
    select?: PrescriptionLineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PrescriptionLine
     */
    omit?: PrescriptionLineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionLineInclude<ExtArgs> | null
  }


  /**
   * Model Consultation
   */

  export type AggregateConsultation = {
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  export type ConsultationMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    date: Date | null
  }

  export type ConsultationMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    patientId: string | null
    date: Date | null
  }

  export type ConsultationCountAggregateOutputType = {
    id: number
    doctorId: number
    patientId: number
    date: number
    symptoms: number
    diseases: number
    _all: number
  }


  export type ConsultationMinAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    date?: true
  }

  export type ConsultationMaxAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    date?: true
  }

  export type ConsultationCountAggregateInputType = {
    id?: true
    doctorId?: true
    patientId?: true
    date?: true
    symptoms?: true
    diseases?: true
    _all?: true
  }

  export type ConsultationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultation to aggregate.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultations
    **/
    _count?: true | ConsultationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationMaxAggregateInputType
  }

  export type GetConsultationAggregateType<T extends ConsultationAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultation[P]>
      : GetScalarType<T[P], AggregateConsultation[P]>
  }




  export type ConsultationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationWhereInput
    orderBy?: ConsultationOrderByWithAggregationInput | ConsultationOrderByWithAggregationInput[]
    by: ConsultationScalarFieldEnum[] | ConsultationScalarFieldEnum
    having?: ConsultationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationCountAggregateInputType | true
    _min?: ConsultationMinAggregateInputType
    _max?: ConsultationMaxAggregateInputType
  }

  export type ConsultationGroupByOutputType = {
    id: string
    doctorId: string
    patientId: string
    date: Date
    symptoms: string[]
    diseases: string[]
    _count: ConsultationCountAggregateOutputType | null
    _min: ConsultationMinAggregateOutputType | null
    _max: ConsultationMaxAggregateOutputType | null
  }

  type GetConsultationGroupByPayload<T extends ConsultationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    symptoms?: boolean
    diseases?: boolean
    prescription?: boolean | Consultation$prescriptionArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    _count?: boolean | ConsultationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    symptoms?: boolean
    diseases?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    symptoms?: boolean
    diseases?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consultation"]>

  export type ConsultationSelectScalar = {
    id?: boolean
    doctorId?: boolean
    patientId?: boolean
    date?: boolean
    symptoms?: boolean
    diseases?: boolean
  }

  export type ConsultationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "patientId" | "date" | "symptoms" | "diseases", ExtArgs["result"]["consultation"]>
  export type ConsultationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prescription?: boolean | Consultation$prescriptionArgs<ExtArgs>
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    _count?: boolean | ConsultationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConsultationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type ConsultationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $ConsultationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consultation"
    objects: {
      prescription: Prisma.$PrescriptionPayload<ExtArgs>[]
      doctor: Prisma.$DoctorPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      patientId: string
      date: Date
      symptoms: string[]
      diseases: string[]
    }, ExtArgs["result"]["consultation"]>
    composites: {}
  }

  type ConsultationGetPayload<S extends boolean | null | undefined | ConsultationDefaultArgs> = $Result.GetResult<Prisma.$ConsultationPayload, S>

  type ConsultationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationCountAggregateInputType | true
    }

  export interface ConsultationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consultation'], meta: { name: 'Consultation' } }
    /**
     * Find zero or one Consultation that matches the filter.
     * @param {ConsultationFindUniqueArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationFindUniqueArgs>(args: SelectSubset<T, ConsultationFindUniqueArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consultation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationFindUniqueOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationFindFirstArgs>(args?: SelectSubset<T, ConsultationFindFirstArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consultation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindFirstOrThrowArgs} args - Arguments to find a Consultation
     * @example
     * // Get one Consultation
     * const consultation = await prisma.consultation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultations
     * const consultations = await prisma.consultation.findMany()
     * 
     * // Get first 10 Consultations
     * const consultations = await prisma.consultation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationWithIdOnly = await prisma.consultation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationFindManyArgs>(args?: SelectSubset<T, ConsultationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consultation.
     * @param {ConsultationCreateArgs} args - Arguments to create a Consultation.
     * @example
     * // Create one Consultation
     * const Consultation = await prisma.consultation.create({
     *   data: {
     *     // ... data to create a Consultation
     *   }
     * })
     * 
     */
    create<T extends ConsultationCreateArgs>(args: SelectSubset<T, ConsultationCreateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultations.
     * @param {ConsultationCreateManyArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationCreateManyArgs>(args?: SelectSubset<T, ConsultationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultations and returns the data saved in the database.
     * @param {ConsultationCreateManyAndReturnArgs} args - Arguments to create many Consultations.
     * @example
     * // Create many Consultations
     * const consultation = await prisma.consultation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consultation.
     * @param {ConsultationDeleteArgs} args - Arguments to delete one Consultation.
     * @example
     * // Delete one Consultation
     * const Consultation = await prisma.consultation.delete({
     *   where: {
     *     // ... filter to delete one Consultation
     *   }
     * })
     * 
     */
    delete<T extends ConsultationDeleteArgs>(args: SelectSubset<T, ConsultationDeleteArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consultation.
     * @param {ConsultationUpdateArgs} args - Arguments to update one Consultation.
     * @example
     * // Update one Consultation
     * const consultation = await prisma.consultation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationUpdateArgs>(args: SelectSubset<T, ConsultationUpdateArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultations.
     * @param {ConsultationDeleteManyArgs} args - Arguments to filter Consultations to delete.
     * @example
     * // Delete a few Consultations
     * const { count } = await prisma.consultation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationDeleteManyArgs>(args?: SelectSubset<T, ConsultationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationUpdateManyArgs>(args: SelectSubset<T, ConsultationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultations and returns the data updated in the database.
     * @param {ConsultationUpdateManyAndReturnArgs} args - Arguments to update many Consultations.
     * @example
     * // Update many Consultations
     * const consultation = await prisma.consultation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultations and only return the `id`
     * const consultationWithIdOnly = await prisma.consultation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consultation.
     * @param {ConsultationUpsertArgs} args - Arguments to update or create a Consultation.
     * @example
     * // Update or create a Consultation
     * const consultation = await prisma.consultation.upsert({
     *   create: {
     *     // ... data to create a Consultation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consultation we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationUpsertArgs>(args: SelectSubset<T, ConsultationUpsertArgs<ExtArgs>>): Prisma__ConsultationClient<$Result.GetResult<Prisma.$ConsultationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationCountArgs} args - Arguments to filter Consultations to count.
     * @example
     * // Count the number of Consultations
     * const count = await prisma.consultation.count({
     *   where: {
     *     // ... the filter for the Consultations we want to count
     *   }
     * })
    **/
    count<T extends ConsultationCountArgs>(
      args?: Subset<T, ConsultationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationAggregateArgs>(args: Subset<T, ConsultationAggregateArgs>): Prisma.PrismaPromise<GetConsultationAggregateType<T>>

    /**
     * Group by Consultation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consultation model
   */
  readonly fields: ConsultationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consultation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prescription<T extends Consultation$prescriptionArgs<ExtArgs> = {}>(args?: Subset<T, Consultation$prescriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrescriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Consultation model
   */
  interface ConsultationFieldRefs {
    readonly id: FieldRef<"Consultation", 'String'>
    readonly doctorId: FieldRef<"Consultation", 'String'>
    readonly patientId: FieldRef<"Consultation", 'String'>
    readonly date: FieldRef<"Consultation", 'DateTime'>
    readonly symptoms: FieldRef<"Consultation", 'String[]'>
    readonly diseases: FieldRef<"Consultation", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * Consultation findUnique
   */
  export type ConsultationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findUniqueOrThrow
   */
  export type ConsultationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation findFirst
   */
  export type ConsultationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findFirstOrThrow
   */
  export type ConsultationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultation to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultations.
     */
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation findMany
   */
  export type ConsultationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter, which Consultations to fetch.
     */
    where?: ConsultationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultations to fetch.
     */
    orderBy?: ConsultationOrderByWithRelationInput | ConsultationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultations.
     */
    cursor?: ConsultationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultations.
     */
    skip?: number
    distinct?: ConsultationScalarFieldEnum | ConsultationScalarFieldEnum[]
  }

  /**
   * Consultation create
   */
  export type ConsultationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to create a Consultation.
     */
    data: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
  }

  /**
   * Consultation createMany
   */
  export type ConsultationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consultation createManyAndReturn
   */
  export type ConsultationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to create many Consultations.
     */
    data: ConsultationCreateManyInput | ConsultationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultation update
   */
  export type ConsultationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The data needed to update a Consultation.
     */
    data: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
    /**
     * Choose, which Consultation to update.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation updateMany
   */
  export type ConsultationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
  }

  /**
   * Consultation updateManyAndReturn
   */
  export type ConsultationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * The data used to update Consultations.
     */
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyInput>
    /**
     * Filter which Consultations to update
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consultation upsert
   */
  export type ConsultationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * The filter to search for the Consultation to update in case it exists.
     */
    where: ConsultationWhereUniqueInput
    /**
     * In case the Consultation found by the `where` argument doesn't exist, create a new Consultation with this data.
     */
    create: XOR<ConsultationCreateInput, ConsultationUncheckedCreateInput>
    /**
     * In case the Consultation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationUpdateInput, ConsultationUncheckedUpdateInput>
  }

  /**
   * Consultation delete
   */
  export type ConsultationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
    /**
     * Filter which Consultation to delete.
     */
    where: ConsultationWhereUniqueInput
  }

  /**
   * Consultation deleteMany
   */
  export type ConsultationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultations to delete
     */
    where?: ConsultationWhereInput
    /**
     * Limit how many Consultations to delete.
     */
    limit?: number
  }

  /**
   * Consultation.prescription
   */
  export type Consultation$prescriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prescription
     */
    select?: PrescriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prescription
     */
    omit?: PrescriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrescriptionInclude<ExtArgs> | null
    where?: PrescriptionWhereInput
    orderBy?: PrescriptionOrderByWithRelationInput | PrescriptionOrderByWithRelationInput[]
    cursor?: PrescriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrescriptionScalarFieldEnum | PrescriptionScalarFieldEnum[]
  }

  /**
   * Consultation without action
   */
  export type ConsultationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consultation
     */
    select?: ConsultationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consultation
     */
    omit?: ConsultationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultationInclude<ExtArgs> | null
  }


  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderMinAggregateOutputType = {
    id: string | null
    date: Date | null
    time: Date | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: string | null
    date: Date | null
    time: Date | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    date: number
    time: number
    _all: number
  }


  export type ReminderMinAggregateInputType = {
    id?: true
    date?: true
    time?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    date?: true
    time?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    date?: true
    time?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: string
    date: Date
    time: Date
    _count: ReminderCountAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    time?: boolean
    reminderData?: boolean | Reminder$reminderDataArgs<ExtArgs>
    _count?: boolean | ReminderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    time?: boolean
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    date?: boolean
    time?: boolean
  }

  export type ReminderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "time", ExtArgs["result"]["reminder"]>
  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminderData?: boolean | Reminder$reminderDataArgs<ExtArgs>
    _count?: boolean | ReminderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReminderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ReminderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      reminderData: Prisma.$ReminderDataPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: Date
      time: Date
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }

  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderFindUniqueArgs>(args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reminder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderFindFirstArgs>(args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderFindManyArgs>(args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
     */
    create<T extends ReminderCreateArgs>(args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reminders.
     * @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderCreateManyArgs>(args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reminders and returns the data saved in the database.
     * @param {ReminderCreateManyAndReturnArgs} args - Arguments to create many Reminders.
     * @example
     * // Create many Reminders
     * const reminder = await prisma.reminder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
     */
    delete<T extends ReminderDeleteArgs>(args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderUpdateArgs>(args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDeleteManyArgs>(args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderUpdateManyArgs>(args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders and returns the data updated in the database.
     * @param {ReminderUpdateManyAndReturnArgs} args - Arguments to update many Reminders.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reminders and only return the `id`
     * const reminderWithIdOnly = await prisma.reminder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReminderUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
     */
    upsert<T extends ReminderUpsertArgs>(args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reminderData<T extends Reminder$reminderDataArgs<ExtArgs> = {}>(args?: Subset<T, Reminder$reminderDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reminder model
   */
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'String'>
    readonly date: FieldRef<"Reminder", 'DateTime'>
    readonly time: FieldRef<"Reminder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }

  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }

  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder createManyAndReturn
   */
  export type ReminderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder updateManyAndReturn
   */
  export type ReminderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to update.
     */
    limit?: number
  }

  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }

  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }

  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
    /**
     * Limit how many Reminders to delete.
     */
    limit?: number
  }

  /**
   * Reminder.reminderData
   */
  export type Reminder$reminderDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    where?: ReminderDataWhereInput
    orderBy?: ReminderDataOrderByWithRelationInput | ReminderDataOrderByWithRelationInput[]
    cursor?: ReminderDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderDataScalarFieldEnum | ReminderDataScalarFieldEnum[]
  }

  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reminder
     */
    omit?: ReminderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderInclude<ExtArgs> | null
  }


  /**
   * Model ReminderData
   */

  export type AggregateReminderData = {
    _count: ReminderDataCountAggregateOutputType | null
    _min: ReminderDataMinAggregateOutputType | null
    _max: ReminderDataMaxAggregateOutputType | null
  }

  export type ReminderDataMinAggregateOutputType = {
    id: string | null
    reminderId: string | null
    prescriptionLineId: string | null
    taken: boolean | null
  }

  export type ReminderDataMaxAggregateOutputType = {
    id: string | null
    reminderId: string | null
    prescriptionLineId: string | null
    taken: boolean | null
  }

  export type ReminderDataCountAggregateOutputType = {
    id: number
    reminderId: number
    prescriptionLineId: number
    taken: number
    _all: number
  }


  export type ReminderDataMinAggregateInputType = {
    id?: true
    reminderId?: true
    prescriptionLineId?: true
    taken?: true
  }

  export type ReminderDataMaxAggregateInputType = {
    id?: true
    reminderId?: true
    prescriptionLineId?: true
    taken?: true
  }

  export type ReminderDataCountAggregateInputType = {
    id?: true
    reminderId?: true
    prescriptionLineId?: true
    taken?: true
    _all?: true
  }

  export type ReminderDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderData to aggregate.
     */
    where?: ReminderDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderData to fetch.
     */
    orderBy?: ReminderDataOrderByWithRelationInput | ReminderDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReminderData
    **/
    _count?: true | ReminderDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderDataMaxAggregateInputType
  }

  export type GetReminderDataAggregateType<T extends ReminderDataAggregateArgs> = {
        [P in keyof T & keyof AggregateReminderData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminderData[P]>
      : GetScalarType<T[P], AggregateReminderData[P]>
  }




  export type ReminderDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderDataWhereInput
    orderBy?: ReminderDataOrderByWithAggregationInput | ReminderDataOrderByWithAggregationInput[]
    by: ReminderDataScalarFieldEnum[] | ReminderDataScalarFieldEnum
    having?: ReminderDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderDataCountAggregateInputType | true
    _min?: ReminderDataMinAggregateInputType
    _max?: ReminderDataMaxAggregateInputType
  }

  export type ReminderDataGroupByOutputType = {
    id: string
    reminderId: string
    prescriptionLineId: string
    taken: boolean
    _count: ReminderDataCountAggregateOutputType | null
    _min: ReminderDataMinAggregateOutputType | null
    _max: ReminderDataMaxAggregateOutputType | null
  }

  type GetReminderDataGroupByPayload<T extends ReminderDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderDataGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderDataGroupByOutputType[P]>
        }
      >
    >


  export type ReminderDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reminderId?: boolean
    prescriptionLineId?: boolean
    taken?: boolean
    reminder?: boolean | ReminderDefaultArgs<ExtArgs>
    prescriptionLine?: boolean | PrescriptionLineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminderData"]>

  export type ReminderDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reminderId?: boolean
    prescriptionLineId?: boolean
    taken?: boolean
    reminder?: boolean | ReminderDefaultArgs<ExtArgs>
    prescriptionLine?: boolean | PrescriptionLineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminderData"]>

  export type ReminderDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reminderId?: boolean
    prescriptionLineId?: boolean
    taken?: boolean
    reminder?: boolean | ReminderDefaultArgs<ExtArgs>
    prescriptionLine?: boolean | PrescriptionLineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminderData"]>

  export type ReminderDataSelectScalar = {
    id?: boolean
    reminderId?: boolean
    prescriptionLineId?: boolean
    taken?: boolean
  }

  export type ReminderDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reminderId" | "prescriptionLineId" | "taken", ExtArgs["result"]["reminderData"]>
  export type ReminderDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminder?: boolean | ReminderDefaultArgs<ExtArgs>
    prescriptionLine?: boolean | PrescriptionLineDefaultArgs<ExtArgs>
  }
  export type ReminderDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminder?: boolean | ReminderDefaultArgs<ExtArgs>
    prescriptionLine?: boolean | PrescriptionLineDefaultArgs<ExtArgs>
  }
  export type ReminderDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reminder?: boolean | ReminderDefaultArgs<ExtArgs>
    prescriptionLine?: boolean | PrescriptionLineDefaultArgs<ExtArgs>
  }

  export type $ReminderDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReminderData"
    objects: {
      reminder: Prisma.$ReminderPayload<ExtArgs>
      prescriptionLine: Prisma.$PrescriptionLinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reminderId: string
      prescriptionLineId: string
      taken: boolean
    }, ExtArgs["result"]["reminderData"]>
    composites: {}
  }

  type ReminderDataGetPayload<S extends boolean | null | undefined | ReminderDataDefaultArgs> = $Result.GetResult<Prisma.$ReminderDataPayload, S>

  type ReminderDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReminderDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReminderDataCountAggregateInputType | true
    }

  export interface ReminderDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReminderData'], meta: { name: 'ReminderData' } }
    /**
     * Find zero or one ReminderData that matches the filter.
     * @param {ReminderDataFindUniqueArgs} args - Arguments to find a ReminderData
     * @example
     * // Get one ReminderData
     * const reminderData = await prisma.reminderData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReminderDataFindUniqueArgs>(args: SelectSubset<T, ReminderDataFindUniqueArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReminderData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReminderDataFindUniqueOrThrowArgs} args - Arguments to find a ReminderData
     * @example
     * // Get one ReminderData
     * const reminderData = await prisma.reminderData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReminderDataFindUniqueOrThrowArgs>(args: SelectSubset<T, ReminderDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReminderData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataFindFirstArgs} args - Arguments to find a ReminderData
     * @example
     * // Get one ReminderData
     * const reminderData = await prisma.reminderData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReminderDataFindFirstArgs>(args?: SelectSubset<T, ReminderDataFindFirstArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReminderData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataFindFirstOrThrowArgs} args - Arguments to find a ReminderData
     * @example
     * // Get one ReminderData
     * const reminderData = await prisma.reminderData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReminderDataFindFirstOrThrowArgs>(args?: SelectSubset<T, ReminderDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReminderData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReminderData
     * const reminderData = await prisma.reminderData.findMany()
     * 
     * // Get first 10 ReminderData
     * const reminderData = await prisma.reminderData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderDataWithIdOnly = await prisma.reminderData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReminderDataFindManyArgs>(args?: SelectSubset<T, ReminderDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReminderData.
     * @param {ReminderDataCreateArgs} args - Arguments to create a ReminderData.
     * @example
     * // Create one ReminderData
     * const ReminderData = await prisma.reminderData.create({
     *   data: {
     *     // ... data to create a ReminderData
     *   }
     * })
     * 
     */
    create<T extends ReminderDataCreateArgs>(args: SelectSubset<T, ReminderDataCreateArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReminderData.
     * @param {ReminderDataCreateManyArgs} args - Arguments to create many ReminderData.
     * @example
     * // Create many ReminderData
     * const reminderData = await prisma.reminderData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReminderDataCreateManyArgs>(args?: SelectSubset<T, ReminderDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReminderData and returns the data saved in the database.
     * @param {ReminderDataCreateManyAndReturnArgs} args - Arguments to create many ReminderData.
     * @example
     * // Create many ReminderData
     * const reminderData = await prisma.reminderData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReminderData and only return the `id`
     * const reminderDataWithIdOnly = await prisma.reminderData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReminderDataCreateManyAndReturnArgs>(args?: SelectSubset<T, ReminderDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReminderData.
     * @param {ReminderDataDeleteArgs} args - Arguments to delete one ReminderData.
     * @example
     * // Delete one ReminderData
     * const ReminderData = await prisma.reminderData.delete({
     *   where: {
     *     // ... filter to delete one ReminderData
     *   }
     * })
     * 
     */
    delete<T extends ReminderDataDeleteArgs>(args: SelectSubset<T, ReminderDataDeleteArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReminderData.
     * @param {ReminderDataUpdateArgs} args - Arguments to update one ReminderData.
     * @example
     * // Update one ReminderData
     * const reminderData = await prisma.reminderData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReminderDataUpdateArgs>(args: SelectSubset<T, ReminderDataUpdateArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReminderData.
     * @param {ReminderDataDeleteManyArgs} args - Arguments to filter ReminderData to delete.
     * @example
     * // Delete a few ReminderData
     * const { count } = await prisma.reminderData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReminderDataDeleteManyArgs>(args?: SelectSubset<T, ReminderDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReminderData
     * const reminderData = await prisma.reminderData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReminderDataUpdateManyArgs>(args: SelectSubset<T, ReminderDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReminderData and returns the data updated in the database.
     * @param {ReminderDataUpdateManyAndReturnArgs} args - Arguments to update many ReminderData.
     * @example
     * // Update many ReminderData
     * const reminderData = await prisma.reminderData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReminderData and only return the `id`
     * const reminderDataWithIdOnly = await prisma.reminderData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReminderDataUpdateManyAndReturnArgs>(args: SelectSubset<T, ReminderDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReminderData.
     * @param {ReminderDataUpsertArgs} args - Arguments to update or create a ReminderData.
     * @example
     * // Update or create a ReminderData
     * const reminderData = await prisma.reminderData.upsert({
     *   create: {
     *     // ... data to create a ReminderData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReminderData we want to update
     *   }
     * })
     */
    upsert<T extends ReminderDataUpsertArgs>(args: SelectSubset<T, ReminderDataUpsertArgs<ExtArgs>>): Prisma__ReminderDataClient<$Result.GetResult<Prisma.$ReminderDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReminderData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataCountArgs} args - Arguments to filter ReminderData to count.
     * @example
     * // Count the number of ReminderData
     * const count = await prisma.reminderData.count({
     *   where: {
     *     // ... the filter for the ReminderData we want to count
     *   }
     * })
    **/
    count<T extends ReminderDataCountArgs>(
      args?: Subset<T, ReminderDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReminderData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReminderDataAggregateArgs>(args: Subset<T, ReminderDataAggregateArgs>): Prisma.PrismaPromise<GetReminderDataAggregateType<T>>

    /**
     * Group by ReminderData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReminderDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderDataGroupByArgs['orderBy'] }
        : { orderBy?: ReminderDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReminderDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReminderData model
   */
  readonly fields: ReminderDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReminderData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reminder<T extends ReminderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReminderDefaultArgs<ExtArgs>>): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    prescriptionLine<T extends PrescriptionLineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PrescriptionLineDefaultArgs<ExtArgs>>): Prisma__PrescriptionLineClient<$Result.GetResult<Prisma.$PrescriptionLinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReminderData model
   */
  interface ReminderDataFieldRefs {
    readonly id: FieldRef<"ReminderData", 'String'>
    readonly reminderId: FieldRef<"ReminderData", 'String'>
    readonly prescriptionLineId: FieldRef<"ReminderData", 'String'>
    readonly taken: FieldRef<"ReminderData", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ReminderData findUnique
   */
  export type ReminderDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * Filter, which ReminderData to fetch.
     */
    where: ReminderDataWhereUniqueInput
  }

  /**
   * ReminderData findUniqueOrThrow
   */
  export type ReminderDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * Filter, which ReminderData to fetch.
     */
    where: ReminderDataWhereUniqueInput
  }

  /**
   * ReminderData findFirst
   */
  export type ReminderDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * Filter, which ReminderData to fetch.
     */
    where?: ReminderDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderData to fetch.
     */
    orderBy?: ReminderDataOrderByWithRelationInput | ReminderDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderData.
     */
    cursor?: ReminderDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderData.
     */
    distinct?: ReminderDataScalarFieldEnum | ReminderDataScalarFieldEnum[]
  }

  /**
   * ReminderData findFirstOrThrow
   */
  export type ReminderDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * Filter, which ReminderData to fetch.
     */
    where?: ReminderDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderData to fetch.
     */
    orderBy?: ReminderDataOrderByWithRelationInput | ReminderDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReminderData.
     */
    cursor?: ReminderDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReminderData.
     */
    distinct?: ReminderDataScalarFieldEnum | ReminderDataScalarFieldEnum[]
  }

  /**
   * ReminderData findMany
   */
  export type ReminderDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * Filter, which ReminderData to fetch.
     */
    where?: ReminderDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReminderData to fetch.
     */
    orderBy?: ReminderDataOrderByWithRelationInput | ReminderDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReminderData.
     */
    cursor?: ReminderDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReminderData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReminderData.
     */
    skip?: number
    distinct?: ReminderDataScalarFieldEnum | ReminderDataScalarFieldEnum[]
  }

  /**
   * ReminderData create
   */
  export type ReminderDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * The data needed to create a ReminderData.
     */
    data: XOR<ReminderDataCreateInput, ReminderDataUncheckedCreateInput>
  }

  /**
   * ReminderData createMany
   */
  export type ReminderDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReminderData.
     */
    data: ReminderDataCreateManyInput | ReminderDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReminderData createManyAndReturn
   */
  export type ReminderDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * The data used to create many ReminderData.
     */
    data: ReminderDataCreateManyInput | ReminderDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReminderData update
   */
  export type ReminderDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * The data needed to update a ReminderData.
     */
    data: XOR<ReminderDataUpdateInput, ReminderDataUncheckedUpdateInput>
    /**
     * Choose, which ReminderData to update.
     */
    where: ReminderDataWhereUniqueInput
  }

  /**
   * ReminderData updateMany
   */
  export type ReminderDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReminderData.
     */
    data: XOR<ReminderDataUpdateManyMutationInput, ReminderDataUncheckedUpdateManyInput>
    /**
     * Filter which ReminderData to update
     */
    where?: ReminderDataWhereInput
    /**
     * Limit how many ReminderData to update.
     */
    limit?: number
  }

  /**
   * ReminderData updateManyAndReturn
   */
  export type ReminderDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * The data used to update ReminderData.
     */
    data: XOR<ReminderDataUpdateManyMutationInput, ReminderDataUncheckedUpdateManyInput>
    /**
     * Filter which ReminderData to update
     */
    where?: ReminderDataWhereInput
    /**
     * Limit how many ReminderData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReminderData upsert
   */
  export type ReminderDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * The filter to search for the ReminderData to update in case it exists.
     */
    where: ReminderDataWhereUniqueInput
    /**
     * In case the ReminderData found by the `where` argument doesn't exist, create a new ReminderData with this data.
     */
    create: XOR<ReminderDataCreateInput, ReminderDataUncheckedCreateInput>
    /**
     * In case the ReminderData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderDataUpdateInput, ReminderDataUncheckedUpdateInput>
  }

  /**
   * ReminderData delete
   */
  export type ReminderDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
    /**
     * Filter which ReminderData to delete.
     */
    where: ReminderDataWhereUniqueInput
  }

  /**
   * ReminderData deleteMany
   */
  export type ReminderDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReminderData to delete
     */
    where?: ReminderDataWhereInput
    /**
     * Limit how many ReminderData to delete.
     */
    limit?: number
  }

  /**
   * ReminderData without action
   */
  export type ReminderDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReminderData
     */
    select?: ReminderDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReminderData
     */
    omit?: ReminderDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReminderDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    address: 'address',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    specialty: 'specialty',
    licenseNumber: 'licenseNumber'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    birthdate: 'birthdate',
    gender: 'gender'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const MedicamentScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    sideEffects: 'sideEffects',
    contraindications: 'contraindications',
    interactions: 'interactions',
    quantityPerPack: 'quantityPerPack',
    unit: 'unit'
  };

  export type MedicamentScalarFieldEnum = (typeof MedicamentScalarFieldEnum)[keyof typeof MedicamentScalarFieldEnum]


  export const PrescriptionScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    date: 'date',
    dosage: 'dosage',
    duration: 'duration',
    consultationId: 'consultationId'
  };

  export type PrescriptionScalarFieldEnum = (typeof PrescriptionScalarFieldEnum)[keyof typeof PrescriptionScalarFieldEnum]


  export const PrescriptionLineScalarFieldEnum: {
    id: 'id',
    prescriptionId: 'prescriptionId',
    medicamentId: 'medicamentId',
    dosage: 'dosage',
    duration: 'duration',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night',
    foodOrder: 'foodOrder'
  };

  export type PrescriptionLineScalarFieldEnum = (typeof PrescriptionLineScalarFieldEnum)[keyof typeof PrescriptionLineScalarFieldEnum]


  export const ConsultationScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    patientId: 'patientId',
    date: 'date',
    symptoms: 'symptoms',
    diseases: 'diseases'
  };

  export type ConsultationScalarFieldEnum = (typeof ConsultationScalarFieldEnum)[keyof typeof ConsultationScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    date: 'date',
    time: 'time'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const ReminderDataScalarFieldEnum: {
    id: 'id',
    reminderId: 'reminderId',
    prescriptionLineId: 'prescriptionLineId',
    taken: 'taken'
  };

  export type ReminderDataScalarFieldEnum = (typeof ReminderDataScalarFieldEnum)[keyof typeof ReminderDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Unit'
   */
  export type EnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit'>
    


  /**
   * Reference to a field of type 'Unit[]'
   */
  export type ListEnumUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Unit[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FoodOrderType'
   */
  export type EnumFoodOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodOrderType'>
    


  /**
   * Reference to a field of type 'FoodOrderType[]'
   */
  export type ListEnumFoodOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FoodOrderType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    address?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    doctor?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    specialty?: StringFilter<"Doctor"> | string
    licenseNumber?: StringFilter<"Doctor"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    patients?: PatientListRelationFilter
    consultations?: ConsultationListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    user?: UserOrderByWithRelationInput
    patients?: PatientOrderByRelationAggregateInput
    consultations?: ConsultationOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    specialty?: StringFilter<"Doctor"> | string
    licenseNumber?: StringFilter<"Doctor"> | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    patients?: PatientListRelationFilter
    consultations?: ConsultationListRelationFilter
  }, "id">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    specialty?: StringWithAggregatesFilter<"Doctor"> | string
    licenseNumber?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    birthdate?: DateTimeFilter<"Patient"> | Date | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    doctors?: DoctorListRelationFilter
    consultations?: ConsultationListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    user?: UserOrderByWithRelationInput
    doctors?: DoctorOrderByRelationAggregateInput
    consultations?: ConsultationOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    birthdate?: DateTimeFilter<"Patient"> | Date | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    doctors?: DoctorListRelationFilter
    consultations?: ConsultationListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    birthdate?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    gender?: EnumGenderWithAggregatesFilter<"Patient"> | $Enums.Gender
  }

  export type MedicamentWhereInput = {
    AND?: MedicamentWhereInput | MedicamentWhereInput[]
    OR?: MedicamentWhereInput[]
    NOT?: MedicamentWhereInput | MedicamentWhereInput[]
    id?: StringFilter<"Medicament"> | string
    code?: StringFilter<"Medicament"> | string
    name?: StringFilter<"Medicament"> | string
    description?: StringFilter<"Medicament"> | string
    sideEffects?: StringNullableListFilter<"Medicament">
    contraindications?: StringNullableListFilter<"Medicament">
    interactions?: StringNullableListFilter<"Medicament">
    quantityPerPack?: IntFilter<"Medicament"> | number
    unit?: EnumUnitFilter<"Medicament"> | $Enums.Unit
    prescriptions?: PrescriptionListRelationFilter
    prescriptionLines?: PrescriptionLineListRelationFilter
  }

  export type MedicamentOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sideEffects?: SortOrder
    contraindications?: SortOrder
    interactions?: SortOrder
    quantityPerPack?: SortOrder
    unit?: SortOrder
    prescriptions?: PrescriptionOrderByRelationAggregateInput
    prescriptionLines?: PrescriptionLineOrderByRelationAggregateInput
  }

  export type MedicamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MedicamentWhereInput | MedicamentWhereInput[]
    OR?: MedicamentWhereInput[]
    NOT?: MedicamentWhereInput | MedicamentWhereInput[]
    code?: StringFilter<"Medicament"> | string
    name?: StringFilter<"Medicament"> | string
    description?: StringFilter<"Medicament"> | string
    sideEffects?: StringNullableListFilter<"Medicament">
    contraindications?: StringNullableListFilter<"Medicament">
    interactions?: StringNullableListFilter<"Medicament">
    quantityPerPack?: IntFilter<"Medicament"> | number
    unit?: EnumUnitFilter<"Medicament"> | $Enums.Unit
    prescriptions?: PrescriptionListRelationFilter
    prescriptionLines?: PrescriptionLineListRelationFilter
  }, "id">

  export type MedicamentOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sideEffects?: SortOrder
    contraindications?: SortOrder
    interactions?: SortOrder
    quantityPerPack?: SortOrder
    unit?: SortOrder
    _count?: MedicamentCountOrderByAggregateInput
    _avg?: MedicamentAvgOrderByAggregateInput
    _max?: MedicamentMaxOrderByAggregateInput
    _min?: MedicamentMinOrderByAggregateInput
    _sum?: MedicamentSumOrderByAggregateInput
  }

  export type MedicamentScalarWhereWithAggregatesInput = {
    AND?: MedicamentScalarWhereWithAggregatesInput | MedicamentScalarWhereWithAggregatesInput[]
    OR?: MedicamentScalarWhereWithAggregatesInput[]
    NOT?: MedicamentScalarWhereWithAggregatesInput | MedicamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medicament"> | string
    code?: StringWithAggregatesFilter<"Medicament"> | string
    name?: StringWithAggregatesFilter<"Medicament"> | string
    description?: StringWithAggregatesFilter<"Medicament"> | string
    sideEffects?: StringNullableListFilter<"Medicament">
    contraindications?: StringNullableListFilter<"Medicament">
    interactions?: StringNullableListFilter<"Medicament">
    quantityPerPack?: IntWithAggregatesFilter<"Medicament"> | number
    unit?: EnumUnitWithAggregatesFilter<"Medicament"> | $Enums.Unit
  }

  export type PrescriptionWhereInput = {
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    id?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    date?: DateTimeFilter<"Prescription"> | Date | string
    dosage?: StringFilter<"Prescription"> | string
    duration?: StringFilter<"Prescription"> | string
    consultationId?: StringNullableFilter<"Prescription"> | string | null
    medicaments?: MedicamentListRelationFilter
    consultation?: XOR<ConsultationNullableScalarRelationFilter, ConsultationWhereInput> | null
    prescriptionLines?: PrescriptionLineListRelationFilter
  }

  export type PrescriptionOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    consultationId?: SortOrderInput | SortOrder
    medicaments?: MedicamentOrderByRelationAggregateInput
    consultation?: ConsultationOrderByWithRelationInput
    prescriptionLines?: PrescriptionLineOrderByRelationAggregateInput
  }

  export type PrescriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionWhereInput | PrescriptionWhereInput[]
    OR?: PrescriptionWhereInput[]
    NOT?: PrescriptionWhereInput | PrescriptionWhereInput[]
    doctorId?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    date?: DateTimeFilter<"Prescription"> | Date | string
    dosage?: StringFilter<"Prescription"> | string
    duration?: StringFilter<"Prescription"> | string
    consultationId?: StringNullableFilter<"Prescription"> | string | null
    medicaments?: MedicamentListRelationFilter
    consultation?: XOR<ConsultationNullableScalarRelationFilter, ConsultationWhereInput> | null
    prescriptionLines?: PrescriptionLineListRelationFilter
  }, "id">

  export type PrescriptionOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    consultationId?: SortOrderInput | SortOrder
    _count?: PrescriptionCountOrderByAggregateInput
    _max?: PrescriptionMaxOrderByAggregateInput
    _min?: PrescriptionMinOrderByAggregateInput
  }

  export type PrescriptionScalarWhereWithAggregatesInput = {
    AND?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    OR?: PrescriptionScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionScalarWhereWithAggregatesInput | PrescriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prescription"> | string
    doctorId?: StringWithAggregatesFilter<"Prescription"> | string
    patientId?: StringWithAggregatesFilter<"Prescription"> | string
    date?: DateTimeWithAggregatesFilter<"Prescription"> | Date | string
    dosage?: StringWithAggregatesFilter<"Prescription"> | string
    duration?: StringWithAggregatesFilter<"Prescription"> | string
    consultationId?: StringNullableWithAggregatesFilter<"Prescription"> | string | null
  }

  export type PrescriptionLineWhereInput = {
    AND?: PrescriptionLineWhereInput | PrescriptionLineWhereInput[]
    OR?: PrescriptionLineWhereInput[]
    NOT?: PrescriptionLineWhereInput | PrescriptionLineWhereInput[]
    id?: StringFilter<"PrescriptionLine"> | string
    prescriptionId?: StringFilter<"PrescriptionLine"> | string
    medicamentId?: StringFilter<"PrescriptionLine"> | string
    dosage?: IntFilter<"PrescriptionLine"> | number
    duration?: StringFilter<"PrescriptionLine"> | string
    morning?: BoolFilter<"PrescriptionLine"> | boolean
    afternoon?: BoolFilter<"PrescriptionLine"> | boolean
    evening?: BoolFilter<"PrescriptionLine"> | boolean
    night?: BoolFilter<"PrescriptionLine"> | boolean
    foodOrder?: EnumFoodOrderTypeFilter<"PrescriptionLine"> | $Enums.FoodOrderType
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
    medicament?: XOR<MedicamentScalarRelationFilter, MedicamentWhereInput>
    reminders?: ReminderDataListRelationFilter
  }

  export type PrescriptionLineOrderByWithRelationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicamentId?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    morning?: SortOrder
    afternoon?: SortOrder
    evening?: SortOrder
    night?: SortOrder
    foodOrder?: SortOrder
    prescription?: PrescriptionOrderByWithRelationInput
    medicament?: MedicamentOrderByWithRelationInput
    reminders?: ReminderDataOrderByRelationAggregateInput
  }

  export type PrescriptionLineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PrescriptionLineWhereInput | PrescriptionLineWhereInput[]
    OR?: PrescriptionLineWhereInput[]
    NOT?: PrescriptionLineWhereInput | PrescriptionLineWhereInput[]
    prescriptionId?: StringFilter<"PrescriptionLine"> | string
    medicamentId?: StringFilter<"PrescriptionLine"> | string
    dosage?: IntFilter<"PrescriptionLine"> | number
    duration?: StringFilter<"PrescriptionLine"> | string
    morning?: BoolFilter<"PrescriptionLine"> | boolean
    afternoon?: BoolFilter<"PrescriptionLine"> | boolean
    evening?: BoolFilter<"PrescriptionLine"> | boolean
    night?: BoolFilter<"PrescriptionLine"> | boolean
    foodOrder?: EnumFoodOrderTypeFilter<"PrescriptionLine"> | $Enums.FoodOrderType
    prescription?: XOR<PrescriptionScalarRelationFilter, PrescriptionWhereInput>
    medicament?: XOR<MedicamentScalarRelationFilter, MedicamentWhereInput>
    reminders?: ReminderDataListRelationFilter
  }, "id">

  export type PrescriptionLineOrderByWithAggregationInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicamentId?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    morning?: SortOrder
    afternoon?: SortOrder
    evening?: SortOrder
    night?: SortOrder
    foodOrder?: SortOrder
    _count?: PrescriptionLineCountOrderByAggregateInput
    _avg?: PrescriptionLineAvgOrderByAggregateInput
    _max?: PrescriptionLineMaxOrderByAggregateInput
    _min?: PrescriptionLineMinOrderByAggregateInput
    _sum?: PrescriptionLineSumOrderByAggregateInput
  }

  export type PrescriptionLineScalarWhereWithAggregatesInput = {
    AND?: PrescriptionLineScalarWhereWithAggregatesInput | PrescriptionLineScalarWhereWithAggregatesInput[]
    OR?: PrescriptionLineScalarWhereWithAggregatesInput[]
    NOT?: PrescriptionLineScalarWhereWithAggregatesInput | PrescriptionLineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PrescriptionLine"> | string
    prescriptionId?: StringWithAggregatesFilter<"PrescriptionLine"> | string
    medicamentId?: StringWithAggregatesFilter<"PrescriptionLine"> | string
    dosage?: IntWithAggregatesFilter<"PrescriptionLine"> | number
    duration?: StringWithAggregatesFilter<"PrescriptionLine"> | string
    morning?: BoolWithAggregatesFilter<"PrescriptionLine"> | boolean
    afternoon?: BoolWithAggregatesFilter<"PrescriptionLine"> | boolean
    evening?: BoolWithAggregatesFilter<"PrescriptionLine"> | boolean
    night?: BoolWithAggregatesFilter<"PrescriptionLine"> | boolean
    foodOrder?: EnumFoodOrderTypeWithAggregatesFilter<"PrescriptionLine"> | $Enums.FoodOrderType
  }

  export type ConsultationWhereInput = {
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    id?: StringFilter<"Consultation"> | string
    doctorId?: StringFilter<"Consultation"> | string
    patientId?: StringFilter<"Consultation"> | string
    date?: DateTimeFilter<"Consultation"> | Date | string
    symptoms?: StringNullableListFilter<"Consultation">
    diseases?: StringNullableListFilter<"Consultation">
    prescription?: PrescriptionListRelationFilter
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type ConsultationOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    symptoms?: SortOrder
    diseases?: SortOrder
    prescription?: PrescriptionOrderByRelationAggregateInput
    doctor?: DoctorOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type ConsultationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationWhereInput | ConsultationWhereInput[]
    OR?: ConsultationWhereInput[]
    NOT?: ConsultationWhereInput | ConsultationWhereInput[]
    doctorId?: StringFilter<"Consultation"> | string
    patientId?: StringFilter<"Consultation"> | string
    date?: DateTimeFilter<"Consultation"> | Date | string
    symptoms?: StringNullableListFilter<"Consultation">
    diseases?: StringNullableListFilter<"Consultation">
    prescription?: PrescriptionListRelationFilter
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id">

  export type ConsultationOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    symptoms?: SortOrder
    diseases?: SortOrder
    _count?: ConsultationCountOrderByAggregateInput
    _max?: ConsultationMaxOrderByAggregateInput
    _min?: ConsultationMinOrderByAggregateInput
  }

  export type ConsultationScalarWhereWithAggregatesInput = {
    AND?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    OR?: ConsultationScalarWhereWithAggregatesInput[]
    NOT?: ConsultationScalarWhereWithAggregatesInput | ConsultationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consultation"> | string
    doctorId?: StringWithAggregatesFilter<"Consultation"> | string
    patientId?: StringWithAggregatesFilter<"Consultation"> | string
    date?: DateTimeWithAggregatesFilter<"Consultation"> | Date | string
    symptoms?: StringNullableListFilter<"Consultation">
    diseases?: StringNullableListFilter<"Consultation">
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: StringFilter<"Reminder"> | string
    date?: DateTimeFilter<"Reminder"> | Date | string
    time?: DateTimeFilter<"Reminder"> | Date | string
    reminderData?: ReminderDataListRelationFilter
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    reminderData?: ReminderDataOrderByRelationAggregateInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    date?: DateTimeFilter<"Reminder"> | Date | string
    time?: DateTimeFilter<"Reminder"> | Date | string
    reminderData?: ReminderDataListRelationFilter
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reminder"> | string
    date?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    time?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
  }

  export type ReminderDataWhereInput = {
    AND?: ReminderDataWhereInput | ReminderDataWhereInput[]
    OR?: ReminderDataWhereInput[]
    NOT?: ReminderDataWhereInput | ReminderDataWhereInput[]
    id?: StringFilter<"ReminderData"> | string
    reminderId?: StringFilter<"ReminderData"> | string
    prescriptionLineId?: StringFilter<"ReminderData"> | string
    taken?: BoolFilter<"ReminderData"> | boolean
    reminder?: XOR<ReminderScalarRelationFilter, ReminderWhereInput>
    prescriptionLine?: XOR<PrescriptionLineScalarRelationFilter, PrescriptionLineWhereInput>
  }

  export type ReminderDataOrderByWithRelationInput = {
    id?: SortOrder
    reminderId?: SortOrder
    prescriptionLineId?: SortOrder
    taken?: SortOrder
    reminder?: ReminderOrderByWithRelationInput
    prescriptionLine?: PrescriptionLineOrderByWithRelationInput
  }

  export type ReminderDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReminderDataWhereInput | ReminderDataWhereInput[]
    OR?: ReminderDataWhereInput[]
    NOT?: ReminderDataWhereInput | ReminderDataWhereInput[]
    reminderId?: StringFilter<"ReminderData"> | string
    prescriptionLineId?: StringFilter<"ReminderData"> | string
    taken?: BoolFilter<"ReminderData"> | boolean
    reminder?: XOR<ReminderScalarRelationFilter, ReminderWhereInput>
    prescriptionLine?: XOR<PrescriptionLineScalarRelationFilter, PrescriptionLineWhereInput>
  }, "id">

  export type ReminderDataOrderByWithAggregationInput = {
    id?: SortOrder
    reminderId?: SortOrder
    prescriptionLineId?: SortOrder
    taken?: SortOrder
    _count?: ReminderDataCountOrderByAggregateInput
    _max?: ReminderDataMaxOrderByAggregateInput
    _min?: ReminderDataMinOrderByAggregateInput
  }

  export type ReminderDataScalarWhereWithAggregatesInput = {
    AND?: ReminderDataScalarWhereWithAggregatesInput | ReminderDataScalarWhereWithAggregatesInput[]
    OR?: ReminderDataScalarWhereWithAggregatesInput[]
    NOT?: ReminderDataScalarWhereWithAggregatesInput | ReminderDataScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReminderData"> | string
    reminderId?: StringWithAggregatesFilter<"ReminderData"> | string
    prescriptionLineId?: StringWithAggregatesFilter<"ReminderData"> | string
    taken?: BoolWithAggregatesFilter<"ReminderData"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    specialty: string
    licenseNumber: string
    user?: UserCreateNestedOneWithoutDoctorInput
    patients?: PatientCreateNestedManyWithoutDoctorsInput
    consultations?: ConsultationCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id: string
    specialty: string
    licenseNumber: string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorsInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDoctorNestedInput
    patients?: PatientUpdateManyWithoutDoctorsNestedInput
    consultations?: ConsultationUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorsNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id: string
    specialty: string
    licenseNumber: string
  }

  export type DoctorUpdateManyMutationInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    birthdate: Date | string
    gender: $Enums.Gender
    user?: UserCreateNestedOneWithoutPatientInput
    doctors?: DoctorCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id: string
    birthdate: Date | string
    gender: $Enums.Gender
    doctors?: DoctorUncheckedCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user?: UserUpdateOneWithoutPatientNestedInput
    doctors?: DoctorUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    doctors?: DoctorUncheckedUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id: string
    birthdate: Date | string
    gender: $Enums.Gender
  }

  export type PatientUpdateManyMutationInput = {
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
  }

  export type MedicamentCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicamentsInput
    prescriptionLines?: PrescriptionLineCreateNestedManyWithoutMedicamentInput
  }

  export type MedicamentUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicamentsInput
    prescriptionLines?: PrescriptionLineUncheckedCreateNestedManyWithoutMedicamentInput
  }

  export type MedicamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    prescriptions?: PrescriptionUpdateManyWithoutMedicamentsNestedInput
    prescriptionLines?: PrescriptionLineUpdateManyWithoutMedicamentNestedInput
  }

  export type MedicamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicamentsNestedInput
    prescriptionLines?: PrescriptionLineUncheckedUpdateManyWithoutMedicamentNestedInput
  }

  export type MedicamentCreateManyInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
  }

  export type MedicamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
  }

  export type MedicamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
  }

  export type PrescriptionCreateInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    medicaments?: MedicamentCreateNestedManyWithoutPrescriptionsInput
    consultation?: ConsultationCreateNestedOneWithoutPrescriptionInput
    prescriptionLines?: PrescriptionLineCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    consultationId?: string | null
    medicaments?: MedicamentUncheckedCreateNestedManyWithoutPrescriptionsInput
    prescriptionLines?: PrescriptionLineUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    medicaments?: MedicamentUpdateManyWithoutPrescriptionsNestedInput
    consultation?: ConsultationUpdateOneWithoutPrescriptionNestedInput
    prescriptionLines?: PrescriptionLineUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
    medicaments?: MedicamentUncheckedUpdateManyWithoutPrescriptionsNestedInput
    prescriptionLines?: PrescriptionLineUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionCreateManyInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    consultationId?: string | null
  }

  export type PrescriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type PrescriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionLineCreateInput = {
    id?: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    prescription: PrescriptionCreateNestedOneWithoutPrescriptionLinesInput
    medicament: MedicamentCreateNestedOneWithoutPrescriptionLinesInput
    reminders?: ReminderDataCreateNestedManyWithoutPrescriptionLineInput
  }

  export type PrescriptionLineUncheckedCreateInput = {
    id?: string
    prescriptionId: string
    medicamentId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    reminders?: ReminderDataUncheckedCreateNestedManyWithoutPrescriptionLineInput
  }

  export type PrescriptionLineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    prescription?: PrescriptionUpdateOneRequiredWithoutPrescriptionLinesNestedInput
    medicament?: MedicamentUpdateOneRequiredWithoutPrescriptionLinesNestedInput
    reminders?: ReminderDataUpdateManyWithoutPrescriptionLineNestedInput
  }

  export type PrescriptionLineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    medicamentId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    reminders?: ReminderDataUncheckedUpdateManyWithoutPrescriptionLineNestedInput
  }

  export type PrescriptionLineCreateManyInput = {
    id?: string
    prescriptionId: string
    medicamentId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
  }

  export type PrescriptionLineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
  }

  export type PrescriptionLineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    medicamentId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
  }

  export type ConsultationCreateInput = {
    id?: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    prescription?: PrescriptionCreateNestedManyWithoutConsultationInput
    doctor: DoctorCreateNestedOneWithoutConsultationsInput
    patient: PatientCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    prescription?: PrescriptionUpdateManyWithoutConsultationNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutConsultationsNestedInput
    patient?: PatientUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    prescription?: PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationCreateManyInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
  }

  export type ConsultationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
  }

  export type ConsultationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
  }

  export type ReminderCreateInput = {
    id?: string
    date: Date | string
    time: Date | string
    reminderData?: ReminderDataCreateNestedManyWithoutReminderInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: string
    date: Date | string
    time: Date | string
    reminderData?: ReminderDataUncheckedCreateNestedManyWithoutReminderInput
  }

  export type ReminderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderData?: ReminderDataUpdateManyWithoutReminderNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    reminderData?: ReminderDataUncheckedUpdateManyWithoutReminderNestedInput
  }

  export type ReminderCreateManyInput = {
    id?: string
    date: Date | string
    time: Date | string
  }

  export type ReminderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderDataCreateInput = {
    id?: string
    taken: boolean
    reminder: ReminderCreateNestedOneWithoutReminderDataInput
    prescriptionLine: PrescriptionLineCreateNestedOneWithoutRemindersInput
  }

  export type ReminderDataUncheckedCreateInput = {
    id?: string
    reminderId: string
    prescriptionLineId: string
    taken: boolean
  }

  export type ReminderDataUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    reminder?: ReminderUpdateOneRequiredWithoutReminderDataNestedInput
    prescriptionLine?: PrescriptionLineUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderDataUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderId?: StringFieldUpdateOperationsInput | string
    prescriptionLineId?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderDataCreateManyInput = {
    id?: string
    reminderId: string
    prescriptionLineId: string
    taken: boolean
  }

  export type ReminderDataUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderDataUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderId?: StringFieldUpdateOperationsInput | string
    prescriptionLineId?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type ConsultationListRelationFilter = {
    every?: ConsultationWhereInput
    some?: ConsultationWhereInput
    none?: ConsultationWhereInput
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConsultationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    specialty?: SortOrder
    licenseNumber?: SortOrder
  }

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
  }

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type PrescriptionListRelationFilter = {
    every?: PrescriptionWhereInput
    some?: PrescriptionWhereInput
    none?: PrescriptionWhereInput
  }

  export type PrescriptionLineListRelationFilter = {
    every?: PrescriptionLineWhereInput
    some?: PrescriptionLineWhereInput
    none?: PrescriptionLineWhereInput
  }

  export type PrescriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicamentCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    sideEffects?: SortOrder
    contraindications?: SortOrder
    interactions?: SortOrder
    quantityPerPack?: SortOrder
    unit?: SortOrder
  }

  export type MedicamentAvgOrderByAggregateInput = {
    quantityPerPack?: SortOrder
  }

  export type MedicamentMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantityPerPack?: SortOrder
    unit?: SortOrder
  }

  export type MedicamentMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantityPerPack?: SortOrder
    unit?: SortOrder
  }

  export type MedicamentSumOrderByAggregateInput = {
    quantityPerPack?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type MedicamentListRelationFilter = {
    every?: MedicamentWhereInput
    some?: MedicamentWhereInput
    none?: MedicamentWhereInput
  }

  export type ConsultationNullableScalarRelationFilter = {
    is?: ConsultationWhereInput | null
    isNot?: ConsultationWhereInput | null
  }

  export type MedicamentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    consultationId?: SortOrder
  }

  export type PrescriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    consultationId?: SortOrder
  }

  export type PrescriptionMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    consultationId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumFoodOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrderType | EnumFoodOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrderTypeFilter<$PrismaModel> | $Enums.FoodOrderType
  }

  export type PrescriptionScalarRelationFilter = {
    is?: PrescriptionWhereInput
    isNot?: PrescriptionWhereInput
  }

  export type MedicamentScalarRelationFilter = {
    is?: MedicamentWhereInput
    isNot?: MedicamentWhereInput
  }

  export type ReminderDataListRelationFilter = {
    every?: ReminderDataWhereInput
    some?: ReminderDataWhereInput
    none?: ReminderDataWhereInput
  }

  export type ReminderDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PrescriptionLineCountOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicamentId?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    morning?: SortOrder
    afternoon?: SortOrder
    evening?: SortOrder
    night?: SortOrder
    foodOrder?: SortOrder
  }

  export type PrescriptionLineAvgOrderByAggregateInput = {
    dosage?: SortOrder
  }

  export type PrescriptionLineMaxOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicamentId?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    morning?: SortOrder
    afternoon?: SortOrder
    evening?: SortOrder
    night?: SortOrder
    foodOrder?: SortOrder
  }

  export type PrescriptionLineMinOrderByAggregateInput = {
    id?: SortOrder
    prescriptionId?: SortOrder
    medicamentId?: SortOrder
    dosage?: SortOrder
    duration?: SortOrder
    morning?: SortOrder
    afternoon?: SortOrder
    evening?: SortOrder
    night?: SortOrder
    foodOrder?: SortOrder
  }

  export type PrescriptionLineSumOrderByAggregateInput = {
    dosage?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumFoodOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrderType | EnumFoodOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.FoodOrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumFoodOrderTypeFilter<$PrismaModel>
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type ConsultationCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
    symptoms?: SortOrder
    diseases?: SortOrder
  }

  export type ConsultationMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
  }

  export type ConsultationMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    date?: SortOrder
  }

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    time?: SortOrder
  }

  export type ReminderScalarRelationFilter = {
    is?: ReminderWhereInput
    isNot?: ReminderWhereInput
  }

  export type PrescriptionLineScalarRelationFilter = {
    is?: PrescriptionLineWhereInput
    isNot?: PrescriptionLineWhereInput
  }

  export type ReminderDataCountOrderByAggregateInput = {
    id?: SortOrder
    reminderId?: SortOrder
    prescriptionLineId?: SortOrder
    taken?: SortOrder
  }

  export type ReminderDataMaxOrderByAggregateInput = {
    id?: SortOrder
    reminderId?: SortOrder
    prescriptionLineId?: SortOrder
    taken?: SortOrder
  }

  export type ReminderDataMinOrderByAggregateInput = {
    id?: SortOrder
    reminderId?: SortOrder
    prescriptionLineId?: SortOrder
    taken?: SortOrder
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    connect?: PatientWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type PatientUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput
    upsert?: PatientUpsertWithoutUserInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutUserInput, PatientUpdateWithoutUserInput>, PatientUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutDoctorInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    connect?: UserWhereUniqueInput
  }

  export type PatientCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<PatientCreateWithoutDoctorsInput, PatientUncheckedCreateWithoutDoctorsInput> | PatientCreateWithoutDoctorsInput[] | PatientUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorsInput | PatientCreateOrConnectWithoutDoctorsInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type ConsultationCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ConsultationCreateWithoutDoctorInput, ConsultationUncheckedCreateWithoutDoctorInput> | ConsultationCreateWithoutDoctorInput[] | ConsultationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutDoctorInput | ConsultationCreateOrConnectWithoutDoctorInput[]
    createMany?: ConsultationCreateManyDoctorInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutDoctorsInput = {
    create?: XOR<PatientCreateWithoutDoctorsInput, PatientUncheckedCreateWithoutDoctorsInput> | PatientCreateWithoutDoctorsInput[] | PatientUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorsInput | PatientCreateOrConnectWithoutDoctorsInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<ConsultationCreateWithoutDoctorInput, ConsultationUncheckedCreateWithoutDoctorInput> | ConsultationCreateWithoutDoctorInput[] | ConsultationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutDoctorInput | ConsultationCreateOrConnectWithoutDoctorInput[]
    createMany?: ConsultationCreateManyDoctorInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutDoctorNestedInput = {
    create?: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDoctorInput
    upsert?: UserUpsertWithoutDoctorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDoctorInput, UserUpdateWithoutDoctorInput>, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type PatientUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<PatientCreateWithoutDoctorsInput, PatientUncheckedCreateWithoutDoctorsInput> | PatientCreateWithoutDoctorsInput[] | PatientUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorsInput | PatientCreateOrConnectWithoutDoctorsInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDoctorsInput | PatientUpsertWithWhereUniqueWithoutDoctorsInput[]
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDoctorsInput | PatientUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDoctorsInput | PatientUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type ConsultationUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ConsultationCreateWithoutDoctorInput, ConsultationUncheckedCreateWithoutDoctorInput> | ConsultationCreateWithoutDoctorInput[] | ConsultationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutDoctorInput | ConsultationCreateOrConnectWithoutDoctorInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutDoctorInput | ConsultationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ConsultationCreateManyDoctorInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutDoctorInput | ConsultationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutDoctorInput | ConsultationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutDoctorsNestedInput = {
    create?: XOR<PatientCreateWithoutDoctorsInput, PatientUncheckedCreateWithoutDoctorsInput> | PatientCreateWithoutDoctorsInput[] | PatientUncheckedCreateWithoutDoctorsInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDoctorsInput | PatientCreateOrConnectWithoutDoctorsInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDoctorsInput | PatientUpsertWithWhereUniqueWithoutDoctorsInput[]
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDoctorsInput | PatientUpdateWithWhereUniqueWithoutDoctorsInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDoctorsInput | PatientUpdateManyWithWhereWithoutDoctorsInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<ConsultationCreateWithoutDoctorInput, ConsultationUncheckedCreateWithoutDoctorInput> | ConsultationCreateWithoutDoctorInput[] | ConsultationUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutDoctorInput | ConsultationCreateOrConnectWithoutDoctorInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutDoctorInput | ConsultationUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: ConsultationCreateManyDoctorInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutDoctorInput | ConsultationUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutDoctorInput | ConsultationUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPatientInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    connect?: UserWhereUniqueInput
  }

  export type DoctorCreateNestedManyWithoutPatientsInput = {
    create?: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput> | DoctorCreateWithoutPatientsInput[] | DoctorUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | DoctorCreateOrConnectWithoutPatientsInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type ConsultationCreateNestedManyWithoutPatientInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type DoctorUncheckedCreateNestedManyWithoutPatientsInput = {
    create?: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput> | DoctorCreateWithoutPatientsInput[] | DoctorUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | DoctorCreateOrConnectWithoutPatientsInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type ConsultationUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type UserUpdateOneWithoutPatientNestedInput = {
    create?: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientInput
    upsert?: UserUpsertWithoutPatientInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientInput, UserUpdateWithoutPatientInput>, UserUncheckedUpdateWithoutPatientInput>
  }

  export type DoctorUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput> | DoctorCreateWithoutPatientsInput[] | DoctorUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | DoctorCreateOrConnectWithoutPatientsInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutPatientsInput | DoctorUpsertWithWhereUniqueWithoutPatientsInput[]
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutPatientsInput | DoctorUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutPatientsInput | DoctorUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type ConsultationUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutPatientInput | ConsultationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutPatientInput | ConsultationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutPatientInput | ConsultationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type DoctorUncheckedUpdateManyWithoutPatientsNestedInput = {
    create?: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput> | DoctorCreateWithoutPatientsInput[] | DoctorUncheckedCreateWithoutPatientsInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutPatientsInput | DoctorCreateOrConnectWithoutPatientsInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutPatientsInput | DoctorUpsertWithWhereUniqueWithoutPatientsInput[]
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutPatientsInput | DoctorUpdateWithWhereUniqueWithoutPatientsInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutPatientsInput | DoctorUpdateManyWithWhereWithoutPatientsInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type ConsultationUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput> | ConsultationCreateWithoutPatientInput[] | ConsultationUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: ConsultationCreateOrConnectWithoutPatientInput | ConsultationCreateOrConnectWithoutPatientInput[]
    upsert?: ConsultationUpsertWithWhereUniqueWithoutPatientInput | ConsultationUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: ConsultationCreateManyPatientInputEnvelope
    set?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    disconnect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    delete?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    connect?: ConsultationWhereUniqueInput | ConsultationWhereUniqueInput[]
    update?: ConsultationUpdateWithWhereUniqueWithoutPatientInput | ConsultationUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: ConsultationUpdateManyWithWhereWithoutPatientInput | ConsultationUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
  }

  export type MedicamentCreatesideEffectsInput = {
    set: string[]
  }

  export type MedicamentCreatecontraindicationsInput = {
    set: string[]
  }

  export type MedicamentCreateinteractionsInput = {
    set: string[]
  }

  export type PrescriptionCreateNestedManyWithoutMedicamentsInput = {
    create?: XOR<PrescriptionCreateWithoutMedicamentsInput, PrescriptionUncheckedCreateWithoutMedicamentsInput> | PrescriptionCreateWithoutMedicamentsInput[] | PrescriptionUncheckedCreateWithoutMedicamentsInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicamentsInput | PrescriptionCreateOrConnectWithoutMedicamentsInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionLineCreateNestedManyWithoutMedicamentInput = {
    create?: XOR<PrescriptionLineCreateWithoutMedicamentInput, PrescriptionLineUncheckedCreateWithoutMedicamentInput> | PrescriptionLineCreateWithoutMedicamentInput[] | PrescriptionLineUncheckedCreateWithoutMedicamentInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutMedicamentInput | PrescriptionLineCreateOrConnectWithoutMedicamentInput[]
    createMany?: PrescriptionLineCreateManyMedicamentInputEnvelope
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutMedicamentsInput = {
    create?: XOR<PrescriptionCreateWithoutMedicamentsInput, PrescriptionUncheckedCreateWithoutMedicamentsInput> | PrescriptionCreateWithoutMedicamentsInput[] | PrescriptionUncheckedCreateWithoutMedicamentsInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicamentsInput | PrescriptionCreateOrConnectWithoutMedicamentsInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type PrescriptionLineUncheckedCreateNestedManyWithoutMedicamentInput = {
    create?: XOR<PrescriptionLineCreateWithoutMedicamentInput, PrescriptionLineUncheckedCreateWithoutMedicamentInput> | PrescriptionLineCreateWithoutMedicamentInput[] | PrescriptionLineUncheckedCreateWithoutMedicamentInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutMedicamentInput | PrescriptionLineCreateOrConnectWithoutMedicamentInput[]
    createMany?: PrescriptionLineCreateManyMedicamentInputEnvelope
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
  }

  export type MedicamentUpdatesideEffectsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicamentUpdatecontraindicationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MedicamentUpdateinteractionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUnitFieldUpdateOperationsInput = {
    set?: $Enums.Unit
  }

  export type PrescriptionUpdateManyWithoutMedicamentsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicamentsInput, PrescriptionUncheckedCreateWithoutMedicamentsInput> | PrescriptionCreateWithoutMedicamentsInput[] | PrescriptionUncheckedCreateWithoutMedicamentsInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicamentsInput | PrescriptionCreateOrConnectWithoutMedicamentsInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicamentsInput | PrescriptionUpsertWithWhereUniqueWithoutMedicamentsInput[]
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicamentsInput | PrescriptionUpdateWithWhereUniqueWithoutMedicamentsInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicamentsInput | PrescriptionUpdateManyWithWhereWithoutMedicamentsInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionLineUpdateManyWithoutMedicamentNestedInput = {
    create?: XOR<PrescriptionLineCreateWithoutMedicamentInput, PrescriptionLineUncheckedCreateWithoutMedicamentInput> | PrescriptionLineCreateWithoutMedicamentInput[] | PrescriptionLineUncheckedCreateWithoutMedicamentInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutMedicamentInput | PrescriptionLineCreateOrConnectWithoutMedicamentInput[]
    upsert?: PrescriptionLineUpsertWithWhereUniqueWithoutMedicamentInput | PrescriptionLineUpsertWithWhereUniqueWithoutMedicamentInput[]
    createMany?: PrescriptionLineCreateManyMedicamentInputEnvelope
    set?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    disconnect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    delete?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    update?: PrescriptionLineUpdateWithWhereUniqueWithoutMedicamentInput | PrescriptionLineUpdateWithWhereUniqueWithoutMedicamentInput[]
    updateMany?: PrescriptionLineUpdateManyWithWhereWithoutMedicamentInput | PrescriptionLineUpdateManyWithWhereWithoutMedicamentInput[]
    deleteMany?: PrescriptionLineScalarWhereInput | PrescriptionLineScalarWhereInput[]
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicamentsNestedInput = {
    create?: XOR<PrescriptionCreateWithoutMedicamentsInput, PrescriptionUncheckedCreateWithoutMedicamentsInput> | PrescriptionCreateWithoutMedicamentsInput[] | PrescriptionUncheckedCreateWithoutMedicamentsInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutMedicamentsInput | PrescriptionCreateOrConnectWithoutMedicamentsInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutMedicamentsInput | PrescriptionUpsertWithWhereUniqueWithoutMedicamentsInput[]
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutMedicamentsInput | PrescriptionUpdateWithWhereUniqueWithoutMedicamentsInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutMedicamentsInput | PrescriptionUpdateManyWithWhereWithoutMedicamentsInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type PrescriptionLineUncheckedUpdateManyWithoutMedicamentNestedInput = {
    create?: XOR<PrescriptionLineCreateWithoutMedicamentInput, PrescriptionLineUncheckedCreateWithoutMedicamentInput> | PrescriptionLineCreateWithoutMedicamentInput[] | PrescriptionLineUncheckedCreateWithoutMedicamentInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutMedicamentInput | PrescriptionLineCreateOrConnectWithoutMedicamentInput[]
    upsert?: PrescriptionLineUpsertWithWhereUniqueWithoutMedicamentInput | PrescriptionLineUpsertWithWhereUniqueWithoutMedicamentInput[]
    createMany?: PrescriptionLineCreateManyMedicamentInputEnvelope
    set?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    disconnect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    delete?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    update?: PrescriptionLineUpdateWithWhereUniqueWithoutMedicamentInput | PrescriptionLineUpdateWithWhereUniqueWithoutMedicamentInput[]
    updateMany?: PrescriptionLineUpdateManyWithWhereWithoutMedicamentInput | PrescriptionLineUpdateManyWithWhereWithoutMedicamentInput[]
    deleteMany?: PrescriptionLineScalarWhereInput | PrescriptionLineScalarWhereInput[]
  }

  export type MedicamentCreateNestedManyWithoutPrescriptionsInput = {
    create?: XOR<MedicamentCreateWithoutPrescriptionsInput, MedicamentUncheckedCreateWithoutPrescriptionsInput> | MedicamentCreateWithoutPrescriptionsInput[] | MedicamentUncheckedCreateWithoutPrescriptionsInput[]
    connectOrCreate?: MedicamentCreateOrConnectWithoutPrescriptionsInput | MedicamentCreateOrConnectWithoutPrescriptionsInput[]
    connect?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
  }

  export type ConsultationCreateNestedOneWithoutPrescriptionInput = {
    create?: XOR<ConsultationCreateWithoutPrescriptionInput, ConsultationUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: ConsultationCreateOrConnectWithoutPrescriptionInput
    connect?: ConsultationWhereUniqueInput
  }

  export type PrescriptionLineCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionLineCreateWithoutPrescriptionInput, PrescriptionLineUncheckedCreateWithoutPrescriptionInput> | PrescriptionLineCreateWithoutPrescriptionInput[] | PrescriptionLineUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutPrescriptionInput | PrescriptionLineCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionLineCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
  }

  export type MedicamentUncheckedCreateNestedManyWithoutPrescriptionsInput = {
    create?: XOR<MedicamentCreateWithoutPrescriptionsInput, MedicamentUncheckedCreateWithoutPrescriptionsInput> | MedicamentCreateWithoutPrescriptionsInput[] | MedicamentUncheckedCreateWithoutPrescriptionsInput[]
    connectOrCreate?: MedicamentCreateOrConnectWithoutPrescriptionsInput | MedicamentCreateOrConnectWithoutPrescriptionsInput[]
    connect?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
  }

  export type PrescriptionLineUncheckedCreateNestedManyWithoutPrescriptionInput = {
    create?: XOR<PrescriptionLineCreateWithoutPrescriptionInput, PrescriptionLineUncheckedCreateWithoutPrescriptionInput> | PrescriptionLineCreateWithoutPrescriptionInput[] | PrescriptionLineUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutPrescriptionInput | PrescriptionLineCreateOrConnectWithoutPrescriptionInput[]
    createMany?: PrescriptionLineCreateManyPrescriptionInputEnvelope
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
  }

  export type MedicamentUpdateManyWithoutPrescriptionsNestedInput = {
    create?: XOR<MedicamentCreateWithoutPrescriptionsInput, MedicamentUncheckedCreateWithoutPrescriptionsInput> | MedicamentCreateWithoutPrescriptionsInput[] | MedicamentUncheckedCreateWithoutPrescriptionsInput[]
    connectOrCreate?: MedicamentCreateOrConnectWithoutPrescriptionsInput | MedicamentCreateOrConnectWithoutPrescriptionsInput[]
    upsert?: MedicamentUpsertWithWhereUniqueWithoutPrescriptionsInput | MedicamentUpsertWithWhereUniqueWithoutPrescriptionsInput[]
    set?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    disconnect?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    delete?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    connect?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    update?: MedicamentUpdateWithWhereUniqueWithoutPrescriptionsInput | MedicamentUpdateWithWhereUniqueWithoutPrescriptionsInput[]
    updateMany?: MedicamentUpdateManyWithWhereWithoutPrescriptionsInput | MedicamentUpdateManyWithWhereWithoutPrescriptionsInput[]
    deleteMany?: MedicamentScalarWhereInput | MedicamentScalarWhereInput[]
  }

  export type ConsultationUpdateOneWithoutPrescriptionNestedInput = {
    create?: XOR<ConsultationCreateWithoutPrescriptionInput, ConsultationUncheckedCreateWithoutPrescriptionInput>
    connectOrCreate?: ConsultationCreateOrConnectWithoutPrescriptionInput
    upsert?: ConsultationUpsertWithoutPrescriptionInput
    disconnect?: ConsultationWhereInput | boolean
    delete?: ConsultationWhereInput | boolean
    connect?: ConsultationWhereUniqueInput
    update?: XOR<XOR<ConsultationUpdateToOneWithWhereWithoutPrescriptionInput, ConsultationUpdateWithoutPrescriptionInput>, ConsultationUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionLineUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionLineCreateWithoutPrescriptionInput, PrescriptionLineUncheckedCreateWithoutPrescriptionInput> | PrescriptionLineCreateWithoutPrescriptionInput[] | PrescriptionLineUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutPrescriptionInput | PrescriptionLineCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionLineUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionLineUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionLineCreateManyPrescriptionInputEnvelope
    set?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    disconnect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    delete?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    update?: PrescriptionLineUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionLineUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionLineUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionLineUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionLineScalarWhereInput | PrescriptionLineScalarWhereInput[]
  }

  export type MedicamentUncheckedUpdateManyWithoutPrescriptionsNestedInput = {
    create?: XOR<MedicamentCreateWithoutPrescriptionsInput, MedicamentUncheckedCreateWithoutPrescriptionsInput> | MedicamentCreateWithoutPrescriptionsInput[] | MedicamentUncheckedCreateWithoutPrescriptionsInput[]
    connectOrCreate?: MedicamentCreateOrConnectWithoutPrescriptionsInput | MedicamentCreateOrConnectWithoutPrescriptionsInput[]
    upsert?: MedicamentUpsertWithWhereUniqueWithoutPrescriptionsInput | MedicamentUpsertWithWhereUniqueWithoutPrescriptionsInput[]
    set?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    disconnect?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    delete?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    connect?: MedicamentWhereUniqueInput | MedicamentWhereUniqueInput[]
    update?: MedicamentUpdateWithWhereUniqueWithoutPrescriptionsInput | MedicamentUpdateWithWhereUniqueWithoutPrescriptionsInput[]
    updateMany?: MedicamentUpdateManyWithWhereWithoutPrescriptionsInput | MedicamentUpdateManyWithWhereWithoutPrescriptionsInput[]
    deleteMany?: MedicamentScalarWhereInput | MedicamentScalarWhereInput[]
  }

  export type PrescriptionLineUncheckedUpdateManyWithoutPrescriptionNestedInput = {
    create?: XOR<PrescriptionLineCreateWithoutPrescriptionInput, PrescriptionLineUncheckedCreateWithoutPrescriptionInput> | PrescriptionLineCreateWithoutPrescriptionInput[] | PrescriptionLineUncheckedCreateWithoutPrescriptionInput[]
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutPrescriptionInput | PrescriptionLineCreateOrConnectWithoutPrescriptionInput[]
    upsert?: PrescriptionLineUpsertWithWhereUniqueWithoutPrescriptionInput | PrescriptionLineUpsertWithWhereUniqueWithoutPrescriptionInput[]
    createMany?: PrescriptionLineCreateManyPrescriptionInputEnvelope
    set?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    disconnect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    delete?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    connect?: PrescriptionLineWhereUniqueInput | PrescriptionLineWhereUniqueInput[]
    update?: PrescriptionLineUpdateWithWhereUniqueWithoutPrescriptionInput | PrescriptionLineUpdateWithWhereUniqueWithoutPrescriptionInput[]
    updateMany?: PrescriptionLineUpdateManyWithWhereWithoutPrescriptionInput | PrescriptionLineUpdateManyWithWhereWithoutPrescriptionInput[]
    deleteMany?: PrescriptionLineScalarWhereInput | PrescriptionLineScalarWhereInput[]
  }

  export type PrescriptionCreateNestedOneWithoutPrescriptionLinesInput = {
    create?: XOR<PrescriptionCreateWithoutPrescriptionLinesInput, PrescriptionUncheckedCreateWithoutPrescriptionLinesInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPrescriptionLinesInput
    connect?: PrescriptionWhereUniqueInput
  }

  export type MedicamentCreateNestedOneWithoutPrescriptionLinesInput = {
    create?: XOR<MedicamentCreateWithoutPrescriptionLinesInput, MedicamentUncheckedCreateWithoutPrescriptionLinesInput>
    connectOrCreate?: MedicamentCreateOrConnectWithoutPrescriptionLinesInput
    connect?: MedicamentWhereUniqueInput
  }

  export type ReminderDataCreateNestedManyWithoutPrescriptionLineInput = {
    create?: XOR<ReminderDataCreateWithoutPrescriptionLineInput, ReminderDataUncheckedCreateWithoutPrescriptionLineInput> | ReminderDataCreateWithoutPrescriptionLineInput[] | ReminderDataUncheckedCreateWithoutPrescriptionLineInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutPrescriptionLineInput | ReminderDataCreateOrConnectWithoutPrescriptionLineInput[]
    createMany?: ReminderDataCreateManyPrescriptionLineInputEnvelope
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
  }

  export type ReminderDataUncheckedCreateNestedManyWithoutPrescriptionLineInput = {
    create?: XOR<ReminderDataCreateWithoutPrescriptionLineInput, ReminderDataUncheckedCreateWithoutPrescriptionLineInput> | ReminderDataCreateWithoutPrescriptionLineInput[] | ReminderDataUncheckedCreateWithoutPrescriptionLineInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutPrescriptionLineInput | ReminderDataCreateOrConnectWithoutPrescriptionLineInput[]
    createMany?: ReminderDataCreateManyPrescriptionLineInputEnvelope
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumFoodOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.FoodOrderType
  }

  export type PrescriptionUpdateOneRequiredWithoutPrescriptionLinesNestedInput = {
    create?: XOR<PrescriptionCreateWithoutPrescriptionLinesInput, PrescriptionUncheckedCreateWithoutPrescriptionLinesInput>
    connectOrCreate?: PrescriptionCreateOrConnectWithoutPrescriptionLinesInput
    upsert?: PrescriptionUpsertWithoutPrescriptionLinesInput
    connect?: PrescriptionWhereUniqueInput
    update?: XOR<XOR<PrescriptionUpdateToOneWithWhereWithoutPrescriptionLinesInput, PrescriptionUpdateWithoutPrescriptionLinesInput>, PrescriptionUncheckedUpdateWithoutPrescriptionLinesInput>
  }

  export type MedicamentUpdateOneRequiredWithoutPrescriptionLinesNestedInput = {
    create?: XOR<MedicamentCreateWithoutPrescriptionLinesInput, MedicamentUncheckedCreateWithoutPrescriptionLinesInput>
    connectOrCreate?: MedicamentCreateOrConnectWithoutPrescriptionLinesInput
    upsert?: MedicamentUpsertWithoutPrescriptionLinesInput
    connect?: MedicamentWhereUniqueInput
    update?: XOR<XOR<MedicamentUpdateToOneWithWhereWithoutPrescriptionLinesInput, MedicamentUpdateWithoutPrescriptionLinesInput>, MedicamentUncheckedUpdateWithoutPrescriptionLinesInput>
  }

  export type ReminderDataUpdateManyWithoutPrescriptionLineNestedInput = {
    create?: XOR<ReminderDataCreateWithoutPrescriptionLineInput, ReminderDataUncheckedCreateWithoutPrescriptionLineInput> | ReminderDataCreateWithoutPrescriptionLineInput[] | ReminderDataUncheckedCreateWithoutPrescriptionLineInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutPrescriptionLineInput | ReminderDataCreateOrConnectWithoutPrescriptionLineInput[]
    upsert?: ReminderDataUpsertWithWhereUniqueWithoutPrescriptionLineInput | ReminderDataUpsertWithWhereUniqueWithoutPrescriptionLineInput[]
    createMany?: ReminderDataCreateManyPrescriptionLineInputEnvelope
    set?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    disconnect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    delete?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    update?: ReminderDataUpdateWithWhereUniqueWithoutPrescriptionLineInput | ReminderDataUpdateWithWhereUniqueWithoutPrescriptionLineInput[]
    updateMany?: ReminderDataUpdateManyWithWhereWithoutPrescriptionLineInput | ReminderDataUpdateManyWithWhereWithoutPrescriptionLineInput[]
    deleteMany?: ReminderDataScalarWhereInput | ReminderDataScalarWhereInput[]
  }

  export type ReminderDataUncheckedUpdateManyWithoutPrescriptionLineNestedInput = {
    create?: XOR<ReminderDataCreateWithoutPrescriptionLineInput, ReminderDataUncheckedCreateWithoutPrescriptionLineInput> | ReminderDataCreateWithoutPrescriptionLineInput[] | ReminderDataUncheckedCreateWithoutPrescriptionLineInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutPrescriptionLineInput | ReminderDataCreateOrConnectWithoutPrescriptionLineInput[]
    upsert?: ReminderDataUpsertWithWhereUniqueWithoutPrescriptionLineInput | ReminderDataUpsertWithWhereUniqueWithoutPrescriptionLineInput[]
    createMany?: ReminderDataCreateManyPrescriptionLineInputEnvelope
    set?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    disconnect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    delete?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    update?: ReminderDataUpdateWithWhereUniqueWithoutPrescriptionLineInput | ReminderDataUpdateWithWhereUniqueWithoutPrescriptionLineInput[]
    updateMany?: ReminderDataUpdateManyWithWhereWithoutPrescriptionLineInput | ReminderDataUpdateManyWithWhereWithoutPrescriptionLineInput[]
    deleteMany?: ReminderDataScalarWhereInput | ReminderDataScalarWhereInput[]
  }

  export type ConsultationCreatesymptomsInput = {
    set: string[]
  }

  export type ConsultationCreatediseasesInput = {
    set: string[]
  }

  export type PrescriptionCreateNestedManyWithoutConsultationInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type DoctorCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<DoctorCreateWithoutConsultationsInput, DoctorUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutConsultationsInput
    connect?: DoctorWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutConsultationsInput = {
    create?: XOR<PatientCreateWithoutConsultationsInput, PatientUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutConsultationsInput
    connect?: PatientWhereUniqueInput
  }

  export type PrescriptionUncheckedCreateNestedManyWithoutConsultationInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
  }

  export type ConsultationUpdatesymptomsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ConsultationUpdatediseasesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PrescriptionUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutConsultationInput | PrescriptionUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutConsultationInput | PrescriptionUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutConsultationInput | PrescriptionUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type DoctorUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<DoctorCreateWithoutConsultationsInput, DoctorUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutConsultationsInput
    upsert?: DoctorUpsertWithoutConsultationsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutConsultationsInput, DoctorUpdateWithoutConsultationsInput>, DoctorUncheckedUpdateWithoutConsultationsInput>
  }

  export type PatientUpdateOneRequiredWithoutConsultationsNestedInput = {
    create?: XOR<PatientCreateWithoutConsultationsInput, PatientUncheckedCreateWithoutConsultationsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutConsultationsInput
    upsert?: PatientUpsertWithoutConsultationsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutConsultationsInput, PatientUpdateWithoutConsultationsInput>, PatientUncheckedUpdateWithoutConsultationsInput>
  }

  export type PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput = {
    create?: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput> | PrescriptionCreateWithoutConsultationInput[] | PrescriptionUncheckedCreateWithoutConsultationInput[]
    connectOrCreate?: PrescriptionCreateOrConnectWithoutConsultationInput | PrescriptionCreateOrConnectWithoutConsultationInput[]
    upsert?: PrescriptionUpsertWithWhereUniqueWithoutConsultationInput | PrescriptionUpsertWithWhereUniqueWithoutConsultationInput[]
    createMany?: PrescriptionCreateManyConsultationInputEnvelope
    set?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    disconnect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    delete?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    connect?: PrescriptionWhereUniqueInput | PrescriptionWhereUniqueInput[]
    update?: PrescriptionUpdateWithWhereUniqueWithoutConsultationInput | PrescriptionUpdateWithWhereUniqueWithoutConsultationInput[]
    updateMany?: PrescriptionUpdateManyWithWhereWithoutConsultationInput | PrescriptionUpdateManyWithWhereWithoutConsultationInput[]
    deleteMany?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
  }

  export type ReminderDataCreateNestedManyWithoutReminderInput = {
    create?: XOR<ReminderDataCreateWithoutReminderInput, ReminderDataUncheckedCreateWithoutReminderInput> | ReminderDataCreateWithoutReminderInput[] | ReminderDataUncheckedCreateWithoutReminderInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutReminderInput | ReminderDataCreateOrConnectWithoutReminderInput[]
    createMany?: ReminderDataCreateManyReminderInputEnvelope
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
  }

  export type ReminderDataUncheckedCreateNestedManyWithoutReminderInput = {
    create?: XOR<ReminderDataCreateWithoutReminderInput, ReminderDataUncheckedCreateWithoutReminderInput> | ReminderDataCreateWithoutReminderInput[] | ReminderDataUncheckedCreateWithoutReminderInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutReminderInput | ReminderDataCreateOrConnectWithoutReminderInput[]
    createMany?: ReminderDataCreateManyReminderInputEnvelope
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
  }

  export type ReminderDataUpdateManyWithoutReminderNestedInput = {
    create?: XOR<ReminderDataCreateWithoutReminderInput, ReminderDataUncheckedCreateWithoutReminderInput> | ReminderDataCreateWithoutReminderInput[] | ReminderDataUncheckedCreateWithoutReminderInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutReminderInput | ReminderDataCreateOrConnectWithoutReminderInput[]
    upsert?: ReminderDataUpsertWithWhereUniqueWithoutReminderInput | ReminderDataUpsertWithWhereUniqueWithoutReminderInput[]
    createMany?: ReminderDataCreateManyReminderInputEnvelope
    set?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    disconnect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    delete?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    update?: ReminderDataUpdateWithWhereUniqueWithoutReminderInput | ReminderDataUpdateWithWhereUniqueWithoutReminderInput[]
    updateMany?: ReminderDataUpdateManyWithWhereWithoutReminderInput | ReminderDataUpdateManyWithWhereWithoutReminderInput[]
    deleteMany?: ReminderDataScalarWhereInput | ReminderDataScalarWhereInput[]
  }

  export type ReminderDataUncheckedUpdateManyWithoutReminderNestedInput = {
    create?: XOR<ReminderDataCreateWithoutReminderInput, ReminderDataUncheckedCreateWithoutReminderInput> | ReminderDataCreateWithoutReminderInput[] | ReminderDataUncheckedCreateWithoutReminderInput[]
    connectOrCreate?: ReminderDataCreateOrConnectWithoutReminderInput | ReminderDataCreateOrConnectWithoutReminderInput[]
    upsert?: ReminderDataUpsertWithWhereUniqueWithoutReminderInput | ReminderDataUpsertWithWhereUniqueWithoutReminderInput[]
    createMany?: ReminderDataCreateManyReminderInputEnvelope
    set?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    disconnect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    delete?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    connect?: ReminderDataWhereUniqueInput | ReminderDataWhereUniqueInput[]
    update?: ReminderDataUpdateWithWhereUniqueWithoutReminderInput | ReminderDataUpdateWithWhereUniqueWithoutReminderInput[]
    updateMany?: ReminderDataUpdateManyWithWhereWithoutReminderInput | ReminderDataUpdateManyWithWhereWithoutReminderInput[]
    deleteMany?: ReminderDataScalarWhereInput | ReminderDataScalarWhereInput[]
  }

  export type ReminderCreateNestedOneWithoutReminderDataInput = {
    create?: XOR<ReminderCreateWithoutReminderDataInput, ReminderUncheckedCreateWithoutReminderDataInput>
    connectOrCreate?: ReminderCreateOrConnectWithoutReminderDataInput
    connect?: ReminderWhereUniqueInput
  }

  export type PrescriptionLineCreateNestedOneWithoutRemindersInput = {
    create?: XOR<PrescriptionLineCreateWithoutRemindersInput, PrescriptionLineUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutRemindersInput
    connect?: PrescriptionLineWhereUniqueInput
  }

  export type ReminderUpdateOneRequiredWithoutReminderDataNestedInput = {
    create?: XOR<ReminderCreateWithoutReminderDataInput, ReminderUncheckedCreateWithoutReminderDataInput>
    connectOrCreate?: ReminderCreateOrConnectWithoutReminderDataInput
    upsert?: ReminderUpsertWithoutReminderDataInput
    connect?: ReminderWhereUniqueInput
    update?: XOR<XOR<ReminderUpdateToOneWithWhereWithoutReminderDataInput, ReminderUpdateWithoutReminderDataInput>, ReminderUncheckedUpdateWithoutReminderDataInput>
  }

  export type PrescriptionLineUpdateOneRequiredWithoutRemindersNestedInput = {
    create?: XOR<PrescriptionLineCreateWithoutRemindersInput, PrescriptionLineUncheckedCreateWithoutRemindersInput>
    connectOrCreate?: PrescriptionLineCreateOrConnectWithoutRemindersInput
    upsert?: PrescriptionLineUpsertWithoutRemindersInput
    connect?: PrescriptionLineWhereUniqueInput
    update?: XOR<XOR<PrescriptionLineUpdateToOneWithWhereWithoutRemindersInput, PrescriptionLineUpdateWithoutRemindersInput>, PrescriptionLineUncheckedUpdateWithoutRemindersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
  }

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
  }

  export type NestedEnumUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitFilter<$PrismaModel> | $Enums.Unit
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Unit | EnumUnitFieldRefInput<$PrismaModel>
    in?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.Unit[] | ListEnumUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitWithAggregatesFilter<$PrismaModel> | $Enums.Unit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitFilter<$PrismaModel>
    _max?: NestedEnumUnitFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFoodOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrderType | EnumFoodOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrderTypeFilter<$PrismaModel> | $Enums.FoodOrderType
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFoodOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FoodOrderType | EnumFoodOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FoodOrderType[] | ListEnumFoodOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFoodOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.FoodOrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFoodOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumFoodOrderTypeFilter<$PrismaModel>
  }

  export type DoctorCreateWithoutUserInput = {
    specialty: string
    licenseNumber: string
    patients?: PatientCreateNestedManyWithoutDoctorsInput
    consultations?: ConsultationCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    specialty: string
    licenseNumber: string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorsInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateWithoutUserInput = {
    birthdate: Date | string
    gender: $Enums.Gender
    doctors?: DoctorCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    birthdate: Date | string
    gender: $Enums.Gender
    doctors?: DoctorUncheckedCreateNestedManyWithoutPatientsInput
    consultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    patients?: PatientUpdateManyWithoutDoctorsNestedInput
    consultations?: ConsultationUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorsNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type PatientUpsertWithoutUserInput = {
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutUserInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateWithoutUserInput = {
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    doctors?: DoctorUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    doctors?: DoctorUncheckedUpdateManyWithoutPatientsNestedInput
    consultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutDoctorInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDoctorInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDoctorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
  }

  export type PatientCreateWithoutDoctorsInput = {
    birthdate: Date | string
    gender: $Enums.Gender
    user?: UserCreateNestedOneWithoutPatientInput
    consultations?: ConsultationCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDoctorsInput = {
    id: string
    birthdate: Date | string
    gender: $Enums.Gender
    consultations?: ConsultationUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDoctorsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDoctorsInput, PatientUncheckedCreateWithoutDoctorsInput>
  }

  export type ConsultationCreateWithoutDoctorInput = {
    id?: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    prescription?: PrescriptionCreateNestedManyWithoutConsultationInput
    patient: PatientCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateWithoutDoctorInput = {
    id?: string
    patientId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationCreateOrConnectWithoutDoctorInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutDoctorInput, ConsultationUncheckedCreateWithoutDoctorInput>
  }

  export type ConsultationCreateManyDoctorInputEnvelope = {
    data: ConsultationCreateManyDoctorInput | ConsultationCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDoctorInput = {
    update: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
    create: XOR<UserCreateWithoutDoctorInput, UserUncheckedCreateWithoutDoctorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDoctorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDoctorInput, UserUncheckedUpdateWithoutDoctorInput>
  }

  export type UserUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUncheckedUpdateOneWithoutUserNestedInput
  }

  export type PatientUpsertWithWhereUniqueWithoutDoctorsInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutDoctorsInput, PatientUncheckedUpdateWithoutDoctorsInput>
    create: XOR<PatientCreateWithoutDoctorsInput, PatientUncheckedCreateWithoutDoctorsInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutDoctorsInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutDoctorsInput, PatientUncheckedUpdateWithoutDoctorsInput>
  }

  export type PatientUpdateManyWithWhereWithoutDoctorsInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutDoctorsInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    birthdate?: DateTimeFilter<"Patient"> | Date | string
    gender?: EnumGenderFilter<"Patient"> | $Enums.Gender
  }

  export type ConsultationUpsertWithWhereUniqueWithoutDoctorInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutDoctorInput, ConsultationUncheckedUpdateWithoutDoctorInput>
    create: XOR<ConsultationCreateWithoutDoctorInput, ConsultationUncheckedCreateWithoutDoctorInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutDoctorInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutDoctorInput, ConsultationUncheckedUpdateWithoutDoctorInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutDoctorInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutDoctorInput>
  }

  export type ConsultationScalarWhereInput = {
    AND?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    OR?: ConsultationScalarWhereInput[]
    NOT?: ConsultationScalarWhereInput | ConsultationScalarWhereInput[]
    id?: StringFilter<"Consultation"> | string
    doctorId?: StringFilter<"Consultation"> | string
    patientId?: StringFilter<"Consultation"> | string
    date?: DateTimeFilter<"Consultation"> | Date | string
    symptoms?: StringNullableListFilter<"Consultation">
    diseases?: StringNullableListFilter<"Consultation">
  }

  export type UserCreateWithoutPatientInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatientInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    address?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doctor?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatientInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
  }

  export type DoctorCreateWithoutPatientsInput = {
    specialty: string
    licenseNumber: string
    user?: UserCreateNestedOneWithoutDoctorInput
    consultations?: ConsultationCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutPatientsInput = {
    id: string
    specialty: string
    licenseNumber: string
    consultations?: ConsultationUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutPatientsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput>
  }

  export type ConsultationCreateWithoutPatientInput = {
    id?: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    prescription?: PrescriptionCreateNestedManyWithoutConsultationInput
    doctor: DoctorCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateWithoutPatientInput = {
    id?: string
    doctorId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    prescription?: PrescriptionUncheckedCreateNestedManyWithoutConsultationInput
  }

  export type ConsultationCreateOrConnectWithoutPatientInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput>
  }

  export type ConsultationCreateManyPatientInputEnvelope = {
    data: ConsultationCreateManyPatientInput | ConsultationCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPatientInput = {
    update: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
    create: XOR<UserCreateWithoutPatientInput, UserUncheckedCreateWithoutPatientInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientInput, UserUncheckedUpdateWithoutPatientInput>
  }

  export type UserUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type DoctorUpsertWithWhereUniqueWithoutPatientsInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutPatientsInput, DoctorUncheckedUpdateWithoutPatientsInput>
    create: XOR<DoctorCreateWithoutPatientsInput, DoctorUncheckedCreateWithoutPatientsInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutPatientsInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutPatientsInput, DoctorUncheckedUpdateWithoutPatientsInput>
  }

  export type DoctorUpdateManyWithWhereWithoutPatientsInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutPatientsInput>
  }

  export type DoctorScalarWhereInput = {
    AND?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    OR?: DoctorScalarWhereInput[]
    NOT?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    id?: StringFilter<"Doctor"> | string
    specialty?: StringFilter<"Doctor"> | string
    licenseNumber?: StringFilter<"Doctor"> | string
  }

  export type ConsultationUpsertWithWhereUniqueWithoutPatientInput = {
    where: ConsultationWhereUniqueInput
    update: XOR<ConsultationUpdateWithoutPatientInput, ConsultationUncheckedUpdateWithoutPatientInput>
    create: XOR<ConsultationCreateWithoutPatientInput, ConsultationUncheckedCreateWithoutPatientInput>
  }

  export type ConsultationUpdateWithWhereUniqueWithoutPatientInput = {
    where: ConsultationWhereUniqueInput
    data: XOR<ConsultationUpdateWithoutPatientInput, ConsultationUncheckedUpdateWithoutPatientInput>
  }

  export type ConsultationUpdateManyWithWhereWithoutPatientInput = {
    where: ConsultationScalarWhereInput
    data: XOR<ConsultationUpdateManyMutationInput, ConsultationUncheckedUpdateManyWithoutPatientInput>
  }

  export type PrescriptionCreateWithoutMedicamentsInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    consultation?: ConsultationCreateNestedOneWithoutPrescriptionInput
    prescriptionLines?: PrescriptionLineCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutMedicamentsInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    consultationId?: string | null
    prescriptionLines?: PrescriptionLineUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutMedicamentsInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutMedicamentsInput, PrescriptionUncheckedCreateWithoutMedicamentsInput>
  }

  export type PrescriptionLineCreateWithoutMedicamentInput = {
    id?: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    prescription: PrescriptionCreateNestedOneWithoutPrescriptionLinesInput
    reminders?: ReminderDataCreateNestedManyWithoutPrescriptionLineInput
  }

  export type PrescriptionLineUncheckedCreateWithoutMedicamentInput = {
    id?: string
    prescriptionId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    reminders?: ReminderDataUncheckedCreateNestedManyWithoutPrescriptionLineInput
  }

  export type PrescriptionLineCreateOrConnectWithoutMedicamentInput = {
    where: PrescriptionLineWhereUniqueInput
    create: XOR<PrescriptionLineCreateWithoutMedicamentInput, PrescriptionLineUncheckedCreateWithoutMedicamentInput>
  }

  export type PrescriptionLineCreateManyMedicamentInputEnvelope = {
    data: PrescriptionLineCreateManyMedicamentInput | PrescriptionLineCreateManyMedicamentInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutMedicamentsInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutMedicamentsInput, PrescriptionUncheckedUpdateWithoutMedicamentsInput>
    create: XOR<PrescriptionCreateWithoutMedicamentsInput, PrescriptionUncheckedCreateWithoutMedicamentsInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutMedicamentsInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutMedicamentsInput, PrescriptionUncheckedUpdateWithoutMedicamentsInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutMedicamentsInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutMedicamentsInput>
  }

  export type PrescriptionScalarWhereInput = {
    AND?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    OR?: PrescriptionScalarWhereInput[]
    NOT?: PrescriptionScalarWhereInput | PrescriptionScalarWhereInput[]
    id?: StringFilter<"Prescription"> | string
    doctorId?: StringFilter<"Prescription"> | string
    patientId?: StringFilter<"Prescription"> | string
    date?: DateTimeFilter<"Prescription"> | Date | string
    dosage?: StringFilter<"Prescription"> | string
    duration?: StringFilter<"Prescription"> | string
    consultationId?: StringNullableFilter<"Prescription"> | string | null
  }

  export type PrescriptionLineUpsertWithWhereUniqueWithoutMedicamentInput = {
    where: PrescriptionLineWhereUniqueInput
    update: XOR<PrescriptionLineUpdateWithoutMedicamentInput, PrescriptionLineUncheckedUpdateWithoutMedicamentInput>
    create: XOR<PrescriptionLineCreateWithoutMedicamentInput, PrescriptionLineUncheckedCreateWithoutMedicamentInput>
  }

  export type PrescriptionLineUpdateWithWhereUniqueWithoutMedicamentInput = {
    where: PrescriptionLineWhereUniqueInput
    data: XOR<PrescriptionLineUpdateWithoutMedicamentInput, PrescriptionLineUncheckedUpdateWithoutMedicamentInput>
  }

  export type PrescriptionLineUpdateManyWithWhereWithoutMedicamentInput = {
    where: PrescriptionLineScalarWhereInput
    data: XOR<PrescriptionLineUpdateManyMutationInput, PrescriptionLineUncheckedUpdateManyWithoutMedicamentInput>
  }

  export type PrescriptionLineScalarWhereInput = {
    AND?: PrescriptionLineScalarWhereInput | PrescriptionLineScalarWhereInput[]
    OR?: PrescriptionLineScalarWhereInput[]
    NOT?: PrescriptionLineScalarWhereInput | PrescriptionLineScalarWhereInput[]
    id?: StringFilter<"PrescriptionLine"> | string
    prescriptionId?: StringFilter<"PrescriptionLine"> | string
    medicamentId?: StringFilter<"PrescriptionLine"> | string
    dosage?: IntFilter<"PrescriptionLine"> | number
    duration?: StringFilter<"PrescriptionLine"> | string
    morning?: BoolFilter<"PrescriptionLine"> | boolean
    afternoon?: BoolFilter<"PrescriptionLine"> | boolean
    evening?: BoolFilter<"PrescriptionLine"> | boolean
    night?: BoolFilter<"PrescriptionLine"> | boolean
    foodOrder?: EnumFoodOrderTypeFilter<"PrescriptionLine"> | $Enums.FoodOrderType
  }

  export type MedicamentCreateWithoutPrescriptionsInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
    prescriptionLines?: PrescriptionLineCreateNestedManyWithoutMedicamentInput
  }

  export type MedicamentUncheckedCreateWithoutPrescriptionsInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
    prescriptionLines?: PrescriptionLineUncheckedCreateNestedManyWithoutMedicamentInput
  }

  export type MedicamentCreateOrConnectWithoutPrescriptionsInput = {
    where: MedicamentWhereUniqueInput
    create: XOR<MedicamentCreateWithoutPrescriptionsInput, MedicamentUncheckedCreateWithoutPrescriptionsInput>
  }

  export type ConsultationCreateWithoutPrescriptionInput = {
    id?: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
    doctor: DoctorCreateNestedOneWithoutConsultationsInput
    patient: PatientCreateNestedOneWithoutConsultationsInput
  }

  export type ConsultationUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
  }

  export type ConsultationCreateOrConnectWithoutPrescriptionInput = {
    where: ConsultationWhereUniqueInput
    create: XOR<ConsultationCreateWithoutPrescriptionInput, ConsultationUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionLineCreateWithoutPrescriptionInput = {
    id?: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    medicament: MedicamentCreateNestedOneWithoutPrescriptionLinesInput
    reminders?: ReminderDataCreateNestedManyWithoutPrescriptionLineInput
  }

  export type PrescriptionLineUncheckedCreateWithoutPrescriptionInput = {
    id?: string
    medicamentId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    reminders?: ReminderDataUncheckedCreateNestedManyWithoutPrescriptionLineInput
  }

  export type PrescriptionLineCreateOrConnectWithoutPrescriptionInput = {
    where: PrescriptionLineWhereUniqueInput
    create: XOR<PrescriptionLineCreateWithoutPrescriptionInput, PrescriptionLineUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionLineCreateManyPrescriptionInputEnvelope = {
    data: PrescriptionLineCreateManyPrescriptionInput | PrescriptionLineCreateManyPrescriptionInput[]
    skipDuplicates?: boolean
  }

  export type MedicamentUpsertWithWhereUniqueWithoutPrescriptionsInput = {
    where: MedicamentWhereUniqueInput
    update: XOR<MedicamentUpdateWithoutPrescriptionsInput, MedicamentUncheckedUpdateWithoutPrescriptionsInput>
    create: XOR<MedicamentCreateWithoutPrescriptionsInput, MedicamentUncheckedCreateWithoutPrescriptionsInput>
  }

  export type MedicamentUpdateWithWhereUniqueWithoutPrescriptionsInput = {
    where: MedicamentWhereUniqueInput
    data: XOR<MedicamentUpdateWithoutPrescriptionsInput, MedicamentUncheckedUpdateWithoutPrescriptionsInput>
  }

  export type MedicamentUpdateManyWithWhereWithoutPrescriptionsInput = {
    where: MedicamentScalarWhereInput
    data: XOR<MedicamentUpdateManyMutationInput, MedicamentUncheckedUpdateManyWithoutPrescriptionsInput>
  }

  export type MedicamentScalarWhereInput = {
    AND?: MedicamentScalarWhereInput | MedicamentScalarWhereInput[]
    OR?: MedicamentScalarWhereInput[]
    NOT?: MedicamentScalarWhereInput | MedicamentScalarWhereInput[]
    id?: StringFilter<"Medicament"> | string
    code?: StringFilter<"Medicament"> | string
    name?: StringFilter<"Medicament"> | string
    description?: StringFilter<"Medicament"> | string
    sideEffects?: StringNullableListFilter<"Medicament">
    contraindications?: StringNullableListFilter<"Medicament">
    interactions?: StringNullableListFilter<"Medicament">
    quantityPerPack?: IntFilter<"Medicament"> | number
    unit?: EnumUnitFilter<"Medicament"> | $Enums.Unit
  }

  export type ConsultationUpsertWithoutPrescriptionInput = {
    update: XOR<ConsultationUpdateWithoutPrescriptionInput, ConsultationUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<ConsultationCreateWithoutPrescriptionInput, ConsultationUncheckedCreateWithoutPrescriptionInput>
    where?: ConsultationWhereInput
  }

  export type ConsultationUpdateToOneWithWhereWithoutPrescriptionInput = {
    where?: ConsultationWhereInput
    data: XOR<ConsultationUpdateWithoutPrescriptionInput, ConsultationUncheckedUpdateWithoutPrescriptionInput>
  }

  export type ConsultationUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    doctor?: DoctorUpdateOneRequiredWithoutConsultationsNestedInput
    patient?: PatientUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
  }

  export type PrescriptionLineUpsertWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionLineWhereUniqueInput
    update: XOR<PrescriptionLineUpdateWithoutPrescriptionInput, PrescriptionLineUncheckedUpdateWithoutPrescriptionInput>
    create: XOR<PrescriptionLineCreateWithoutPrescriptionInput, PrescriptionLineUncheckedCreateWithoutPrescriptionInput>
  }

  export type PrescriptionLineUpdateWithWhereUniqueWithoutPrescriptionInput = {
    where: PrescriptionLineWhereUniqueInput
    data: XOR<PrescriptionLineUpdateWithoutPrescriptionInput, PrescriptionLineUncheckedUpdateWithoutPrescriptionInput>
  }

  export type PrescriptionLineUpdateManyWithWhereWithoutPrescriptionInput = {
    where: PrescriptionLineScalarWhereInput
    data: XOR<PrescriptionLineUpdateManyMutationInput, PrescriptionLineUncheckedUpdateManyWithoutPrescriptionInput>
  }

  export type PrescriptionCreateWithoutPrescriptionLinesInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    medicaments?: MedicamentCreateNestedManyWithoutPrescriptionsInput
    consultation?: ConsultationCreateNestedOneWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutPrescriptionLinesInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    consultationId?: string | null
    medicaments?: MedicamentUncheckedCreateNestedManyWithoutPrescriptionsInput
  }

  export type PrescriptionCreateOrConnectWithoutPrescriptionLinesInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutPrescriptionLinesInput, PrescriptionUncheckedCreateWithoutPrescriptionLinesInput>
  }

  export type MedicamentCreateWithoutPrescriptionLinesInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
    prescriptions?: PrescriptionCreateNestedManyWithoutMedicamentsInput
  }

  export type MedicamentUncheckedCreateWithoutPrescriptionLinesInput = {
    id?: string
    code: string
    name: string
    description: string
    sideEffects?: MedicamentCreatesideEffectsInput | string[]
    contraindications?: MedicamentCreatecontraindicationsInput | string[]
    interactions?: MedicamentCreateinteractionsInput | string[]
    quantityPerPack: number
    unit: $Enums.Unit
    prescriptions?: PrescriptionUncheckedCreateNestedManyWithoutMedicamentsInput
  }

  export type MedicamentCreateOrConnectWithoutPrescriptionLinesInput = {
    where: MedicamentWhereUniqueInput
    create: XOR<MedicamentCreateWithoutPrescriptionLinesInput, MedicamentUncheckedCreateWithoutPrescriptionLinesInput>
  }

  export type ReminderDataCreateWithoutPrescriptionLineInput = {
    id?: string
    taken: boolean
    reminder: ReminderCreateNestedOneWithoutReminderDataInput
  }

  export type ReminderDataUncheckedCreateWithoutPrescriptionLineInput = {
    id?: string
    reminderId: string
    taken: boolean
  }

  export type ReminderDataCreateOrConnectWithoutPrescriptionLineInput = {
    where: ReminderDataWhereUniqueInput
    create: XOR<ReminderDataCreateWithoutPrescriptionLineInput, ReminderDataUncheckedCreateWithoutPrescriptionLineInput>
  }

  export type ReminderDataCreateManyPrescriptionLineInputEnvelope = {
    data: ReminderDataCreateManyPrescriptionLineInput | ReminderDataCreateManyPrescriptionLineInput[]
    skipDuplicates?: boolean
  }

  export type PrescriptionUpsertWithoutPrescriptionLinesInput = {
    update: XOR<PrescriptionUpdateWithoutPrescriptionLinesInput, PrescriptionUncheckedUpdateWithoutPrescriptionLinesInput>
    create: XOR<PrescriptionCreateWithoutPrescriptionLinesInput, PrescriptionUncheckedCreateWithoutPrescriptionLinesInput>
    where?: PrescriptionWhereInput
  }

  export type PrescriptionUpdateToOneWithWhereWithoutPrescriptionLinesInput = {
    where?: PrescriptionWhereInput
    data: XOR<PrescriptionUpdateWithoutPrescriptionLinesInput, PrescriptionUncheckedUpdateWithoutPrescriptionLinesInput>
  }

  export type PrescriptionUpdateWithoutPrescriptionLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    medicaments?: MedicamentUpdateManyWithoutPrescriptionsNestedInput
    consultation?: ConsultationUpdateOneWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutPrescriptionLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
    medicaments?: MedicamentUncheckedUpdateManyWithoutPrescriptionsNestedInput
  }

  export type MedicamentUpsertWithoutPrescriptionLinesInput = {
    update: XOR<MedicamentUpdateWithoutPrescriptionLinesInput, MedicamentUncheckedUpdateWithoutPrescriptionLinesInput>
    create: XOR<MedicamentCreateWithoutPrescriptionLinesInput, MedicamentUncheckedCreateWithoutPrescriptionLinesInput>
    where?: MedicamentWhereInput
  }

  export type MedicamentUpdateToOneWithWhereWithoutPrescriptionLinesInput = {
    where?: MedicamentWhereInput
    data: XOR<MedicamentUpdateWithoutPrescriptionLinesInput, MedicamentUncheckedUpdateWithoutPrescriptionLinesInput>
  }

  export type MedicamentUpdateWithoutPrescriptionLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    prescriptions?: PrescriptionUpdateManyWithoutMedicamentsNestedInput
  }

  export type MedicamentUncheckedUpdateWithoutPrescriptionLinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    prescriptions?: PrescriptionUncheckedUpdateManyWithoutMedicamentsNestedInput
  }

  export type ReminderDataUpsertWithWhereUniqueWithoutPrescriptionLineInput = {
    where: ReminderDataWhereUniqueInput
    update: XOR<ReminderDataUpdateWithoutPrescriptionLineInput, ReminderDataUncheckedUpdateWithoutPrescriptionLineInput>
    create: XOR<ReminderDataCreateWithoutPrescriptionLineInput, ReminderDataUncheckedCreateWithoutPrescriptionLineInput>
  }

  export type ReminderDataUpdateWithWhereUniqueWithoutPrescriptionLineInput = {
    where: ReminderDataWhereUniqueInput
    data: XOR<ReminderDataUpdateWithoutPrescriptionLineInput, ReminderDataUncheckedUpdateWithoutPrescriptionLineInput>
  }

  export type ReminderDataUpdateManyWithWhereWithoutPrescriptionLineInput = {
    where: ReminderDataScalarWhereInput
    data: XOR<ReminderDataUpdateManyMutationInput, ReminderDataUncheckedUpdateManyWithoutPrescriptionLineInput>
  }

  export type ReminderDataScalarWhereInput = {
    AND?: ReminderDataScalarWhereInput | ReminderDataScalarWhereInput[]
    OR?: ReminderDataScalarWhereInput[]
    NOT?: ReminderDataScalarWhereInput | ReminderDataScalarWhereInput[]
    id?: StringFilter<"ReminderData"> | string
    reminderId?: StringFilter<"ReminderData"> | string
    prescriptionLineId?: StringFilter<"ReminderData"> | string
    taken?: BoolFilter<"ReminderData"> | boolean
  }

  export type PrescriptionCreateWithoutConsultationInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    medicaments?: MedicamentCreateNestedManyWithoutPrescriptionsInput
    prescriptionLines?: PrescriptionLineCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionUncheckedCreateWithoutConsultationInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
    medicaments?: MedicamentUncheckedCreateNestedManyWithoutPrescriptionsInput
    prescriptionLines?: PrescriptionLineUncheckedCreateNestedManyWithoutPrescriptionInput
  }

  export type PrescriptionCreateOrConnectWithoutConsultationInput = {
    where: PrescriptionWhereUniqueInput
    create: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput>
  }

  export type PrescriptionCreateManyConsultationInputEnvelope = {
    data: PrescriptionCreateManyConsultationInput | PrescriptionCreateManyConsultationInput[]
    skipDuplicates?: boolean
  }

  export type DoctorCreateWithoutConsultationsInput = {
    specialty: string
    licenseNumber: string
    user?: UserCreateNestedOneWithoutDoctorInput
    patients?: PatientCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorUncheckedCreateWithoutConsultationsInput = {
    id: string
    specialty: string
    licenseNumber: string
    patients?: PatientUncheckedCreateNestedManyWithoutDoctorsInput
  }

  export type DoctorCreateOrConnectWithoutConsultationsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutConsultationsInput, DoctorUncheckedCreateWithoutConsultationsInput>
  }

  export type PatientCreateWithoutConsultationsInput = {
    birthdate: Date | string
    gender: $Enums.Gender
    user?: UserCreateNestedOneWithoutPatientInput
    doctors?: DoctorCreateNestedManyWithoutPatientsInput
  }

  export type PatientUncheckedCreateWithoutConsultationsInput = {
    id: string
    birthdate: Date | string
    gender: $Enums.Gender
    doctors?: DoctorUncheckedCreateNestedManyWithoutPatientsInput
  }

  export type PatientCreateOrConnectWithoutConsultationsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutConsultationsInput, PatientUncheckedCreateWithoutConsultationsInput>
  }

  export type PrescriptionUpsertWithWhereUniqueWithoutConsultationInput = {
    where: PrescriptionWhereUniqueInput
    update: XOR<PrescriptionUpdateWithoutConsultationInput, PrescriptionUncheckedUpdateWithoutConsultationInput>
    create: XOR<PrescriptionCreateWithoutConsultationInput, PrescriptionUncheckedCreateWithoutConsultationInput>
  }

  export type PrescriptionUpdateWithWhereUniqueWithoutConsultationInput = {
    where: PrescriptionWhereUniqueInput
    data: XOR<PrescriptionUpdateWithoutConsultationInput, PrescriptionUncheckedUpdateWithoutConsultationInput>
  }

  export type PrescriptionUpdateManyWithWhereWithoutConsultationInput = {
    where: PrescriptionScalarWhereInput
    data: XOR<PrescriptionUpdateManyMutationInput, PrescriptionUncheckedUpdateManyWithoutConsultationInput>
  }

  export type DoctorUpsertWithoutConsultationsInput = {
    update: XOR<DoctorUpdateWithoutConsultationsInput, DoctorUncheckedUpdateWithoutConsultationsInput>
    create: XOR<DoctorCreateWithoutConsultationsInput, DoctorUncheckedCreateWithoutConsultationsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutConsultationsInput, DoctorUncheckedUpdateWithoutConsultationsInput>
  }

  export type DoctorUpdateWithoutConsultationsInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDoctorNestedInput
    patients?: PatientUpdateManyWithoutDoctorsNestedInput
  }

  export type DoctorUncheckedUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    patients?: PatientUncheckedUpdateManyWithoutDoctorsNestedInput
  }

  export type PatientUpsertWithoutConsultationsInput = {
    update: XOR<PatientUpdateWithoutConsultationsInput, PatientUncheckedUpdateWithoutConsultationsInput>
    create: XOR<PatientCreateWithoutConsultationsInput, PatientUncheckedCreateWithoutConsultationsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutConsultationsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutConsultationsInput, PatientUncheckedUpdateWithoutConsultationsInput>
  }

  export type PatientUpdateWithoutConsultationsInput = {
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user?: UserUpdateOneWithoutPatientNestedInput
    doctors?: DoctorUpdateManyWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutConsultationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    doctors?: DoctorUncheckedUpdateManyWithoutPatientsNestedInput
  }

  export type ReminderDataCreateWithoutReminderInput = {
    id?: string
    taken: boolean
    prescriptionLine: PrescriptionLineCreateNestedOneWithoutRemindersInput
  }

  export type ReminderDataUncheckedCreateWithoutReminderInput = {
    id?: string
    prescriptionLineId: string
    taken: boolean
  }

  export type ReminderDataCreateOrConnectWithoutReminderInput = {
    where: ReminderDataWhereUniqueInput
    create: XOR<ReminderDataCreateWithoutReminderInput, ReminderDataUncheckedCreateWithoutReminderInput>
  }

  export type ReminderDataCreateManyReminderInputEnvelope = {
    data: ReminderDataCreateManyReminderInput | ReminderDataCreateManyReminderInput[]
    skipDuplicates?: boolean
  }

  export type ReminderDataUpsertWithWhereUniqueWithoutReminderInput = {
    where: ReminderDataWhereUniqueInput
    update: XOR<ReminderDataUpdateWithoutReminderInput, ReminderDataUncheckedUpdateWithoutReminderInput>
    create: XOR<ReminderDataCreateWithoutReminderInput, ReminderDataUncheckedCreateWithoutReminderInput>
  }

  export type ReminderDataUpdateWithWhereUniqueWithoutReminderInput = {
    where: ReminderDataWhereUniqueInput
    data: XOR<ReminderDataUpdateWithoutReminderInput, ReminderDataUncheckedUpdateWithoutReminderInput>
  }

  export type ReminderDataUpdateManyWithWhereWithoutReminderInput = {
    where: ReminderDataScalarWhereInput
    data: XOR<ReminderDataUpdateManyMutationInput, ReminderDataUncheckedUpdateManyWithoutReminderInput>
  }

  export type ReminderCreateWithoutReminderDataInput = {
    id?: string
    date: Date | string
    time: Date | string
  }

  export type ReminderUncheckedCreateWithoutReminderDataInput = {
    id?: string
    date: Date | string
    time: Date | string
  }

  export type ReminderCreateOrConnectWithoutReminderDataInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutReminderDataInput, ReminderUncheckedCreateWithoutReminderDataInput>
  }

  export type PrescriptionLineCreateWithoutRemindersInput = {
    id?: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
    prescription: PrescriptionCreateNestedOneWithoutPrescriptionLinesInput
    medicament: MedicamentCreateNestedOneWithoutPrescriptionLinesInput
  }

  export type PrescriptionLineUncheckedCreateWithoutRemindersInput = {
    id?: string
    prescriptionId: string
    medicamentId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
  }

  export type PrescriptionLineCreateOrConnectWithoutRemindersInput = {
    where: PrescriptionLineWhereUniqueInput
    create: XOR<PrescriptionLineCreateWithoutRemindersInput, PrescriptionLineUncheckedCreateWithoutRemindersInput>
  }

  export type ReminderUpsertWithoutReminderDataInput = {
    update: XOR<ReminderUpdateWithoutReminderDataInput, ReminderUncheckedUpdateWithoutReminderDataInput>
    create: XOR<ReminderCreateWithoutReminderDataInput, ReminderUncheckedCreateWithoutReminderDataInput>
    where?: ReminderWhereInput
  }

  export type ReminderUpdateToOneWithWhereWithoutReminderDataInput = {
    where?: ReminderWhereInput
    data: XOR<ReminderUpdateWithoutReminderDataInput, ReminderUncheckedUpdateWithoutReminderDataInput>
  }

  export type ReminderUpdateWithoutReminderDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReminderUncheckedUpdateWithoutReminderDataInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrescriptionLineUpsertWithoutRemindersInput = {
    update: XOR<PrescriptionLineUpdateWithoutRemindersInput, PrescriptionLineUncheckedUpdateWithoutRemindersInput>
    create: XOR<PrescriptionLineCreateWithoutRemindersInput, PrescriptionLineUncheckedCreateWithoutRemindersInput>
    where?: PrescriptionLineWhereInput
  }

  export type PrescriptionLineUpdateToOneWithWhereWithoutRemindersInput = {
    where?: PrescriptionLineWhereInput
    data: XOR<PrescriptionLineUpdateWithoutRemindersInput, PrescriptionLineUncheckedUpdateWithoutRemindersInput>
  }

  export type PrescriptionLineUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    prescription?: PrescriptionUpdateOneRequiredWithoutPrescriptionLinesNestedInput
    medicament?: MedicamentUpdateOneRequiredWithoutPrescriptionLinesNestedInput
  }

  export type PrescriptionLineUncheckedUpdateWithoutRemindersInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    medicamentId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
  }

  export type ConsultationCreateManyDoctorInput = {
    id?: string
    patientId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
  }

  export type PatientUpdateWithoutDoctorsInput = {
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    user?: UserUpdateOneWithoutPatientNestedInput
    consultations?: ConsultationUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    consultations?: ConsultationUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    birthdate?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
  }

  export type ConsultationUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    prescription?: PrescriptionUpdateManyWithoutConsultationNestedInput
    patient?: PatientUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    prescription?: PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
  }

  export type ConsultationCreateManyPatientInput = {
    id?: string
    doctorId: string
    date: Date | string
    symptoms?: ConsultationCreatesymptomsInput | string[]
    diseases?: ConsultationCreatediseasesInput | string[]
  }

  export type DoctorUpdateWithoutPatientsInput = {
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutDoctorNestedInput
    consultations?: ConsultationUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    consultations?: ConsultationUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateManyWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialty?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ConsultationUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    prescription?: PrescriptionUpdateManyWithoutConsultationNestedInput
    doctor?: DoctorUpdateOneRequiredWithoutConsultationsNestedInput
  }

  export type ConsultationUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
    prescription?: PrescriptionUncheckedUpdateManyWithoutConsultationNestedInput
  }

  export type ConsultationUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    symptoms?: ConsultationUpdatesymptomsInput | string[]
    diseases?: ConsultationUpdatediseasesInput | string[]
  }

  export type PrescriptionLineCreateManyMedicamentInput = {
    id?: string
    prescriptionId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
  }

  export type PrescriptionUpdateWithoutMedicamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    consultation?: ConsultationUpdateOneWithoutPrescriptionNestedInput
    prescriptionLines?: PrescriptionLineUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutMedicamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
    prescriptionLines?: PrescriptionLineUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutMedicamentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    consultationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PrescriptionLineUpdateWithoutMedicamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    prescription?: PrescriptionUpdateOneRequiredWithoutPrescriptionLinesNestedInput
    reminders?: ReminderDataUpdateManyWithoutPrescriptionLineNestedInput
  }

  export type PrescriptionLineUncheckedUpdateWithoutMedicamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    reminders?: ReminderDataUncheckedUpdateManyWithoutPrescriptionLineNestedInput
  }

  export type PrescriptionLineUncheckedUpdateManyWithoutMedicamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
  }

  export type PrescriptionLineCreateManyPrescriptionInput = {
    id?: string
    medicamentId: string
    dosage: number
    duration: string
    morning: boolean
    afternoon: boolean
    evening: boolean
    night: boolean
    foodOrder: $Enums.FoodOrderType
  }

  export type MedicamentUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    prescriptionLines?: PrescriptionLineUpdateManyWithoutMedicamentNestedInput
  }

  export type MedicamentUncheckedUpdateWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
    prescriptionLines?: PrescriptionLineUncheckedUpdateManyWithoutMedicamentNestedInput
  }

  export type MedicamentUncheckedUpdateManyWithoutPrescriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    sideEffects?: MedicamentUpdatesideEffectsInput | string[]
    contraindications?: MedicamentUpdatecontraindicationsInput | string[]
    interactions?: MedicamentUpdateinteractionsInput | string[]
    quantityPerPack?: IntFieldUpdateOperationsInput | number
    unit?: EnumUnitFieldUpdateOperationsInput | $Enums.Unit
  }

  export type PrescriptionLineUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    medicament?: MedicamentUpdateOneRequiredWithoutPrescriptionLinesNestedInput
    reminders?: ReminderDataUpdateManyWithoutPrescriptionLineNestedInput
  }

  export type PrescriptionLineUncheckedUpdateWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicamentId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
    reminders?: ReminderDataUncheckedUpdateManyWithoutPrescriptionLineNestedInput
  }

  export type PrescriptionLineUncheckedUpdateManyWithoutPrescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicamentId?: StringFieldUpdateOperationsInput | string
    dosage?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    morning?: BoolFieldUpdateOperationsInput | boolean
    afternoon?: BoolFieldUpdateOperationsInput | boolean
    evening?: BoolFieldUpdateOperationsInput | boolean
    night?: BoolFieldUpdateOperationsInput | boolean
    foodOrder?: EnumFoodOrderTypeFieldUpdateOperationsInput | $Enums.FoodOrderType
  }

  export type ReminderDataCreateManyPrescriptionLineInput = {
    id?: string
    reminderId: string
    taken: boolean
  }

  export type ReminderDataUpdateWithoutPrescriptionLineInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    reminder?: ReminderUpdateOneRequiredWithoutReminderDataNestedInput
  }

  export type ReminderDataUncheckedUpdateWithoutPrescriptionLineInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderId?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderDataUncheckedUpdateManyWithoutPrescriptionLineInput = {
    id?: StringFieldUpdateOperationsInput | string
    reminderId?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PrescriptionCreateManyConsultationInput = {
    id?: string
    doctorId: string
    patientId: string
    date: Date | string
    dosage: string
    duration: string
  }

  export type PrescriptionUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    medicaments?: MedicamentUpdateManyWithoutPrescriptionsNestedInput
    prescriptionLines?: PrescriptionLineUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
    medicaments?: MedicamentUncheckedUpdateManyWithoutPrescriptionsNestedInput
    prescriptionLines?: PrescriptionLineUncheckedUpdateManyWithoutPrescriptionNestedInput
  }

  export type PrescriptionUncheckedUpdateManyWithoutConsultationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    dosage?: StringFieldUpdateOperationsInput | string
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderDataCreateManyReminderInput = {
    id?: string
    prescriptionLineId: string
    taken: boolean
  }

  export type ReminderDataUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    prescriptionLine?: PrescriptionLineUpdateOneRequiredWithoutRemindersNestedInput
  }

  export type ReminderDataUncheckedUpdateWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionLineId?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReminderDataUncheckedUpdateManyWithoutReminderInput = {
    id?: StringFieldUpdateOperationsInput | string
    prescriptionLineId?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}