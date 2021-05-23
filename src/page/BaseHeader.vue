<!--
 Copyright (c) 2021 Coeuy Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 -->
<template>
  <div>
    <v-app-bar app elevate-on-scroll elevation="1">
      <v-card class="d-flex justify-center align-center pl-4 pr-4" height="100%" @click="$router.push({path:'/'})" color="transparent" flat tile>
        <v-icon  class="font-weight-bold">
          YARNK
        </v-icon>
      </v-card>
      <v-tabs v-if="$vuetify.breakpoint.mdAndUp">
        <v-tab :to="item.path" v-for="(item,n) in navs" :key="n">
          {{ item.title }}
        </v-tab>
      </v-tabs>
      <!-- 个人菜单-->
      <v-menu>
        <template>

        </template>
      </v-menu>
      <v-spacer/>
      <!--主题控制-->
      <v-btn icon>
        <v-icon @click="$vuetify.theme.dark=!$vuetify.theme.dark">
          {{ $vuetify.theme.dark ? 'mdi-brightness-4' : 'mdi-brightness-7' }}
        </v-icon>
      </v-btn>
      <!--小屏幕菜单-->
      <v-app-bar-nav-icon class="hidden-md-and-up">
        <v-icon @click="openRightNav = !openRightNav">mdi-menu</v-icon>
      </v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      fixed
      right
      v-model="openRightNav"
    >
      <v-list>
        <v-list-item :to="item.path" v-for="(item,n) in navs" :key="n">
          <v-list-item-content>
            {{ item.title }}
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'BaseHeader',
  data: () => ({
    openRightNav: false,
    navs: [
      {
        title: '首页',
        path: '/'
      },
      {
        title: '文章',
        path: '/article'
      },
      {
        title: '关于',
        path: '/about'
      },
      {
        title: '更多',
        path: '/more'
      }
    ]
  })
}
</script>

<style scoped>

</style>
