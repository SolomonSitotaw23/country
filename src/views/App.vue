<script setup>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronUpIcon } from "@heroicons/vue/solid";

// !importing data

const CountriesQuery = gql`
  query countries {
    countries {
      name
      emoji
      code
      languages {
        name
      }
      continent {
        name
      }
      phone
      capital
      states {
        name
      }
      currency
    }
  }
`;

const { result, loading, error } = useQuery(CountriesQuery);

const state = false;
const NoState = "there are no states";
</script>

<template>
  <p v-if="error">Something went wrong...</p>

  <p v-if="loading" class="text-center w-full">Loading...</p>
  <div v-else v-for="country in result.countries" :key="country.name">
    <div class="w-full px-4 pt-16">
      <div
        class="mx-auto w-full max-w-md rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-2 shadow-lg border"
      >
        <div class="p-4">
          <span class="text-4xl absolute">
            {{ country.emoji }}
          </span>

          <h1 class="text-white text-center text-4xl">
            <span class="underline px-6 py-4"> {{ country.name }} </span>
          </h1>
          <p class="mt-2">
            <span> <b>Continent: </b> </span>{{ country.continent.name }}
          </p>
          <p>
            <span> <b>Country code: </b> </span> {{ country.code }}
          </p>
          <p>
            <span> <b>Phone: </b> </span>{{ country.phone }}
          </p>
          <p>
            <span> <b>Capital City: </b> </span>{{ country.capital }}
          </p>
          <p>
            <span> <b>currency: </b> </span>{{ country.currency }}
          </p>
        </div>

        <Disclosure v-slot="{ open }">
          <DisclosureButton
            class="focus:outline-none flex w-full justify-between rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span> <b>Languages: </b></span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm">
            <span v-for="language in country.languages" :key="language.name">
              {{ language.name ? language.name + "," : "no languages" }}
            </span>
          </DisclosurePanel>
        </Disclosure>
        <Disclosure as="div" class="mt-2" v-slot="{ open }">
          <DisclosureButton
            class="focus:outline-none flex w-full justify-between rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 border px-4 py-2 text-left text-sm font-medium hover:bg-purple-200 focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
          >
            <span><b>States: </b></span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 text-black"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-6 pt-4 pb-2 text-sm">
            <div></div>

            <div v-if="country.states.length > 0">
              <span v-for="state in country.states" :key="state.name">
                {{ state.name }} ,
              </span>
            </div>
            <div v-else>
              <p>{{ country.name }} is stateless nation</p>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>
      <!-- </div> -->

      <div>
        <!-- !Languages -->
      </div>
    </div>
  </div>
</template>
