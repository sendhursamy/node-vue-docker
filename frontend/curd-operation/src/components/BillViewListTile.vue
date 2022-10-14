<template>
    <li class="list-group-item border-0 d-flex justify-content-between align-items-center ps-0 border-radius-lg">
        <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">{{ heading }}</h6>
        </div>
        <div class="d-flex align-items-center text-sm">
            <a :href="downloadLink">
                <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
                    <i class="material-icons text-lg position-relative me-1">picture_as_pdf</i>
                    PDF
                </button>
            </a>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            required: true
        },
        downloadLink: {
            type: String,
            required: true
        }
    }
}
</script>