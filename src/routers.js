/**
 * Created by KateYeEumLee on 2017-09-05.
 */
import TIME from './TIME.vue'
import CNN from './CNN.vue'
import TechCrunch from './TechCrunch.vue'
import BBCSport from './BBCSport.vue'

export const routes = [
    {path : '/',component:TIME},
    {path : '/CNN',component:CNN},
    {path : '/TechCrunch',component:TechCrunch},
    {path : '/BBCSport',component:BBCSport}
]

