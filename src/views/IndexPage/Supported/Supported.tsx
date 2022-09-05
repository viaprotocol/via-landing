import type { TTool } from '@/api/routerApi.types'
import { Section } from '@/components/layout'
import { Tab } from '@headlessui/react'
import clsx from 'classnames'
import { ToolsBlock } from './components'
import { useTools } from './hooks'
import styles from './Supported.module.scss'

const tabLabels = ['All', 'DEXs', 'Bridges', 'Aggregators']
function Supported() {
  const { filteredTools } = useTools()
  return (
    <Section>
      <div className="ml-2.5 mb-10 lg:ml-0">
        <h2 className="mb-3 text-[36px] font-semibold leading-[44px] lg:mb-6 lg:text-[48px] lg:leading-[56px]">Supported Bridges, DEXs, Aggregators</h2>
        <p className="max-w-[940px] text-[24px] leading-[32px] text-white/40 lg:text-[32px] lg:leading-[40px]">All popular bridges and aggregators in one interface</p>
      </div>
      <div className={styles.demo}>
        <Tab.Group>
          <Tab.List className={styles.header}>
            {tabLabels.map(label => (
              <Tab key={label} className={({ selected }) => clsx('mr-1 rounded-lg px-2 py-1.5 text-white/80 outline-none transition-colors hover:bg-white/5 hover:text-white', selected && '!bg-green-200 !text-[#090A0C]')}>{label}</Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={styles.content}>
            {(Object.values(filteredTools) as TTool[][]).map((tools, index) => (
              <Tab.Panel key={tabLabels[index]} className="flex flex-wrap gap-4">
                <ToolsBlock tools={tools} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className={styles.description}></div>
      </div>
    </Section>
  )
}

export { Supported }
