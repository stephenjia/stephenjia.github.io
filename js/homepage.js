// Homepage JavaScript for dynamic News and Publications sections

$(document).ready(function() {
    console.log("Document ready, jQuery version:", $.fn.jquery);
    console.log("Looking for #news-list...");
    console.log("Element exists:", $('#news-list').length);
    console.log("Element HTML:", $('#news-list').html());

    // News section is now a simple scrollable list - no grouping needed

    // Initialize Publications section with filtering
    initPublicationsSection();
});

// News Section: Simple scrollable list (year grouping disabled)
// The news items are displayed as-is in a scrollable box

// Publications Section: Filter by type (Journal/Conference)
function initPublicationsSection() {
    // Add filter buttons before publications
    $('#publications-section').prepend(
        '<div class="pub-filters" style="margin-bottom: 20px;">' +
        '<button class="btn btn-default btn-sm pub-filter active" data-filter="all">All Publications</button> ' +
        '<button class="btn btn-default btn-sm pub-filter" data-filter="journal">Journal Papers</button> ' +
        '<button class="btn btn-default btn-sm pub-filter" data-filter="conference">Conference Papers</button>' +
        '</div>'
    );

    // Add custom styles for active filter
    $('<style>')
        .text('.pub-filter.active { background-color: #337ab7; color: white; }')
        .appendTo('head');

    // Filter button click handler
    $('.pub-filter').click(function() {
        const filter = $(this).data('filter');

        // Update active button
        $('.pub-filter').removeClass('active');
        $(this).addClass('active');

        // Show/hide publications based on filter
        if (filter === 'all') {
            $('.pub-item').slideDown();
        } else if (filter === 'journal') {
            $('.pub-item.conference').slideUp();
            $('.pub-item.journal').slideDown();
        } else if (filter === 'conference') {
            $('.pub-item.journal').slideUp();
            $('.pub-item.conference').slideDown();
        }
    });
}
