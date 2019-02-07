<template>
    <section>

            <toolbar/>


<v-container>
    <v-layout class="pa-5 ma-5" style="background-color:  rgba(200,200,200,0.4); z-index: 1000; position: relative">

        <v-flex xs12 sm10 offset-sm1 class="white--text" style="font-size:20px">
            <p class="display-3 white--text mb-3">Privacy Policy</p>
            <p>We respect your privacy.</p>

            <p>Any personal information you provide to us including and similar to your name, address, telephone number and e-mail address will not be released, sold, or rented to any entities or individuals outside of our organization except as noted below.</p>
            <p class="title white--text mt-5">Our Service Providers. </p>
            <p>We may share your personal information with companies (including our affiliates) that perform services on our behalf, for example, companies that help process credit card payments. Our service providers are required by contract to protect the confidentiality of the personal information we share with them and to use it only to provide specific services on our behalf.</p>
            <p class="title white--text mt-5">Business Transfers. </p>
            <p>Your personal information may be transferred to another entity (either an affiliated entity or an unrelated third party) in connection with a merger, reorganization, dissolution or similar corporate event. If such a transfer were ever to occur, the acquiring entity’s use of your personal information will still be subject to this Privacy Policy.</p>
            <p class="title white--text mt-5">Government and Legal Disclosures. </p>
            <p>We may disclose the personal information we collect through this Site, when we, in good faith, believe disclosure is appropriate to comply with the law (or a court order or subpoena); to prevent or investigate a possible crime, such as fraud or identity theft; to enforce our Terms and Conditions or other agreements that govern your use of this Site; or to protect the rights, property or safety of our company, our users, or others.</p>
            <p class="title white--text mt-5">External Sites. </p>
            <p>We are not responsible for the content of external internet sites. You are advised to read the privacy policy of external sites before disclosing any personal information.</p>
            <p class="title white--text mt-5">Cookies. </p>
            <p>A "cookie" is a small data text file that is placed in your browser and allows us to recognize you each time you visit this site (personalization, etc). Cookies themselves do not contain any personal information, and we do not use cookies to collect personal information. Cookies may also be used by 3rd party content providers such as newsfeeds.</p>
            <p class="title white--text mt-5">Remember The Risks Whenever You Use The Internet. </p>
            <p>While we do our best to protect your personal information, we cannot guarantee the security of any information that you transmit to us and you are solely responsible for maintaining the secrecy of any passwords or other account information. In addition, other Internet sites or services that may be accessible through our site have separate data and privacy practices independent of us, and therefore we disclaim any responsibility or liability for their policies or actions. Please contact those vendors and others directly if you have any questions about their privacy policies.</p>
            <p>For any other information, please contact us.</p>
        </v-flex>
    </v-layout>
</v-container>
        <myfooter></myfooter>
        </section>

</template>

<script>
    import Toolbar from "./toolbar";
    import myFooter from "./footer";
    export default {
        name: "Policy",
        components: {
            toolbar: Toolbar,
            myfooter: myFooter
        }
    }
</script>

<style scoped>

</style>