import { gql} from "../__generated__";

export const GET_ROCKETS  = gql(/* GraphQL */ `
query Rockets {
    launchLatest {
        id
        mission_name
      }
  }
`);