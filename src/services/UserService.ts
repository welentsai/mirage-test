import * as TE from 'fp-ts/TaskEither'
import * as E from 'fp-ts/Either'
import * as t from 'io-ts'
import axios, { AxiosResponse } from 'axios'
import { pipe } from 'fp-ts/function'

//create a schema to load our user data into
const users = t.type({
    data: t.array(
      t.type({
        first_name: t.string
      })
    )
})

const httpGet = (url: string) =>
  TE.tryCatch<Error, AxiosResponse>(
    () => axios.get(url),
    (reason) => new Error(String(reason))
)

const getUser = () => pipe(
      httpGet('https://reqres.in/api/users?page=1'),
      TE.map((x) => x.data),
      TE.chain((str) =>
        pipe(
          users.decode(str),
          E.mapLeft((err) => new Error(String(err))),
          TE.fromEither
        )
      )
)



export const getUsers = pipe(
    getUser(),
    TE.map(users => users.data),
)

// getUsers()
