import store from "@/store";

const apiKey = "3bcb08313fe3bc8292a3caf1a96ebac2";

export function fetchAllPerson() {
    return store.dispatch("data-resources/listing", {
        actionUri: `person/popular?api_key=${apiKey}&language=en-US&page=1`
    })
}

export function fetchPerson() {
    return store.dispatch("data-resources/listing", {
        actionUri: `person/popular?api_key=${apiKey}&language=en-US&page=1?_person_id`
    })
}
