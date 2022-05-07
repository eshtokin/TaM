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

export type DeleteGroupPayload = {
  title: string
}

export type RemoveGroupPayload = {
  title: string
}