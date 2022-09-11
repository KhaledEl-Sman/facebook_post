$(document).ready(function () {
  validation = function (text) {
    text = text.trim();
    let map = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, function (m) {
      return map[m];
    });
  };

  $(".comms .comm .replies .show_replies").click(function () {
    $(this).addClass("d-none");
    $(this).prev().addClass("d-none");
    $(this).parent().children(0).addClass("d-none");
    $(this).next().removeClass("d-none");
    $(this).parent().parent().children(1).eq(1).css("height", "2.6rem");
  });

  $(".comms .comm .reacts .reply").click(function () {
    if ($(this).parent().next().hasClass("replies")) {
      $(this).parent().next().children().eq(3).removeClass("d-none");
      $(this).parent().next().children().eq(2).addClass("d-none");
      $(this).parent().next().children().eq(0).addClass("d-none");
      $(this)
        .parent()
        .next()
        .children()
        .eq(1)
        .css("height", "2.6rem")
        .removeClass("d-none");
      $(this).parent().parent().children().eq(1).css("height", "2.6rem");
    } else if ($(this).parent().next().hasClass("do_comm")) {
      $(this).parent().next().removeClass("d-none");
      $(this).parent().parent().children(1).eq(1).removeClass("d-none");
    } else {
      $(this).parent().parent().children().eq(0).removeClass("d-none");
      $(this).parent().parent().children().eq(1).removeClass("d-none");
      $(this).parent().parent().children().eq(1).css("height", "2.6rem");
      let wanted = `
        <div class="replies">
            <div class="flat_border d-none"></div>
            <div class="remove_end"></div>
            <div class="show_replies d-none">
                <i class="fa fa-reply"></i>
                <span>رد واحد</span>
            </div>
            <div class="all_replies">
                <div class="reply_all_replies">
                    <div class="single_reply">
                        <div class="flat_border"></div>
                        <div class="right_border d-none"></div>
                        <div class="do_comm mt-1 d-none">
                            <div class="top">
                                <img class="rounded-circle" width="28" height="28" src="images/person.png"
                                    alt="new comment">
                                <input type="text" placeholder="اكتب تعليقاً...">
                            </div>
                            <small>اضغط على Enter للنشر.</small>
                        </div>
                    </div>
                    <div class="do_comm mt-1">
                        <div class="flat_border2"></div>
                        <div class="top">
                            <img class="rounded-circle" width="28" height="28" src="images/person.png" alt="new comment">
                            <input class="second_comment" type="text" placeholder="اكتب تعليقاً...">
                        </div>
                        <small>اضغط على Enter للنشر.</small>
                    </div>
                </div>
            </div>
        </div>
      `;
      $(this).parent().parent().append(wanted);
    }
  });

  go = function (e) {
    // let x = $(e.target);
    if ($(e.target).parent().next().hasClass("replies")) {
      $(e.target).parent().next().children().eq(3).removeClass("d-none");
      $(e.target).parent().next().children().eq(2).addClass("d-none");
      $(e.target).parent().next().children().eq(0).addClass("d-none");
      $(e.target)
        .parent()
        .next()
        .children()
        .eq(1)
        .css("height", "2.6rem")
        .removeClass("d-none");
      $(e.target).parent().parent().children().eq(1).css("height", "2.6rem");
    } else if ($(e.target).parent().next().hasClass("do_comm")) {
      $(e.target).parent().next().removeClass("d-none");
      $(e.target).parent().parent().children(1).eq(1).removeClass("d-none");
    } else {
      $(e.target).parent().parent().children().eq(0).removeClass("d-none");
      $(e.target).parent().parent().children().eq(1).removeClass("d-none");
      $(e.target).parent().parent().children().eq(1).css("height", "2.6rem");
      let wanted = `
        <div class="replies">
            <div class="flat_border d-none"></div>
            <div class="remove_end"></div>
            <div class="show_replies d-none">
                <i class="fa fa-reply"></i>
                <span>رد واحد</span>
            </div>
            <div class="all_replies">
                <div class="reply_all_replies">
                    <div class="single_reply">
                        <div class="flat_border"></div>
                        <div class="right_border d-none"></div>
                        <div class="do_comm mt-1 d-none">
                            <div class="top">
                                <img class="rounded-circle" width="28" height="28" src="images/person.png"
                                    alt="new comment">
                                <input type="text" placeholder="اكتب تعليقاً...">
                            </div>
                            <small>اضغط على Enter للنشر.</small>
                        </div>
                    </div>
                    <div class="do_comm mt-1">
                        <div class="flat_border2"></div>
                        <div class="top">
                            <img class="rounded-circle" width="28" height="28" src="images/person.png" alt="new comment">
                            <input class="second_comment" type="text" placeholder="اكتب تعليقاً...">
                        </div>
                        <small>اضغط على Enter للنشر.</small>
                    </div>
                </div>
            </div>
        </div>
      `;
      $(e.target).parent().parent().append(wanted);
    }
  };

  $(".frist_comment").keyup(function (event) {
    let text = validation($(this).val());
    if (event.keyCode === 13 && text.length) {
      let old_comments = `<!-- style="border-right: 2px solid hsl(214, 89%, 52%);" -->
        <div class="comm pr-1">
            <div class="right_border d-none"></div>
            <div class="remove_end d-none"></div>
            <div class="top">
                <img class="rounded-circle" width="32" src="images/person.png" alt="new user">
                <div class="description" style="background-color: #e1edfe;">
                    <h4>مستخدم جديد</h4>
                    <div class="line"></div>
                    <p>${text}</p>
                </div>
            </div>
            <div class="reacts">
                <span class="like"><b>أعجبني</b>
                    <div class="give_react">
                        <img width="35" height="35" src="images/reacts/like.gif" data-color="#2078F4" data-type="like"
                            alt="like react">
                        <img width="35" height="35" src="images/reacts/love.gif" data-color="#F33E58" data-type="love"
                            alt="love react">
                        <img width="35" height="35" src="images/reacts/wow.gif" data-color="#F7B125" data-type="wow"
                            alt="wow react">
                        <img width="35" height="35" src="images/reacts/sad.gif" data-color="#F7B125" data-type="sad"
                            alt="sad react">
                        <img width="35" height="35" src="images/reacts/angry.gif" data-color="#E9710F" data-type="angry"
                            alt="angry react">
                    </div>
                </span>
                <span class="reply" onclick="go(event)">رد</span>
                <span>1 دقيقة</span>
            </div>
        </div>
      `;
      $(".new_comment_1st").prepend(old_comments);
      $(this).val("");
    }
  });

  $(".second_comment").keyup(function (event) {
    let text = validation($(this).val());
    if (event.keyCode === 13 && text.length) {
      let old_comments = `
          <div class="single_reply">
            <div class="flat_border"></div>
            <div class="right_border d-none"></div>
            <div class="remove_end2"></div>
            <div class="top">
                <img class="rounded-circle border" width="28" height="28" src="images/person.png"
                    alt="new user">
                <div class="description" style="background-color: #e1edfe;">
                    <h4>مستخدم جديد</h4>
                    <div class="line"></div>
                    <p>${text}</p>
                </div>
            </div>
            <div class="reacts">
              <span class="like"><b>أعجبني</b>
                  <div class="give_react">
                      <img width="35" height="35" src="images/reacts/like.gif" data-color="#2078F4" data-type="like"
                          alt="like react">
                      <img width="35" height="35" src="images/reacts/love.gif" data-color="#F33E58" data-type="love"
                          alt="love react">
                      <img width="35" height="35" src="images/reacts/wow.gif" data-color="#F7B125" data-type="wow"
                          alt="wow react">
                      <img width="35" height="35" src="images/reacts/sad.gif" data-color="#F7B125" data-type="sad"
                          alt="sad react">
                      <img width="35" height="35" src="images/reacts/angry.gif" data-color="#E9710F" data-type="angry"
                          alt="angry react">
                  </div>
              </span>
              <span class="reply">رد</span>
              <span>1 دقيقة</span>
          </div>
            <div class="do_comm mt-1 d-none">
                <div class="top">
                    <img class="rounded-circle" width="28" height="28" src="images/person.png"
                        alt="new comment">
                    <input type="text" placeholder="اكتب تعليقاً...">
                </div>
                <small>اضغط على Enter للنشر.</small>
            </div>
        </div>
      `;
      $(this).parent().parent().prev().prepend(old_comments);
      $(this).val("");
    }
  });

  $(".comms .comm .reacts .give_react img").click(function () {
    if ($(this).attr("class") == undefined) {
      if ($(this).parent().attr("class") == "give_react active") {
        $(this).siblings().removeAttr("class");
        $(this).addClass("active");
        $(this)
          .parent()
          .parent()
          .children()
          .eq(0)
          .css("color", $(this).attr("data-color"));
        let new_react = $(this).attr("data-type");
        $(this)
          .parent()
          .parent()
          .parent()
          .prev()
          .children()
          .eq(1)
          .children()
          .last()
          .children()
          .last()
          .find("span:last-of-type")
          .children()
          .eq(1)
          .attr("src", "images/svg/" + new_react + ".svg");
      } else {
        $(this).siblings().removeAttr("class");
        $(this).addClass("active");
        $(this).parent().addClass("active");
        $(this)
          .parent()
          .parent()
          .children()
          .eq(0)
          .css("color", $(this).attr("data-color"));
        let perv_reacts =
          $(this)
            .parent()
            .parent()
            .parent()
            .prev()
            .children()
            .eq(1)
            .children()
            .last()
            .children()
            .eq(-2)
            .html() * 1;
        $(this)
          .parent()
          .parent()
          .parent()
          .prev()
          .children()
          .eq(1)
          .children()
          .last()
          .children()
          .eq(-2)
          .html(perv_reacts + 1);
        let new_react = $(this).attr("data-type");
        let old_reviews = $(this)
          .parent()
          .parent()
          .parent()
          .prev()
          .children()
          .eq(1)
          .children()
          .last()
          .children()
          .last()
          .html();
        old_reviews += `
        <span>
            <small>مستخدم جديد</small>
            <img width="18" height="18" src="images/svg/${new_react}.svg" alt="${new_react} react">
            1
        </span>
      `;
        $(this)
          .parent()
          .parent()
          .parent()
          .prev()
          .children()
          .eq(1)
          .children()
          .last()
          .children()
          .last()
          .html(old_reviews);
      }
    } else {
      $(this).siblings().removeAttr("class");
      $(this).removeAttr("class");
      $(this).parent().removeClass("active");
      $(this).parent().parent().children().eq(0).css("color", "#65676B");
      let perv_reacts =
        $(this)
          .parent()
          .parent()
          .parent()
          .prev()
          .children()
          .eq(1)
          .children()
          .last()
          .children()
          .eq(-2)
          .html() * 1;
      $(this)
        .parent()
        .parent()
        .parent()
        .prev()
        .children()
        .eq(1)
        .children()
        .last()
        .children()
        .eq(-2)
        .html(perv_reacts - 1);
      $(this)
        .parent()
        .parent()
        .parent()
        .prev()
        .children()
        .eq(1)
        .children()
        .last()
        .children()
        .last()
        .find("span:last-of-type")
        .remove();
    }
    $(this).parent().css("display", "none");
  });

  $(".comms .comm .reacts span b").click(function () {
    if ($(this).css("color") != "rgb(101, 103, 107)") {
      $(this).css("color", "rgb(101, 103, 107)");
      $(this).next().removeClass("active");
      $(this)
        .next()
        .find("*")
        .each(function () {
          $(this).removeAttr("class");
        });
      let perv_reacts =
        $(this)
          .parent()
          .parent()
          .prev()
          .children()
          .eq(1)
          .children()
          .last()
          .children()
          .eq(-2)
          .html() * 1;
      $(this)
        .parent()
        .parent()
        .prev()
        .children()
        .eq(1)
        .children()
        .last()
        .children()
        .eq(-2)
        .html(perv_reacts - 1);
      $(this).next().css("display", "none");
      $(this)
        .parent()
        .parent()
        .prev()
        .children()
        .eq(1)
        .children()
        .last()
        .children()
        .last()
        .children()
        .last()
        .remove();
    } else $(this).next().css("display", "flex");
  });

  $("#go_comment").click(function () {
    $(".frist_comment").focus();
  });

  $(".make_action .give_it .give_react img").click(function () {
    if ($(this).attr("class") == undefined) {
      if ($(this).parent().attr("class") == "give_react active") {
        $(this).siblings().removeAttr("class");
        $(this).addClass("active");
        $(this)
          .parent()
          .parent()
          .children()
          .eq(0)
          .css("color", $(this).attr("data-color"));
        let src = "images/svg/" + $(this).attr("data-type") + ".svg",
          new_react_content = $(this).attr("data-content"),
          alted = $(this).attr("alt");
        $(this).parent().parent().children().eq(0).html(new_react_content);
        $(this)
          .parent()
          .parent()
          .children()
          .eq(1)
          .html(`<img src="${src}" width="20" height="20" alt="${alted}">`);
      } else {
        $(this).parent().parent().addClass("done");
        $(this).siblings().removeAttr("class");
        $(this).addClass("active");
        $(this).parent().addClass("active");
        $(this)
          .parent()
          .parent()
          .children()
          .eq(0)
          .css("color", $(this).attr("data-color"));
        let src = "images/svg/" + $(this).attr("data-type") + ".svg",
          new_react_content = $(this).attr("data-content"),
          alted = $(this).attr("alt");
        $(this).parent().parent().children().eq(0).html(new_react_content);
        $(this)
          .parent()
          .parent()
          .children()
          .eq(1)
          .html(`<img src="${src}" width="20" height="20" alt="${alted}">`);
      }
    } else {
      $(this).siblings().removeAttr("class");
      $(this).removeAttr("class");
      $(this).parent().removeClass("active");
      $(this).parent().parent().removeClass("done");
      $(this).parent().parent().children().eq(0).css("color", "#65676B");
      $(this).parent().parent().children().eq(0).html("اعجبني");
      $(this)
        .parent()
        .parent()
        .children()
        .eq(1)
        .html(
          `<i data-visualcompletion="css-img" class="reacted"
        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/9ayi04MiLFM.png&quot;); background-position: 0px -310px; background-size: 26px 790px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;">
        </i>`
        );
    }
    $(this).parent().css("display", "none");
  });

  $(".comms .comm .reacts .like, .make_action .give_it").mouseover(function () {
    $(this).children().last().css("display", "flex");
  });

  $(".comms .comm .reacts .like, .make_action .give_it").mouseout(function () {
    $(this).children().last().css("display", "none");
  });

  $(".make_action .give_it span,.make_action .give_it .reacted").click(
    function () {
      if ($(this).parent().hasClass("done")) {
        $(this)
          .parent()
          .children()
          .last()
          .children()
          .find("*")
          .removeClass("active");
        $(this).parent().removeClass("done");
        $(this).parent().children().eq(0).css("color", "#65676B");
        $(this).parent().children().eq(0).html("اعجبني");
        $(this)
          .parent()
          .children()
          .eq(1)
          .html(
            `<i data-visualcompletion="css-img" class="reacted"
        style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/9ayi04MiLFM.png&quot;); background-position: 0px -310px; background-size: 26px 790px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;">
        </i>`
          );
      } else {
        $(this).parent().children().last().children().eq(0).addClass("active");
        $(this).parent().addClass("done");
        $(this).parent().children().eq(0).css("color", "#2078F4");
        $(this).parent().children().eq(0).html("اعجبني");
        $(this)
          .parent()
          .children()
          .eq(1)
          .html(
            `<img src="images/svg/like.svg" width="20" height="20" alt="like react">`
          );
      }
    }
  );

  let more_comm = true;
  $(".post .comms_footer span:first-of-type").click(function () {
    if (more_comm) {
      $(".post .more_comm").each(function () {
        $(this).css("display", "block");
      });
      $(this).html("عرض تعليقات اقل");
      $(this).next().html("");
      more_comm = false;
    } else {
      $(".post .more_comm").each(function () {
        $(this).css("display", "none");
      });
      $(this).html("عرض مزيد من التعليقات");
      $(this).next().html("١ من ١١٧");
      more_comm = true;
    }
  });
});
