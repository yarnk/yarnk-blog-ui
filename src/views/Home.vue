<template>
  <v-container>
    <v-app-bar app>
      <v-btn text class="ml-6 mr-4">
        Yarnk
      </v-btn>
      <v-tabs>
        <v-tab v-for="(item,n) in navs" :key="n">
          {{ item.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-card>
      <v-card-title>
        文章动态
      </v-card-title>

    </v-card>

    <v-footer app>
      <div style="width: 100%" class="d-flex justify-center">
        © 2021 YARNK BLOG
      </div>
    </v-footer>
  </v-container>
</template>
<script>

export default {
  name: 'Home',
  data: () => ({
    navs: [
      {
        name: '首页'
      },
      {
        name: '文章'
      },
      {
        name: '关于'
      },
      {
        name: '更多'
      }
    ]
  })
}
</script>
