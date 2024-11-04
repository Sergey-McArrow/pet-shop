import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { useLocation } from 'react-router-dom'
import { Fragment } from 'react/jsx-runtime'

export const Breadcrumbs = () => {
  let location = useLocation()
  const pathParts = location.pathname.split('/').slice(1)
  if (!pathParts[0].length) return null
  const pathes = pathParts.map((p) => p.replaceAll('%20', ' '))
  return (
    <Breadcrumb className="container mx-auto py-10">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Main Page</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathes.map((p) => (
          <Fragment key={p}>
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${p}`} className="capitalize">
                {p}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
