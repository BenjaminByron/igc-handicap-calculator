var gliderList;
var options = {
    valueNames: ['glidertype', 'igc-handicap'],
    page: []
};

function displayResultsAmount(amount) {
    $('p.total span').text(amount);
}

$.ajax({
    type: 'GET',
    url: '../assets/handicap_list.json',
    success: function(data) {
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            $('tbody.list').append('<tr><td class="glidertype">' + item.Type + '</td><td class="igc-handicap">' + item.Handicap + '</td></tr>');
        }
        options.page[0] = data.length;
        gliderList = new List('handicap-search', options);
        gliderList.on('updated', function() {
            displayResultsAmount(gliderList.visibleItems.length);
        });
        displayResultsAmount(gliderList.visibleItems.length);
    }
});
