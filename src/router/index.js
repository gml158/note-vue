import Vue from 'vue'
import Router from 'vue-router'
import NoteList from '@/components/Note/List'
import ManageMe from '@/components/Manage/Me'
import NoteCreate from '@/components/Note/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'NoteList',
      component: NoteList
    },{
      path:'/note/create',
      name:'NoteCreate',
      component: NoteCreate
    },{
      path:'/manage/me',
      name:'manageme',
      component: ManageMe
    }
  ]
})
