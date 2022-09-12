import type { TTool } from '@/api/routerApi.types'
import { Section } from '@/components/layout'
import { Tab } from '@headlessui/react'
import cx from 'classnames'
import { ToolsBlock } from './components'
import { useTools } from './hooks'
import styles from './Supported.module.scss'

const tabLabels = ['All', 'DEXs', 'Bridges', 'Aggregators']
function Supported() {
  const { filteredTools } = useTools()

  return (
    <Section>
      <div className="ml-2.5 mb-10 lg:ml-0">
        <h2 className={styles.title}>Supported Bridges, DEXs, Aggregators</h2>
        <p className={styles.subtitle}>All popular bridges and aggregators in one interface</p>
      </div>
      <div className={styles.demo}>
        <Tab.Group defaultIndex={2}>
          <Tab.List className={styles.header}>
            {tabLabels.map(label => (
              <Tab key={label} className={({ selected }) => cx(styles.button, selected && styles.activeButton)}>{label}</Tab>
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
        <div className={styles.description}>
          <h3 className={styles.lot}>A lot</h3>
          <p>We support most of them</p>
        </div>
      </div>
    </Section>
  )
}

export { Supported }
