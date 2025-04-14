$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".toggle").on("click", function () {
      $("header").toggleClass("open");
    });
  
    // #maskのエリアをクリックした時にメニューを閉じる
    $(".mask,nav a").on("click", function () {
      $("header").removeClass("open");
    });
  
  
    /*=================================================
    スムーススクロール
    ===================================================*/
    $('nav a[href^="#"]').click(function () {
      // クリックしたaタグのリンクを取得
      let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
      let target = $(href == "#" || href == "" ? "html" : href);
      // ページトップからジャンプ先の要素までの距離を取得
      let position = target.offset().top - 100;
      // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
      // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
      $("html, body").animate({ scrollTop: position }, 600, "swing");
      // urlが変化しないようにfalseを返す
      return false;
    });
  
    /*=================================================
    PICK UP スライダー
    ===================================================*/
    // カルーセル用 jQueryプラグイン「slick」の設定
    // マニュアル：https://kenwheeler.github.io/slick/
    $(".slide-items").slick({
      arrows: true,
      dots: true,
      centerMode: true,
      centerPadding: "80px",
      slidesToShow: 3,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      responsive: [
  
        {
          breakpoint: 768,
          settings: {
            centerPadding: "50px",
            slidesToShow: 1,
          },
        },
      ],
    });
  
    /*=================================================
    スクロール時の画像フェード表示
    ===================================================*/
    // スクロール時のイベント
    $(window).scroll(function () {
      // fadeinクラスに対して順に処理を行う
      $(".fadein").each(function () {
        // スクロールした距離
        let scroll = $(window).scrollTop();
        // fadeinクラスの要素までの距離
        let target = $(this).offset().top;
        // 画面の高さ
        let windowHeight = $(window).height();
        // fadeinクラスの要素が画面下にきてから200px通過した
        // したタイミングで要素を表示
        if (scroll > target - windowHeight + $('.fadein').height()/2) {
          $(this).css("opacity", "1");
          $(this).css("transform", "translateY(0px)");
        }
      });
    });
  
  
  });