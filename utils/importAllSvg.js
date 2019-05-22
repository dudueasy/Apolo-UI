// let importAll = (requireContext:any) => requireContext.keys().forEach(requireContext);
//
// try {
//   console.log(1111111111111111)
//   importAll(require.context('../icon_svg/', true, /\.svg$/));
// } catch (e) {
//   console.log(e)
// }


let cache = {};

// 需要注意的是这个函数由于引用了 webpack api, 需要在编译时调用, 因此并不能接收参数
function importAllSvg() {

  const fn = (requireContext) => requireContext.keys()
    .forEach(id => {
      cache[id] = requireContext(id);
    });


  fn(require.context('../lib/icon/icon_svg/', false, /\.svg$/));
  // fn(require.context(path, false, filenameRegex));
}

importAllSvg();


