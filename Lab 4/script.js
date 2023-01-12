$(loadCategories());

function loadCategories() {
  $(".category").hide()
  $(".catalog").hide()
  $.ajax({
    url: "data/categories.json",
    success: function(result) {
      $.each(result, function(index, item) {
        var categories = $(".category:first").clone()
        var id = item.id;
        var shortName = item.short_name;
        var name = item.name;
        var instruction = item.special_instruction;
        var url = item.url;
        $(categories).find(".category-short_name").html(shortName);
        $(categories).find(".category-name").html(name);
        $(categories).find(".category-instruction").html(instruction);
        $(categories).find(".category-img").on("click", function() {
          loadCatalogs(shortName, url);
        });
        $(categories).find(".category-img").attr("src", "images/categories/" + shortName + ".jpg");
        $(categories).show()
        $(categories).appendTo($(".container"))
      });
    }
  });
}

function loadCatalogs(categoryShortName, link) {
    $(".category").hide()
    $(".catalog").hide()
    $.ajax({
      url: link,
      success: function(result) {
        $.each(result.catalog_items, function(index, item) {
          var catalogs = $(".catalog:first").clone()
          var id = item.id;
          var shortName = item.short_name;
          var name = item.name;
          var description = item.description;
          var price_retail = item.price_retail;
          var price_wholesale = item.price_wholesale;
          var amount_retail = item.amount_retail;
          var amount_wholesale = item.amount_wholesale;
          $(catalogs).find(".catalog-short_name").html(shortName);
          $(catalogs).find(".catalog-name").html(name);
          $(catalogs).find(".catalog-description").html(description);
          $(catalogs).find(".catalog-price_retail").html(price_retail);
          $(catalogs).find(".catalog-price_wholesale").html(price_wholesale);
          $(catalogs).find(".catalog-amount_retail").html(amount_retail);
          $(catalogs).find(".catalog-amount_wholesale").html(amount_wholesale);
          $(catalogs).find(".catalog-img").attr("src", "images/catalog/" + categoryShortName + "/" + shortName + ".jpg");
          $(catalogs).show()
          $(catalogs).appendTo($(".container"))
        });
      }
    })
    
};
