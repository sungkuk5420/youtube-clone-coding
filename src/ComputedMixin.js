import { mapGetters } from "vuex";
let ComputedMixin = {
    computed: {
        ...mapGetters({
            state: "getState",
        }),
    },
    watch: {
    }
};
export default ComputedMixin;
