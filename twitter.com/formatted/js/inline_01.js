  document.domain = 'twitter.com';

  // this will be copied to twttr.appStartTime once our JS has started up
  /// 開始時間の設定
  document.startTime = new Date().getTime();
  /// グローバルオブジェクト twttr
  var twttr = {};
  twttr.versionName = 'phoenix';

  /// window.consoleが存在しない場合のダミー関数定義
  if (!window.console) {
      (function() {
          var names = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
          window.console = {};
          for (var i = 0; i < names.length; ++i) {
              window.console[names[i]] = function() {};
          }
      }());
  }
