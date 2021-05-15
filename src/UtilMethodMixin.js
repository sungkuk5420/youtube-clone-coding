import { mapGetters } from "vuex";
let UtilMethodMixin = {
    methods: {
        showLoading() {
            this.$q.loading.show();
        },
        hideLoading() {
            this.$q.loading.hide();
        },
        successMessage(message) {
            this.$q.notify({
                position: "top",
                timeout: 500,
                message,
                icon: "announcement"
            });
        },
        errorMessage(message) {
            this.$q.notify({
                position: "top",
                timeout: 500,
                message,
                icon: "announcement"
            });
        }
    }
};
export default UtilMethodMixin;
