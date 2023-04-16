<template>
  <div class="container">
    <div class="w-50 mx-auto my-10 input-box">
      <input type="text" class="form-control" placeholder="Szukaj..." v-model="search" @keyup.enter="handleSubmit()" />
      <span @click.prevent="handleSubmit()">&#x276F;</span>
    </div>
    <div id="products" class="mb-5">
      <div class="d-flex flex-wrap justify-content-start">
        <div class="m-2 card" v-for="p in products" :key="p.id">
          <div class="card-body">
            <p class="mb-0"><strong>{{ p.name }}</strong></p>
            <p>{{ p.description }}</p>
            <p class="mb-0 mt-4"><strong>Cena</strong> {{ p.price }} zł</p>              
          </div>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-center" v-if="products.length === 0 && search.value !== ''">
        <p>Nothing was found for key "<em>{{ searched }}</em>"</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { requestData, requestData2 } from '../functions/common.ts';

const appConfig = useAppConfig();

const search = ref('');
const searched = ref('');
const order = useState('order');
const products = useState('products');

const handleSubmit = async () => {
  if (search.value === '') {
    console.log(search.value);
    products.value = await requestData2(`${appConfig.url}/product-listing/${appConfig.id}`, 'POST', {"order": order.value});
  } else {
    console.log(search.value);
    products.value = await requestData2(`${appConfig.url}/search`, 'POST', {"search": search.value, "order": order.value});
  }

  searched.value = search.value;
}
</script>

<style scoped>
</style>