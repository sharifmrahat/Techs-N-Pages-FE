import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    CogIcon,
    LockClosedIcon,
    ServerIcon,
    ShieldCheckIcon,
  } from '@heroicons/react/24/outline'
  
  const features = [
    {
      name: 'Best Seller',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Popular Author',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: LockClosedIcon,
    },
    {
      name: 'Top Publisher',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ArrowPathIcon,
    },
    {
      name: 'New Collections',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ShieldCheckIcon,
    },
    {
      name: 'Top Readers',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: CogIcon,
    },
    {
      name: 'Exchange Offers',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: ServerIcon,
    },
  ]
  
  export default function Feature() {
    return (
      <div className="relative bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 py-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">          <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
            Everything you need to go through
          </p>
          <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
            Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
            malesuada. Eleifend condimentum id viverra nulla.
          </p>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="pt-6">
                  <div className="flow-root rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center rounded-md bg-indigo-500 dark:bg-indigo-400 p-3 shadow-lg">
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium tracking-tight ">{feature.name}</h3>
                      <p className="mt-5 text-base text-gray-500 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  