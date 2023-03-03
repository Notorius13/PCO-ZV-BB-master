(function ($) {
  var gallery = $("#music"),
    startingOpacity = gallery.find("img").css("opacity");

  // animujeme opacity na hover
  gallery.find("img").on("mouseenter mouseleave", function (event) {
    var opacity = event.type === "mouseenter" ? 1 : startingOpacity;
    $(this).fadeTo(200, opacity);
  });

  // vytvorime si overlay
  var overlay = $("<div>", { id: "overlay" });
  overlay.appendTo("body").hide();

  overlay.on("click", function () {
    $(this).fadeOut("fast");
  });

  // skryjeme overlay na escape
  $(document).on("keyup", function (event) {
    if (event.which === 27) overlay.fadeOut("fast");
  });

  // po kliknuti zobrazime lightbox
  gallery.find("a").on("click", function (event) {
    var href = $(this).attr("href"),
      image = $("<img>", { src: href, alt: "cd-cover" });

    overlay.html(image).show();

    event.preventDefault();
  });
  $(document).ready(function () {
    // pri každom scrollingu zobrazíme tlačidlo iba ak sme niekde v strede alebo na konci stránky
    $(window).scroll(function () {
      if ($(this).scrollTop() > $(window).height()) {
        $("#scroll-to-top").fadeIn();
      } else {
        $("#scroll-to-top").fadeOut();
      }
    });

    // po kliknutí na tlačidlo sa posunieme na vrch stránky
    $("#scroll-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
  });
})(jQuery);
