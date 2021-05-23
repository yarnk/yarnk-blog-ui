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
  <v-app>
    <base-header/>
    <v-main>
      <router-view/>
    </v-main>
    <base-footer/>
  </v-app>
</template>

<script>
import BaseFooter from './BaseFooter'
import BaseHeader from './BaseHeader'

export default {
  name: 'Layout',
  components: {
    BaseHeader,
    BaseFooter
  }
}
</script>

<style scoped>

</style>
