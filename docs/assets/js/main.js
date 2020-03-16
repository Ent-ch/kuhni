
jQuery(document).ready(function ($) {
  function initProduct() {
    $('.filter__content > li').hide();
    $('.filter__content > li').slice(0, 8).show();
  }

  // Показать больше шкафов
  $.get('/list.html.part').then(function (data) {
    $('#more-products-button').before(data);
    setTimeout(() => {
        initProduct();
      
    }, 300);
  });


  $('.more-products > span').on('click', function (e) {
    e.preventDefault();
    $('.filter__content > li:hidden').slice(0, 36).slideDown();
    var elHidden = $('.filter__content > li:hidden').length;
    if (elHidden <= 0) {
      $('.more-products').hide();
    }
  });
  $('.filter__box .uk-nav a').on('click', function (el) {
    $('.more-products').hide();
  });
  $('.filter__clear .uk-nav a').on('click', function (el) {
    $('.more-products').show();
    setTimeout(initProduct, 1000);
  });

  // Маска для номера телефона
  $("input[name='phone']").mask("+7(999)999-99-99");

  // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,  // Initial selected step, 0 = first step
    keyNavigation: true, // Enable/Disable keyboard navigation
    autoAdjustHeight: false, // Automatically adjust content height
    cycleSteps: false, // Allows to cycle the navigation of steps
    backButtonSupport: false, // Enable the back button support
    useURLhash: false, // Enable selection of the step based on url hash
    showStepURLhash: false,
    lang: {  // Language variables
      next: 'Следующий шаг',
      previous: 'Предыдущий шаг'
    },
    toolbarSettings: {
      toolbarPosition: 'bottom', // none, top, bottom, both
      toolbarButtonPosition: 'right', // left, right
      showNextButton: true, // show/hide a Next button
      showPreviousButton: false, // show/hide a Previous button
    },
    anchorSettings: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: false, // Activates all anchors clickable all times
      markDoneStep: true, // add done css
      enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
    },
    contentURL: null, // content url, Enables Ajax content loading. can set as data data-content-url on anchor
    disabledSteps: [],    // Array Steps disabled
    errorSteps: [],    // Highlight step with errors
    theme: 'dots',
    transitionEffect: 'fade', // Effect on navigation, none/slide/fade
    transitionSpeed: '700'
  });

  // Прячем не нужное на последнем шаге
  $("#smartwizard").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
    if (stepNumber === 6) {
      $('.btn-toolbar').hide();
    } else {
      $('.btn-toolbar').show();
    }
  });

  $('#smartwizard input[type="radio"]').on('change', function () {
    $('#smartwizard').smartWizard("next");
  });

  // Smart Wizard
  $('#smartwizard2').smartWizard({
    selected: 0,  // Initial selected step, 0 = first step
    keyNavigation: true, // Enable/Disable keyboard navigation
    autoAdjustHeight: false, // Automatically adjust content height
    cycleSteps: false, // Allows to cycle the navigation of steps
    backButtonSupport: false, // Enable the back button support
    useURLhash: false, // Enable selection of the step based on url hash
    showStepURLhash: false,
    lang: {  // Language variables
      next: 'Следующий шаг',
      previous: 'Предыдущий шаг'
    },
    toolbarSettings: {
      toolbarPosition: 'bottom', // none, top, bottom, both
      toolbarButtonPosition: 'right', // left, right
      showNextButton: true, // show/hide a Next button
      showPreviousButton: false, // show/hide a Previous button
    },
    anchorSettings: {
      anchorClickable: true, // Enable/Disable anchor navigation
      enableAllAnchors: true, // Activates all anchors clickable all times
      markDoneStep: true, // add done css
      enableAnchorOnDoneStep: true // Enable/Disable the done steps navigation
    },
    contentURL: null, // content url, Enables Ajax content loading. can set as data data-content-url on anchor
    disabledSteps: [],    // Array Steps disabled
    errorSteps: [],    // Highlight step with errors
    theme: 'dots',
    transitionEffect: 'fade', // Effect on navigation, none/slide/fade
    transitionSpeed: '700'
  });

  // Прячем не нужное на последнем шаге
  $("#smartwizard2").on("showStep", function (e, anchorObject, stepNumber, stepDirection) {
    if (stepNumber === 8) {
      $('.btn-toolbar').hide();
    } else {
      $('.btn-toolbar').show();
    }
  });

  $('#smartwizard2 input[type="radio"]').on('change', function () {
    $('#smartwizard2').smartWizard("next");
  });


  $("#smartwizard-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/mail/sendmail.php",
      data: $(this).serialize()
    }).done(function () {
      $("#smartwizard-form").trigger("reset");
      UIkit.modal("#success").show();
      setTimeout(function () {
        UIkit.modal("#success").hide();
      }, 3000);
    });
    return false;
  });

  $("#smartwizard-form2").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/mail/sendmail.php",
      data: $(this).serialize()
    }).done(function () {
      $("#smartwizard-form2").trigger("reset");
      UIkit.modal("#success").show();
      setTimeout(function () {
        UIkit.modal("#success").hide();
      }, 3000);
    });
    return false;
  });

  $("#hero-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/mail/sendmail.php",
      data: $(this).serialize()
    }).done(function () {
      $("#hero-form").trigger("reset");
      UIkit.modal("#success").show();
      setTimeout(function () {
        UIkit.modal("#success").hide();
      }, 3000);
    });
    return false;
  });

  $("#designer-gager-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/mail/sendmail.php",
      data: $(this).serialize()
    }).done(function () {
      $("#designer-gager-form").trigger("reset");
      UIkit.modal("#success").show();
      setTimeout(function () {
        UIkit.modal("#success").hide();
      }, 3000);
    });
    return false;
  });

  $("#total-price-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/mail/sendmail.php",
      data: $(this).serialize()
    }).done(function () {
      $("#total-price-form").trigger("reset");
      UIkit.modal("#success").show();
      setTimeout(function () {
        UIkit.modal("#success").hide();
      }, 3000);
    });
    return false;
  });

  $("#callback-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "assets/mail/sendmail.php",
      data: $(this).serialize()
    }).done(function () {
      $("#callback-form").trigger("reset");
      UIkit.modal("#success").show();
      setTimeout(function () {
        UIkit.modal("#success").hide();
      }, 3000);
    });
    return false;
  });

  $("form").submit(function () {

    yaCounter57365257.reachGoal('order');
    console.log('submit');

  });

});