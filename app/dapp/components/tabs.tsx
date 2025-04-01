"use client"

import React, { useState } from "react"

interface TabProps {
  label: string
  content: React.ReactElement
}

interface TabsProps {
  children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[]
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(React.Children.toArray(children)[0]?.props?.label || "")

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div className="tabs">
      <ol className="tab-list flex border-b mb-4">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null
          }
          return <Tab activeTab={activeTab} label={child.props.label} onClick={onClickTabItem} />
        })}
      </ol>
      <div className="tab-content">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) {
            return null
          }
          if (child.props.label !== activeTab) return undefined
          return child.props.content
        })}
      </div>
    </div>
  )
}

interface TabItemProps {
  children: React.ReactNode
}

export const TabItem: React.FC<TabItemProps> = ({ children }) => {
  return <>{children}</>
}

interface TabProps {
  activeTab: string
  label: string
  onClick: (tab: string) => void
}

const Tab: React.FC<TabProps> = ({ activeTab, label, onClick }) => {
  const onClickTab = () => {
    onClick(label)
  }

  let className = "tab-list-item px-4 py-2 cursor-pointer"

  if (activeTab === label) {
    className += " border-b-2 border-blue-500 text-blue-500 font-medium"
  }

  return (
    <li className={className} onClick={onClickTab}>
      {label}
    </li>
  )
}

export default Tabs

