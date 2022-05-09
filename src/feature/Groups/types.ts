import { Tab } from "src/core/types"

export type Group = {
  title: string
  active: boolean
  tabs: Tab[]
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

export type SetActiveGroupPayload = {
  title: string
}
