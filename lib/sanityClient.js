import sanityClient from '@sanity/client'

export const client = sanityClient({
   projectId: 'cm9kuyvf',
   dataset: 'production',
   token: 'sk5WxEiIvfVkeyeFKpK9MNlcd0jJkipnanIpCXJ9YA7I5CiiCcoVz1blIJR2JOqeUeXl9Jz11zoPEPABsv96q2wSZ6vawWhhd60kTqU9Uu6buV9XYowrkUW0nY0fp5EYdi0UeZJF8HQntB1EpB0Vo3HGCl8LONkRZeQ4G3p0AzggoBHVwPxX',
   apiVersion: '2022-03-17',
   useCdn: false,
})