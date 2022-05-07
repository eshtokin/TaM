
export type Group = {
  title: string
  active: boolean
}

export type GroupStore = {
  groups: Group[]
}

export type CreateGroupPayload = {
  title: string
}