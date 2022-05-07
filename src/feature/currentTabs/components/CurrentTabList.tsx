import { useEffect, useState } from 'react'
import { getCurrentTabs } from '../logic'
import { CURRENT_TAB_LIST } from '../constants/mockData'

export default function CurrentTabList() {
  const [curTabList, setCurTabList] = useState<(string | undefined)[]>([])

  useEffect(() => {
    getCurrentTabs().then((tab) => setCurTabList(tab))
  }, [])

  return (
    <div>
      {CURRENT_TAB_LIST.map((tab, index) => {
        return <p>{tab?.toString() || index}</p>
      })}
    </div>
  )
}
