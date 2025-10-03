import { defineStore } from 'pinia'
import applicationsJson from '@/shared/applications-response.json' with { type: 'json' }

export const useApplicationsStore = defineStore('applications', {
  state: () => ({
    applications: applicationsJson[0],
  }),
})
