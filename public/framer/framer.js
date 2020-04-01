!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId])
            return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: !1
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__),
        module.loaded = !0,
        module.exports
    }
    var installedModules = {};
    return __webpack_require__.m = modules,
    __webpack_require__.c = installedModules,
    __webpack_require__.p = "",
    __webpack_require__(0)
}([function(module, exports, __webpack_require__) {
    var Defaults, Framer, _;
    _ = __webpack_require__(1)._,
    Framer = {},
    Framer._ = _,
    Framer.Utils = __webpack_require__(4),
    Framer.Color = __webpack_require__(10).Color,
    Framer.Layer = __webpack_require__(13).Layer,
    Framer._Layer = Framer.Layer,
    Framer.BackgroundLayer = __webpack_require__(36).BackgroundLayer,
    Framer.VideoLayer = __webpack_require__(37).VideoLayer,
    Framer.SVGLayer = __webpack_require__(38).SVGLayer,
    Framer.Events = __webpack_require__(15).Events,
    Framer.Gestures = __webpack_require__(16).Gestures,
    Framer.Animation = __webpack_require__(18).Animation,
    Framer.AnimationGroup = __webpack_require__(39).AnimationGroup,
    Framer.AnimationStateGroup = __webpack_require__(39).AnimationStateGroup,
    Framer.Screen = __webpack_require__(5).Screen,
    Framer.Align = __webpack_require__(40).Align,
    Framer.print = __webpack_require__(41).print,
    Framer.ScrollComponent = __webpack_require__(44).ScrollComponent,
    Framer.PageComponent = __webpack_require__(45).PageComponent,
    Framer.SliderComponent = __webpack_require__(46).SliderComponent,
    Framer.DeviceComponent = __webpack_require__(47).DeviceComponent,
    Framer.GridComponent = __webpack_require__(48).GridComponent,
    Framer.FlowComponent = __webpack_require__(49).FlowComponent,
    Framer.CircularProgressComponent = __webpack_require__(50).CircularProgressComponent,
    Framer.MIDIComponent = __webpack_require__(51).MIDIComponent,
    Framer.DeviceView = Framer.DeviceComponent,
    window && _.extend(window, Framer),
    Framer.Context = __webpack_require__(42).Context,
    Framer.Config = __webpack_require__(14).Config,
    Framer.EventEmitter = __webpack_require__(7).EventEmitter,
    Framer.BaseClass = __webpack_require__(6).BaseClass,
    Framer.LayerStyle = __webpack_require__(25).LayerStyle,
    Framer.AnimationLoop = __webpack_require__(53).AnimationLoop,
    Framer.LinearAnimator = __webpack_require__(20).LinearAnimator,
    Framer.BezierCurveAnimator = __webpack_require__(21).BezierCurveAnimator,
    Framer.SpringDHOAnimator = __webpack_require__(24).SpringDHOAnimator,
    Framer.SpringRK4Animator = __webpack_require__(22).SpringRK4Animator,
    Framer.LayerDraggable = __webpack_require__(28).LayerDraggable,
    Framer.Importer = __webpack_require__(54).Importer,
    Framer.Extras = __webpack_require__(55),
    Framer.GestureInputRecognizer = new (__webpack_require__(64).GestureInputRecognizer),
    Framer.Version = __webpack_require__(65),
    Framer.Loop = new Framer.AnimationLoop,
    Framer.Info = {},
    window && (window.Framer = Framer),
    Defaults = __webpack_require__(17).Defaults,
    Defaults.setup(),
    Framer.resetDefaults = Defaults.reset,
    Framer.DefaultContext = new Framer.Context({
        name: "Default"
    }),
    Framer.DefaultContext.backgroundColor = "white",
    Framer.DefaultContext.visible = !1,
    Framer.CurrentContext = Framer.DefaultContext,
    window.Canvas = new (__webpack_require__(66).Canvas),
    Utils.isMobile() && Framer.Extras.MobileScrollFix.enable(),
    Utils.isTouch() || Framer.Extras.TouchEmulator.enable(),
    Utils.isFramerStudio() || Framer.Extras.ErrorDisplay.enable(),
    Utils.isFramerStudio() || Framer.Extras.Preloader.enable(),
    Utils.isFramerStudio() || Framer.Extras.Hints.enable(),
    Framer.Preloader || (Framer.DefaultContext.visible = !0),
    Utils.domComplete(Framer.Loop.start)
}
, function(module, exports, __webpack_require__) {
    exports._ = __webpack_require__(2),
    _.pluck = _.map
}
, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_RESULT__;
    (function(global, module) {
        (function() {
            function addMapEntry(map, pair) {
                return map.set(pair[0], pair[1]),
                map
            }
            function addSetEntry(set, value) {
                return set.add(value),
                set
            }
            function apply(func, thisArg, args) {
                switch (args.length) {
                case 0:
                    return func.call(thisArg);
                case 1:
                    return func.call(thisArg, args[0]);
                case 2:
                    return func.call(thisArg, args[0], args[1]);
                case 3:
                    return func.call(thisArg, args[0], args[1], args[2])
                }
                return func.apply(thisArg, args)
            }
            function arrayAggregator(array, setter, iteratee, accumulator) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; ) {
                    var value = array[index];
                    setter(accumulator, value, iteratee(value), array)
                }
                return accumulator
            }
            function arrayEach(array, iteratee) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length && iteratee(array[index], index, array) !== !1; )
                    ;
                return array
            }
            function arrayEachRight(array, iteratee) {
                for (var length = null == array ? 0 : array.length; length-- && iteratee(array[length], length, array) !== !1; )
                    ;
                return array
            }
            function arrayEvery(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; )
                    if (!predicate(array[index], index, array))
                        return !1;
                return !0
            }
            function arrayFilter(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                    var value = array[index];
                    predicate(value, index, array) && (result[resIndex++] = value)
                }
                return result
            }
            function arrayIncludes(array, value) {
                var length = null == array ? 0 : array.length;
                return !!length && baseIndexOf(array, value, 0) > -1
            }
            function arrayIncludesWith(array, value, comparator) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; )
                    if (comparator(value, array[index]))
                        return !0;
                return !1
            }
            function arrayMap(array, iteratee) {
                for (var index = -1, length = null == array ? 0 : array.length, result = Array(length); ++index < length; )
                    result[index] = iteratee(array[index], index, array);
                return result
            }
            function arrayPush(array, values) {
                for (var index = -1, length = values.length, offset = array.length; ++index < length; )
                    array[offset + index] = values[index];
                return array
            }
            function arrayReduce(array, iteratee, accumulator, initAccum) {
                var index = -1
                  , length = null == array ? 0 : array.length;
                for (initAccum && length && (accumulator = array[++index]); ++index < length; )
                    accumulator = iteratee(accumulator, array[index], index, array);
                return accumulator
            }
            function arrayReduceRight(array, iteratee, accumulator, initAccum) {
                var length = null == array ? 0 : array.length;
                for (initAccum && length && (accumulator = array[--length]); length--; )
                    accumulator = iteratee(accumulator, array[length], length, array);
                return accumulator
            }
            function arraySome(array, predicate) {
                for (var index = -1, length = null == array ? 0 : array.length; ++index < length; )
                    if (predicate(array[index], index, array))
                        return !0;
                return !1
            }
            function asciiToArray(string) {
                return string.split("")
            }
            function asciiWords(string) {
                return string.match(reAsciiWord) || []
            }
            function baseFindKey(collection, predicate, eachFunc) {
                var result;
                return eachFunc(collection, function(value, key, collection) {
                    if (predicate(value, key, collection))
                        return result = key,
                        !1
                }),
                result
            }
            function baseFindIndex(array, predicate, fromIndex, fromRight) {
                for (var length = array.length, index = fromIndex + (fromRight ? 1 : -1); fromRight ? index-- : ++index < length; )
                    if (predicate(array[index], index, array))
                        return index;
                return -1
            }
            function baseIndexOf(array, value, fromIndex) {
                return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex)
            }
            function baseIndexOfWith(array, value, fromIndex, comparator) {
                for (var index = fromIndex - 1, length = array.length; ++index < length; )
                    if (comparator(array[index], value))
                        return index;
                return -1
            }
            function baseIsNaN(value) {
                return value !== value
            }
            function baseMean(array, iteratee) {
                var length = null == array ? 0 : array.length;
                return length ? baseSum(array, iteratee) / length : NAN
            }
            function baseProperty(key) {
                return function(object) {
                    return null == object ? undefined : object[key]
                }
            }
            function basePropertyOf(object) {
                return function(key) {
                    return null == object ? undefined : object[key]
                }
            }
            function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
                return eachFunc(collection, function(value, index, collection) {
                    accumulator = initAccum ? (initAccum = !1,
                    value) : iteratee(accumulator, value, index, collection)
                }),
                accumulator
            }
            function baseSortBy(array, comparer) {
                var length = array.length;
                for (array.sort(comparer); length--; )
                    array[length] = array[length].value;
                return array
            }
            function baseSum(array, iteratee) {
                for (var result, index = -1, length = array.length; ++index < length; ) {
                    var current = iteratee(array[index]);
                    current !== undefined && (result = result === undefined ? current : result + current)
                }
                return result
            }
            function baseTimes(n, iteratee) {
                for (var index = -1, result = Array(n); ++index < n; )
                    result[index] = iteratee(index);
                return result
            }
            function baseToPairs(object, props) {
                return arrayMap(props, function(key) {
                    return [key, object[key]]
                })
            }
            function baseUnary(func) {
                return function(value) {
                    return func(value)
                }
            }
            function baseValues(object, props) {
                return arrayMap(props, function(key) {
                    return object[key]
                })
            }
            function cacheHas(cache, key) {
                return cache.has(key)
            }
            function charsStartIndex(strSymbols, chrSymbols) {
                for (var index = -1, length = strSymbols.length; ++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; )
                    ;
                return index
            }
            function charsEndIndex(strSymbols, chrSymbols) {
                for (var index = strSymbols.length; index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1; )
                    ;
                return index
            }
            function countHolders(array, placeholder) {
                for (var length = array.length, result = 0; length--; )
                    array[length] === placeholder && ++result;
                return result
            }
            function escapeStringChar(chr) {
                return "\\" + stringEscapes[chr]
            }
            function getValue(object, key) {
                return null == object ? undefined : object[key]
            }
            function hasUnicode(string) {
                return reHasUnicode.test(string)
            }
            function hasUnicodeWord(string) {
                return reHasUnicodeWord.test(string)
            }
            function iteratorToArray(iterator) {
                for (var data, result = []; !(data = iterator.next()).done; )
                    result.push(data.value);
                return result
            }
            function mapToArray(map) {
                var index = -1
                  , result = Array(map.size);
                return map.forEach(function(value, key) {
                    result[++index] = [key, value]
                }),
                result
            }
            function overArg(func, transform) {
                return function(arg) {
                    return func(transform(arg))
                }
            }
            function replaceHolders(array, placeholder) {
                for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                    var value = array[index];
                    value !== placeholder && value !== PLACEHOLDER || (array[index] = PLACEHOLDER,
                    result[resIndex++] = index)
                }
                return result
            }
            function setToArray(set) {
                var index = -1
                  , result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = value
                }),
                result
            }
            function setToPairs(set) {
                var index = -1
                  , result = Array(set.size);
                return set.forEach(function(value) {
                    result[++index] = [value, value]
                }),
                result
            }
            function strictIndexOf(array, value, fromIndex) {
                for (var index = fromIndex - 1, length = array.length; ++index < length; )
                    if (array[index] === value)
                        return index;
                return -1
            }
            function strictLastIndexOf(array, value, fromIndex) {
                for (var index = fromIndex + 1; index--; )
                    if (array[index] === value)
                        return index;
                return index
            }
            function stringSize(string) {
                return hasUnicode(string) ? unicodeSize(string) : asciiSize(string)
            }
            function stringToArray(string) {
                return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string)
            }
            function unicodeSize(string) {
                for (var result = reUnicode.lastIndex = 0; reUnicode.test(string); )
                    ++result;
                return result
            }
            function unicodeToArray(string) {
                return string.match(reUnicode) || []
            }
            function unicodeWords(string) {
                return string.match(reUnicodeWord) || []
            }
            var undefined, VERSION = "4.17.2", LARGE_ARRAY_SIZE = 200, CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", HASH_UNDEFINED = "__lodash_hash_undefined__", MAX_MEMOIZE_SIZE = 500, PLACEHOLDER = "__lodash_placeholder__", CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4, COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2, WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512, DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...", HOT_COUNT = 800, HOT_SPAN = 16, LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3, INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 1.7976931348623157e308, NAN = NaN, MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1, wrapFlags = [["ary", WRAP_ARY_FLAG], ["bind", WRAP_BIND_FLAG], ["bindKey", WRAP_BIND_KEY_FLAG], ["curry", WRAP_CURRY_FLAG], ["curryRight", WRAP_CURRY_RIGHT_FLAG], ["flip", WRAP_FLIP_FLAG], ["partial", WRAP_PARTIAL_FLAG], ["partialRight", WRAP_PARTIAL_RIGHT_FLAG], ["rearg", WRAP_REARG_FLAG]], argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]", arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]", reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g, reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source), reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g, reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, reLeadingDot = /^\./, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source), reTrim = /^\s+|\s+$/g, reTrimStart = /^\s+/, reTrimEnd = /\s+$/, reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /, reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, reEscapeChar = /\\(\\)?/g, reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, reFlags = /\w*$/, reIsBadHex = /^[-+]0x[0-9a-f]+$/i, reIsBinary = /^0b[01]+$/i, reIsHostCtor = /^\[object .+?Constructor\]$/, reIsOctal = /^0o[0-7]+$/i, reIsUint = /^(?:0|[1-9]\d*)$/, reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, reNoMatch = /($^)/, reUnescapedString = /['\n\r\u2028\u2029\\]/g, rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange, rsApos = "['’]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d", rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", rsOrdUpper = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")", reApos = RegExp(rsApos, "g"), reComboMark = RegExp(rsCombo, "g"), reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g"), reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g"), reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]"), reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, contextProps = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], templateCounter = -1, typedArrayTags = {};
            typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = !0,
            typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = !1;
            var cloneableTags = {};
            cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = !0,
            cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = !1;
            var deburredLetters = {
                "À": "A",
                "Á": "A",
                "Â": "A",
                "Ã": "A",
                "Ä": "A",
                "Å": "A",
                "à": "a",
                "á": "a",
                "â": "a",
                "ã": "a",
                "ä": "a",
                "å": "a",
                "Ç": "C",
                "ç": "c",
                "Ð": "D",
                "ð": "d",
                "È": "E",
                "É": "E",
                "Ê": "E",
                "Ë": "E",
                "è": "e",
                "é": "e",
                "ê": "e",
                "ë": "e",
                "Ì": "I",
                "Í": "I",
                "Î": "I",
                "Ï": "I",
                "ì": "i",
                "í": "i",
                "î": "i",
                "ï": "i",
                "Ñ": "N",
                "ñ": "n",
                "Ò": "O",
                "Ó": "O",
                "Ô": "O",
                "Õ": "O",
                "Ö": "O",
                "Ø": "O",
                "ò": "o",
                "ó": "o",
                "ô": "o",
                "õ": "o",
                "ö": "o",
                "ø": "o",
                "Ù": "U",
                "Ú": "U",
                "Û": "U",
                "Ü": "U",
                "ù": "u",
                "ú": "u",
                "û": "u",
                "ü": "u",
                "Ý": "Y",
                "ý": "y",
                "ÿ": "y",
                "Æ": "Ae",
                "æ": "ae",
                "Þ": "Th",
                "þ": "th",
                "ß": "ss",
                "Ā": "A",
                "Ă": "A",
                "Ą": "A",
                "ā": "a",
                "ă": "a",
                "ą": "a",
                "Ć": "C",
                "Ĉ": "C",
                "Ċ": "C",
                "Č": "C",
                "ć": "c",
                "ĉ": "c",
                "ċ": "c",
                "č": "c",
                "Ď": "D",
                "Đ": "D",
                "ď": "d",
                "đ": "d",
                "Ē": "E",
                "Ĕ": "E",
                "Ė": "E",
                "Ę": "E",
                "Ě": "E",
                "ē": "e",
                "ĕ": "e",
                "ė": "e",
                "ę": "e",
                "ě": "e",
                "Ĝ": "G",
                "Ğ": "G",
                "Ġ": "G",
                "Ģ": "G",
                "ĝ": "g",
                "ğ": "g",
                "ġ": "g",
                "ģ": "g",
                "Ĥ": "H",
                "Ħ": "H",
                "ĥ": "h",
                "ħ": "h",
                "Ĩ": "I",
                "Ī": "I",
                "Ĭ": "I",
                "Į": "I",
                "İ": "I",
                "ĩ": "i",
                "ī": "i",
                "ĭ": "i",
                "į": "i",
                "ı": "i",
                "Ĵ": "J",
                "ĵ": "j",
                "Ķ": "K",
                "ķ": "k",
                "ĸ": "k",
                "Ĺ": "L",
                "Ļ": "L",
                "Ľ": "L",
                "Ŀ": "L",
                "Ł": "L",
                "ĺ": "l",
                "ļ": "l",
                "ľ": "l",
                "ŀ": "l",
                "ł": "l",
                "Ń": "N",
                "Ņ": "N",
                "Ň": "N",
                "Ŋ": "N",
                "ń": "n",
                "ņ": "n",
                "ň": "n",
                "ŋ": "n",
                "Ō": "O",
                "Ŏ": "O",
                "Ő": "O",
                "ō": "o",
                "ŏ": "o",
                "ő": "o",
                "Ŕ": "R",
                "Ŗ": "R",
                "Ř": "R",
                "ŕ": "r",
                "ŗ": "r",
                "ř": "r",
                "Ś": "S",
                "Ŝ": "S",
                "Ş": "S",
                "Š": "S",
                "ś": "s",
                "ŝ": "s",
                "ş": "s",
                "š": "s",
                "Ţ": "T",
                "Ť": "T",
                "Ŧ": "T",
                "ţ": "t",
                "ť": "t",
                "ŧ": "t",
                "Ũ": "U",
                "Ū": "U",
                "Ŭ": "U",
                "Ů": "U",
                "Ű": "U",
                "Ų": "U",
                "ũ": "u",
                "ū": "u",
                "ŭ": "u",
                "ů": "u",
                "ű": "u",
                "ų": "u",
                "Ŵ": "W",
                "ŵ": "w",
                "Ŷ": "Y",
                "ŷ": "y",
                "Ÿ": "Y",
                "Ź": "Z",
                "Ż": "Z",
                "Ž": "Z",
                "ź": "z",
                "ż": "z",
                "ž": "z",
                "Ĳ": "IJ",
                "ĳ": "ij",
                "Œ": "Oe",
                "œ": "oe",
                "ŉ": "'n",
                "ſ": "s"
            }
              , htmlEscapes = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }
              , htmlUnescapes = {
                "&amp;": "&",
                "&lt;": "<",
                "&gt;": ">",
                "&quot;": '"',
                "&#39;": "'"
            }
              , stringEscapes = {
                "\\": "\\",
                "'": "'",
                "\n": "n",
                "\r": "r",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , freeParseFloat = parseFloat
              , freeParseInt = parseInt
              , freeGlobal = "object" == typeof global && global && global.Object === Object && global
              , freeSelf = "object" == typeof self && self && self.Object === Object && self
              , root = freeGlobal || freeSelf || Function("return this")()
              , freeExports = "object" == typeof exports && exports && !exports.nodeType && exports
              , freeModule = freeExports && "object" == typeof module && module && !module.nodeType && module
              , moduleExports = freeModule && freeModule.exports === freeExports
              , freeProcess = moduleExports && freeGlobal.process
              , nodeUtil = function() {
                try {
                    return freeProcess && freeProcess.binding && freeProcess.binding("util")
                } catch (e) {}
            }()
              , nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer
              , nodeIsDate = nodeUtil && nodeUtil.isDate
              , nodeIsMap = nodeUtil && nodeUtil.isMap
              , nodeIsRegExp = nodeUtil && nodeUtil.isRegExp
              , nodeIsSet = nodeUtil && nodeUtil.isSet
              , nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray
              , asciiSize = baseProperty("length")
              , deburrLetter = basePropertyOf(deburredLetters)
              , escapeHtmlChar = basePropertyOf(htmlEscapes)
              , unescapeHtmlChar = basePropertyOf(htmlUnescapes)
              , runInContext = function runInContext(context) {
                function lodash(value) {
                    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
                        if (value instanceof LodashWrapper)
                            return value;
                        if (hasOwnProperty.call(value, "__wrapped__"))
                            return wrapperClone(value)
                    }
                    return new LodashWrapper(value)
                }
                function baseLodash() {}
                function LodashWrapper(value, chainAll) {
                    this.__wrapped__ = value,
                    this.__actions__ = [],
                    this.__chain__ = !!chainAll,
                    this.__index__ = 0,
                    this.__values__ = undefined
                }
                function LazyWrapper(value) {
                    this.__wrapped__ = value,
                    this.__actions__ = [],
                    this.__dir__ = 1,
                    this.__filtered__ = !1,
                    this.__iteratees__ = [],
                    this.__takeCount__ = MAX_ARRAY_LENGTH,
                    this.__views__ = []
                }
                function lazyClone() {
                    var result = new LazyWrapper(this.__wrapped__);
                    return result.__actions__ = copyArray(this.__actions__),
                    result.__dir__ = this.__dir__,
                    result.__filtered__ = this.__filtered__,
                    result.__iteratees__ = copyArray(this.__iteratees__),
                    result.__takeCount__ = this.__takeCount__,
                    result.__views__ = copyArray(this.__views__),
                    result
                }
                function lazyReverse() {
                    if (this.__filtered__) {
                        var result = new LazyWrapper(this);
                        result.__dir__ = -1,
                        result.__filtered__ = !0
                    } else
                        result = this.clone(),
                        result.__dir__ *= -1;
                    return result
                }
                function lazyValue() {
                    var array = this.__wrapped__.value()
                      , dir = this.__dir__
                      , isArr = isArray(array)
                      , isRight = dir < 0
                      , arrLength = isArr ? array.length : 0
                      , view = getView(0, arrLength, this.__views__)
                      , start = view.start
                      , end = view.end
                      , length = end - start
                      , index = isRight ? end : start - 1
                      , iteratees = this.__iteratees__
                      , iterLength = iteratees.length
                      , resIndex = 0
                      , takeCount = nativeMin(length, this.__takeCount__);
                    if (!isArr || arrLength < LARGE_ARRAY_SIZE || arrLength == length && takeCount == length)
                        return baseWrapperValue(array, this.__actions__);
                    var result = [];
                    outer: for (; length-- && resIndex < takeCount; ) {
                        index += dir;
                        for (var iterIndex = -1, value = array[index]; ++iterIndex < iterLength; ) {
                            var data = iteratees[iterIndex]
                              , iteratee = data.iteratee
                              , type = data.type
                              , computed = iteratee(value);
                            if (type == LAZY_MAP_FLAG)
                                value = computed;
                            else if (!computed) {
                                if (type == LAZY_FILTER_FLAG)
                                    continue outer;
                                break outer
                            }
                        }
                        result[resIndex++] = value
                    }
                    return result
                }
                function Hash(entries) {
                    var index = -1
                      , length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1])
                    }
                }
                function hashClear() {
                    this.__data__ = nativeCreate ? nativeCreate(null) : {},
                    this.size = 0
                }
                function hashDelete(key) {
                    var result = this.has(key) && delete this.__data__[key];
                    return this.size -= result ? 1 : 0,
                    result
                }
                function hashGet(key) {
                    var data = this.__data__;
                    if (nativeCreate) {
                        var result = data[key];
                        return result === HASH_UNDEFINED ? undefined : result
                    }
                    return hasOwnProperty.call(data, key) ? data[key] : undefined
                }
                function hashHas(key) {
                    var data = this.__data__;
                    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key)
                }
                function hashSet(key, value) {
                    var data = this.__data__;
                    return this.size += this.has(key) ? 0 : 1,
                    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value,
                    this
                }
                function ListCache(entries) {
                    var index = -1
                      , length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1])
                    }
                }
                function listCacheClear() {
                    this.__data__ = [],
                    this.size = 0
                }
                function listCacheDelete(key) {
                    var data = this.__data__
                      , index = assocIndexOf(data, key);
                    if (index < 0)
                        return !1;
                    var lastIndex = data.length - 1;
                    return index == lastIndex ? data.pop() : splice.call(data, index, 1),
                    --this.size,
                    !0
                }
                function listCacheGet(key) {
                    var data = this.__data__
                      , index = assocIndexOf(data, key);
                    return index < 0 ? undefined : data[index][1]
                }
                function listCacheHas(key) {
                    return assocIndexOf(this.__data__, key) > -1
                }
                function listCacheSet(key, value) {
                    var data = this.__data__
                      , index = assocIndexOf(data, key);
                    return index < 0 ? (++this.size,
                    data.push([key, value])) : data[index][1] = value,
                    this
                }
                function MapCache(entries) {
                    var index = -1
                      , length = null == entries ? 0 : entries.length;
                    for (this.clear(); ++index < length; ) {
                        var entry = entries[index];
                        this.set(entry[0], entry[1])
                    }
                }
                function mapCacheClear() {
                    this.size = 0,
                    this.__data__ = {
                        hash: new Hash,
                        map: new (Map || ListCache),
                        string: new Hash
                    }
                }
                function mapCacheDelete(key) {
                    var result = getMapData(this, key).delete(key);
                    return this.size -= result ? 1 : 0,
                    result
                }
                function mapCacheGet(key) {
                    return getMapData(this, key).get(key)
                }
                function mapCacheHas(key) {
                    return getMapData(this, key).has(key)
                }
                function mapCacheSet(key, value) {
                    var data = getMapData(this, key)
                      , size = data.size;
                    return data.set(key, value),
                    this.size += data.size == size ? 0 : 1,
                    this
                }
                function SetCache(values) {
                    var index = -1
                      , length = null == values ? 0 : values.length;
                    for (this.__data__ = new MapCache; ++index < length; )
                        this.add(values[index])
                }
                function setCacheAdd(value) {
                    return this.__data__.set(value, HASH_UNDEFINED),
                    this
                }
                function setCacheHas(value) {
                    return this.__data__.has(value)
                }
                function Stack(entries) {
                    var data = this.__data__ = new ListCache(entries);
                    this.size = data.size
                }
                function stackClear() {
                    this.__data__ = new ListCache,
                    this.size = 0
                }
                function stackDelete(key) {
                    var data = this.__data__
                      , result = data.delete(key);
                    return this.size = data.size,
                    result
                }
                function stackGet(key) {
                    return this.__data__.get(key)
                }
                function stackHas(key) {
                    return this.__data__.has(key)
                }
                function stackSet(key, value) {
                    var data = this.__data__;
                    if (data instanceof ListCache) {
                        var pairs = data.__data__;
                        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1)
                            return pairs.push([key, value]),
                            this.size = ++data.size,
                            this;
                        data = this.__data__ = new MapCache(pairs)
                    }
                    return data.set(key, value),
                    this.size = data.size,
                    this
                }
                function arrayLikeKeys(value, inherited) {
                    var isArr = isArray(value)
                      , isArg = !isArr && isArguments(value)
                      , isBuff = !isArr && !isArg && isBuffer(value)
                      , isType = !isArr && !isArg && !isBuff && isTypedArray(value)
                      , skipIndexes = isArr || isArg || isBuff || isType
                      , result = skipIndexes ? baseTimes(value.length, String) : []
                      , length = result.length;
                    for (var key in value)
                        !inherited && !hasOwnProperty.call(value, key) || skipIndexes && ("length" == key || isBuff && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || isIndex(key, length)) || result.push(key);
                    return result
                }
                function arraySample(array) {
                    var length = array.length;
                    return length ? array[baseRandom(0, length - 1)] : undefined
                }
                function arraySampleSize(array, n) {
                    return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length))
                }
                function arrayShuffle(array) {
                    return shuffleSelf(copyArray(array))
                }
                function assignInDefaults(objValue, srcValue, key, object) {
                    return objValue === undefined || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key) ? srcValue : objValue
                }
                function assignMergeValue(object, key, value) {
                    (value === undefined || eq(object[key], value)) && (value !== undefined || key in object) || baseAssignValue(object, key, value)
                }
                function assignValue(object, key, value) {
                    var objValue = object[key];
                    hasOwnProperty.call(object, key) && eq(objValue, value) && (value !== undefined || key in object) || baseAssignValue(object, key, value)
                }
                function assocIndexOf(array, key) {
                    for (var length = array.length; length--; )
                        if (eq(array[length][0], key))
                            return length;
                    return -1
                }
                function baseAggregator(collection, setter, iteratee, accumulator) {
                    return baseEach(collection, function(value, key, collection) {
                        setter(accumulator, value, iteratee(value), collection)
                    }),
                    accumulator
                }
                function baseAssign(object, source) {
                    return object && copyObject(source, keys(source), object)
                }
                function baseAssignIn(object, source) {
                    return object && copyObject(source, keysIn(source), object)
                }
                function baseAssignValue(object, key, value) {
                    "__proto__" == key && defineProperty ? defineProperty(object, key, {
                        configurable: !0,
                        enumerable: !0,
                        value: value,
                        writable: !0
                    }) : object[key] = value
                }
                function baseAt(object, paths) {
                    for (var index = -1, length = paths.length, result = Array(length), skip = null == object; ++index < length; )
                        result[index] = skip ? undefined : get(object, paths[index]);
                    return result
                }
                function baseClamp(number, lower, upper) {
                    return number === number && (upper !== undefined && (number = number <= upper ? number : upper),
                    lower !== undefined && (number = number >= lower ? number : lower)),
                    number
                }
                function baseClone(value, bitmask, customizer, key, object, stack) {
                    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
                    if (customizer && (result = object ? customizer(value, key, object, stack) : customizer(value)),
                    result !== undefined)
                        return result;
                    if (!isObject(value))
                        return value;
                    var isArr = isArray(value);
                    if (isArr) {
                        if (result = initCloneArray(value),
                        !isDeep)
                            return copyArray(value, result)
                    } else {
                        var tag = getTag(value)
                          , isFunc = tag == funcTag || tag == genTag;
                        if (isBuffer(value))
                            return cloneBuffer(value, isDeep);
                        if (tag == objectTag || tag == argsTag || isFunc && !object) {
                            if (result = isFlat || isFunc ? {} : initCloneObject(value),
                            !isDeep)
                                return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value))
                        } else {
                            if (!cloneableTags[tag])
                                return object ? value : {};
                            result = initCloneByTag(value, tag, baseClone, isDeep)
                        }
                    }
                    stack || (stack = new Stack);
                    var stacked = stack.get(value);
                    if (stacked)
                        return stacked;
                    stack.set(value, result);
                    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys
                      , props = isArr ? undefined : keysFunc(value);
                    return arrayEach(props || value, function(subValue, key) {
                        props && (key = subValue,
                        subValue = value[key]),
                        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack))
                    }),
                    result
                }
                function baseConforms(source) {
                    var props = keys(source);
                    return function(object) {
                        return baseConformsTo(object, source, props)
                    }
                }
                function baseConformsTo(object, source, props) {
                    var length = props.length;
                    if (null == object)
                        return !length;
                    for (object = Object(object); length--; ) {
                        var key = props[length]
                          , predicate = source[key]
                          , value = object[key];
                        if (value === undefined && !(key in object) || !predicate(value))
                            return !1
                    }
                    return !0
                }
                function baseDelay(func, wait, args) {
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return setTimeout(function() {
                        func.apply(undefined, args)
                    }, wait)
                }
                function baseDifference(array, values, iteratee, comparator) {
                    var index = -1
                      , includes = arrayIncludes
                      , isCommon = !0
                      , length = array.length
                      , result = []
                      , valuesLength = values.length;
                    if (!length)
                        return result;
                    iteratee && (values = arrayMap(values, baseUnary(iteratee))),
                    comparator ? (includes = arrayIncludesWith,
                    isCommon = !1) : values.length >= LARGE_ARRAY_SIZE && (includes = cacheHas,
                    isCommon = !1,
                    values = new SetCache(values));
                    outer: for (; ++index < length; ) {
                        var value = array[index]
                          , computed = null == iteratee ? value : iteratee(value);
                        if (value = comparator || 0 !== value ? value : 0,
                        isCommon && computed === computed) {
                            for (var valuesIndex = valuesLength; valuesIndex--; )
                                if (values[valuesIndex] === computed)
                                    continue outer;
                            result.push(value)
                        } else
                            includes(values, computed, comparator) || result.push(value)
                    }
                    return result
                }
                function baseEvery(collection, predicate) {
                    var result = !0;
                    return baseEach(collection, function(value, index, collection) {
                        return result = !!predicate(value, index, collection)
                    }),
                    result
                }
                function baseExtremum(array, iteratee, comparator) {
                    for (var index = -1, length = array.length; ++index < length; ) {
                        var value = array[index]
                          , current = iteratee(value);
                        if (null != current && (computed === undefined ? current === current && !isSymbol(current) : comparator(current, computed)))
                            var computed = current
                              , result = value
                    }
                    return result
                }
                function baseFill(array, value, start, end) {
                    var length = array.length;
                    for (start = toInteger(start),
                    start < 0 && (start = -start > length ? 0 : length + start),
                    end = end === undefined || end > length ? length : toInteger(end),
                    end < 0 && (end += length),
                    end = start > end ? 0 : toLength(end); start < end; )
                        array[start++] = value;
                    return array
                }
                function baseFilter(collection, predicate) {
                    var result = [];
                    return baseEach(collection, function(value, index, collection) {
                        predicate(value, index, collection) && result.push(value)
                    }),
                    result
                }
                function baseFlatten(array, depth, predicate, isStrict, result) {
                    var index = -1
                      , length = array.length;
                    for (predicate || (predicate = isFlattenable),
                    result || (result = []); ++index < length; ) {
                        var value = array[index];
                        depth > 0 && predicate(value) ? depth > 1 ? baseFlatten(value, depth - 1, predicate, isStrict, result) : arrayPush(result, value) : isStrict || (result[result.length] = value)
                    }
                    return result
                }
                function baseForOwn(object, iteratee) {
                    return object && baseFor(object, iteratee, keys)
                }
                function baseForOwnRight(object, iteratee) {
                    return object && baseForRight(object, iteratee, keys)
                }
                function baseFunctions(object, props) {
                    return arrayFilter(props, function(key) {
                        return isFunction(object[key])
                    })
                }
                function baseGet(object, path) {
                    path = castPath(path, object);
                    for (var index = 0, length = path.length; null != object && index < length; )
                        object = object[toKey(path[index++])];
                    return index && index == length ? object : undefined
                }
                function baseGetAllKeys(object, keysFunc, symbolsFunc) {
                    var result = keysFunc(object);
                    return isArray(object) ? result : arrayPush(result, symbolsFunc(object))
                }
                function baseGetTag(value) {
                    return null == value ? value === undefined ? undefinedTag : nullTag : (value = Object(value),
                    symToStringTag && symToStringTag in value ? getRawTag(value) : objectToString(value))
                }
                function baseGt(value, other) {
                    return value > other
                }
                function baseHas(object, key) {
                    return null != object && hasOwnProperty.call(object, key)
                }
                function baseHasIn(object, key) {
                    return null != object && key in Object(object)
                }
                function baseInRange(number, start, end) {
                    return number >= nativeMin(start, end) && number < nativeMax(start, end)
                }
                function baseIntersection(arrays, iteratee, comparator) {
                    for (var includes = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array(othLength), maxLength = 1 / 0, result = []; othIndex--; ) {
                        var array = arrays[othIndex];
                        othIndex && iteratee && (array = arrayMap(array, baseUnary(iteratee))),
                        maxLength = nativeMin(array.length, maxLength),
                        caches[othIndex] = !comparator && (iteratee || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined
                    }
                    array = arrays[0];
                    var index = -1
                      , seen = caches[0];
                    outer: for (; ++index < length && result.length < maxLength; ) {
                        var value = array[index]
                          , computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0,
                        !(seen ? cacheHas(seen, computed) : includes(result, computed, comparator))) {
                            for (othIndex = othLength; --othIndex; ) {
                                var cache = caches[othIndex];
                                if (!(cache ? cacheHas(cache, computed) : includes(arrays[othIndex], computed, comparator)))
                                    continue outer
                            }
                            seen && seen.push(computed),
                            result.push(value)
                        }
                    }
                    return result
                }
                function baseInverter(object, setter, iteratee, accumulator) {
                    return baseForOwn(object, function(value, key, object) {
                        setter(accumulator, iteratee(value), key, object)
                    }),
                    accumulator
                }
                function baseInvoke(object, path, args) {
                    path = castPath(path, object),
                    object = parent(object, path);
                    var func = null == object ? object : object[toKey(last(path))];
                    return null == func ? undefined : apply(func, object, args)
                }
                function baseIsArguments(value) {
                    return isObjectLike(value) && baseGetTag(value) == argsTag
                }
                function baseIsArrayBuffer(value) {
                    return isObjectLike(value) && baseGetTag(value) == arrayBufferTag
                }
                function baseIsDate(value) {
                    return isObjectLike(value) && baseGetTag(value) == dateTag
                }
                function baseIsEqual(value, other, bitmask, customizer, stack) {
                    return value === other || (null == value || null == other || !isObject(value) && !isObjectLike(other) ? value !== value && other !== other : baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack))
                }
                function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
                    var objIsArr = isArray(object)
                      , othIsArr = isArray(other)
                      , objTag = arrayTag
                      , othTag = arrayTag;
                    objIsArr || (objTag = getTag(object),
                    objTag = objTag == argsTag ? objectTag : objTag),
                    othIsArr || (othTag = getTag(other),
                    othTag = othTag == argsTag ? objectTag : othTag);
                    var objIsObj = objTag == objectTag
                      , othIsObj = othTag == objectTag
                      , isSameTag = objTag == othTag;
                    if (isSameTag && isBuffer(object)) {
                        if (!isBuffer(other))
                            return !1;
                        objIsArr = !0,
                        objIsObj = !1
                    }
                    if (isSameTag && !objIsObj)
                        return stack || (stack = new Stack),
                        objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
                    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
                        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__")
                          , othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
                        if (objIsWrapped || othIsWrapped) {
                            var objUnwrapped = objIsWrapped ? object.value() : object
                              , othUnwrapped = othIsWrapped ? other.value() : other;
                            return stack || (stack = new Stack),
                            equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack)
                        }
                    }
                    return !!isSameTag && (stack || (stack = new Stack),
                    equalObjects(object, other, bitmask, customizer, equalFunc, stack))
                }
                function baseIsMap(value) {
                    return isObjectLike(value) && getTag(value) == mapTag
                }
                function baseIsMatch(object, source, matchData, customizer) {
                    var index = matchData.length
                      , length = index
                      , noCustomizer = !customizer;
                    if (null == object)
                        return !length;
                    for (object = Object(object); index--; ) {
                        var data = matchData[index];
                        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0]in object))
                            return !1
                    }
                    for (; ++index < length; ) {
                        data = matchData[index];
                        var key = data[0]
                          , objValue = object[key]
                          , srcValue = data[1];
                        if (noCustomizer && data[2]) {
                            if (objValue === undefined && !(key in object))
                                return !1
                        } else {
                            var stack = new Stack;
                            if (customizer)
                                var result = customizer(objValue, srcValue, key, object, source, stack);
                            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result))
                                return !1
                        }
                    }
                    return !0
                }
                function baseIsNative(value) {
                    if (!isObject(value) || isMasked(value))
                        return !1;
                    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
                    return pattern.test(toSource(value))
                }
                function baseIsRegExp(value) {
                    return isObjectLike(value) && baseGetTag(value) == regexpTag
                }
                function baseIsSet(value) {
                    return isObjectLike(value) && getTag(value) == setTag
                }
                function baseIsTypedArray(value) {
                    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)]
                }
                function baseIteratee(value) {
                    return "function" == typeof value ? value : null == value ? identity : "object" == typeof value ? isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value) : property(value)
                }
                function baseKeys(object) {
                    if (!isPrototype(object))
                        return nativeKeys(object);
                    var result = [];
                    for (var key in Object(object))
                        hasOwnProperty.call(object, key) && "constructor" != key && result.push(key);
                    return result
                }
                function baseKeysIn(object) {
                    if (!isObject(object))
                        return nativeKeysIn(object);
                    var isProto = isPrototype(object)
                      , result = [];
                    for (var key in object)
                        ("constructor" != key || !isProto && hasOwnProperty.call(object, key)) && result.push(key);
                    return result
                }
                function baseLt(value, other) {
                    return value < other
                }
                function baseMap(collection, iteratee) {
                    var index = -1
                      , result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value, key, collection) {
                        result[++index] = iteratee(value, key, collection)
                    }),
                    result
                }
                function baseMatches(source) {
                    var matchData = getMatchData(source);
                    return 1 == matchData.length && matchData[0][2] ? matchesStrictComparable(matchData[0][0], matchData[0][1]) : function(object) {
                        return object === source || baseIsMatch(object, source, matchData)
                    }
                }
                function baseMatchesProperty(path, srcValue) {
                    return isKey(path) && isStrictComparable(srcValue) ? matchesStrictComparable(toKey(path), srcValue) : function(object) {
                        var objValue = get(object, path);
                        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG)
                    }
                }
                function baseMerge(object, source, srcIndex, customizer, stack) {
                    object !== source && baseFor(source, function(srcValue, key) {
                        if (isObject(srcValue))
                            stack || (stack = new Stack),
                            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
                        else {
                            var newValue = customizer ? customizer(object[key], srcValue, key + "", object, source, stack) : undefined;
                            newValue === undefined && (newValue = srcValue),
                            assignMergeValue(object, key, newValue)
                        }
                    }, keysIn)
                }
                function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
                    var objValue = object[key]
                      , srcValue = source[key]
                      , stacked = stack.get(srcValue);
                    if (stacked)
                        return void assignMergeValue(object, key, stacked);
                    var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined
                      , isCommon = newValue === undefined;
                    if (isCommon) {
                        var isArr = isArray(srcValue)
                          , isBuff = !isArr && isBuffer(srcValue)
                          , isTyped = !isArr && !isBuff && isTypedArray(srcValue);
                        newValue = srcValue,
                        isArr || isBuff || isTyped ? isArray(objValue) ? newValue = objValue : isArrayLikeObject(objValue) ? newValue = copyArray(objValue) : isBuff ? (isCommon = !1,
                        newValue = cloneBuffer(srcValue, !0)) : isTyped ? (isCommon = !1,
                        newValue = cloneTypedArray(srcValue, !0)) : newValue = [] : isPlainObject(srcValue) || isArguments(srcValue) ? (newValue = objValue,
                        isArguments(objValue) ? newValue = toPlainObject(objValue) : (!isObject(objValue) || srcIndex && isFunction(objValue)) && (newValue = initCloneObject(srcValue))) : isCommon = !1
                    }
                    isCommon && (stack.set(srcValue, newValue),
                    mergeFunc(newValue, srcValue, srcIndex, customizer, stack),
                    stack.delete(srcValue)),
                    assignMergeValue(object, key, newValue)
                }
                function baseNth(array, n) {
                    var length = array.length;
                    if (length)
                        return n += n < 0 ? length : 0,
                        isIndex(n, length) ? array[n] : undefined
                }
                function baseOrderBy(collection, iteratees, orders) {
                    var index = -1;
                    iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(getIteratee()));
                    var result = baseMap(collection, function(value, key, collection) {
                        var criteria = arrayMap(iteratees, function(iteratee) {
                            return iteratee(value)
                        });
                        return {
                            criteria: criteria,
                            index: ++index,
                            value: value
                        }
                    });
                    return baseSortBy(result, function(object, other) {
                        return compareMultiple(object, other, orders)
                    })
                }
                function basePick(object, paths) {
                    return object = Object(object),
                    basePickBy(object, paths, function(value, path) {
                        return hasIn(object, path)
                    })
                }
                function basePickBy(object, paths, predicate) {
                    for (var index = -1, length = paths.length, result = {}; ++index < length; ) {
                        var path = paths[index]
                          , value = baseGet(object, path);
                        predicate(value, path) && baseSet(result, castPath(path, object), value)
                    }
                    return result
                }
                function basePropertyDeep(path) {
                    return function(object) {
                        return baseGet(object, path)
                    }
                }
                function basePullAll(array, values, iteratee, comparator) {
                    var indexOf = comparator ? baseIndexOfWith : baseIndexOf
                      , index = -1
                      , length = values.length
                      , seen = array;
                    for (array === values && (values = copyArray(values)),
                    iteratee && (seen = arrayMap(array, baseUnary(iteratee))); ++index < length; )
                        for (var fromIndex = 0, value = values[index], computed = iteratee ? iteratee(value) : value; (fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1; )
                            seen !== array && splice.call(seen, fromIndex, 1),
                            splice.call(array, fromIndex, 1);
                    return array
                }
                function basePullAt(array, indexes) {
                    for (var length = array ? indexes.length : 0, lastIndex = length - 1; length--; ) {
                        var index = indexes[length];
                        if (length == lastIndex || index !== previous) {
                            var previous = index;
                            isIndex(index) ? splice.call(array, index, 1) : baseUnset(array, index)
                        }
                    }
                    return array
                }
                function baseRandom(lower, upper) {
                    return lower + nativeFloor(nativeRandom() * (upper - lower + 1))
                }
                function baseRange(start, end, step, fromRight) {
                    for (var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length); length--; )
                        result[fromRight ? length : ++index] = start,
                        start += step;
                    return result
                }
                function baseRepeat(string, n) {
                    var result = "";
                    if (!string || n < 1 || n > MAX_SAFE_INTEGER)
                        return result;
                    do
                        n % 2 && (result += string),
                        n = nativeFloor(n / 2),
                        n && (string += string);
                    while (n);return result
                }
                function baseRest(func, start) {
                    return setToString(overRest(func, start, identity), func + "")
                }
                function baseSample(collection) {
                    return arraySample(values(collection))
                }
                function baseSampleSize(collection, n) {
                    var array = values(collection);
                    return shuffleSelf(array, baseClamp(n, 0, array.length))
                }
                function baseSet(object, path, value, customizer) {
                    if (!isObject(object))
                        return object;
                    path = castPath(path, object);
                    for (var index = -1, length = path.length, lastIndex = length - 1, nested = object; null != nested && ++index < length; ) {
                        var key = toKey(path[index])
                          , newValue = value;
                        if (index != lastIndex) {
                            var objValue = nested[key];
                            newValue = customizer ? customizer(objValue, key, nested) : undefined,
                            newValue === undefined && (newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {})
                        }
                        assignValue(nested, key, newValue),
                        nested = nested[key]
                    }
                    return object
                }
                function baseShuffle(collection) {
                    return shuffleSelf(values(collection))
                }
                function baseSlice(array, start, end) {
                    var index = -1
                      , length = array.length;
                    start < 0 && (start = -start > length ? 0 : length + start),
                    end = end > length ? length : end,
                    end < 0 && (end += length),
                    length = start > end ? 0 : end - start >>> 0,
                    start >>>= 0;
                    for (var result = Array(length); ++index < length; )
                        result[index] = array[index + start];
                    return result
                }
                function baseSome(collection, predicate) {
                    var result;
                    return baseEach(collection, function(value, index, collection) {
                        return result = predicate(value, index, collection),
                        !result
                    }),
                    !!result
                }
                function baseSortedIndex(array, value, retHighest) {
                    var low = 0
                      , high = null == array ? low : array.length;
                    if ("number" == typeof value && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
                        for (; low < high; ) {
                            var mid = low + high >>> 1
                              , computed = array[mid];
                            null !== computed && !isSymbol(computed) && (retHighest ? computed <= value : computed < value) ? low = mid + 1 : high = mid
                        }
                        return high
                    }
                    return baseSortedIndexBy(array, value, identity, retHighest)
                }
                function baseSortedIndexBy(array, value, iteratee, retHighest) {
                    value = iteratee(value);
                    for (var low = 0, high = null == array ? 0 : array.length, valIsNaN = value !== value, valIsNull = null === value, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined; low < high; ) {
                        var mid = nativeFloor((low + high) / 2)
                          , computed = iteratee(array[mid])
                          , othIsDefined = computed !== undefined
                          , othIsNull = null === computed
                          , othIsReflexive = computed === computed
                          , othIsSymbol = isSymbol(computed);
                        if (valIsNaN)
                            var setLow = retHighest || othIsReflexive;
                        else
                            setLow = valIsUndefined ? othIsReflexive && (retHighest || othIsDefined) : valIsNull ? othIsReflexive && othIsDefined && (retHighest || !othIsNull) : valIsSymbol ? othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol) : !othIsNull && !othIsSymbol && (retHighest ? computed <= value : computed < value);
                        setLow ? low = mid + 1 : high = mid
                    }
                    return nativeMin(high, MAX_ARRAY_INDEX)
                }
                function baseSortedUniq(array, iteratee) {
                    for (var index = -1, length = array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index]
                          , computed = iteratee ? iteratee(value) : value;
                        if (!index || !eq(computed, seen)) {
                            var seen = computed;
                            result[resIndex++] = 0 === value ? 0 : value
                        }
                    }
                    return result
                }
                function baseToNumber(value) {
                    return "number" == typeof value ? value : isSymbol(value) ? NAN : +value
                }
                function baseToString(value) {
                    if ("string" == typeof value)
                        return value;
                    if (isArray(value))
                        return arrayMap(value, baseToString) + "";
                    if (isSymbol(value))
                        return symbolToString ? symbolToString.call(value) : "";
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result
                }
                function baseUniq(array, iteratee, comparator) {
                    var index = -1
                      , includes = arrayIncludes
                      , length = array.length
                      , isCommon = !0
                      , result = []
                      , seen = result;
                    if (comparator)
                        isCommon = !1,
                        includes = arrayIncludesWith;
                    else if (length >= LARGE_ARRAY_SIZE) {
                        var set = iteratee ? null : createSet(array);
                        if (set)
                            return setToArray(set);
                        isCommon = !1,
                        includes = cacheHas,
                        seen = new SetCache
                    } else
                        seen = iteratee ? [] : result;
                    outer: for (; ++index < length; ) {
                        var value = array[index]
                          , computed = iteratee ? iteratee(value) : value;
                        if (value = comparator || 0 !== value ? value : 0,
                        isCommon && computed === computed) {
                            for (var seenIndex = seen.length; seenIndex--; )
                                if (seen[seenIndex] === computed)
                                    continue outer;
                            iteratee && seen.push(computed),
                            result.push(value)
                        } else
                            includes(seen, computed, comparator) || (seen !== result && seen.push(computed),
                            result.push(value))
                    }
                    return result
                }
                function baseUnset(object, path) {
                    return path = castPath(path, object),
                    object = parent(object, path),
                    null == object || delete object[toKey(last(path))]
                }
                function baseUpdate(object, path, updater, customizer) {
                    return baseSet(object, path, updater(baseGet(object, path)), customizer)
                }
                function baseWhile(array, predicate, isDrop, fromRight) {
                    for (var length = array.length, index = fromRight ? length : -1; (fromRight ? index-- : ++index < length) && predicate(array[index], index, array); )
                        ;
                    return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index)
                }
                function baseWrapperValue(value, actions) {
                    var result = value;
                    return result instanceof LazyWrapper && (result = result.value()),
                    arrayReduce(actions, function(result, action) {
                        return action.func.apply(action.thisArg, arrayPush([result], action.args))
                    }, result)
                }
                function baseXor(arrays, iteratee, comparator) {
                    var length = arrays.length;
                    if (length < 2)
                        return length ? baseUniq(arrays[0]) : [];
                    for (var index = -1, result = Array(length); ++index < length; )
                        for (var array = arrays[index], othIndex = -1; ++othIndex < length; )
                            othIndex != index && (result[index] = baseDifference(result[index] || array, arrays[othIndex], iteratee, comparator));
                    return baseUniq(baseFlatten(result, 1), iteratee, comparator)
                }
                function baseZipObject(props, values, assignFunc) {
                    for (var index = -1, length = props.length, valsLength = values.length, result = {}; ++index < length; ) {
                        var value = index < valsLength ? values[index] : undefined;
                        assignFunc(result, props[index], value)
                    }
                    return result
                }
                function castArrayLikeObject(value) {
                    return isArrayLikeObject(value) ? value : []
                }
                function castFunction(value) {
                    return "function" == typeof value ? value : identity
                }
                function castPath(value, object) {
                    return isArray(value) ? value : isKey(value, object) ? [value] : stringToPath(toString(value))
                }
                function castSlice(array, start, end) {
                    var length = array.length;
                    return end = end === undefined ? length : end,
                    !start && end >= length ? array : baseSlice(array, start, end)
                }
                function cloneBuffer(buffer, isDeep) {
                    if (isDeep)
                        return buffer.slice();
                    var length = buffer.length
                      , result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
                    return buffer.copy(result),
                    result
                }
                function cloneArrayBuffer(arrayBuffer) {
                    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
                    return new Uint8Array(result).set(new Uint8Array(arrayBuffer)),
                    result
                }
                function cloneDataView(dataView, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
                    return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength)
                }
                function cloneMap(map, isDeep, cloneFunc) {
                    var array = isDeep ? cloneFunc(mapToArray(map), CLONE_DEEP_FLAG) : mapToArray(map);
                    return arrayReduce(array, addMapEntry, new map.constructor)
                }
                function cloneRegExp(regexp) {
                    var result = new regexp.constructor(regexp.source,reFlags.exec(regexp));
                    return result.lastIndex = regexp.lastIndex,
                    result
                }
                function cloneSet(set, isDeep, cloneFunc) {
                    var array = isDeep ? cloneFunc(setToArray(set), CLONE_DEEP_FLAG) : setToArray(set);
                    return arrayReduce(array, addSetEntry, new set.constructor)
                }
                function cloneSymbol(symbol) {
                    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {}
                }
                function cloneTypedArray(typedArray, isDeep) {
                    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
                    return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length)
                }
                function compareAscending(value, other) {
                    if (value !== other) {
                        var valIsDefined = value !== undefined
                          , valIsNull = null === value
                          , valIsReflexive = value === value
                          , valIsSymbol = isSymbol(value)
                          , othIsDefined = other !== undefined
                          , othIsNull = null === other
                          , othIsReflexive = other === other
                          , othIsSymbol = isSymbol(other);
                        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive)
                            return 1;
                        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive)
                            return -1
                    }
                    return 0
                }
                function compareMultiple(object, other, orders) {
                    for (var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length; ++index < length; ) {
                        var result = compareAscending(objCriteria[index], othCriteria[index]);
                        if (result) {
                            if (index >= ordersLength)
                                return result;
                            var order = orders[index];
                            return result * ("desc" == order ? -1 : 1)
                        }
                    }
                    return object.index - other.index
                }
                function composeArgs(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried; ++leftIndex < leftLength; )
                        result[leftIndex] = partials[leftIndex];
                    for (; ++argsIndex < holdersLength; )
                        (isUncurried || argsIndex < argsLength) && (result[holders[argsIndex]] = args[argsIndex]);
                    for (; rangeLength--; )
                        result[leftIndex++] = args[argsIndex++];
                    return result
                }
                function composeArgsRight(args, partials, holders, isCurried) {
                    for (var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried; ++argsIndex < rangeLength; )
                        result[argsIndex] = args[argsIndex];
                    for (var offset = argsIndex; ++rightIndex < rightLength; )
                        result[offset + rightIndex] = partials[rightIndex];
                    for (; ++holdersIndex < holdersLength; )
                        (isUncurried || argsIndex < argsLength) && (result[offset + holders[holdersIndex]] = args[argsIndex++]);
                    return result
                }
                function copyArray(source, array) {
                    var index = -1
                      , length = source.length;
                    for (array || (array = Array(length)); ++index < length; )
                        array[index] = source[index];
                    return array
                }
                function copyObject(source, props, object, customizer) {
                    var isNew = !object;
                    object || (object = {});
                    for (var index = -1, length = props.length; ++index < length; ) {
                        var key = props[index]
                          , newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
                        newValue === undefined && (newValue = source[key]),
                        isNew ? baseAssignValue(object, key, newValue) : assignValue(object, key, newValue)
                    }
                    return object
                }
                function copySymbols(source, object) {
                    return copyObject(source, getSymbols(source), object)
                }
                function copySymbolsIn(source, object) {
                    return copyObject(source, getSymbolsIn(source), object)
                }
                function createAggregator(setter, initializer) {
                    return function(collection, iteratee) {
                        var func = isArray(collection) ? arrayAggregator : baseAggregator
                          , accumulator = initializer ? initializer() : {};
                        return func(collection, setter, getIteratee(iteratee, 2), accumulator)
                    }
                }
                function createAssigner(assigner) {
                    return baseRest(function(object, sources) {
                        var index = -1
                          , length = sources.length
                          , customizer = length > 1 ? sources[length - 1] : undefined
                          , guard = length > 2 ? sources[2] : undefined;
                        for (customizer = assigner.length > 3 && "function" == typeof customizer ? (length--,
                        customizer) : undefined,
                        guard && isIterateeCall(sources[0], sources[1], guard) && (customizer = length < 3 ? undefined : customizer,
                        length = 1),
                        object = Object(object); ++index < length; ) {
                            var source = sources[index];
                            source && assigner(object, source, index, customizer)
                        }
                        return object
                    })
                }
                function createBaseEach(eachFunc, fromRight) {
                    return function(collection, iteratee) {
                        if (null == collection)
                            return collection;
                        if (!isArrayLike(collection))
                            return eachFunc(collection, iteratee);
                        for (var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection); (fromRight ? index-- : ++index < length) && iteratee(iterable[index], index, iterable) !== !1; )
                            ;
                        return collection
                    }
                }
                function createBaseFor(fromRight) {
                    return function(object, iteratee, keysFunc) {
                        for (var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length; length--; ) {
                            var key = props[fromRight ? length : ++index];
                            if (iteratee(iterable[key], key, iterable) === !1)
                                break
                        }
                        return object
                    }
                }
                function createBind(func, bitmask, thisArg) {
                    function wrapper() {
                        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                        return fn.apply(isBind ? thisArg : this, arguments)
                    }
                    var isBind = bitmask & WRAP_BIND_FLAG
                      , Ctor = createCtor(func);
                    return wrapper
                }
                function createCaseFirst(methodName) {
                    return function(string) {
                        string = toString(string);
                        var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined
                          , chr = strSymbols ? strSymbols[0] : string.charAt(0)
                          , trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
                        return chr[methodName]() + trailing
                    }
                }
                function createCompounder(callback) {
                    return function(string) {
                        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "")
                    }
                }
                function createCtor(Ctor) {
                    return function() {
                        var args = arguments;
                        switch (args.length) {
                        case 0:
                            return new Ctor;
                        case 1:
                            return new Ctor(args[0]);
                        case 2:
                            return new Ctor(args[0],args[1]);
                        case 3:
                            return new Ctor(args[0],args[1],args[2]);
                        case 4:
                            return new Ctor(args[0],args[1],args[2],args[3]);
                        case 5:
                            return new Ctor(args[0],args[1],args[2],args[3],args[4]);
                        case 6:
                            return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);
                        case 7:
                            return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6])
                        }
                        var thisBinding = baseCreate(Ctor.prototype)
                          , result = Ctor.apply(thisBinding, args);
                        return isObject(result) ? result : thisBinding
                    }
                }
                function createCurry(func, bitmask, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper); index--; )
                            args[index] = arguments[index];
                        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
                        if (length -= holders.length,
                        length < arity)
                            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
                        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
                        return apply(fn, this, args)
                    }
                    var Ctor = createCtor(func);
                    return wrapper
                }
                function createFind(findIndexFunc) {
                    return function(collection, predicate, fromIndex) {
                        var iterable = Object(collection);
                        if (!isArrayLike(collection)) {
                            var iteratee = getIteratee(predicate, 3);
                            collection = keys(collection),
                            predicate = function(key) {
                                return iteratee(iterable[key], key, iterable)
                            }
                        }
                        var index = findIndexFunc(collection, predicate, fromIndex);
                        return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined
                    }
                }
                function createFlow(fromRight) {
                    return flatRest(function(funcs) {
                        var length = funcs.length
                          , index = length
                          , prereq = LodashWrapper.prototype.thru;
                        for (fromRight && funcs.reverse(); index--; ) {
                            var func = funcs[index];
                            if ("function" != typeof func)
                                throw new TypeError(FUNC_ERROR_TEXT);
                            if (prereq && !wrapper && "wrapper" == getFuncName(func))
                                var wrapper = new LodashWrapper([],!0)
                        }
                        for (index = wrapper ? index : length; ++index < length; ) {
                            func = funcs[index];
                            var funcName = getFuncName(func)
                              , data = "wrapper" == funcName ? getData(func) : undefined;
                            wrapper = data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && 1 == data[9] ? wrapper[getFuncName(data[0])].apply(wrapper, data[3]) : 1 == func.length && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func)
                        }
                        return function() {
                            var args = arguments
                              , value = args[0];
                            if (wrapper && 1 == args.length && isArray(value) && value.length >= LARGE_ARRAY_SIZE)
                                return wrapper.plant(value).value();
                            for (var index = 0, result = length ? funcs[index].apply(this, args) : value; ++index < length; )
                                result = funcs[index].call(this, result);
                            return result
                        }
                    })
                }
                function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
                    function wrapper() {
                        for (var length = arguments.length, args = Array(length), index = length; index--; )
                            args[index] = arguments[index];
                        if (isCurried)
                            var placeholder = getHolder(wrapper)
                              , holdersCount = countHolders(args, placeholder);
                        if (partials && (args = composeArgs(args, partials, holders, isCurried)),
                        partialsRight && (args = composeArgsRight(args, partialsRight, holdersRight, isCurried)),
                        length -= holdersCount,
                        isCurried && length < arity) {
                            var newHolders = replaceHolders(args, placeholder);
                            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length)
                        }
                        var thisBinding = isBind ? thisArg : this
                          , fn = isBindKey ? thisBinding[func] : func;
                        return length = args.length,
                        argPos ? args = reorder(args, argPos) : isFlip && length > 1 && args.reverse(),
                        isAry && ary < length && (args.length = ary),
                        this && this !== root && this instanceof wrapper && (fn = Ctor || createCtor(fn)),
                        fn.apply(thisBinding, args)
                    }
                    var isAry = bitmask & WRAP_ARY_FLAG
                      , isBind = bitmask & WRAP_BIND_FLAG
                      , isBindKey = bitmask & WRAP_BIND_KEY_FLAG
                      , isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)
                      , isFlip = bitmask & WRAP_FLIP_FLAG
                      , Ctor = isBindKey ? undefined : createCtor(func);
                    return wrapper
                }
                function createInverter(setter, toIteratee) {
                    return function(object, iteratee) {
                        return baseInverter(object, setter, toIteratee(iteratee), {})
                    }
                }
                function createMathOperation(operator, defaultValue) {
                    return function(value, other) {
                        var result;
                        if (value === undefined && other === undefined)
                            return defaultValue;
                        if (value !== undefined && (result = value),
                        other !== undefined) {
                            if (result === undefined)
                                return other;
                            "string" == typeof value || "string" == typeof other ? (value = baseToString(value),
                            other = baseToString(other)) : (value = baseToNumber(value),
                            other = baseToNumber(other)),
                            result = operator(value, other)
                        }
                        return result
                    }
                }
                function createOver(arrayFunc) {
                    return flatRest(function(iteratees) {
                        return iteratees = arrayMap(iteratees, baseUnary(getIteratee())),
                        baseRest(function(args) {
                            var thisArg = this;
                            return arrayFunc(iteratees, function(iteratee) {
                                return apply(iteratee, thisArg, args)
                            })
                        })
                    })
                }
                function createPadding(length, chars) {
                    chars = chars === undefined ? " " : baseToString(chars);
                    var charsLength = chars.length;
                    if (charsLength < 2)
                        return charsLength ? baseRepeat(chars, length) : chars;
                    var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
                    return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join("") : result.slice(0, length)
                }
                function createPartial(func, bitmask, thisArg, partials) {
                    function wrapper() {
                        for (var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func; ++leftIndex < leftLength; )
                            args[leftIndex] = partials[leftIndex];
                        for (; argsLength--; )
                            args[leftIndex++] = arguments[++argsIndex];
                        return apply(fn, isBind ? thisArg : this, args)
                    }
                    var isBind = bitmask & WRAP_BIND_FLAG
                      , Ctor = createCtor(func);
                    return wrapper
                }
                function createRange(fromRight) {
                    return function(start, end, step) {
                        return step && "number" != typeof step && isIterateeCall(start, end, step) && (end = step = undefined),
                        start = toFinite(start),
                        end === undefined ? (end = start,
                        start = 0) : end = toFinite(end),
                        step = step === undefined ? start < end ? 1 : -1 : toFinite(step),
                        baseRange(start, end, step, fromRight)
                    }
                }
                function createRelationalOperation(operator) {
                    return function(value, other) {
                        return "string" == typeof value && "string" == typeof other || (value = toNumber(value),
                        other = toNumber(other)),
                        operator(value, other)
                    }
                }
                function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
                    var isCurry = bitmask & WRAP_CURRY_FLAG
                      , newHolders = isCurry ? holders : undefined
                      , newHoldersRight = isCurry ? undefined : holders
                      , newPartials = isCurry ? partials : undefined
                      , newPartialsRight = isCurry ? undefined : partials;
                    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG,
                    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG),
                    bitmask & WRAP_CURRY_BOUND_FLAG || (bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG));
                    var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity]
                      , result = wrapFunc.apply(undefined, newData);
                    return isLaziable(func) && setData(result, newData),
                    result.placeholder = placeholder,
                    setWrapToString(result, func, bitmask)
                }
                function createRound(methodName) {
                    var func = Math[methodName];
                    return function(number, precision) {
                        if (number = toNumber(number),
                        precision = nativeMin(toInteger(precision), 292)) {
                            var pair = (toString(number) + "e").split("e")
                              , value = func(pair[0] + "e" + (+pair[1] + precision));
                            return pair = (toString(value) + "e").split("e"),
                            +(pair[0] + "e" + (+pair[1] - precision))
                        }
                        return func(number)
                    }
                }
                function createToPairs(keysFunc) {
                    return function(object) {
                        var tag = getTag(object);
                        return tag == mapTag ? mapToArray(object) : tag == setTag ? setToPairs(object) : baseToPairs(object, keysFunc(object))
                    }
                }
                function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
                    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
                    if (!isBindKey && "function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    var length = partials ? partials.length : 0;
                    if (length || (bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG),
                    partials = holders = undefined),
                    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0),
                    arity = arity === undefined ? arity : toInteger(arity),
                    length -= holders ? holders.length : 0,
                    bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
                        var partialsRight = partials
                          , holdersRight = holders;
                        partials = holders = undefined
                    }
                    var data = isBindKey ? undefined : getData(func)
                      , newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];
                    if (data && mergeData(newData, data),
                    func = newData[0],
                    bitmask = newData[1],
                    thisArg = newData[2],
                    partials = newData[3],
                    holders = newData[4],
                    arity = newData[9] = null == newData[9] ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0),
                    !arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG) && (bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)),
                    bitmask && bitmask != WRAP_BIND_FLAG)
                        result = bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG ? createCurry(func, bitmask, arity) : bitmask != WRAP_PARTIAL_FLAG && bitmask != (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG) || holders.length ? createHybrid.apply(undefined, newData) : createPartial(func, bitmask, thisArg, partials);
                    else
                        var result = createBind(func, bitmask, thisArg);
                    var setter = data ? baseSetData : setData;
                    return setWrapToString(setter(result, newData), func, bitmask)
                }
                function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG
                      , arrLength = array.length
                      , othLength = other.length;
                    if (arrLength != othLength && !(isPartial && othLength > arrLength))
                        return !1;
                    var stacked = stack.get(array);
                    if (stacked && stack.get(other))
                        return stacked == other;
                    var index = -1
                      , result = !0
                      , seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
                    for (stack.set(array, other),
                    stack.set(other, array); ++index < arrLength; ) {
                        var arrValue = array[index]
                          , othValue = other[index];
                        if (customizer)
                            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
                        if (compared !== undefined) {
                            if (compared)
                                continue;
                            result = !1;
                            break
                        }
                        if (seen) {
                            if (!arraySome(other, function(othValue, othIndex) {
                                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack)))
                                    return seen.push(othIndex)
                            })) {
                                result = !1;
                                break
                            }
                        } else if (arrValue !== othValue && !equalFunc(arrValue, othValue, bitmask, customizer, stack)) {
                            result = !1;
                            break
                        }
                    }
                    return stack.delete(array),
                    stack.delete(other),
                    result
                }
                function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
                    switch (tag) {
                    case dataViewTag:
                        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset)
                            return !1;
                        object = object.buffer,
                        other = other.buffer;
                    case arrayBufferTag:
                        return !(object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other)));
                    case boolTag:
                    case dateTag:
                    case numberTag:
                        return eq(+object, +other);
                    case errorTag:
                        return object.name == other.name && object.message == other.message;
                    case regexpTag:
                    case stringTag:
                        return object == other + "";
                    case mapTag:
                        var convert = mapToArray;
                    case setTag:
                        var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
                        if (convert || (convert = setToArray),
                        object.size != other.size && !isPartial)
                            return !1;
                        var stacked = stack.get(object);
                        if (stacked)
                            return stacked == other;
                        bitmask |= COMPARE_UNORDERED_FLAG,
                        stack.set(object, other);
                        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
                        return stack.delete(object),
                        result;
                    case symbolTag:
                        if (symbolValueOf)
                            return symbolValueOf.call(object) == symbolValueOf.call(other)
                    }
                    return !1
                }
                function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
                    var isPartial = bitmask & COMPARE_PARTIAL_FLAG
                      , objProps = keys(object)
                      , objLength = objProps.length
                      , othProps = keys(other)
                      , othLength = othProps.length;
                    if (objLength != othLength && !isPartial)
                        return !1;
                    for (var index = objLength; index--; ) {
                        var key = objProps[index];
                        if (!(isPartial ? key in other : hasOwnProperty.call(other, key)))
                            return !1
                    }
                    var stacked = stack.get(object);
                    if (stacked && stack.get(other))
                        return stacked == other;
                    var result = !0;
                    stack.set(object, other),
                    stack.set(other, object);
                    for (var skipCtor = isPartial; ++index < objLength; ) {
                        key = objProps[index];
                        var objValue = object[key]
                          , othValue = other[key];
                        if (customizer)
                            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
                        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
                            result = !1;
                            break
                        }
                        skipCtor || (skipCtor = "constructor" == key)
                    }
                    if (result && !skipCtor) {
                        var objCtor = object.constructor
                          , othCtor = other.constructor;
                        objCtor != othCtor && "constructor"in object && "constructor"in other && !("function" == typeof objCtor && objCtor instanceof objCtor && "function" == typeof othCtor && othCtor instanceof othCtor) && (result = !1)
                    }
                    return stack.delete(object),
                    stack.delete(other),
                    result
                }
                function flatRest(func) {
                    return setToString(overRest(func, undefined, flatten), func + "")
                }
                function getAllKeys(object) {
                    return baseGetAllKeys(object, keys, getSymbols)
                }
                function getAllKeysIn(object) {
                    return baseGetAllKeys(object, keysIn, getSymbolsIn)
                }
                function getFuncName(func) {
                    for (var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0; length--; ) {
                        var data = array[length]
                          , otherFunc = data.func;
                        if (null == otherFunc || otherFunc == func)
                            return data.name
                    }
                    return result
                }
                function getHolder(func) {
                    var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
                    return object.placeholder
                }
                function getIteratee() {
                    var result = lodash.iteratee || iteratee;
                    return result = result === iteratee ? baseIteratee : result,
                    arguments.length ? result(arguments[0], arguments[1]) : result
                }
                function getMapData(map, key) {
                    var data = map.__data__;
                    return isKeyable(key) ? data["string" == typeof key ? "string" : "hash"] : data.map
                }
                function getMatchData(object) {
                    for (var result = keys(object), length = result.length; length--; ) {
                        var key = result[length]
                          , value = object[key];
                        result[length] = [key, value, isStrictComparable(value)]
                    }
                    return result
                }
                function getNative(object, key) {
                    var value = getValue(object, key);
                    return baseIsNative(value) ? value : undefined
                }
                function getRawTag(value) {
                    var isOwn = hasOwnProperty.call(value, symToStringTag)
                      , tag = value[symToStringTag];
                    try {
                        value[symToStringTag] = undefined;
                        var unmasked = !0
                    } catch (e) {}
                    var result = nativeObjectToString.call(value);
                    return unmasked && (isOwn ? value[symToStringTag] = tag : delete value[symToStringTag]),
                    result
                }
                function getView(start, end, transforms) {
                    for (var index = -1, length = transforms.length; ++index < length; ) {
                        var data = transforms[index]
                          , size = data.size;
                        switch (data.type) {
                        case "drop":
                            start += size;
                            break;
                        case "dropRight":
                            end -= size;
                            break;
                        case "take":
                            end = nativeMin(end, start + size);
                            break;
                        case "takeRight":
                            start = nativeMax(start, end - size)
                        }
                    }
                    return {
                        start: start,
                        end: end
                    }
                }
                function getWrapDetails(source) {
                    var match = source.match(reWrapDetails);
                    return match ? match[1].split(reSplitDetails) : []
                }
                function hasPath(object, path, hasFunc) {
                    path = castPath(path, object);
                    for (var index = -1, length = path.length, result = !1; ++index < length; ) {
                        var key = toKey(path[index]);
                        if (!(result = null != object && hasFunc(object, key)))
                            break;
                        object = object[key]
                    }
                    return result || ++index != length ? result : (length = null == object ? 0 : object.length,
                    !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object)))
                }
                function initCloneArray(array) {
                    var length = array.length
                      , result = array.constructor(length);
                    return length && "string" == typeof array[0] && hasOwnProperty.call(array, "index") && (result.index = array.index,
                    result.input = array.input),
                    result
                }
                function initCloneObject(object) {
                    return "function" != typeof object.constructor || isPrototype(object) ? {} : baseCreate(getPrototype(object))
                }
                function initCloneByTag(object, tag, cloneFunc, isDeep) {
                    var Ctor = object.constructor;
                    switch (tag) {
                    case arrayBufferTag:
                        return cloneArrayBuffer(object);
                    case boolTag:
                    case dateTag:
                        return new Ctor(+object);
                    case dataViewTag:
                        return cloneDataView(object, isDeep);
                    case float32Tag:
                    case float64Tag:
                    case int8Tag:
                    case int16Tag:
                    case int32Tag:
                    case uint8Tag:
                    case uint8ClampedTag:
                    case uint16Tag:
                    case uint32Tag:
                        return cloneTypedArray(object, isDeep);
                    case mapTag:
                        return cloneMap(object, isDeep, cloneFunc);
                    case numberTag:
                    case stringTag:
                        return new Ctor(object);
                    case regexpTag:
                        return cloneRegExp(object);
                    case setTag:
                        return cloneSet(object, isDeep, cloneFunc);
                    case symbolTag:
                        return cloneSymbol(object)
                    }
                }
                function insertWrapDetails(source, details) {
                    var length = details.length;
                    if (!length)
                        return source;
                    var lastIndex = length - 1;
                    return details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex],
                    details = details.join(length > 2 ? ", " : " "),
                    source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n")
                }
                function isFlattenable(value) {
                    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol])
                }
                function isIndex(value, length) {
                    return length = null == length ? MAX_SAFE_INTEGER : length,
                    !!length && ("number" == typeof value || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length
                }
                function isIterateeCall(value, index, object) {
                    if (!isObject(object))
                        return !1;
                    var type = typeof index;
                    return !!("number" == type ? isArrayLike(object) && isIndex(index, object.length) : "string" == type && index in object) && eq(object[index], value)
                }
                function isKey(value, object) {
                    if (isArray(value))
                        return !1;
                    var type = typeof value;
                    return !("number" != type && "symbol" != type && "boolean" != type && null != value && !isSymbol(value)) || (reIsPlainProp.test(value) || !reIsDeepProp.test(value) || null != object && value in Object(object))
                }
                function isKeyable(value) {
                    var type = typeof value;
                    return "string" == type || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== value : null === value
                }
                function isLaziable(func) {
                    var funcName = getFuncName(func)
                      , other = lodash[funcName];
                    if ("function" != typeof other || !(funcName in LazyWrapper.prototype))
                        return !1;
                    if (func === other)
                        return !0;
                    var data = getData(other);
                    return !!data && func === data[0]
                }
                function isMasked(func) {
                    return !!maskSrcKey && maskSrcKey in func
                }
                function isPrototype(value) {
                    var Ctor = value && value.constructor
                      , proto = "function" == typeof Ctor && Ctor.prototype || objectProto;
                    return value === proto
                }
                function isStrictComparable(value) {
                    return value === value && !isObject(value)
                }
                function matchesStrictComparable(key, srcValue) {
                    return function(object) {
                        return null != object && (object[key] === srcValue && (srcValue !== undefined || key in Object(object)))
                    }
                }
                function memoizeCapped(func) {
                    var result = memoize(func, function(key) {
                        return cache.size === MAX_MEMOIZE_SIZE && cache.clear(),
                        key
                    })
                      , cache = result.cache;
                    return result
                }
                function mergeData(data, source) {
                    var bitmask = data[1]
                      , srcBitmask = source[1]
                      , newBitmask = bitmask | srcBitmask
                      , isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG)
                      , isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
                    if (!isCommon && !isCombo)
                        return data;
                    srcBitmask & WRAP_BIND_FLAG && (data[2] = source[2],
                    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG);
                    var value = source[3];
                    if (value) {
                        var partials = data[3];
                        data[3] = partials ? composeArgs(partials, value, source[4]) : value,
                        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4]
                    }
                    return value = source[5],
                    value && (partials = data[5],
                    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value,
                    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6]),
                    value = source[7],
                    value && (data[7] = value),
                    srcBitmask & WRAP_ARY_FLAG && (data[8] = null == data[8] ? source[8] : nativeMin(data[8], source[8])),
                    null == data[9] && (data[9] = source[9]),
                    data[0] = source[0],
                    data[1] = newBitmask,
                    data
                }
                function mergeDefaults(objValue, srcValue, key, object, source, stack) {
                    return isObject(objValue) && isObject(srcValue) && (stack.set(srcValue, objValue),
                    baseMerge(objValue, srcValue, undefined, mergeDefaults, stack),
                    stack.delete(srcValue)),
                    objValue
                }
                function nativeKeysIn(object) {
                    var result = [];
                    if (null != object)
                        for (var key in Object(object))
                            result.push(key);
                    return result
                }
                function objectToString(value) {
                    return nativeObjectToString.call(value)
                }
                function overRest(func, start, transform) {
                    return start = nativeMax(start === undefined ? func.length - 1 : start, 0),
                    function() {
                        for (var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length); ++index < length; )
                            array[index] = args[start + index];
                        index = -1;
                        for (var otherArgs = Array(start + 1); ++index < start; )
                            otherArgs[index] = args[index];
                        return otherArgs[start] = transform(array),
                        apply(func, this, otherArgs)
                    }
                }
                function parent(object, path) {
                    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1))
                }
                function reorder(array, indexes) {
                    for (var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array); length--; ) {
                        var index = indexes[length];
                        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined
                    }
                    return array
                }
                function setWrapToString(wrapper, reference, bitmask) {
                    var source = reference + "";
                    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)))
                }
                function shortOut(func) {
                    var count = 0
                      , lastCalled = 0;
                    return function() {
                        var stamp = nativeNow()
                          , remaining = HOT_SPAN - (stamp - lastCalled);
                        if (lastCalled = stamp,
                        remaining > 0) {
                            if (++count >= HOT_COUNT)
                                return arguments[0]
                        } else
                            count = 0;
                        return func.apply(undefined, arguments)
                    }
                }
                function shuffleSelf(array, size) {
                    var index = -1
                      , length = array.length
                      , lastIndex = length - 1;
                    for (size = size === undefined ? length : size; ++index < size; ) {
                        var rand = baseRandom(index, lastIndex)
                          , value = array[rand];
                        array[rand] = array[index],
                        array[index] = value
                    }
                    return array.length = size,
                    array
                }
                function toKey(value) {
                    if ("string" == typeof value || isSymbol(value))
                        return value;
                    var result = value + "";
                    return "0" == result && 1 / value == -INFINITY ? "-0" : result
                }
                function toSource(func) {
                    if (null != func) {
                        try {
                            return funcToString.call(func)
                        } catch (e) {}
                        try {
                            return func + ""
                        } catch (e) {}
                    }
                    return ""
                }
                function updateWrapDetails(details, bitmask) {
                    return arrayEach(wrapFlags, function(pair) {
                        var value = "_." + pair[0];
                        bitmask & pair[1] && !arrayIncludes(details, value) && details.push(value)
                    }),
                    details.sort()
                }
                function wrapperClone(wrapper) {
                    if (wrapper instanceof LazyWrapper)
                        return wrapper.clone();
                    var result = new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);
                    return result.__actions__ = copyArray(wrapper.__actions__),
                    result.__index__ = wrapper.__index__,
                    result.__values__ = wrapper.__values__,
                    result
                }
                function chunk(array, size, guard) {
                    size = (guard ? isIterateeCall(array, size, guard) : size === undefined) ? 1 : nativeMax(toInteger(size), 0);
                    var length = null == array ? 0 : array.length;
                    if (!length || size < 1)
                        return [];
                    for (var index = 0, resIndex = 0, result = Array(nativeCeil(length / size)); index < length; )
                        result[resIndex++] = baseSlice(array, index, index += size);
                    return result
                }
                function compact(array) {
                    for (var index = -1, length = null == array ? 0 : array.length, resIndex = 0, result = []; ++index < length; ) {
                        var value = array[index];
                        value && (result[resIndex++] = value)
                    }
                    return result
                }
                function concat() {
                    var length = arguments.length;
                    if (!length)
                        return [];
                    for (var args = Array(length - 1), array = arguments[0], index = length; index--; )
                        args[index - 1] = arguments[index];
                    return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1))
                }
                function drop(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n),
                    baseSlice(array, n < 0 ? 0 : n, length)) : []
                }
                function dropRight(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n),
                    n = length - n,
                    baseSlice(array, 0, n < 0 ? 0 : n)) : []
                }
                function dropRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0, !0) : []
                }
                function dropWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !0) : []
                }
                function fill(array, value, start, end) {
                    var length = null == array ? 0 : array.length;
                    return length ? (start && "number" != typeof start && isIterateeCall(array, value, start) && (start = 0,
                    end = length),
                    baseFill(array, value, start, end)) : []
                }
                function findIndex(array, predicate, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length)
                        return -1;
                    var index = null == fromIndex ? 0 : toInteger(fromIndex);
                    return index < 0 && (index = nativeMax(length + index, 0)),
                    baseFindIndex(array, getIteratee(predicate, 3), index)
                }
                function findLastIndex(array, predicate, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length)
                        return -1;
                    var index = length - 1;
                    return fromIndex !== undefined && (index = toInteger(fromIndex),
                    index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)),
                    baseFindIndex(array, getIteratee(predicate, 3), index, !0)
                }
                function flatten(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseFlatten(array, 1) : []
                }
                function flattenDeep(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseFlatten(array, INFINITY) : []
                }
                function flattenDepth(array, depth) {
                    var length = null == array ? 0 : array.length;
                    return length ? (depth = depth === undefined ? 1 : toInteger(depth),
                    baseFlatten(array, depth)) : []
                }
                function fromPairs(pairs) {
                    for (var index = -1, length = null == pairs ? 0 : pairs.length, result = {}; ++index < length; ) {
                        var pair = pairs[index];
                        result[pair[0]] = pair[1]
                    }
                    return result
                }
                function head(array) {
                    return array && array.length ? array[0] : undefined
                }
                function indexOf(array, value, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length)
                        return -1;
                    var index = null == fromIndex ? 0 : toInteger(fromIndex);
                    return index < 0 && (index = nativeMax(length + index, 0)),
                    baseIndexOf(array, value, index)
                }
                function initial(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseSlice(array, 0, -1) : []
                }
                function join(array, separator) {
                    return null == array ? "" : nativeJoin.call(array, separator)
                }
                function last(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? array[length - 1] : undefined
                }
                function lastIndexOf(array, value, fromIndex) {
                    var length = null == array ? 0 : array.length;
                    if (!length)
                        return -1;
                    var index = length;
                    return fromIndex !== undefined && (index = toInteger(fromIndex),
                    index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1)),
                    value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, !0)
                }
                function nth(array, n) {
                    return array && array.length ? baseNth(array, toInteger(n)) : undefined
                }
                function pullAll(array, values) {
                    return array && array.length && values && values.length ? basePullAll(array, values) : array
                }
                function pullAllBy(array, values, iteratee) {
                    return array && array.length && values && values.length ? basePullAll(array, values, getIteratee(iteratee, 2)) : array
                }
                function pullAllWith(array, values, comparator) {
                    return array && array.length && values && values.length ? basePullAll(array, values, undefined, comparator) : array
                }
                function remove(array, predicate) {
                    var result = [];
                    if (!array || !array.length)
                        return result;
                    var index = -1
                      , indexes = []
                      , length = array.length;
                    for (predicate = getIteratee(predicate, 3); ++index < length; ) {
                        var value = array[index];
                        predicate(value, index, array) && (result.push(value),
                        indexes.push(index))
                    }
                    return basePullAt(array, indexes),
                    result
                }
                function reverse(array) {
                    return null == array ? array : nativeReverse.call(array)
                }
                function slice(array, start, end) {
                    var length = null == array ? 0 : array.length;
                    return length ? (end && "number" != typeof end && isIterateeCall(array, start, end) ? (start = 0,
                    end = length) : (start = null == start ? 0 : toInteger(start),
                    end = end === undefined ? length : toInteger(end)),
                    baseSlice(array, start, end)) : []
                }
                function sortedIndex(array, value) {
                    return baseSortedIndex(array, value)
                }
                function sortedIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee, 2))
                }
                function sortedIndexOf(array, value) {
                    var length = null == array ? 0 : array.length;
                    if (length) {
                        var index = baseSortedIndex(array, value);
                        if (index < length && eq(array[index], value))
                            return index
                    }
                    return -1
                }
                function sortedLastIndex(array, value) {
                    return baseSortedIndex(array, value, !0)
                }
                function sortedLastIndexBy(array, value, iteratee) {
                    return baseSortedIndexBy(array, value, getIteratee(iteratee, 2), !0)
                }
                function sortedLastIndexOf(array, value) {
                    var length = null == array ? 0 : array.length;
                    if (length) {
                        var index = baseSortedIndex(array, value, !0) - 1;
                        if (eq(array[index], value))
                            return index
                    }
                    return -1
                }
                function sortedUniq(array) {
                    return array && array.length ? baseSortedUniq(array) : []
                }
                function sortedUniqBy(array, iteratee) {
                    return array && array.length ? baseSortedUniq(array, getIteratee(iteratee, 2)) : []
                }
                function tail(array) {
                    var length = null == array ? 0 : array.length;
                    return length ? baseSlice(array, 1, length) : []
                }
                function take(array, n, guard) {
                    return array && array.length ? (n = guard || n === undefined ? 1 : toInteger(n),
                    baseSlice(array, 0, n < 0 ? 0 : n)) : []
                }
                function takeRight(array, n, guard) {
                    var length = null == array ? 0 : array.length;
                    return length ? (n = guard || n === undefined ? 1 : toInteger(n),
                    n = length - n,
                    baseSlice(array, n < 0 ? 0 : n, length)) : []
                }
                function takeRightWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3), !1, !0) : []
                }
                function takeWhile(array, predicate) {
                    return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : []
                }
                function uniq(array) {
                    return array && array.length ? baseUniq(array) : []
                }
                function uniqBy(array, iteratee) {
                    return array && array.length ? baseUniq(array, getIteratee(iteratee, 2)) : []
                }
                function uniqWith(array, comparator) {
                    return comparator = "function" == typeof comparator ? comparator : undefined,
                    array && array.length ? baseUniq(array, undefined, comparator) : []
                }
                function unzip(array) {
                    if (!array || !array.length)
                        return [];
                    var length = 0;
                    return array = arrayFilter(array, function(group) {
                        if (isArrayLikeObject(group))
                            return length = nativeMax(group.length, length),
                            !0
                    }),
                    baseTimes(length, function(index) {
                        return arrayMap(array, baseProperty(index))
                    })
                }
                function unzipWith(array, iteratee) {
                    if (!array || !array.length)
                        return [];
                    var result = unzip(array);
                    return null == iteratee ? result : arrayMap(result, function(group) {
                        return apply(iteratee, undefined, group)
                    })
                }
                function zipObject(props, values) {
                    return baseZipObject(props || [], values || [], assignValue)
                }
                function zipObjectDeep(props, values) {
                    return baseZipObject(props || [], values || [], baseSet)
                }
                function chain(value) {
                    var result = lodash(value);
                    return result.__chain__ = !0,
                    result
                }
                function tap(value, interceptor) {
                    return interceptor(value),
                    value
                }
                function thru(value, interceptor) {
                    return interceptor(value)
                }
                function wrapperChain() {
                    return chain(this)
                }
                function wrapperCommit() {
                    return new LodashWrapper(this.value(),this.__chain__)
                }
                function wrapperNext() {
                    this.__values__ === undefined && (this.__values__ = toArray(this.value()));
                    var done = this.__index__ >= this.__values__.length
                      , value = done ? undefined : this.__values__[this.__index__++];
                    return {
                        done: done,
                        value: value
                    }
                }
                function wrapperToIterator() {
                    return this
                }
                function wrapperPlant(value) {
                    for (var result, parent = this; parent instanceof baseLodash; ) {
                        var clone = wrapperClone(parent);
                        clone.__index__ = 0,
                        clone.__values__ = undefined,
                        result ? previous.__wrapped__ = clone : result = clone;
                        var previous = clone;
                        parent = parent.__wrapped__
                    }
                    return previous.__wrapped__ = value,
                    result
                }
                function wrapperReverse() {
                    var value = this.__wrapped__;
                    if (value instanceof LazyWrapper) {
                        var wrapped = value;
                        return this.__actions__.length && (wrapped = new LazyWrapper(this)),
                        wrapped = wrapped.reverse(),
                        wrapped.__actions__.push({
                            func: thru,
                            args: [reverse],
                            thisArg: undefined
                        }),
                        new LodashWrapper(wrapped,this.__chain__)
                    }
                    return this.thru(reverse)
                }
                function wrapperValue() {
                    return baseWrapperValue(this.__wrapped__, this.__actions__)
                }
                function every(collection, predicate, guard) {
                    var func = isArray(collection) ? arrayEvery : baseEvery;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined),
                    func(collection, getIteratee(predicate, 3))
                }
                function filter(collection, predicate) {
                    var func = isArray(collection) ? arrayFilter : baseFilter;
                    return func(collection, getIteratee(predicate, 3))
                }
                function flatMap(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), 1)
                }
                function flatMapDeep(collection, iteratee) {
                    return baseFlatten(map(collection, iteratee), INFINITY)
                }
                function flatMapDepth(collection, iteratee, depth) {
                    return depth = depth === undefined ? 1 : toInteger(depth),
                    baseFlatten(map(collection, iteratee), depth)
                }
                function forEach(collection, iteratee) {
                    var func = isArray(collection) ? arrayEach : baseEach;
                    return func(collection, getIteratee(iteratee, 3))
                }
                function forEachRight(collection, iteratee) {
                    var func = isArray(collection) ? arrayEachRight : baseEachRight;
                    return func(collection, getIteratee(iteratee, 3))
                }
                function includes(collection, value, fromIndex, guard) {
                    collection = isArrayLike(collection) ? collection : values(collection),
                    fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
                    var length = collection.length;
                    return fromIndex < 0 && (fromIndex = nativeMax(length + fromIndex, 0)),
                    isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1
                }
                function map(collection, iteratee) {
                    var func = isArray(collection) ? arrayMap : baseMap;
                    return func(collection, getIteratee(iteratee, 3))
                }
                function orderBy(collection, iteratees, orders, guard) {
                    return null == collection ? [] : (isArray(iteratees) || (iteratees = null == iteratees ? [] : [iteratees]),
                    orders = guard ? undefined : orders,
                    isArray(orders) || (orders = null == orders ? [] : [orders]),
                    baseOrderBy(collection, iteratees, orders))
                }
                function reduce(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduce : baseReduce
                      , initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEach)
                }
                function reduceRight(collection, iteratee, accumulator) {
                    var func = isArray(collection) ? arrayReduceRight : baseReduce
                      , initAccum = arguments.length < 3;
                    return func(collection, getIteratee(iteratee, 4), accumulator, initAccum, baseEachRight)
                }
                function reject(collection, predicate) {
                    var func = isArray(collection) ? arrayFilter : baseFilter;
                    return func(collection, negate(getIteratee(predicate, 3)))
                }
                function sample(collection) {
                    var func = isArray(collection) ? arraySample : baseSample;
                    return func(collection)
                }
                function sampleSize(collection, n, guard) {
                    n = (guard ? isIterateeCall(collection, n, guard) : n === undefined) ? 1 : toInteger(n);
                    var func = isArray(collection) ? arraySampleSize : baseSampleSize;
                    return func(collection, n)
                }
                function shuffle(collection) {
                    var func = isArray(collection) ? arrayShuffle : baseShuffle;
                    return func(collection)
                }
                function size(collection) {
                    if (null == collection)
                        return 0;
                    if (isArrayLike(collection))
                        return isString(collection) ? stringSize(collection) : collection.length;
                    var tag = getTag(collection);
                    return tag == mapTag || tag == setTag ? collection.size : baseKeys(collection).length
                }
                function some(collection, predicate, guard) {
                    var func = isArray(collection) ? arraySome : baseSome;
                    return guard && isIterateeCall(collection, predicate, guard) && (predicate = undefined),
                    func(collection, getIteratee(predicate, 3))
                }
                function after(n, func) {
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n),
                    function() {
                        if (--n < 1)
                            return func.apply(this, arguments)
                    }
                }
                function ary(func, n, guard) {
                    return n = guard ? undefined : n,
                    n = func && null == n ? func.length : n,
                    createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n)
                }
                function before(n, func) {
                    var result;
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return n = toInteger(n),
                    function() {
                        return --n > 0 && (result = func.apply(this, arguments)),
                        n <= 1 && (func = undefined),
                        result
                    }
                }
                function curry(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curry.placeholder,
                    result
                }
                function curryRight(func, arity, guard) {
                    arity = guard ? undefined : arity;
                    var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
                    return result.placeholder = curryRight.placeholder,
                    result
                }
                function debounce(func, wait, options) {
                    function invokeFunc(time) {
                        var args = lastArgs
                          , thisArg = lastThis;
                        return lastArgs = lastThis = undefined,
                        lastInvokeTime = time,
                        result = func.apply(thisArg, args)
                    }
                    function leadingEdge(time) {
                        return lastInvokeTime = time,
                        timerId = setTimeout(timerExpired, wait),
                        leading ? invokeFunc(time) : result
                    }
                    function remainingWait(time) {
                        var timeSinceLastCall = time - lastCallTime
                          , timeSinceLastInvoke = time - lastInvokeTime
                          , result = wait - timeSinceLastCall;
                        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result
                    }
                    function shouldInvoke(time) {
                        var timeSinceLastCall = time - lastCallTime
                          , timeSinceLastInvoke = time - lastInvokeTime;
                        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait
                    }
                    function timerExpired() {
                        var time = now();
                        return shouldInvoke(time) ? trailingEdge(time) : void (timerId = setTimeout(timerExpired, remainingWait(time)))
                    }
                    function trailingEdge(time) {
                        return timerId = undefined,
                        trailing && lastArgs ? invokeFunc(time) : (lastArgs = lastThis = undefined,
                        result)
                    }
                    function cancel() {
                        timerId !== undefined && clearTimeout(timerId),
                        lastInvokeTime = 0,
                        lastArgs = lastCallTime = lastThis = timerId = undefined
                    }
                    function flush() {
                        return timerId === undefined ? result : trailingEdge(now())
                    }
                    function debounced() {
                        var time = now()
                          , isInvoking = shouldInvoke(time);
                        if (lastArgs = arguments,
                        lastThis = this,
                        lastCallTime = time,
                        isInvoking) {
                            if (timerId === undefined)
                                return leadingEdge(lastCallTime);
                            if (maxing)
                                return timerId = setTimeout(timerExpired, wait),
                                invokeFunc(lastCallTime)
                        }
                        return timerId === undefined && (timerId = setTimeout(timerExpired, wait)),
                        result
                    }
                    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = !1, maxing = !1, trailing = !0;
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return wait = toNumber(wait) || 0,
                    isObject(options) && (leading = !!options.leading,
                    maxing = "maxWait"in options,
                    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait,
                    trailing = "trailing"in options ? !!options.trailing : trailing),
                    debounced.cancel = cancel,
                    debounced.flush = flush,
                    debounced
                }
                function flip(func) {
                    return createWrap(func, WRAP_FLIP_FLAG)
                }
                function memoize(func, resolver) {
                    if ("function" != typeof func || null != resolver && "function" != typeof resolver)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    var memoized = function() {
                        var args = arguments
                          , key = resolver ? resolver.apply(this, args) : args[0]
                          , cache = memoized.cache;
                        if (cache.has(key))
                            return cache.get(key);
                        var result = func.apply(this, args);
                        return memoized.cache = cache.set(key, result) || cache,
                        result
                    };
                    return memoized.cache = new (memoize.Cache || MapCache),
                    memoized
                }
                function negate(predicate) {
                    if ("function" != typeof predicate)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return function() {
                        var args = arguments;
                        switch (args.length) {
                        case 0:
                            return !predicate.call(this);
                        case 1:
                            return !predicate.call(this, args[0]);
                        case 2:
                            return !predicate.call(this, args[0], args[1]);
                        case 3:
                            return !predicate.call(this, args[0], args[1], args[2])
                        }
                        return !predicate.apply(this, args)
                    }
                }
                function once(func) {
                    return before(2, func)
                }
                function rest(func, start) {
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return start = start === undefined ? start : toInteger(start),
                    baseRest(func, start)
                }
                function spread(func, start) {
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return start = start === undefined ? 0 : nativeMax(toInteger(start), 0),
                    baseRest(function(args) {
                        var array = args[start]
                          , otherArgs = castSlice(args, 0, start);
                        return array && arrayPush(otherArgs, array),
                        apply(func, this, otherArgs)
                    })
                }
                function throttle(func, wait, options) {
                    var leading = !0
                      , trailing = !0;
                    if ("function" != typeof func)
                        throw new TypeError(FUNC_ERROR_TEXT);
                    return isObject(options) && (leading = "leading"in options ? !!options.leading : leading,
                    trailing = "trailing"in options ? !!options.trailing : trailing),
                    debounce(func, wait, {
                        leading: leading,
                        maxWait: wait,
                        trailing: trailing
                    })
                }
                function unary(func) {
                    return ary(func, 1)
                }
                function wrap(value, wrapper) {
                    return partial(castFunction(wrapper), value)
                }
                function castArray() {
                    if (!arguments.length)
                        return [];
                    var value = arguments[0];
                    return isArray(value) ? value : [value]
                }
                function clone(value) {
                    return baseClone(value, CLONE_SYMBOLS_FLAG)
                }
                function cloneWith(value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined,
                    baseClone(value, CLONE_SYMBOLS_FLAG, customizer)
                }
                function cloneDeep(value) {
                    return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG)
                }
                function cloneDeepWith(value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined,
                    baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer)
                }
                function conformsTo(object, source) {
                    return null == source || baseConformsTo(object, source, keys(source))
                }
                function eq(value, other) {
                    return value === other || value !== value && other !== other
                }
                function isArrayLike(value) {
                    return null != value && isLength(value.length) && !isFunction(value)
                }
                function isArrayLikeObject(value) {
                    return isObjectLike(value) && isArrayLike(value)
                }
                function isBoolean(value) {
                    return value === !0 || value === !1 || isObjectLike(value) && baseGetTag(value) == boolTag
                }
                function isElement(value) {
                    return isObjectLike(value) && 1 === value.nodeType && !isPlainObject(value)
                }
                function isEmpty(value) {
                    if (null == value)
                        return !0;
                    if (isArrayLike(value) && (isArray(value) || "string" == typeof value || "function" == typeof value.splice || isBuffer(value) || isTypedArray(value) || isArguments(value)))
                        return !value.length;
                    var tag = getTag(value);
                    if (tag == mapTag || tag == setTag)
                        return !value.size;
                    if (isPrototype(value))
                        return !baseKeys(value).length;
                    for (var key in value)
                        if (hasOwnProperty.call(value, key))
                            return !1;
                    return !0
                }
                function isEqual(value, other) {
                    return baseIsEqual(value, other)
                }
                function isEqualWith(value, other, customizer) {
                    customizer = "function" == typeof customizer ? customizer : undefined;
                    var result = customizer ? customizer(value, other) : undefined;
                    return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result
                }
                function isError(value) {
                    if (!isObjectLike(value))
                        return !1;
                    var tag = baseGetTag(value);
                    return tag == errorTag || tag == domExcTag || "string" == typeof value.message && "string" == typeof value.name && !isPlainObject(value)
                }
                function isFinite(value) {
                    return "number" == typeof value && nativeIsFinite(value)
                }
                function isFunction(value) {
                    if (!isObject(value))
                        return !1;
                    var tag = baseGetTag(value);
                    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag
                }
                function isInteger(value) {
                    return "number" == typeof value && value == toInteger(value);
                }
                function isLength(value) {
                    return "number" == typeof value && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
                }
                function isObject(value) {
                    var type = typeof value;
                    return null != value && ("object" == type || "function" == type)
                }
                function isObjectLike(value) {
                    return null != value && "object" == typeof value
                }
                function isMatch(object, source) {
                    return object === source || baseIsMatch(object, source, getMatchData(source))
                }
                function isMatchWith(object, source, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined,
                    baseIsMatch(object, source, getMatchData(source), customizer)
                }
                function isNaN(value) {
                    return isNumber(value) && value != +value
                }
                function isNative(value) {
                    if (isMaskable(value))
                        throw new Error(CORE_ERROR_TEXT);
                    return baseIsNative(value)
                }
                function isNull(value) {
                    return null === value
                }
                function isNil(value) {
                    return null == value
                }
                function isNumber(value) {
                    return "number" == typeof value || isObjectLike(value) && baseGetTag(value) == numberTag
                }
                function isPlainObject(value) {
                    if (!isObjectLike(value) || baseGetTag(value) != objectTag)
                        return !1;
                    var proto = getPrototype(value);
                    if (null === proto)
                        return !0;
                    var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
                    return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString
                }
                function isSafeInteger(value) {
                    return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER
                }
                function isString(value) {
                    return "string" == typeof value || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag
                }
                function isSymbol(value) {
                    return "symbol" == typeof value || isObjectLike(value) && baseGetTag(value) == symbolTag
                }
                function isUndefined(value) {
                    return value === undefined
                }
                function isWeakMap(value) {
                    return isObjectLike(value) && getTag(value) == weakMapTag
                }
                function isWeakSet(value) {
                    return isObjectLike(value) && baseGetTag(value) == weakSetTag
                }
                function toArray(value) {
                    if (!value)
                        return [];
                    if (isArrayLike(value))
                        return isString(value) ? stringToArray(value) : copyArray(value);
                    if (symIterator && value[symIterator])
                        return iteratorToArray(value[symIterator]());
                    var tag = getTag(value)
                      , func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
                    return func(value)
                }
                function toFinite(value) {
                    if (!value)
                        return 0 === value ? value : 0;
                    if (value = toNumber(value),
                    value === INFINITY || value === -INFINITY) {
                        var sign = value < 0 ? -1 : 1;
                        return sign * MAX_INTEGER
                    }
                    return value === value ? value : 0
                }
                function toInteger(value) {
                    var result = toFinite(value)
                      , remainder = result % 1;
                    return result === result ? remainder ? result - remainder : result : 0
                }
                function toLength(value) {
                    return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0
                }
                function toNumber(value) {
                    if ("number" == typeof value)
                        return value;
                    if (isSymbol(value))
                        return NAN;
                    if (isObject(value)) {
                        var other = "function" == typeof value.valueOf ? value.valueOf() : value;
                        value = isObject(other) ? other + "" : other
                    }
                    if ("string" != typeof value)
                        return 0 === value ? value : +value;
                    value = value.replace(reTrim, "");
                    var isBinary = reIsBinary.test(value);
                    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value
                }
                function toPlainObject(value) {
                    return copyObject(value, keysIn(value))
                }
                function toSafeInteger(value) {
                    return baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER)
                }
                function toString(value) {
                    return null == value ? "" : baseToString(value)
                }
                function create(prototype, properties) {
                    var result = baseCreate(prototype);
                    return null == properties ? result : baseAssign(result, properties)
                }
                function findKey(object, predicate) {
                    return baseFindKey(object, getIteratee(predicate, 3), baseForOwn)
                }
                function findLastKey(object, predicate) {
                    return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight)
                }
                function forIn(object, iteratee) {
                    return null == object ? object : baseFor(object, getIteratee(iteratee, 3), keysIn)
                }
                function forInRight(object, iteratee) {
                    return null == object ? object : baseForRight(object, getIteratee(iteratee, 3), keysIn)
                }
                function forOwn(object, iteratee) {
                    return object && baseForOwn(object, getIteratee(iteratee, 3))
                }
                function forOwnRight(object, iteratee) {
                    return object && baseForOwnRight(object, getIteratee(iteratee, 3))
                }
                function functions(object) {
                    return null == object ? [] : baseFunctions(object, keys(object))
                }
                function functionsIn(object) {
                    return null == object ? [] : baseFunctions(object, keysIn(object))
                }
                function get(object, path, defaultValue) {
                    var result = null == object ? undefined : baseGet(object, path);
                    return result === undefined ? defaultValue : result
                }
                function has(object, path) {
                    return null != object && hasPath(object, path, baseHas)
                }
                function hasIn(object, path) {
                    return null != object && hasPath(object, path, baseHasIn)
                }
                function keys(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object)
                }
                function keysIn(object) {
                    return isArrayLike(object) ? arrayLikeKeys(object, !0) : baseKeysIn(object)
                }
                function mapKeys(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3),
                    baseForOwn(object, function(value, key, object) {
                        baseAssignValue(result, iteratee(value, key, object), value)
                    }),
                    result
                }
                function mapValues(object, iteratee) {
                    var result = {};
                    return iteratee = getIteratee(iteratee, 3),
                    baseForOwn(object, function(value, key, object) {
                        baseAssignValue(result, key, iteratee(value, key, object))
                    }),
                    result
                }
                function omitBy(object, predicate) {
                    return pickBy(object, negate(getIteratee(predicate)))
                }
                function pickBy(object, predicate) {
                    if (null == object)
                        return {};
                    var props = arrayMap(getAllKeysIn(object), function(prop) {
                        return [prop]
                    });
                    return predicate = getIteratee(predicate),
                    basePickBy(object, props, function(value, path) {
                        return predicate(value, path[0])
                    })
                }
                function result(object, path, defaultValue) {
                    path = castPath(path, object);
                    var index = -1
                      , length = path.length;
                    for (length || (length = 1,
                    object = undefined); ++index < length; ) {
                        var value = null == object ? undefined : object[toKey(path[index])];
                        value === undefined && (index = length,
                        value = defaultValue),
                        object = isFunction(value) ? value.call(object) : value
                    }
                    return object
                }
                function set(object, path, value) {
                    return null == object ? object : baseSet(object, path, value)
                }
                function setWith(object, path, value, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined,
                    null == object ? object : baseSet(object, path, value, customizer)
                }
                function transform(object, iteratee, accumulator) {
                    var isArr = isArray(object)
                      , isArrLike = isArr || isBuffer(object) || isTypedArray(object);
                    if (iteratee = getIteratee(iteratee, 4),
                    null == accumulator) {
                        var Ctor = object && object.constructor;
                        accumulator = isArrLike ? isArr ? new Ctor : [] : isObject(object) && isFunction(Ctor) ? baseCreate(getPrototype(object)) : {}
                    }
                    return (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
                        return iteratee(accumulator, value, index, object)
                    }),
                    accumulator
                }
                function unset(object, path) {
                    return null == object || baseUnset(object, path)
                }
                function update(object, path, updater) {
                    return null == object ? object : baseUpdate(object, path, castFunction(updater))
                }
                function updateWith(object, path, updater, customizer) {
                    return customizer = "function" == typeof customizer ? customizer : undefined,
                    null == object ? object : baseUpdate(object, path, castFunction(updater), customizer)
                }
                function values(object) {
                    return null == object ? [] : baseValues(object, keys(object))
                }
                function valuesIn(object) {
                    return null == object ? [] : baseValues(object, keysIn(object))
                }
                function clamp(number, lower, upper) {
                    return upper === undefined && (upper = lower,
                    lower = undefined),
                    upper !== undefined && (upper = toNumber(upper),
                    upper = upper === upper ? upper : 0),
                    lower !== undefined && (lower = toNumber(lower),
                    lower = lower === lower ? lower : 0),
                    baseClamp(toNumber(number), lower, upper)
                }
                function inRange(number, start, end) {
                    return start = toFinite(start),
                    end === undefined ? (end = start,
                    start = 0) : end = toFinite(end),
                    number = toNumber(number),
                    baseInRange(number, start, end)
                }
                function random(lower, upper, floating) {
                    if (floating && "boolean" != typeof floating && isIterateeCall(lower, upper, floating) && (upper = floating = undefined),
                    floating === undefined && ("boolean" == typeof upper ? (floating = upper,
                    upper = undefined) : "boolean" == typeof lower && (floating = lower,
                    lower = undefined)),
                    lower === undefined && upper === undefined ? (lower = 0,
                    upper = 1) : (lower = toFinite(lower),
                    upper === undefined ? (upper = lower,
                    lower = 0) : upper = toFinite(upper)),
                    lower > upper) {
                        var temp = lower;
                        lower = upper,
                        upper = temp
                    }
                    if (floating || lower % 1 || upper % 1) {
                        var rand = nativeRandom();
                        return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper)
                    }
                    return baseRandom(lower, upper)
                }
                function capitalize(string) {
                    return upperFirst(toString(string).toLowerCase())
                }
                function deburr(string) {
                    return string = toString(string),
                    string && string.replace(reLatin, deburrLetter).replace(reComboMark, "")
                }
                function endsWith(string, target, position) {
                    string = toString(string),
                    target = baseToString(target);
                    var length = string.length;
                    position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
                    var end = position;
                    return position -= target.length,
                    position >= 0 && string.slice(position, end) == target
                }
                function escape(string) {
                    return string = toString(string),
                    string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string
                }
                function escapeRegExp(string) {
                    return string = toString(string),
                    string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string
                }
                function pad(string, length, chars) {
                    string = toString(string),
                    length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    if (!length || strLength >= length)
                        return string;
                    var mid = (length - strLength) / 2;
                    return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars)
                }
                function padEnd(string, length, chars) {
                    string = toString(string),
                    length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && strLength < length ? string + createPadding(length - strLength, chars) : string
                }
                function padStart(string, length, chars) {
                    string = toString(string),
                    length = toInteger(length);
                    var strLength = length ? stringSize(string) : 0;
                    return length && strLength < length ? createPadding(length - strLength, chars) + string : string
                }
                function parseInt(string, radix, guard) {
                    return guard || null == radix ? radix = 0 : radix && (radix = +radix),
                    nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0)
                }
                function repeat(string, n, guard) {
                    return n = (guard ? isIterateeCall(string, n, guard) : n === undefined) ? 1 : toInteger(n),
                    baseRepeat(toString(string), n)
                }
                function replace() {
                    var args = arguments
                      , string = toString(args[0]);
                    return args.length < 3 ? string : string.replace(args[1], args[2])
                }
                function split(string, separator, limit) {
                    return limit && "number" != typeof limit && isIterateeCall(string, separator, limit) && (separator = limit = undefined),
                    (limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0) ? (string = toString(string),
                    string && ("string" == typeof separator || null != separator && !isRegExp(separator)) && (separator = baseToString(separator),
                    !separator && hasUnicode(string)) ? castSlice(stringToArray(string), 0, limit) : string.split(separator, limit)) : []
                }
                function startsWith(string, target, position) {
                    return string = toString(string),
                    position = baseClamp(toInteger(position), 0, string.length),
                    target = baseToString(target),
                    string.slice(position, position + target.length) == target
                }
                function template(string, options, guard) {
                    var settings = lodash.templateSettings;
                    guard && isIterateeCall(string, options, guard) && (options = undefined),
                    string = toString(string),
                    options = assignInWith({}, options, settings, assignInDefaults);
                    var isEscaping, isEvaluating, imports = assignInWith({}, options.imports, settings.imports, assignInDefaults), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys), index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '", reDelimiters = RegExp((options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$", "g"), sourceURL = "//# sourceURL=" + ("sourceURL"in options ? options.sourceURL : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
                    string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
                        return interpolateValue || (interpolateValue = esTemplateValue),
                        source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar),
                        escapeValue && (isEscaping = !0,
                        source += "' +\n__e(" + escapeValue + ") +\n'"),
                        evaluateValue && (isEvaluating = !0,
                        source += "';\n" + evaluateValue + ";\n__p += '"),
                        interpolateValue && (source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'"),
                        index = offset + match.length,
                        match
                    }),
                    source += "';\n";
                    var variable = options.variable;
                    variable || (source = "with (obj) {\n" + source + "\n}\n"),
                    source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;"),
                    source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
                    var result = attempt(function() {
                        return Function(importsKeys, sourceURL + "return " + source).apply(undefined, importsValues)
                    });
                    if (result.source = source,
                    isError(result))
                        throw result;
                    return result
                }
                function toLower(value) {
                    return toString(value).toLowerCase()
                }
                function toUpper(value) {
                    return toString(value).toUpperCase()
                }
                function trim(string, chars, guard) {
                    if (string = toString(string),
                    string && (guard || chars === undefined))
                        return string.replace(reTrim, "");
                    if (!string || !(chars = baseToString(chars)))
                        return string;
                    var strSymbols = stringToArray(string)
                      , chrSymbols = stringToArray(chars)
                      , start = charsStartIndex(strSymbols, chrSymbols)
                      , end = charsEndIndex(strSymbols, chrSymbols) + 1;
                    return castSlice(strSymbols, start, end).join("")
                }
                function trimEnd(string, chars, guard) {
                    if (string = toString(string),
                    string && (guard || chars === undefined))
                        return string.replace(reTrimEnd, "");
                    if (!string || !(chars = baseToString(chars)))
                        return string;
                    var strSymbols = stringToArray(string)
                      , end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
                    return castSlice(strSymbols, 0, end).join("")
                }
                function trimStart(string, chars, guard) {
                    if (string = toString(string),
                    string && (guard || chars === undefined))
                        return string.replace(reTrimStart, "");
                    if (!string || !(chars = baseToString(chars)))
                        return string;
                    var strSymbols = stringToArray(string)
                      , start = charsStartIndex(strSymbols, stringToArray(chars));
                    return castSlice(strSymbols, start).join("")
                }
                function truncate(string, options) {
                    var length = DEFAULT_TRUNC_LENGTH
                      , omission = DEFAULT_TRUNC_OMISSION;
                    if (isObject(options)) {
                        var separator = "separator"in options ? options.separator : separator;
                        length = "length"in options ? toInteger(options.length) : length,
                        omission = "omission"in options ? baseToString(options.omission) : omission
                    }
                    string = toString(string);
                    var strLength = string.length;
                    if (hasUnicode(string)) {
                        var strSymbols = stringToArray(string);
                        strLength = strSymbols.length
                    }
                    if (length >= strLength)
                        return string;
                    var end = length - stringSize(omission);
                    if (end < 1)
                        return omission;
                    var result = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
                    if (separator === undefined)
                        return result + omission;
                    if (strSymbols && (end += result.length - end),
                    isRegExp(separator)) {
                        if (string.slice(end).search(separator)) {
                            var match, substring = result;
                            for (separator.global || (separator = RegExp(separator.source, toString(reFlags.exec(separator)) + "g")),
                            separator.lastIndex = 0; match = separator.exec(substring); )
                                var newEnd = match.index;
                            result = result.slice(0, newEnd === undefined ? end : newEnd)
                        }
                    } else if (string.indexOf(baseToString(separator), end) != end) {
                        var index = result.lastIndexOf(separator);
                        index > -1 && (result = result.slice(0, index))
                    }
                    return result + omission
                }
                function unescape(string) {
                    return string = toString(string),
                    string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string
                }
                function words(string, pattern, guard) {
                    return string = toString(string),
                    pattern = guard ? undefined : pattern,
                    pattern === undefined ? hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string) : string.match(pattern) || []
                }
                function cond(pairs) {
                    var length = null == pairs ? 0 : pairs.length
                      , toIteratee = getIteratee();
                    return pairs = length ? arrayMap(pairs, function(pair) {
                        if ("function" != typeof pair[1])
                            throw new TypeError(FUNC_ERROR_TEXT);
                        return [toIteratee(pair[0]), pair[1]]
                    }) : [],
                    baseRest(function(args) {
                        for (var index = -1; ++index < length; ) {
                            var pair = pairs[index];
                            if (apply(pair[0], this, args))
                                return apply(pair[1], this, args)
                        }
                    })
                }
                function conforms(source) {
                    return baseConforms(baseClone(source, CLONE_DEEP_FLAG))
                }
                function constant(value) {
                    return function() {
                        return value
                    }
                }
                function defaultTo(value, defaultValue) {
                    return null == value || value !== value ? defaultValue : value
                }
                function identity(value) {
                    return value
                }
                function iteratee(func) {
                    return baseIteratee("function" == typeof func ? func : baseClone(func, CLONE_DEEP_FLAG))
                }
                function matches(source) {
                    return baseMatches(baseClone(source, CLONE_DEEP_FLAG))
                }
                function matchesProperty(path, srcValue) {
                    return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG))
                }
                function mixin(object, source, options) {
                    var props = keys(source)
                      , methodNames = baseFunctions(source, props);
                    null != options || isObject(source) && (methodNames.length || !props.length) || (options = source,
                    source = object,
                    object = this,
                    methodNames = baseFunctions(source, keys(source)));
                    var chain = !(isObject(options) && "chain"in options && !options.chain)
                      , isFunc = isFunction(object);
                    return arrayEach(methodNames, function(methodName) {
                        var func = source[methodName];
                        object[methodName] = func,
                        isFunc && (object.prototype[methodName] = function() {
                            var chainAll = this.__chain__;
                            if (chain || chainAll) {
                                var result = object(this.__wrapped__)
                                  , actions = result.__actions__ = copyArray(this.__actions__);
                                return actions.push({
                                    func: func,
                                    args: arguments,
                                    thisArg: object
                                }),
                                result.__chain__ = chainAll,
                                result
                            }
                            return func.apply(object, arrayPush([this.value()], arguments))
                        }
                        )
                    }),
                    object
                }
                function noConflict() {
                    return root._ === this && (root._ = oldDash),
                    this
                }
                function noop() {}
                function nthArg(n) {
                    return n = toInteger(n),
                    baseRest(function(args) {
                        return baseNth(args, n)
                    })
                }
                function property(path) {
                    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path)
                }
                function propertyOf(object) {
                    return function(path) {
                        return null == object ? undefined : baseGet(object, path)
                    }
                }
                function stubArray() {
                    return []
                }
                function stubFalse() {
                    return !1
                }
                function stubObject() {
                    return {}
                }
                function stubString() {
                    return ""
                }
                function stubTrue() {
                    return !0
                }
                function times(n, iteratee) {
                    if (n = toInteger(n),
                    n < 1 || n > MAX_SAFE_INTEGER)
                        return [];
                    var index = MAX_ARRAY_LENGTH
                      , length = nativeMin(n, MAX_ARRAY_LENGTH);
                    iteratee = getIteratee(iteratee),
                    n -= MAX_ARRAY_LENGTH;
                    for (var result = baseTimes(length, iteratee); ++index < n; )
                        iteratee(index);
                    return result
                }
                function toPath(value) {
                    return isArray(value) ? arrayMap(value, toKey) : isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)))
                }
                function uniqueId(prefix) {
                    var id = ++idCounter;
                    return toString(prefix) + id
                }
                function max(array) {
                    return array && array.length ? baseExtremum(array, identity, baseGt) : undefined
                }
                function maxBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseGt) : undefined
                }
                function mean(array) {
                    return baseMean(array, identity)
                }
                function meanBy(array, iteratee) {
                    return baseMean(array, getIteratee(iteratee, 2))
                }
                function min(array) {
                    return array && array.length ? baseExtremum(array, identity, baseLt) : undefined
                }
                function minBy(array, iteratee) {
                    return array && array.length ? baseExtremum(array, getIteratee(iteratee, 2), baseLt) : undefined
                }
                function sum(array) {
                    return array && array.length ? baseSum(array, identity) : 0
                }
                function sumBy(array, iteratee) {
                    return array && array.length ? baseSum(array, getIteratee(iteratee, 2)) : 0
                }
                context = null == context ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
                var Array = context.Array
                  , Date = context.Date
                  , Error = context.Error
                  , Function = context.Function
                  , Math = context.Math
                  , Object = context.Object
                  , RegExp = context.RegExp
                  , String = context.String
                  , TypeError = context.TypeError
                  , arrayProto = Array.prototype
                  , funcProto = Function.prototype
                  , objectProto = Object.prototype
                  , coreJsData = context["__core-js_shared__"]
                  , funcToString = funcProto.toString
                  , hasOwnProperty = objectProto.hasOwnProperty
                  , idCounter = 0
                  , maskSrcKey = function() {
                    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
                    return uid ? "Symbol(src)_1." + uid : ""
                }()
                  , nativeObjectToString = objectProto.toString
                  , objectCtorString = funcToString.call(Object)
                  , oldDash = root._
                  , reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
                  , Buffer = moduleExports ? context.Buffer : undefined
                  , Symbol = context.Symbol
                  , Uint8Array = context.Uint8Array
                  , allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined
                  , getPrototype = overArg(Object.getPrototypeOf, Object)
                  , objectCreate = Object.create
                  , propertyIsEnumerable = objectProto.propertyIsEnumerable
                  , splice = arrayProto.splice
                  , spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined
                  , symIterator = Symbol ? Symbol.iterator : undefined
                  , symToStringTag = Symbol ? Symbol.toStringTag : undefined
                  , defineProperty = function() {
                    try {
                        var func = getNative(Object, "defineProperty");
                        return func({}, "", {}),
                        func
                    } catch (e) {}
                }()
                  , ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout
                  , ctxNow = Date && Date.now !== root.Date.now && Date.now
                  , ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout
                  , nativeCeil = Math.ceil
                  , nativeFloor = Math.floor
                  , nativeGetSymbols = Object.getOwnPropertySymbols
                  , nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined
                  , nativeIsFinite = context.isFinite
                  , nativeJoin = arrayProto.join
                  , nativeKeys = overArg(Object.keys, Object)
                  , nativeMax = Math.max
                  , nativeMin = Math.min
                  , nativeNow = Date.now
                  , nativeParseInt = context.parseInt
                  , nativeRandom = Math.random
                  , nativeReverse = arrayProto.reverse
                  , DataView = getNative(context, "DataView")
                  , Map = getNative(context, "Map")
                  , Promise = getNative(context, "Promise")
                  , Set = getNative(context, "Set")
                  , WeakMap = getNative(context, "WeakMap")
                  , nativeCreate = getNative(Object, "create")
                  , metaMap = WeakMap && new WeakMap
                  , realNames = {}
                  , dataViewCtorString = toSource(DataView)
                  , mapCtorString = toSource(Map)
                  , promiseCtorString = toSource(Promise)
                  , setCtorString = toSource(Set)
                  , weakMapCtorString = toSource(WeakMap)
                  , symbolProto = Symbol ? Symbol.prototype : undefined
                  , symbolValueOf = symbolProto ? symbolProto.valueOf : undefined
                  , symbolToString = symbolProto ? symbolProto.toString : undefined
                  , baseCreate = function() {
                    function object() {}
                    return function(proto) {
                        if (!isObject(proto))
                            return {};
                        if (objectCreate)
                            return objectCreate(proto);
                        object.prototype = proto;
                        var result = new object;
                        return object.prototype = undefined,
                        result
                    }
                }();
                lodash.templateSettings = {
                    escape: reEscape,
                    evaluate: reEvaluate,
                    interpolate: reInterpolate,
                    variable: "",
                    imports: {
                        _: lodash
                    }
                },
                lodash.prototype = baseLodash.prototype,
                lodash.prototype.constructor = lodash,
                LodashWrapper.prototype = baseCreate(baseLodash.prototype),
                LodashWrapper.prototype.constructor = LodashWrapper,
                LazyWrapper.prototype = baseCreate(baseLodash.prototype),
                LazyWrapper.prototype.constructor = LazyWrapper,
                Hash.prototype.clear = hashClear,
                Hash.prototype.delete = hashDelete,
                Hash.prototype.get = hashGet,
                Hash.prototype.has = hashHas,
                Hash.prototype.set = hashSet,
                ListCache.prototype.clear = listCacheClear,
                ListCache.prototype.delete = listCacheDelete,
                ListCache.prototype.get = listCacheGet,
                ListCache.prototype.has = listCacheHas,
                ListCache.prototype.set = listCacheSet,
                MapCache.prototype.clear = mapCacheClear,
                MapCache.prototype.delete = mapCacheDelete,
                MapCache.prototype.get = mapCacheGet,
                MapCache.prototype.has = mapCacheHas,
                MapCache.prototype.set = mapCacheSet,
                SetCache.prototype.add = SetCache.prototype.push = setCacheAdd,
                SetCache.prototype.has = setCacheHas,
                Stack.prototype.clear = stackClear,
                Stack.prototype.delete = stackDelete,
                Stack.prototype.get = stackGet,
                Stack.prototype.has = stackHas,
                Stack.prototype.set = stackSet;
                var baseEach = createBaseEach(baseForOwn)
                  , baseEachRight = createBaseEach(baseForOwnRight, !0)
                  , baseFor = createBaseFor()
                  , baseForRight = createBaseFor(!0)
                  , baseSetData = metaMap ? function(func, data) {
                    return metaMap.set(func, data),
                    func
                }
                : identity
                  , baseSetToString = defineProperty ? function(func, string) {
                    return defineProperty(func, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: constant(string),
                        writable: !0
                    })
                }
                : identity
                  , castRest = baseRest
                  , clearTimeout = ctxClearTimeout || function(id) {
                    return root.clearTimeout(id)
                }
                  , createSet = Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY ? function(values) {
                    return new Set(values)
                }
                : noop
                  , getData = metaMap ? function(func) {
                    return metaMap.get(func)
                }
                : noop
                  , getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray
                  , getSymbolsIn = nativeGetSymbols ? function(object) {
                    for (var result = []; object; )
                        arrayPush(result, getSymbols(object)),
                        object = getPrototype(object);
                    return result
                }
                : stubArray
                  , getTag = baseGetTag;
                (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) && (getTag = function(value) {
                    var result = baseGetTag(value)
                      , Ctor = result == objectTag ? value.constructor : undefined
                      , ctorString = Ctor ? toSource(Ctor) : "";
                    if (ctorString)
                        switch (ctorString) {
                        case dataViewCtorString:
                            return dataViewTag;
                        case mapCtorString:
                            return mapTag;
                        case promiseCtorString:
                            return promiseTag;
                        case setCtorString:
                            return setTag;
                        case weakMapCtorString:
                            return weakMapTag
                        }
                    return result
                }
                );
                var isMaskable = coreJsData ? isFunction : stubFalse
                  , setData = shortOut(baseSetData)
                  , setTimeout = ctxSetTimeout || function(func, wait) {
                    return root.setTimeout(func, wait)
                }
                  , setToString = shortOut(baseSetToString)
                  , stringToPath = memoizeCapped(function(string) {
                    var result = [];
                    return reLeadingDot.test(string) && result.push(""),
                    string.replace(rePropName, function(match, number, quote, string) {
                        result.push(quote ? string.replace(reEscapeChar, "$1") : number || match)
                    }),
                    result
                })
                  , difference = baseRest(function(array, values) {
                    return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0)) : []
                })
                  , differenceBy = baseRest(function(array, values) {
                    var iteratee = last(values);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined),
                    isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2)) : []
                })
                  , differenceWith = baseRest(function(array, values) {
                    var comparator = last(values);
                    return isArrayLikeObject(comparator) && (comparator = undefined),
                    isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values, 1, isArrayLikeObject, !0), undefined, comparator) : []
                })
                  , intersection = baseRest(function(arrays) {
                    var mapped = arrayMap(arrays, castArrayLikeObject);
                    return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : []
                })
                  , intersectionBy = baseRest(function(arrays) {
                    var iteratee = last(arrays)
                      , mapped = arrayMap(arrays, castArrayLikeObject);
                    return iteratee === last(mapped) ? iteratee = undefined : mapped.pop(),
                    mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee, 2)) : []
                })
                  , intersectionWith = baseRest(function(arrays) {
                    var comparator = last(arrays)
                      , mapped = arrayMap(arrays, castArrayLikeObject);
                    return comparator = "function" == typeof comparator ? comparator : undefined,
                    comparator && mapped.pop(),
                    mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined, comparator) : []
                })
                  , pull = baseRest(pullAll)
                  , pullAt = flatRest(function(array, indexes) {
                    var length = null == array ? 0 : array.length
                      , result = baseAt(array, indexes);
                    return basePullAt(array, arrayMap(indexes, function(index) {
                        return isIndex(index, length) ? +index : index
                    }).sort(compareAscending)),
                    result
                })
                  , union = baseRest(function(arrays) {
                    return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0))
                })
                  , unionBy = baseRest(function(arrays) {
                    var iteratee = last(arrays);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined),
                    baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), getIteratee(iteratee, 2))
                })
                  , unionWith = baseRest(function(arrays) {
                    var comparator = last(arrays);
                    return comparator = "function" == typeof comparator ? comparator : undefined,
                    baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, !0), undefined, comparator)
                })
                  , without = baseRest(function(array, values) {
                    return isArrayLikeObject(array) ? baseDifference(array, values) : []
                })
                  , xor = baseRest(function(arrays) {
                    return baseXor(arrayFilter(arrays, isArrayLikeObject))
                })
                  , xorBy = baseRest(function(arrays) {
                    var iteratee = last(arrays);
                    return isArrayLikeObject(iteratee) && (iteratee = undefined),
                    baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee, 2))
                })
                  , xorWith = baseRest(function(arrays) {
                    var comparator = last(arrays);
                    return comparator = "function" == typeof comparator ? comparator : undefined,
                    baseXor(arrayFilter(arrays, isArrayLikeObject), undefined, comparator)
                })
                  , zip = baseRest(unzip)
                  , zipWith = baseRest(function(arrays) {
                    var length = arrays.length
                      , iteratee = length > 1 ? arrays[length - 1] : undefined;
                    return iteratee = "function" == typeof iteratee ? (arrays.pop(),
                    iteratee) : undefined,
                    unzipWith(arrays, iteratee)
                })
                  , wrapperAt = flatRest(function(paths) {
                    var length = paths.length
                      , start = length ? paths[0] : 0
                      , value = this.__wrapped__
                      , interceptor = function(object) {
                        return baseAt(object, paths)
                    };
                    return !(length > 1 || this.__actions__.length) && value instanceof LazyWrapper && isIndex(start) ? (value = value.slice(start, +start + (length ? 1 : 0)),
                    value.__actions__.push({
                        func: thru,
                        args: [interceptor],
                        thisArg: undefined
                    }),
                    new LodashWrapper(value,this.__chain__).thru(function(array) {
                        return length && !array.length && array.push(undefined),
                        array
                    })) : this.thru(interceptor)
                })
                  , countBy = createAggregator(function(result, value, key) {
                    hasOwnProperty.call(result, key) ? ++result[key] : baseAssignValue(result, key, 1)
                })
                  , find = createFind(findIndex)
                  , findLast = createFind(findLastIndex)
                  , groupBy = createAggregator(function(result, value, key) {
                    hasOwnProperty.call(result, key) ? result[key].push(value) : baseAssignValue(result, key, [value])
                })
                  , invokeMap = baseRest(function(collection, path, args) {
                    var index = -1
                      , isFunc = "function" == typeof path
                      , result = isArrayLike(collection) ? Array(collection.length) : [];
                    return baseEach(collection, function(value) {
                        result[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args)
                    }),
                    result
                })
                  , keyBy = createAggregator(function(result, value, key) {
                    baseAssignValue(result, key, value)
                })
                  , partition = createAggregator(function(result, value, key) {
                    result[key ? 0 : 1].push(value)
                }, function() {
                    return [[], []]
                })
                  , sortBy = baseRest(function(collection, iteratees) {
                    if (null == collection)
                        return [];
                    var length = iteratees.length;
                    return length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1]) ? iteratees = [] : length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2]) && (iteratees = [iteratees[0]]),
                    baseOrderBy(collection, baseFlatten(iteratees, 1), [])
                })
                  , now = ctxNow || function() {
                    return root.Date.now()
                }
                  , bind = baseRest(function(func, thisArg, partials) {
                    var bitmask = WRAP_BIND_FLAG;
                    if (partials.length) {
                        var holders = replaceHolders(partials, getHolder(bind));
                        bitmask |= WRAP_PARTIAL_FLAG
                    }
                    return createWrap(func, bitmask, thisArg, partials, holders)
                })
                  , bindKey = baseRest(function(object, key, partials) {
                    var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
                    if (partials.length) {
                        var holders = replaceHolders(partials, getHolder(bindKey));
                        bitmask |= WRAP_PARTIAL_FLAG
                    }
                    return createWrap(key, bitmask, object, partials, holders)
                })
                  , defer = baseRest(function(func, args) {
                    return baseDelay(func, 1, args)
                })
                  , delay = baseRest(function(func, wait, args) {
                    return baseDelay(func, toNumber(wait) || 0, args)
                });
                memoize.Cache = MapCache;
                var overArgs = castRest(function(func, transforms) {
                    transforms = 1 == transforms.length && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
                    var funcsLength = transforms.length;
                    return baseRest(function(args) {
                        for (var index = -1, length = nativeMin(args.length, funcsLength); ++index < length; )
                            args[index] = transforms[index].call(this, args[index]);
                        return apply(func, this, args)
                    })
                })
                  , partial = baseRest(function(func, partials) {
                    var holders = replaceHolders(partials, getHolder(partial));
                    return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders)
                })
                  , partialRight = baseRest(function(func, partials) {
                    var holders = replaceHolders(partials, getHolder(partialRight));
                    return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders)
                })
                  , rearg = flatRest(function(func, indexes) {
                    return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes)
                })
                  , gt = createRelationalOperation(baseGt)
                  , gte = createRelationalOperation(function(value, other) {
                    return value >= other
                })
                  , isArguments = baseIsArguments(function() {
                    return arguments
                }()) ? baseIsArguments : function(value) {
                    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee")
                }
                  , isArray = Array.isArray
                  , isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer
                  , isBuffer = nativeIsBuffer || stubFalse
                  , isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate
                  , isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap
                  , isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp
                  , isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet
                  , isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray
                  , lt = createRelationalOperation(baseLt)
                  , lte = createRelationalOperation(function(value, other) {
                    return value <= other
                })
                  , assign = createAssigner(function(object, source) {
                    if (isPrototype(source) || isArrayLike(source))
                        return void copyObject(source, keys(source), object);
                    for (var key in source)
                        hasOwnProperty.call(source, key) && assignValue(object, key, source[key]);
                })
                  , assignIn = createAssigner(function(object, source) {
                    copyObject(source, keysIn(source), object)
                })
                  , assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
                    copyObject(source, keysIn(source), object, customizer)
                })
                  , assignWith = createAssigner(function(object, source, srcIndex, customizer) {
                    copyObject(source, keys(source), object, customizer)
                })
                  , at = flatRest(baseAt)
                  , defaults = baseRest(function(args) {
                    return args.push(undefined, assignInDefaults),
                    apply(assignInWith, undefined, args)
                })
                  , defaultsDeep = baseRest(function(args) {
                    return args.push(undefined, mergeDefaults),
                    apply(mergeWith, undefined, args)
                })
                  , invert = createInverter(function(result, value, key) {
                    result[value] = key
                }, constant(identity))
                  , invertBy = createInverter(function(result, value, key) {
                    hasOwnProperty.call(result, value) ? result[value].push(key) : result[value] = [key]
                }, getIteratee)
                  , invoke = baseRest(baseInvoke)
                  , merge = createAssigner(function(object, source, srcIndex) {
                    baseMerge(object, source, srcIndex)
                })
                  , mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
                    baseMerge(object, source, srcIndex, customizer)
                })
                  , omit = flatRest(function(object, paths) {
                    var result = {};
                    if (null == object)
                        return result;
                    var isDeep = !1;
                    paths = arrayMap(paths, function(path) {
                        return path = castPath(path, object),
                        isDeep || (isDeep = path.length > 1),
                        path
                    }),
                    copyObject(object, getAllKeysIn(object), result),
                    isDeep && (result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG));
                    for (var length = paths.length; length--; )
                        baseUnset(result, paths[length]);
                    return result
                })
                  , pick = flatRest(function(object, paths) {
                    return null == object ? {} : basePick(object, paths)
                })
                  , toPairs = createToPairs(keys)
                  , toPairsIn = createToPairs(keysIn)
                  , camelCase = createCompounder(function(result, word, index) {
                    return word = word.toLowerCase(),
                    result + (index ? capitalize(word) : word)
                })
                  , kebabCase = createCompounder(function(result, word, index) {
                    return result + (index ? "-" : "") + word.toLowerCase()
                })
                  , lowerCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + word.toLowerCase()
                })
                  , lowerFirst = createCaseFirst("toLowerCase")
                  , snakeCase = createCompounder(function(result, word, index) {
                    return result + (index ? "_" : "") + word.toLowerCase()
                })
                  , startCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + upperFirst(word)
                })
                  , upperCase = createCompounder(function(result, word, index) {
                    return result + (index ? " " : "") + word.toUpperCase()
                })
                  , upperFirst = createCaseFirst("toUpperCase")
                  , attempt = baseRest(function(func, args) {
                    try {
                        return apply(func, undefined, args)
                    } catch (e) {
                        return isError(e) ? e : new Error(e)
                    }
                })
                  , bindAll = flatRest(function(object, methodNames) {
                    return arrayEach(methodNames, function(key) {
                        key = toKey(key),
                        baseAssignValue(object, key, bind(object[key], object))
                    }),
                    object
                })
                  , flow = createFlow()
                  , flowRight = createFlow(!0)
                  , method = baseRest(function(path, args) {
                    return function(object) {
                        return baseInvoke(object, path, args)
                    }
                })
                  , methodOf = baseRest(function(object, args) {
                    return function(path) {
                        return baseInvoke(object, path, args)
                    }
                })
                  , over = createOver(arrayMap)
                  , overEvery = createOver(arrayEvery)
                  , overSome = createOver(arraySome)
                  , range = createRange()
                  , rangeRight = createRange(!0)
                  , add = createMathOperation(function(augend, addend) {
                    return augend + addend
                }, 0)
                  , ceil = createRound("ceil")
                  , divide = createMathOperation(function(dividend, divisor) {
                    return dividend / divisor
                }, 1)
                  , floor = createRound("floor")
                  , multiply = createMathOperation(function(multiplier, multiplicand) {
                    return multiplier * multiplicand
                }, 1)
                  , round = createRound("round")
                  , subtract = createMathOperation(function(minuend, subtrahend) {
                    return minuend - subtrahend
                }, 0);
                return lodash.after = after,
                lodash.ary = ary,
                lodash.assign = assign,
                lodash.assignIn = assignIn,
                lodash.assignInWith = assignInWith,
                lodash.assignWith = assignWith,
                lodash.at = at,
                lodash.before = before,
                lodash.bind = bind,
                lodash.bindAll = bindAll,
                lodash.bindKey = bindKey,
                lodash.castArray = castArray,
                lodash.chain = chain,
                lodash.chunk = chunk,
                lodash.compact = compact,
                lodash.concat = concat,
                lodash.cond = cond,
                lodash.conforms = conforms,
                lodash.constant = constant,
                lodash.countBy = countBy,
                lodash.create = create,
                lodash.curry = curry,
                lodash.curryRight = curryRight,
                lodash.debounce = debounce,
                lodash.defaults = defaults,
                lodash.defaultsDeep = defaultsDeep,
                lodash.defer = defer,
                lodash.delay = delay,
                lodash.difference = difference,
                lodash.differenceBy = differenceBy,
                lodash.differenceWith = differenceWith,
                lodash.drop = drop,
                lodash.dropRight = dropRight,
                lodash.dropRightWhile = dropRightWhile,
                lodash.dropWhile = dropWhile,
                lodash.fill = fill,
                lodash.filter = filter,
                lodash.flatMap = flatMap,
                lodash.flatMapDeep = flatMapDeep,
                lodash.flatMapDepth = flatMapDepth,
                lodash.flatten = flatten,
                lodash.flattenDeep = flattenDeep,
                lodash.flattenDepth = flattenDepth,
                lodash.flip = flip,
                lodash.flow = flow,
                lodash.flowRight = flowRight,
                lodash.fromPairs = fromPairs,
                lodash.functions = functions,
                lodash.functionsIn = functionsIn,
                lodash.groupBy = groupBy,
                lodash.initial = initial,
                lodash.intersection = intersection,
                lodash.intersectionBy = intersectionBy,
                lodash.intersectionWith = intersectionWith,
                lodash.invert = invert,
                lodash.invertBy = invertBy,
                lodash.invokeMap = invokeMap,
                lodash.iteratee = iteratee,
                lodash.keyBy = keyBy,
                lodash.keys = keys,
                lodash.keysIn = keysIn,
                lodash.map = map,
                lodash.mapKeys = mapKeys,
                lodash.mapValues = mapValues,
                lodash.matches = matches,
                lodash.matchesProperty = matchesProperty,
                lodash.memoize = memoize,
                lodash.merge = merge,
                lodash.mergeWith = mergeWith,
                lodash.method = method,
                lodash.methodOf = methodOf,
                lodash.mixin = mixin,
                lodash.negate = negate,
                lodash.nthArg = nthArg,
                lodash.omit = omit,
                lodash.omitBy = omitBy,
                lodash.once = once,
                lodash.orderBy = orderBy,
                lodash.over = over,
                lodash.overArgs = overArgs,
                lodash.overEvery = overEvery,
                lodash.overSome = overSome,
                lodash.partial = partial,
                lodash.partialRight = partialRight,
                lodash.partition = partition,
                lodash.pick = pick,
                lodash.pickBy = pickBy,
                lodash.property = property,
                lodash.propertyOf = propertyOf,
                lodash.pull = pull,
                lodash.pullAll = pullAll,
                lodash.pullAllBy = pullAllBy,
                lodash.pullAllWith = pullAllWith,
                lodash.pullAt = pullAt,
                lodash.range = range,
                lodash.rangeRight = rangeRight,
                lodash.rearg = rearg,
                lodash.reject = reject,
                lodash.remove = remove,
                lodash.rest = rest,
                lodash.reverse = reverse,
                lodash.sampleSize = sampleSize,
                lodash.set = set,
                lodash.setWith = setWith,
                lodash.shuffle = shuffle,
                lodash.slice = slice,
                lodash.sortBy = sortBy,
                lodash.sortedUniq = sortedUniq,
                lodash.sortedUniqBy = sortedUniqBy,
                lodash.split = split,
                lodash.spread = spread,
                lodash.tail = tail,
                lodash.take = take,
                lodash.takeRight = takeRight,
                lodash.takeRightWhile = takeRightWhile,
                lodash.takeWhile = takeWhile,
                lodash.tap = tap,
                lodash.throttle = throttle,
                lodash.thru = thru,
                lodash.toArray = toArray,
                lodash.toPairs = toPairs,
                lodash.toPairsIn = toPairsIn,
                lodash.toPath = toPath,
                lodash.toPlainObject = toPlainObject,
                lodash.transform = transform,
                lodash.unary = unary,
                lodash.union = union,
                lodash.unionBy = unionBy,
                lodash.unionWith = unionWith,
                lodash.uniq = uniq,
                lodash.uniqBy = uniqBy,
                lodash.uniqWith = uniqWith,
                lodash.unset = unset,
                lodash.unzip = unzip,
                lodash.unzipWith = unzipWith,
                lodash.update = update,
                lodash.updateWith = updateWith,
                lodash.values = values,
                lodash.valuesIn = valuesIn,
                lodash.without = without,
                lodash.words = words,
                lodash.wrap = wrap,
                lodash.xor = xor,
                lodash.xorBy = xorBy,
                lodash.xorWith = xorWith,
                lodash.zip = zip,
                lodash.zipObject = zipObject,
                lodash.zipObjectDeep = zipObjectDeep,
                lodash.zipWith = zipWith,
                lodash.entries = toPairs,
                lodash.entriesIn = toPairsIn,
                lodash.extend = assignIn,
                lodash.extendWith = assignInWith,
                mixin(lodash, lodash),
                lodash.add = add,
                lodash.attempt = attempt,
                lodash.camelCase = camelCase,
                lodash.capitalize = capitalize,
                lodash.ceil = ceil,
                lodash.clamp = clamp,
                lodash.clone = clone,
                lodash.cloneDeep = cloneDeep,
                lodash.cloneDeepWith = cloneDeepWith,
                lodash.cloneWith = cloneWith,
                lodash.conformsTo = conformsTo,
                lodash.deburr = deburr,
                lodash.defaultTo = defaultTo,
                lodash.divide = divide,
                lodash.endsWith = endsWith,
                lodash.eq = eq,
                lodash.escape = escape,
                lodash.escapeRegExp = escapeRegExp,
                lodash.every = every,
                lodash.find = find,
                lodash.findIndex = findIndex,
                lodash.findKey = findKey,
                lodash.findLast = findLast,
                lodash.findLastIndex = findLastIndex,
                lodash.findLastKey = findLastKey,
                lodash.floor = floor,
                lodash.forEach = forEach,
                lodash.forEachRight = forEachRight,
                lodash.forIn = forIn,
                lodash.forInRight = forInRight,
                lodash.forOwn = forOwn,
                lodash.forOwnRight = forOwnRight,
                lodash.get = get,
                lodash.gt = gt,
                lodash.gte = gte,
                lodash.has = has,
                lodash.hasIn = hasIn,
                lodash.head = head,
                lodash.identity = identity,
                lodash.includes = includes,
                lodash.indexOf = indexOf,
                lodash.inRange = inRange,
                lodash.invoke = invoke,
                lodash.isArguments = isArguments,
                lodash.isArray = isArray,
                lodash.isArrayBuffer = isArrayBuffer,
                lodash.isArrayLike = isArrayLike,
                lodash.isArrayLikeObject = isArrayLikeObject,
                lodash.isBoolean = isBoolean,
                lodash.isBuffer = isBuffer,
                lodash.isDate = isDate,
                lodash.isElement = isElement,
                lodash.isEmpty = isEmpty,
                lodash.isEqual = isEqual,
                lodash.isEqualWith = isEqualWith,
                lodash.isError = isError,
                lodash.isFinite = isFinite,
                lodash.isFunction = isFunction,
                lodash.isInteger = isInteger,
                lodash.isLength = isLength,
                lodash.isMap = isMap,
                lodash.isMatch = isMatch,
                lodash.isMatchWith = isMatchWith,
                lodash.isNaN = isNaN,
                lodash.isNative = isNative,
                lodash.isNil = isNil,
                lodash.isNull = isNull,
                lodash.isNumber = isNumber,
                lodash.isObject = isObject,
                lodash.isObjectLike = isObjectLike,
                lodash.isPlainObject = isPlainObject,
                lodash.isRegExp = isRegExp,
                lodash.isSafeInteger = isSafeInteger,
                lodash.isSet = isSet,
                lodash.isString = isString,
                lodash.isSymbol = isSymbol,
                lodash.isTypedArray = isTypedArray,
                lodash.isUndefined = isUndefined,
                lodash.isWeakMap = isWeakMap,
                lodash.isWeakSet = isWeakSet,
                lodash.join = join,
                lodash.kebabCase = kebabCase,
                lodash.last = last,
                lodash.lastIndexOf = lastIndexOf,
                lodash.lowerCase = lowerCase,
                lodash.lowerFirst = lowerFirst,
                lodash.lt = lt,
                lodash.lte = lte,
                lodash.max = max,
                lodash.maxBy = maxBy,
                lodash.mean = mean,
                lodash.meanBy = meanBy,
                lodash.min = min,
                lodash.minBy = minBy,
                lodash.stubArray = stubArray,
                lodash.stubFalse = stubFalse,
                lodash.stubObject = stubObject,
                lodash.stubString = stubString,
                lodash.stubTrue = stubTrue,
                lodash.multiply = multiply,
                lodash.nth = nth,
                lodash.noConflict = noConflict,
                lodash.noop = noop,
                lodash.now = now,
                lodash.pad = pad,
                lodash.padEnd = padEnd,
                lodash.padStart = padStart,
                lodash.parseInt = parseInt,
                lodash.random = random,
                lodash.reduce = reduce,
                lodash.reduceRight = reduceRight,
                lodash.repeat = repeat,
                lodash.replace = replace,
                lodash.result = result,
                lodash.round = round,
                lodash.runInContext = runInContext,
                lodash.sample = sample,
                lodash.size = size,
                lodash.snakeCase = snakeCase,
                lodash.some = some,
                lodash.sortedIndex = sortedIndex,
                lodash.sortedIndexBy = sortedIndexBy,
                lodash.sortedIndexOf = sortedIndexOf,
                lodash.sortedLastIndex = sortedLastIndex,
                lodash.sortedLastIndexBy = sortedLastIndexBy,
                lodash.sortedLastIndexOf = sortedLastIndexOf,
                lodash.startCase = startCase,
                lodash.startsWith = startsWith,
                lodash.subtract = subtract,
                lodash.sum = sum,
                lodash.sumBy = sumBy,
                lodash.template = template,
                lodash.times = times,
                lodash.toFinite = toFinite,
                lodash.toInteger = toInteger,
                lodash.toLength = toLength,
                lodash.toLower = toLower,
                lodash.toNumber = toNumber,
                lodash.toSafeInteger = toSafeInteger,
                lodash.toString = toString,
                lodash.toUpper = toUpper,
                lodash.trim = trim,
                lodash.trimEnd = trimEnd,
                lodash.trimStart = trimStart,
                lodash.truncate = truncate,
                lodash.unescape = unescape,
                lodash.uniqueId = uniqueId,
                lodash.upperCase = upperCase,
                lodash.upperFirst = upperFirst,
                lodash.each = forEach,
                lodash.eachRight = forEachRight,
                lodash.first = head,
                mixin(lodash, function() {
                    var source = {};
                    return baseForOwn(lodash, function(func, methodName) {
                        hasOwnProperty.call(lodash.prototype, methodName) || (source[methodName] = func)
                    }),
                    source
                }(), {
                    chain: !1
                }),
                lodash.VERSION = VERSION,
                arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
                    lodash[methodName].placeholder = lodash
                }),
                arrayEach(["drop", "take"], function(methodName, index) {
                    LazyWrapper.prototype[methodName] = function(n) {
                        var filtered = this.__filtered__;
                        if (filtered && !index)
                            return new LazyWrapper(this);
                        n = n === undefined ? 1 : nativeMax(toInteger(n), 0);
                        var result = this.clone();
                        return filtered ? result.__takeCount__ = nativeMin(n, result.__takeCount__) : result.__views__.push({
                            size: nativeMin(n, MAX_ARRAY_LENGTH),
                            type: methodName + (result.__dir__ < 0 ? "Right" : "")
                        }),
                        result
                    }
                    ,
                    LazyWrapper.prototype[methodName + "Right"] = function(n) {
                        return this.reverse()[methodName](n).reverse()
                    }
                }),
                arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
                    var type = index + 1
                      , isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
                    LazyWrapper.prototype[methodName] = function(iteratee) {
                        var result = this.clone();
                        return result.__iteratees__.push({
                            iteratee: getIteratee(iteratee, 3),
                            type: type
                        }),
                        result.__filtered__ = result.__filtered__ || isFilter,
                        result
                    }
                }),
                arrayEach(["head", "last"], function(methodName, index) {
                    var takeName = "take" + (index ? "Right" : "");
                    LazyWrapper.prototype[methodName] = function() {
                        return this[takeName](1).value()[0]
                    }
                }),
                arrayEach(["initial", "tail"], function(methodName, index) {
                    var dropName = "drop" + (index ? "" : "Right");
                    LazyWrapper.prototype[methodName] = function() {
                        return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1)
                    }
                }),
                LazyWrapper.prototype.compact = function() {
                    return this.filter(identity)
                }
                ,
                LazyWrapper.prototype.find = function(predicate) {
                    return this.filter(predicate).head()
                }
                ,
                LazyWrapper.prototype.findLast = function(predicate) {
                    return this.reverse().find(predicate)
                }
                ,
                LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
                    return "function" == typeof path ? new LazyWrapper(this) : this.map(function(value) {
                        return baseInvoke(value, path, args)
                    })
                }),
                LazyWrapper.prototype.reject = function(predicate) {
                    return this.filter(negate(getIteratee(predicate)))
                }
                ,
                LazyWrapper.prototype.slice = function(start, end) {
                    start = toInteger(start);
                    var result = this;
                    return result.__filtered__ && (start > 0 || end < 0) ? new LazyWrapper(result) : (start < 0 ? result = result.takeRight(-start) : start && (result = result.drop(start)),
                    end !== undefined && (end = toInteger(end),
                    result = end < 0 ? result.dropRight(-end) : result.take(end - start)),
                    result)
                }
                ,
                LazyWrapper.prototype.takeRightWhile = function(predicate) {
                    return this.reverse().takeWhile(predicate).reverse()
                }
                ,
                LazyWrapper.prototype.toArray = function() {
                    return this.take(MAX_ARRAY_LENGTH)
                }
                ,
                baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName)
                      , isTaker = /^(?:head|last)$/.test(methodName)
                      , lodashFunc = lodash[isTaker ? "take" + ("last" == methodName ? "Right" : "") : methodName]
                      , retUnwrapped = isTaker || /^find/.test(methodName);
                    lodashFunc && (lodash.prototype[methodName] = function() {
                        var value = this.__wrapped__
                          , args = isTaker ? [1] : arguments
                          , isLazy = value instanceof LazyWrapper
                          , iteratee = args[0]
                          , useLazy = isLazy || isArray(value)
                          , interceptor = function(value) {
                            var result = lodashFunc.apply(lodash, arrayPush([value], args));
                            return isTaker && chainAll ? result[0] : result
                        };
                        useLazy && checkIteratee && "function" == typeof iteratee && 1 != iteratee.length && (isLazy = useLazy = !1);
                        var chainAll = this.__chain__
                          , isHybrid = !!this.__actions__.length
                          , isUnwrapped = retUnwrapped && !chainAll
                          , onlyLazy = isLazy && !isHybrid;
                        if (!retUnwrapped && useLazy) {
                            value = onlyLazy ? value : new LazyWrapper(this);
                            var result = func.apply(value, args);
                            return result.__actions__.push({
                                func: thru,
                                args: [interceptor],
                                thisArg: undefined
                            }),
                            new LodashWrapper(result,chainAll)
                        }
                        return isUnwrapped && onlyLazy ? func.apply(this, args) : (result = this.thru(interceptor),
                        isUnwrapped ? isTaker ? result.value()[0] : result.value() : result)
                    }
                    )
                }),
                arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
                    var func = arrayProto[methodName]
                      , chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru"
                      , retUnwrapped = /^(?:pop|shift)$/.test(methodName);
                    lodash.prototype[methodName] = function() {
                        var args = arguments;
                        if (retUnwrapped && !this.__chain__) {
                            var value = this.value();
                            return func.apply(isArray(value) ? value : [], args)
                        }
                        return this[chainName](function(value) {
                            return func.apply(isArray(value) ? value : [], args)
                        })
                    }
                }),
                baseForOwn(LazyWrapper.prototype, function(func, methodName) {
                    var lodashFunc = lodash[methodName];
                    if (lodashFunc) {
                        var key = lodashFunc.name + ""
                          , names = realNames[key] || (realNames[key] = []);
                        names.push({
                            name: methodName,
                            func: lodashFunc
                        })
                    }
                }),
                realNames[createHybrid(undefined, WRAP_BIND_KEY_FLAG).name] = [{
                    name: "wrapper",
                    func: undefined
                }],
                LazyWrapper.prototype.clone = lazyClone,
                LazyWrapper.prototype.reverse = lazyReverse,
                LazyWrapper.prototype.value = lazyValue,
                lodash.prototype.at = wrapperAt,
                lodash.prototype.chain = wrapperChain,
                lodash.prototype.commit = wrapperCommit,
                lodash.prototype.next = wrapperNext,
                lodash.prototype.plant = wrapperPlant,
                lodash.prototype.reverse = wrapperReverse,
                lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue,
                lodash.prototype.first = lodash.prototype.head,
                symIterator && (lodash.prototype[symIterator] = wrapperToIterator),
                lodash
            }
              , _ = runInContext();
            root._ = _,
            __WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return _
            }
            .call(exports, __webpack_require__, exports, module),
            !(__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
        ).call(this)
    }
    ).call(exports, function() {
        return this
    }(), __webpack_require__(3)(module))
}
, function(module, exports) {
    module.exports = function(module) {
        return module.webpackPolyfill || (module.deprecate = function() {}
        ,
        module.paths = [],
        module.children = [],
        module.webpackPolyfill = 1),
        module
    }
}
, function(module, exports, __webpack_require__) {
    var Matrix, Screen, Utils, _, __domComplete, __domCompleteState, __domReady, _textSizeNode, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    , slice = [].slice;
    _ = __webpack_require__(1)._,
    Screen = __webpack_require__(5).Screen,
    Matrix = __webpack_require__(9).Matrix,
    Utils = {},
    Utils.reset = function() {
        return Framer.CurrentContext.reset()
    }
    ,
    Utils.getValue = function(value) {
        return _.isFunction(value) ? value() : value
    }
    ,
    Utils.getValueForKeyPath = function(obj, key) {
        var len, o, ref, ref1, result;
        if (result = obj,
        ref = !1,
        indexOf.call(key, ref) >= 0)
            return obj[key];
        for (ref1 = key.split("."),
        o = 0,
        len = ref1.length; o < len; o++)
            key = ref1[o],
            result = result[key];
        return result
    }
    ,
    Utils.setValueForKeyPath = function(obj, path, val) {
        var field, fields, i, n, result;
        for (fields = path.split("."),
        result = obj,
        i = 0,
        n = fields.length; i < n && void 0 !== result; )
            field = fields[i],
            i === n - 1 ? result[field] = val : ("undefined" != typeof result[field] && _.isObject(result[field]) || (result[field] = {}),
            result = result[field]),
            i++
    }
    ,
    Utils.valueOrDefault = function(value, defaultValue) {
        return void 0 !== value && null !== value || (value = defaultValue),
        value
    }
    ,
    Utils.arrayNext = function(arr, item) {
        return arr[arr.indexOf(item) + 1] || _.head(arr)
    }
    ,
    Utils.arrayPrev = function(arr, item) {
        return arr[arr.indexOf(item) - 1] || _.last(arr)
    }
    ,
    Utils.sum = function(arr) {
        return _.reduce(arr, function(a, b) {
            return a + b
        })
    }
    ,
    Utils.average = function(arr) {
        return Utils.sum(arr) / arr.length
    }
    ,
    Utils.mean = Utils.average,
    Utils.median = function(x) {
        var sorted;
        return 0 === x.length ? null : (sorted = x.slice().sort(function(a, b) {
            return a - b
        }),
        sorted.length % 2 === 1 ? sorted[(sorted.length - 1) / 2] : (sorted[sorted.length / 2 - 1] + sorted[sorted.length / 2]) / 2)
    }
    ,
    Utils.nearestIncrement = function(x, increment) {
        return increment ? Math.round(x * (1 / increment)) / (1 / increment) : x
    }
    ,
    null == window.requestAnimationFrame && (window.requestAnimationFrame = window.webkitRequestAnimationFrame),
    null == window.requestAnimationFrame && (window.requestAnimationFrame = function(f) {
        return Utils.delay(1 / 60, f)
    }
    ),
    window.performance ? Utils.getTime = function() {
        return window.performance.now() / 1e3
    }
    : Utils.getTime = function() {
        return Date.now() / 1e3
    }
    ,
    Utils.delay = function(time, f) {
        var timer;
        return timer = setTimeout(f, 1e3 * time),
        Framer.CurrentContext.addTimer(timer),
        timer
    }
    ,
    Utils.interval = function(time, f) {
        var timer;
        return timer = setInterval(f, 1e3 * time),
        Framer.CurrentContext.addInterval(timer),
        timer
    }
    ,
    Utils.debounce = function(threshold, fn, immediate) {
        var timeout;
        return null == threshold && (threshold = .1),
        timeout = null,
        threshold *= 1e3,
        function() {
            var args, delayed, obj;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            obj = this,
            delayed = function() {
                return immediate || fn.apply(obj, args),
                timeout = null
            }
            ,
            timeout ? clearTimeout(timeout) : immediate && fn.apply(obj, args),
            timeout = setTimeout(delayed, threshold)
        }
    }
    ,
    Utils.throttle = function(delay, fn) {
        var timer;
        return 0 === delay ? fn : (delay *= 1e3,
        timer = !1,
        function() {
            if (!timer)
                return timer = !0,
                delay !== -1 && setTimeout(function() {
                    return timer = !1
                }, delay),
                fn.apply(null, arguments)
        }
        )
    }
    ,
    Utils.memoize = function(fn) {
        return function() {
            var args, currentArg, hash, i;
            for (args = Array.prototype.slice.call(arguments),
            hash = "",
            i = args.length,
            currentArg = null; i--; )
                currentArg = args[i],
                hash += currentArg === Object(currentArg) ? JSON.stringify(currentArg) : currentArg,
                fn.memoize || (fn.memoize = {});
            return hash in fn.memoize ? fn.memoize[hash] : fn.memoize[hash] = fn.apply(this, args)
        }
    }
    ,
    Utils.randomColor = function(alpha) {
        return null == alpha && (alpha = 1),
        Color.random(alpha)
    }
    ,
    Utils.randomChoice = function(arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }
    ,
    Utils.randomNumber = function(a, b) {
        return null == a && (a = 0),
        null == b && (b = 1),
        Utils.mapRange(Math.random(), 0, 1, a, b)
    }
    ,
    Utils.randomImage = function(layer, offset) {
        var increment, photo, photos, size;
        return null == offset && (offset = 50),
        _.isNumber(layer) && (layer = {
            id: layer
        }),
        photos = ["1417733403748-83bbc7c05140", "1423841265803-dfac59ebf718", "1433689056001-018e493576bc", "1430812411929-de4cf1d1fe73", "1457269449834-928af64c684d", "1443616839562-036bb2afd9a2", "1461535676131-2de1f7054d3f", "1462393582935-1ac76b85dcf1", "1414589530802-cb54ce0575d9", "1422908132590-117a051fc5cd", "1438522014717-d7ce32b9bab9", "1451650804883-52fb86cc5b18", "1462058164249-2dcdcda67ce7", "1456757014009-0614a080ff7f", "1434238255348-4fb0d9caa0a4", "1448071792026-7064a01897e7", "1458681842652-019f4eeda5e5", "1460919920543-d8c45f4bd621", "1447767961238-038617b84a2b", "1449089299624-89ce41e8306c", "1414777410116-81e404502b52", "1433994349623-0a18966ee9c0", "1452567772283-91d67178f409", "1458245229726-a8ba04cb5969", "1422246719650-cb30d19825e3", "1417392639864-2c88dd07f460", "1442328166075-47fe7153c128", "1448467258552-6b3982373a13", "1447023362548-250f3a7b80ed", "1451486242265-24b0c0ef9a51", "1414339372428-797ec111646d"],
        photo = Utils.randomChoice(photos),
        (null != layer ? layer.id : void 0) && (photo = photos[layer.id % photos.length]),
        increment = 100,
        size = 1024,
        layer && (size = Math.max(layer.width, layer.height),
        size = Math.ceil(size / increment) * increment,
        size < increment && (size = increment),
        size = Utils.devicePixelRatio() * size,
        size = parseInt(size)),
        "https://images.unsplash.com/photo-" + photo + "?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=" + size + "&h=" + size + "&fit=max"
    }
    ,
    Utils.defineEnum = function(names, offset, geometric) {
        var Enum, i, j, len, name, o;
        for (null == names && (names = []),
        null == offset && (offset = 0),
        null == geometric && (geometric = 0),
        Enum = {},
        i = o = 0,
        len = names.length; o < len; i = ++o)
            name = names[i],
            j = i,
            j = offset ? j + offset : j,
            j = geometric ? Math.pow(geometric, j) : j,
            Enum[Enum[name] = j] = name;
        return Enum
    }
    ,
    Utils.labelLayer = function(layer, text, style) {
        var fontSize;
        if (null == style && (style = {}),
        text && "" !== text && "string" == typeof text)
            return fontSize = Math.max(Math.min(48, parseInt(layer.height / 3.2)), 14),
            style = _.extend({
                font: fontSize + "px/1em " + Utils.deviceFont(),
                lineHeight: layer.height + "px",
                textAlign: "center",
                color: "#fff"
            }, style),
            layer.style = style,
            layer.html = text
    }
    ,
    Utils.stringify = function(obj) {
        try {
            if (_.isObject(obj))
                return JSON.stringify(obj)
        } catch (error) {}
        return null === obj ? "null" : void 0 === obj ? "undefined" : obj.toString ? obj.toString() : obj
    }
    ,
    Utils.inspectObjectType = function(item) {
        var className, extract, ref, ref1, ref2, ref3;
        return null != (null != (ref = item.constructor) ? ref.name : void 0) && "Object" !== (null != (ref1 = item.constructor) ? ref1.name : void 0) ? item.constructor.name : (extract = function(str) {
            var match, regex;
            return str ? (regex = /\[object (\w+)\]/,
            match = regex.exec(str),
            match ? match[1] : null) : null
        }
        ,
        item.toString && (className = extract(item.toString())) ? className : (null != (ref2 = item.constructor) ? ref2.toString : void 0) && (className = extract(null != (ref3 = item.constructor) ? ref3.toString() : void 0)) ? className.replace("Constructor", "") : "Object")
    }
    ,
    Utils.inspect = function(item, max, l) {
        var code, limit, objectInfo, objectType;
        return null == max && (max = 5),
        null == l && (l = 0),
        null === item ? "null" : void 0 === item ? "undefined" : _.isFunction(item.toInspect) ? item.toInspect() : _.isString(item) ? '"' + item + '"' : _.isNumber(item) ? "" + item : _.isFunction(item) ? (code = item.toString().slice("function ".length).replace(/\n/g, "").replace(/\s+/g, " "),
        limit = 50,
        code.length > limit && l > 0 && (code = _.trimEnd(code.slice(0, +limit + 1 || 9e9)) + "… }"),
        "<Function " + code + ">") : _.isArray(item) ? l > max ? "[...]" : "[" + _.map(item, function(i) {
            return Utils.inspect(i, max, l + 1)
        }).join(", ") + "]" : _.isObject(item) ? (objectType = Utils.inspectObjectType(item),
        /HTML\w+?Element/.test(objectType) ? "<" + objectType + ">" : (objectInfo = l > max ? "{...}" : "{" + _.map(item, function(v, k) {
            return k + ":" + Utils.inspect(v, max, l + 1)
        }).join(", ") + "}",
        "Object" === objectType ? objectInfo : "<" + objectType + " " + objectInfo + ">")) : "" + item
    }
    ,
    Utils.uuid = function() {
        var chars, digit, o, output, r, random;
        for (chars = "0123456789abcdefghijklmnopqrstuvwxyz".split(""),
        output = new Array(36),
        random = 0,
        digit = o = 1; o <= 32; digit = ++o)
            random <= 2 && (random = 33554432 + 16777216 * Math.random() | 0),
            r = 15 & random,
            random >>= 4,
            output[digit] = chars[19 === digit ? 3 & r | 8 : r];
        return output.join("")
    }
    ,
    Utils.arrayFromArguments = function(args) {
        return _.isArray(args[0]) ? args[0] : Array.prototype.slice.call(args)
    }
    ,
    Utils.cycle = function() {
        var args, curr;
        return args = Utils.arrayFromArguments(arguments),
        curr = -1,
        function() {
            return curr++,
            curr >= args.length && (curr = 0),
            args[curr]
        }
    }
    ,
    Utils.toggle = Utils.cycle,
    Utils.callAfterCount = function(total, callback) {
        var callAfterCount, count;
        return count = 0,
        callAfterCount = function() {
            if (count += 1,
            count === total)
                return "function" == typeof callback ? callback() : void 0
        }
    }
    ,
    Utils.isWebKit = function() {
        return void 0 !== window.WebKitCSSMatrix
    }
    ,
    Utils.webkitVersion = function() {
        var regexp, result, version;
        return version = -1,
        regexp = /AppleWebKit\/([\d.]+)/,
        result = regexp.exec(navigator.userAgent),
        result && (version = parseFloat(result[1])),
        version
    }
    ,
    Utils.isChrome = function() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    }
    ,
    Utils.isSafari = function() {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
    }
    ,
    Utils.isAndroid = function() {
        return /(android)/i.test(navigator.userAgent)
    }
    ,
    Utils.isIOS = function() {
        return /(iPhone|iPod|iPad)/i.test(navigator.platform)
    }
    ,
    Utils.isMacOS = function() {
        return /Mac/.test(navigator.platform)
    }
    ,
    Utils.isWindows = function() {
        return /Win/.test(navigator.platform)
    }
    ,
    Utils.isTouch = function() {
        return null === window.ontouchstart && null === window.ontouchmove && null === window.ontouchend
    }
    ,
    Utils.isDesktop = function() {
        return "desktop" === Utils.deviceType()
    }
    ,
    Utils.isPhone = function() {
        return "phone" === Utils.deviceType()
    }
    ,
    Utils.isTablet = function() {
        return "tablet" === Utils.deviceType()
    }
    ,
    Utils.isMobile = function() {
        return Utils.isPhone() || Utils.isTablet()
    }
    ,
    Utils.isFileUrl = function(url) {
        return _.startsWith(url, "file://")
    }
    ,
    Utils.isDataUrl = function(url) {
        return _.startsWith(url, "data:")
    }
    ,
    Utils.isRelativeUrl = function(url) {
        return !/^([a-zA-Z]{1,8}:\/\/).*$/.test(url)
    }
    ,
    Utils.isLocalServerUrl = function(url) {
        return url.indexOf("127.0.0.1") !== -1 || url.indexOf("localhost") !== -1
    }
    ,
    Utils.isLocalUrl = function(url) {
        return !!Utils.isFileUrl(url) || !!Utils.isLocalServerUrl(url)
    }
    ,
    Utils.isLocalAssetUrl = function(url, baseUrl) {
        return null == baseUrl && (baseUrl = window.location.href),
        !Utils.isDataUrl(url) && (!!Utils.isLocalUrl(url) || !(!Utils.isRelativeUrl(url) || !Utils.isLocalUrl(baseUrl)))
    }
    ,
    Utils.isFramerStudio = function() {
        return navigator.userAgent.indexOf("FramerStudio") !== -1
    }
    ,
    Utils.framerStudioVersion = function() {
        var isBeta, isFuture, isLocal, matches, version;
        if (Utils.isFramerStudio()) {
            if (isBeta = navigator.userAgent.indexOf("FramerStudio/beta") >= 0,
            isLocal = navigator.userAgent.indexOf("FramerStudio/local") >= 0,
            isFuture = navigator.userAgent.indexOf("FramerStudio/future") >= 0,
            isBeta || isLocal || isFuture)
                return Number.MAX_VALUE;
            if (matches = navigator.userAgent.match(/\d+$/),
            matches && matches.length > 0 && (version = parseInt(matches[0])),
            _.isNumber(version))
                return version
        }
        return Number.MAX_VALUE
    }
    ,
    Utils.devicePixelRatio = function() {
        return window.devicePixelRatio
    }
    ,
    Utils.isJP2Supported = function() {
        return Utils.isWebKit() && !Utils.isChrome()
    }
    ,
    Utils.isWebPSupported = function() {
        return Utils.isChrome()
    }
    ,
    Utils.deviceType = function() {
        return /(tablet)|(iPad)|(Nexus 9)/i.test(navigator.userAgent) ? "tablet" : /(mobi)/i.test(navigator.userAgent) ? "phone" : "desktop"
    }
    ,
    Utils.pathJoin = function() {
        return Utils.arrayFromArguments(arguments).join("/")
    }
    ,
    Utils.deviceFont = function(os) {
        return os || (Utils.isMacOS() && (os = "macos"),
        Utils.isIOS() && (os = "ios"),
        Utils.isAndroid() && (os = "android"),
        Utils.isWindows() && (os = "windows")),
        "macos" === os ? "-apple-system, SF UI Text, Helvetica Neue" : "ios" === os ? "-apple-system, SF UI Text, Helvetica Neue" : "android" === os ? "Roboto, Helvetica Neue" : "windows" === os ? "Segoe UI" : "Helvetica"
    }
    ,
    Utils.round = function(value, decimals, increment, min, max) {
        var d;
        return null == decimals && (decimals = 0),
        null == increment && (increment = null),
        null == min && (min = null),
        null == max && (max = null),
        d = Math.pow(10, decimals),
        increment && (value = Math.round(value / increment) * increment),
        value = Math.round(value * d) / d,
        min && value < min ? min : max && value > max ? max : value
    }
    ,
    Utils.roundWhole = function(value, decimals) {
        return null == decimals && (decimals = 1),
        parseInt(value) === value ? parseInt(value) : Utils.round(value, decimals)
    }
    ,
    Utils.clamp = function(value, a, b) {
        var max, min;
        return min = Math.min(a, b),
        max = Math.max(a, b),
        value < min && (value = min),
        value > max && (value = max),
        value
    }
    ,
    Utils.mapRange = function(value, fromLow, fromHigh, toLow, toHigh) {
        return toLow + (value - fromLow) / (fromHigh - fromLow) * (toHigh - toLow)
    }
    ,
    Utils.modulate = function(value, rangeA, rangeB, limit) {
        var fromHigh, fromLow, result, toHigh, toLow;
        if (null == limit && (limit = !1),
        fromLow = rangeA[0],
        fromHigh = rangeA[1],
        toLow = rangeB[0],
        toHigh = rangeB[1],
        result = toLow + (value - fromLow) / (fromHigh - fromLow) * (toHigh - toLow),
        limit === !0)
            if (toLow < toHigh) {
                if (result < toLow)
                    return toLow;
                if (result > toHigh)
                    return toHigh
            } else {
                if (result > toLow)
                    return toLow;
                if (result < toHigh)
                    return toHigh
            }
        return result
    }
    ,
    Utils.parseFunction = function(str) {
        var result;
        return result = {
            name: "",
            args: []
        },
        _.endsWith(str, ")") ? (result.name = str.split("(")[0],
        result.args = str.split("(")[1].split(",").map(function(a) {
            return _.trim(_.trimEnd(a, ")"))
        })) : result.name = str,
        result
    }
    ,
    __domCompleteState = "interactive",
    __domComplete = [],
    __domReady = !1,
    "undefined" != typeof document && null !== document && (document.onreadystatechange = function(event) {
        var f, results;
        if (document.readyState === __domCompleteState) {
            for (__domReady = !0,
            results = []; __domComplete.length; )
                results.push(f = __domComplete.shift()());
            return results
        }
    }
    ),
    Utils.domComplete = function(f) {
        return __domReady ? f() : __domComplete.push(f)
    }
    ,
    Utils.domCompleteCancel = function(f) {
        return __domComplete = _.without(__domComplete, f)
    }
    ,
    Utils.domValidEvent = function(element, eventName) {
        if (eventName)
            return "touchstart" === eventName || "touchmove" === eventName || "touchend" === eventName || "undefined" != typeof element["on" + eventName.toLowerCase()]
    }
    ,
    Utils.domLoadScript = function(url, callback) {
        var head, script;
        return script = document.createElement("script"),
        script.type = "text/javascript",
        script.src = url,
        script.onload = callback,
        head = document.getElementsByTagName("head")[0],
        head.appendChild(script),
        script
    }
    ,
    Utils.domLoadData = function(path, callback) {
        var request;
        return request = new XMLHttpRequest,
        request.addEventListener("load", function() {
            return callback(null, request.responseText)
        }, !1),
        request.addEventListener("error", function() {
            return callback(!0, null)
        }, !1),
        request.open("GET", path, !0),
        request.send(null)
    }
    ,
    Utils.domLoadJSON = function(path, callback) {
        return Utils.domLoadData(path, function(err, data) {
            return callback(err, JSON.parse(data))
        })
    }
    ,
    Utils.domLoadDataSync = function(path) {
        var e, handleError, ref, request;
        request = new XMLHttpRequest,
        request.open("GET", path, !1);
        try {
            request.send(null)
        } catch (error) {
            e = error,
            console.debug("XMLHttpRequest.error", e)
        }
        return handleError = function() {
            throw Error("Utils.domLoadDataSync: " + path + " -> [" + request.status + " " + request.statusText + "]")
        }
        ,
        request.onerror = handleError,
        200 !== (ref = request.status) && 0 !== ref && handleError(),
        request.responseText || handleError(),
        request.responseText
    }
    ,
    Utils.domLoadJSONSync = function(path) {
        return JSON.parse(Utils.domLoadDataSync(path))
    }
    ,
    Utils.domLoadScriptSync = function(path) {
        var scriptData;
        return scriptData = Utils.domLoadDataSync(path),
        eval(scriptData),
        scriptData
    }
    ,
    Utils.insertCSS = function(css) {
        var styleElement;
        return styleElement = document.createElement("style"),
        styleElement.type = "text/css",
        styleElement.innerHTML = css,
        Utils.domComplete(function() {
            return document.body.appendChild(styleElement)
        })
    }
    ,
    Utils.loadImage = function(url, callback, context) {
        var element;
        return element = new Image,
        null == context && (context = Framer.CurrentContext),
        context.domEventManager.wrap(element).addEventListener("load", function(event) {
            return callback()
        }),
        context.domEventManager.wrap(element).addEventListener("error", function(event) {
            return callback(!0)
        }),
        element.src = url
    }
    ,
    Utils.isInsideIframe = function() {
        return window !== window.top
    }
    ,
    Utils.point = function(input) {
        var k, len, o, ref, result;
        if (_.isNumber(input))
            return Utils.pointZero(input);
        if (!input)
            return Utils.pointZero();
        for (result = Utils.pointZero(),
        ref = ["x", "y"],
        o = 0,
        len = ref.length; o < len; o++)
            k = ref[o],
            _.isNumber(input[k]) && (result[k] = input[k]);
        return result
    }
    ,
    Utils.pointZero = function(n) {
        return null == n && (n = 0),
        {
            x: n,
            y: n
        }
    }
    ,
    Utils.pointDivide = function(point, fraction) {
        return point = {
            x: point.x / fraction,
            y: point.y / fraction
        }
    }
    ,
    Utils.pointAdd = function(pointA, pointB) {
        var point;
        return point = {
            x: pointA.x + pointB.x,
            y: pointA.y + pointB.y
        }
    }
    ,
    Utils.pointSubtract = function(pointA, pointB) {
        var point;
        return point = {
            x: pointA.x - pointB.x,
            y: pointA.y - pointB.y
        }
    }
    ,
    Utils.pointMin = function() {
        var point, points;
        return points = Utils.arrayFromArguments(arguments),
        point = {
            x: _.min(points.map(function(size) {
                return size.x
            })),
            y: _.min(points.map(function(size) {
                return size.y
            }))
        }
    }
    ,
    Utils.pointMax = function() {
        var point, points;
        return points = Utils.arrayFromArguments(arguments),
        point = {
            x: _.max(points.map(function(size) {
                return size.x
            })),
            y: _.max(points.map(function(size) {
                return size.y
            }))
        }
    }
    ,
    Utils.pointDelta = function(pointA, pointB) {
        var delta;
        return delta = {
            x: pointB.x - pointA.x,
            y: pointB.y - pointA.y
        }
    }
    ,
    Utils.pointDistance = function(pointA, pointB) {
        var a, b;
        return a = pointA.x - pointB.x,
        b = pointA.y - pointB.y,
        Math.sqrt(a * a + b * b)
    }
    ,
    Utils.pointInvert = function(point) {
        return point = {
            x: 0 - point.x,
            y: 0 - point.y
        }
    }
    ,
    Utils.pointTotal = function(point) {
        return point.x + point.y
    }
    ,
    Utils.pointAbs = function(point) {
        return point = {
            x: Math.abs(point.x),
            y: Math.abs(point.y)
        }
    }
    ,
    Utils.pointInFrame = function(point, frame) {
        return !(point.x < Utils.frameGetMinX(frame) || point.x > Utils.frameGetMaxX(frame)) && !(point.y < Utils.frameGetMinY(frame) || point.y > Utils.frameGetMaxY(frame))
    }
    ,
    Utils.pointCenter = function(pointA, pointB) {
        var point;
        return point = {
            x: (pointA.x + pointB.x) / 2,
            y: (pointA.y + pointB.y) / 2
        }
    }
    ,
    Utils.pointAngle = function(pointA, pointB) {
        return 180 * Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) / Math.PI
    }
    ,
    Utils.size = function(input) {
        var k, len, o, ref, result;
        if (_.isNumber(input))
            return Utils.sizeZero(input);
        if (!input)
            return Utils.sizeZero();
        for (result = Utils.sizeZero(),
        ref = ["width", "height"],
        o = 0,
        len = ref.length; o < len; o++)
            k = ref[o],
            _.isNumber(input[k]) && (result[k] = input[k]);
        return result
    }
    ,
    Utils.sizeZero = function(n) {
        return null == n && (n = 0),
        {
            width: n,
            height: n
        }
    }
    ,
    Utils.sizeMin = function() {
        var size, sizes;
        return sizes = Utils.arrayFromArguments(arguments),
        size = {
            width: _.min(sizes.map(function(size) {
                return size.width
            })),
            height: _.min(sizes.map(function(size) {
                return size.height
            }))
        }
    }
    ,
    Utils.sizeMax = function() {
        var size, sizes;
        return sizes = Utils.arrayFromArguments(arguments),
        size = {
            width: _.max(sizes.map(function(size) {
                return size.width
            })),
            height: _.max(sizes.map(function(size) {
                return size.height
            }))
        }
    }
    ,
    Utils.rectZero = function(args) {
        return null == args && (args = {}),
        _.defaults(args, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        })
    }
    ,
    Utils.parseRect = function(args) {
        if (_.isArray(args) && _.isNumber(args[0])) {
            if (1 === args.length)
                return Utils.parseRect({
                    top: args[0]
                });
            if (2 === args.length)
                return Utils.parseRect({
                    top: args[0],
                    right: args[1]
                });
            if (3 === args.length)
                return Utils.parseRect({
                    top: args[0],
                    right: args[1],
                    bottom: args[2]
                });
            if (4 === args.length)
                return Utils.parseRect({
                    top: args[0],
                    right: args[1],
                    bottom: args[2],
                    left: args[3]
                })
        }
        return _.isArray(args) && _.isObject(args[0]) ? args[0] : _.isObject(args) ? args : _.isNumber(args) ? {
            top: args,
            right: args,
            bottom: args,
            left: args
        } : {}
    }
    ,
    Utils.frameGetMinX = function(frame) {
        return frame.x
    }
    ,
    Utils.frameSetMinX = function(frame, value) {
        return frame.x = value
    }
    ,
    Utils.frameGetMidX = function(frame) {
        return 0 === frame.width ? frame.x : frame.x + frame.width / 2
    }
    ,
    Utils.frameSetMidX = function(frame, value) {
        return frame.x = 0 === frame.width ? value : value - frame.width / 2
    }
    ,
    Utils.frameGetMaxX = function(frame) {
        return 0 === frame.width ? 0 : frame.x + frame.width
    }
    ,
    Utils.frameSetMaxX = function(frame, value) {
        return frame.x = 0 === frame.width ? 0 : value - frame.width
    }
    ,
    Utils.frameGetMinY = function(frame) {
        return frame.y
    }
    ,
    Utils.frameSetMinY = function(frame, value) {
        return frame.y = value
    }
    ,
    Utils.frameGetMidY = function(frame) {
        return 0 === frame.height ? frame.y : frame.y + frame.height / 2
    }
    ,
    Utils.frameSetMidY = function(frame, value) {
        return frame.y = 0 === frame.height ? value : value - frame.height / 2
    }
    ,
    Utils.frameGetMaxY = function(frame) {
        return 0 === frame.height ? 0 : frame.y + frame.height
    }
    ,
    Utils.frameSetMaxY = function(frame, value) {
        return frame.y = 0 === frame.height ? 0 : value - frame.height
    }
    ,
    Utils.frame = function(input) {
        var k, len, o, ref, result;
        if (_.isNumber(input))
            return Utils.frameZero(input);
        if (!input)
            return Utils.frameZero();
        for (result = Utils.frameZero(),
        ref = ["x", "y", "width", "height"],
        o = 0,
        len = ref.length; o < len; o++)
            k = ref[o],
            _.isNumber(input[k]) && (result[k] = input[k]);
        return result
    }
    ,
    Utils.frameZero = function(n) {
        return null == n && (n = 0),
        {
            x: n,
            y: n
        }
    }
    ,
    Utils.frameSize = function(frame) {
        var size;
        return size = {
            width: frame.width,
            height: frame.height
        }
    }
    ,
    Utils.framePoint = function(frame) {
        var point;
        return point = {
            x: frame.x,
            y: frame.y
        }
    }
    ,
    Utils.pointsFromFrame = function(frame) {
        var corner1, corner2, corner3, corner4, maxX, maxY, minX, minY;
        return minX = Utils.frameGetMinX(frame),
        maxX = Utils.frameGetMaxX(frame),
        minY = Utils.frameGetMinY(frame),
        maxY = Utils.frameGetMaxY(frame),
        corner1 = {
            x: minX,
            y: minY
        },
        corner2 = {
            x: minX,
            y: maxY
        },
        corner3 = {
            x: maxX,
            y: maxY
        },
        corner4 = {
            x: maxX,
            y: minY
        },
        [corner1, corner2, corner3, corner4]
    }
    ,
    Utils.frameFromPoints = function(points) {
        var frame, maxX, maxY, minX, minY, xValues, yValues;
        return xValues = _.map(points, "x"),
        yValues = _.map(points, "y"),
        minX = _.min(xValues),
        maxX = _.max(xValues),
        minY = _.min(yValues),
        maxY = _.max(yValues),
        frame = {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY
        }
    }
    ,
    Utils.pixelAlignedFrame = function(frame) {
        var result;
        return result = {
            width: Math.round(frame.width + frame.x % 1),
            height: Math.round(frame.height + frame.y % 1),
            x: Math.round(frame.x),
            y: Math.round(frame.y)
        }
    }
    ,
    Utils.frameMerge = function() {
        var frame, frames;
        return frames = Utils.arrayFromArguments(arguments),
        frame = {
            x: _.min(frames.map(Utils.frameGetMinX)),
            y: _.min(frames.map(Utils.frameGetMinY))
        },
        frame.width = _.max(frames.map(Utils.frameGetMaxX)) - frame.x,
        frame.height = _.max(frames.map(Utils.frameGetMaxY)) - frame.y,
        frame
    }
    ,
    Utils.frameInFrame = function(frameA, frameB) {
        var len, o, point, ref;
        for (ref = Utils.pointsFromFrame(frameA),
        o = 0,
        len = ref.length; o < len; o++)
            if (point = ref[o],
            !Utils.pointInFrame(point, frameB))
                return !1;
        return !0
    }
    ,
    Utils.framePointForOrigin = function(frame, originX, originY) {
        return frame = {
            x: frame.x + originX * frame.width,
            y: frame.y + originY * frame.height,
            width: frame.width,
            height: frame.height
        }
    }
    ,
    Utils.frameInset = function(frame, inset) {
        return _.isNumber(inset) && (inset = {
            top: inset,
            right: inset,
            bottom: inset,
            left: inset
        }),
        frame = Utils.frame(frame),
        frame = {
            x: frame.x + inset.left,
            y: frame.y + inset.top,
            width: frame.width - inset.left - inset.right,
            height: frame.height - inset.top - inset.bottom
        }
    }
    ,
    Utils.frameSortByAbsoluteDistance = function(point, frames, originX, originY) {
        var distance;
        return null == originX && (originX = 0),
        null == originY && (originY = 0),
        distance = function(frame) {
            var result;
            return result = Utils.pointDelta(point, Utils.framePointForOrigin(frame, originX, originY)),
            result = Utils.pointAbs(result),
            result = Utils.pointTotal(result)
        }
        ,
        frames.sort(function(a, b) {
            return distance(a) - distance(b)
        })
    }
    ,
    Utils.pointInPolygon = function(point, vs) {
        var i, inside, intersect, j, x, xi, xj, y, yi, yj;
        for (x = point[0],
        y = point[1],
        inside = !1,
        i = 0,
        j = vs.length - 1; i < vs.length; )
            xi = vs[i][0],
            yi = vs[i][1],
            xj = vs[j][0],
            yj = vs[j][1],
            intersect = yi > y && y !== yj && yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi,
            intersect && (inside = !inside),
            j = i++;
        return inside
    }
    ,
    Utils.frameIntersection = function(rectA, rect) {
        var x1, x2, y1, y2;
        return x1 = rect.x,
        y1 = rect.y,
        x2 = x1 + rect.width,
        y2 = y1 + rect.height,
        rectA.x > x1 && (x1 = rectA.x),
        rectA.y > y1 && (y1 = rectA.y),
        rectA.x + rectA.width < x2 && (x2 = rectA.x + rectA.width),
        rectA.y + rectA.height < y2 && (y2 = rectA.y + rectA.height),
        x2 <= x1 || y2 <= y1 ? null : rect = {
            x: x1,
            y: y1,
            width: x2 - x1,
            height: y2 - y1
        }
    }
    ,
    Utils.frameCenterPoint = function(frame) {
        var point;
        return point = {
            x: Utils.frameGetMidX(frame),
            y: Utils.frameGetMidY(frame)
        }
    }
    ,
    Utils.frameInFrame = function(frameA, frameB) {
        var len, o, point, ref;
        for (ref = Utils.pointsFromFrame(frameA),
        o = 0,
        len = ref.length; o < len; o++)
            if (point = ref[o],
            !Utils.pointInFrame(point, frameB))
                return !1;
        return !0
    }
    ,
    Utils.rotationNormalizer = function() {
        var lastValue;
        return lastValue = null,
        function(value) {
            var diff, maxDiff, nTimes;
            return null == lastValue && (lastValue = value),
            diff = lastValue - value,
            maxDiff = Math.abs(diff) + 180,
            nTimes = Math.floor(maxDiff / 360),
            diff < 180 && (value -= 360 * nTimes),
            diff > 180 && (value += 360 * nTimes),
            lastValue = value,
            value
        }
    }
    ,
    Utils.convertPointToContext = function(point, layer, rootContext, includeLayer) {
        var ancestor, ancestors, len, o;
        for (null == point && (point = {}),
        null == rootContext && (rootContext = !1),
        null == includeLayer && (includeLayer = !0),
        point = _.defaults(point, {
            x: 0,
            y: 0,
            z: 0
        }),
        ancestors = layer.ancestors(rootContext),
        includeLayer && ancestors.unshift(layer),
        o = 0,
        len = ancestors.length; o < len; o++)
            ancestor = ancestors[o],
            (ancestor.flat || ancestor.clip) && (point.z = 0),
            point = ancestor.matrix3d.point(point),
            ancestor.parent || (point.z = 0);
        return point
    }
    ,
    Utils.convertFrameToContext = function(frame, layer, rootContext, includeLayer) {
        var convertedCorners, corners;
        return null == frame && (frame = {}),
        null == rootContext && (rootContext = !1),
        null == includeLayer && (includeLayer = !0),
        frame = _.defaults(frame, {
            x: 0,
            y: 0,
            width: 100,
            height: 100
        }),
        corners = Utils.pointsFromFrame(frame),
        convertedCorners = corners.map(function(point) {
            return Utils.convertPointToContext(point, layer, rootContext, includeLayer)
        }),
        Utils.frameFromPoints(convertedCorners)
    }
    ,
    Utils.convertPointFromContext = function(point, layer, rootContext, includeLayer) {
        var ancestor, ancestors, len, node, o, parent;
        if (null == point && (point = {}),
        null == rootContext && (rootContext = !1),
        null == includeLayer && (includeLayer = !0),
        point = _.defaults(point, {
            x: 0,
            y: 0,
            z: 0
        }),
        rootContext && "undefined" != typeof webkitConvertPointFromPageToNode && null !== webkitConvertPointFromPageToNode)
            return includeLayer ? node = layer._element : (parent = layer.parent || layer.context,
            node = parent._element),
            Utils.point(webkitConvertPointFromPageToNode(node, new WebKitPoint(point.x,point.y)));
        for (ancestors = layer.ancestors(rootContext),
        ancestors.reverse(),
        includeLayer && ancestors.push(layer),
        o = 0,
        len = ancestors.length; o < len; o++)
            ancestor = ancestors[o],
            ancestor.matrix3d && (point = ancestor.matrix3d.inverse().point(point));
        return point
    }
    ,
    Utils.convertFrameFromContext = function(frame, layer, rootContext, includeLayer) {
        var convertedCorners, corners;
        return null == frame && (frame = {}),
        null == rootContext && (rootContext = !1),
        null == includeLayer && (includeLayer = !0),
        frame = _.defaults(frame, {
            x: 0,
            y: 0,
            width: 100,
            height: 100
        }),
        corners = Utils.pointsFromFrame(frame),
        convertedCorners = corners.map(function(point) {
            return Utils.convertPointFromContext(point, layer, rootContext, includeLayer)
        }),
        Utils.frameFromPoints(convertedCorners)
    }
    ,
    Utils.convertPoint = function(input, layerA, layerB, rootContext) {
        var node, point;
        return null == rootContext && (rootContext = !1),
        point = _.defaults(input, {
            x: 0,
            y: 0,
            z: 0
        }),
        layerA && (point = Utils.convertPointToContext(point, layerA, rootContext)),
        null != layerB ? Utils.convertPointFromContext(point, layerB, rootContext) : null != layerA && rootContext && "undefined" != typeof webkitConvertPointFromPageToNode && null !== webkitConvertPointFromPageToNode ? (node = layerA.context._element,
        Utils.point(webkitConvertPointFromPageToNode(node, new WebKitPoint(point.x,point.y)))) : point
    }
    ,
    Utils.boundingFrame = function(layer, rootContext) {
        var boundingFrame, contextCornerPoints, cornerPoints, frame;
        return null == rootContext && (rootContext = !0),
        frame = {
            x: 0,
            y: 0,
            width: layer.width,
            height: layer.height
        },
        cornerPoints = Utils.pointsFromFrame(frame),
        contextCornerPoints = cornerPoints.map(function(point) {
            return Utils.convertPointToContext(point, layer, rootContext)
        }),
        boundingFrame = Utils.frameFromPoints(contextCornerPoints),
        Utils.pixelAlignedFrame(boundingFrame)
    }
    ,
    Utils.perspectiveProjectionMatrix = function(element) {
        var m, p;
        return p = element.perspective,
        m = new Matrix,
        null != p && 0 !== p && (m.m34 = -1 / p),
        m
    }
    ,
    Utils.perspectiveMatrix = function(element) {
        var ox, oy, ppm;
        return ox = element.perspectiveOriginX * element.width,
        oy = element.perspectiveOriginY * element.height,
        ppm = Utils.perspectiveProjectionMatrix(element),
        (new Matrix).translate(ox, oy).multiply(ppm).translate(-ox, -oy)
    }
    ,
    Utils.globalLayers = function(importedLayers) {
        var layer, layerName;
        for (layerName in importedLayers)
            layer = importedLayers[layerName],
            layerName = layerName.replace(/\s/g, ""),
            window.hasOwnProperty(layerName) && !window.Framer._globalWarningGiven ? print("Warning: Cannot make layer '" + layerName + "' a global, a variable with that name already exists") : window[layerName] = layer;
        return window.Framer._globalWarningGiven = !0
    }
    ,
    _textSizeNode = null,
    Utils.textSize = function(text, style, constraints) {
        var frame, rect, shouldCreateNode;
        return null == style && (style = {}),
        null == constraints && (constraints = {}),
        shouldCreateNode = !_textSizeNode,
        shouldCreateNode && (_textSizeNode = document.createElement("div"),
        _textSizeNode.id = "_textSizeNode"),
        _textSizeNode.removeAttribute("style"),
        _textSizeNode.innerHTML = text,
        style = _.extend(_.clone(style), {
            position: "fixed",
            display: "inline",
            visibility: "hidden",
            top: "-10000px",
            left: "-10000px"
        }),
        delete style.width,
        delete style.height,
        delete style.bottom,
        delete style.right,
        constraints.width && (style.width = constraints.width + "px"),
        constraints.height && (style.height = constraints.height + "px"),
        _.extend(_textSizeNode.style, style),
        shouldCreateNode && (window.document.body ? window.document.body.appendChild(_textSizeNode) : (document.write(_textSizeNode.outerHTML),
        _textSizeNode = document.getElementById("_textSizeNode"))),
        rect = _textSizeNode.getBoundingClientRect(),
        frame = {
            width: rect.right - rect.left,
            height: rect.bottom - rect.top
        }
    }
    ,
    _.extend(exports, Utils)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, ScreenClass, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    BaseClass = __webpack_require__(6).BaseClass,
    ScreenClass = function(superClass) {
        function ScreenClass() {
            return ScreenClass.__super__.constructor.apply(this, arguments)
        }
        return extend(ScreenClass, superClass),
        ScreenClass.define("width", {
            get: function() {
                return this.device ? this.device.screenSize.width : Canvas.width
            }
        }),
        ScreenClass.define("height", {
            get: function() {
                return this.device ? this.device.screenSize.height : Canvas.height
            }
        }),
        ScreenClass.define("canvasFrame", {
            get: function() {
                return this.device ? this.device.context.canvasFrame : this.frame
            }
        }),
        ScreenClass.define("midX", {
            get: function() {
                return Utils.frameGetMidX(this.frame)
            }
        }),
        ScreenClass.define("midY", {
            get: function() {
                return Utils.frameGetMidY(this.frame)
            }
        }),
        ScreenClass.define("size", {
            get: function() {
                return Utils.size(this)
            }
        }),
        ScreenClass.define("frame", {
            get: function() {
                return Utils.frame(this)
            }
        }),
        ScreenClass.define("device", {
            get: function() {
                return Framer.CurrentContext.device
            }
        }),
        ScreenClass.define("backgroundColor", ScreenClass.proxyProperty("device.screen.backgroundColor")),
        ScreenClass.define("perspective", ScreenClass.proxyProperty("device.context.perspective")),
        ScreenClass.define("perspectiveOriginX", ScreenClass.proxyProperty("device.context.perspectiveOriginX")),
        ScreenClass.define("perspectiveOriginY", ScreenClass.proxyProperty("device.context.perspectiveOriginY")),
        ScreenClass.prototype.toInspect = function() {
            return "<Screen " + Utils.roundWhole(this.width) + "x" + Utils.roundWhole(this.height) + ">"
        }
        ,
        ScreenClass.prototype.convertPointToLayer = function(point, layer) {
            return Utils.convertPointFromContext(point, layer, !1, !0)
        }
        ,
        ScreenClass.prototype.convertPointToCanvas = function(point) {
            var ctx;
            return ctx = Framer.Device.context,
            Utils.convertPointToContext(point, ctx, !0, !1)
        }
        ,
        ScreenClass.prototype.onEdgeSwipe = function(cb) {
            return this.on(Events.EdgeSwipe, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeStart = function(cb) {
            return this.on(Events.EdgeSwipeStart, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeEnd = function(cb) {
            return this.on(Events.EdgeSwipeEnd, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeTop = function(cb) {
            return this.on(Events.EdgeSwipeTop, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeTopStart = function(cb) {
            return this.on(Events.EdgeSwipeTopStart, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeTopEnd = function(cb) {
            return this.on(Events.EdgeSwipeTopEnd, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeRight = function(cb) {
            return this.on(Events.EdgeSwipeRight, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeRightStart = function(cb) {
            return this.on(Events.EdgeSwipeRightStart, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeRightEnd = function(cb) {
            return this.on(Events.EdgeSwipeRightEnd, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeBottom = function(cb) {
            return this.on(Events.EdgeSwipeBottom, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeBottomStart = function(cb) {
            return this.on(Events.EdgeSwipeBottomStart, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeBottomEnd = function(cb) {
            return this.on(Events.EdgeSwipeBottomEnd, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeLeft = function(cb) {
            return this.on(Events.EdgeSwipeLeft, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeLeftStart = function(cb) {
            return this.on(Events.EdgeSwipeLeftStart, cb)
        }
        ,
        ScreenClass.prototype.onEdgeSwipeLeftEnd = function(cb) {
            return this.on(Events.EdgeSwipeLeftEnd, cb)
        }
        ,
        ScreenClass
    }(BaseClass),
    exports.Screen = new ScreenClass
}
, function(module, exports, __webpack_require__) {
    var CounterKey, DefinedPropertiesKey, DefinedPropertiesOrderKey, DefinedPropertiesValuesKey, EventEmitter, Utils, _, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    EventEmitter = __webpack_require__(7).EventEmitter,
    CounterKey = "_ObjectCounter",
    DefinedPropertiesKey = "_DefinedPropertiesKey",
    DefinedPropertiesValuesKey = "_DefinedPropertiesValuesKey",
    DefinedPropertiesOrderKey = "_DefinedPropertiesOrderKey",
    exports.BaseClass = function(superClass) {
        function BaseClass(options) {
            this.toInspect = bind(this.toInspect, this),
            this._getPropertyValue = bind(this._getPropertyValue, this),
            this._setPropertyValue = bind(this._setPropertyValue, this);
            var base;
            BaseClass.__super__.constructor.apply(this, arguments),
            this._context = "undefined" != typeof Framer && null !== Framer ? Framer.CurrentContext : void 0,
            this[DefinedPropertiesValuesKey] = {},
            this._applyDefaults(options),
            null == (base = this.constructor)[CounterKey] && (base[CounterKey] = 0),
            this.constructor[CounterKey] += 1,
            this._id = this.constructor[CounterKey]
        }
        return extend(BaseClass, superClass),
        BaseClass.define = function(propertyName, descriptor) {
            return this !== BaseClass && this._addDescriptor(propertyName, descriptor),
            Object.defineProperty(this.prototype, propertyName, descriptor)
        }
        ,
        BaseClass._addDescriptor = function(propertyName, descriptor) {
            var depend, i, len, ref;
            if (descriptor.propertyName = propertyName,
            null == descriptor.enumerable && (descriptor.enumerable = !0),
            null == descriptor.exportable && (descriptor.exportable = !0),
            null == descriptor.importable && (descriptor.importable = !0),
            descriptor.importable = descriptor.importable && descriptor.set,
            descriptor.exportable = descriptor.exportable && descriptor.set,
            !_.startsWith(propertyName, "_") && (descriptor.exportable || descriptor.importable)) {
                if (null == this[DefinedPropertiesKey] && (this[DefinedPropertiesKey] = {}),
                this[DefinedPropertiesKey][propertyName] = descriptor,
                null == this[DefinedPropertiesOrderKey] && (this[DefinedPropertiesOrderKey] = []),
                descriptor.depends)
                    for (ref = descriptor.depends,
                    i = 0,
                    len = ref.length; i < len; i++)
                        depend = ref[i],
                        indexOf.call(this[DefinedPropertiesOrderKey], depend) < 0 && this[DefinedPropertiesOrderKey].push(depend);
                return this[DefinedPropertiesOrderKey].push(propertyName)
            }
        }
        ,
        BaseClass.simpleProperty = function(name, fallback, options) {
            return null == options && (options = {}),
            _.extend(options, {
                default: fallback,
                get: function() {
                    return this._getPropertyValue(name)
                },
                set: function(value) {
                    return this._setPropertyValue(name, value)
                }
            })
        }
        ,
        BaseClass.proxyProperty = function(keyPath, options) {
            var descriptor, objectKey;
            return null == options && (options = {}),
            objectKey = keyPath.split(".")[0],
            descriptor = _.extend(options, {
                get: function() {
                    if (_.isObject(this[objectKey]))
                        return Utils.getValueForKeyPath(this, keyPath)
                },
                set: function(value) {
                    if (_.isObject(this[objectKey]))
                        return Utils.setValueForKeyPath(this, keyPath, value)
                },
                proxy: !0
            })
        }
        ,
        BaseClass.prototype._setPropertyValue = function(k, v) {
            return this[DefinedPropertiesValuesKey][k] = v
        }
        ,
        BaseClass.prototype._getPropertyValue = function(k) {
            return Utils.valueOrDefault(this[DefinedPropertiesValuesKey][k], this._getPropertyDefaultValue(k))
        }
        ,
        BaseClass.prototype._getPropertyDefaultValue = function(k) {
            return this._propertyList()[k].default
        }
        ,
        BaseClass.prototype._propertyList = function() {
            return this.constructor[DefinedPropertiesKey]
        }
        ,
        BaseClass.prototype.keys = function() {
            return _.keys(this.props)
        }
        ,
        BaseClass.define("props", {
            importable: !1,
            exportable: !1,
            get: function() {
                var descriptor, key, keys, propertyList;
                keys = [],
                propertyList = this._propertyList();
                for (key in propertyList)
                    descriptor = propertyList[key],
                    descriptor.exportable && keys.push(key);
                return _.pick(this, keys)
            },
            set: function(value) {
                var k, propertyList, ref, results, v;
                propertyList = this._propertyList(),
                results = [];
                for (k in value)
                    v = value[k],
                    (null != (ref = propertyList[k]) ? ref.importable : void 0) ? results.push(this[k] = v) : results.push(void 0);
                return results
            }
        }),
        BaseClass.define("id", {
            get: function() {
                return this._id
            }
        }),
        BaseClass.prototype.toInspect = function() {
            return "<" + this.constructor.name + " id:" + (this.id || null) + ">"
        }
        ,
        BaseClass.prototype.onChange = function(name, cb) {
            return this.on("change:" + name, cb)
        }
        ,
        BaseClass.prototype._applyDefaults = function(options) {
            var i, k, len, ref, results;
            if (this.constructor[DefinedPropertiesOrderKey] && options) {
                for (ref = this.constructor[DefinedPropertiesOrderKey],
                results = [],
                i = 0,
                len = ref.length; i < len; i++)
                    k = ref[i],
                    results.push(this._applyDefault(k, options[k]));
                return results
            }
        }
        ,
        BaseClass.prototype._applyProxyDefaults = function(options) {
            var descriptor, i, k, len, ref, results;
            if (this.constructor[DefinedPropertiesOrderKey] && options) {
                for (ref = this.constructor[DefinedPropertiesOrderKey],
                results = [],
                i = 0,
                len = ref.length; i < len; i++)
                    k = ref[i],
                    descriptor = this.constructor[DefinedPropertiesKey][k],
                    null != (null != descriptor ? descriptor.proxy : void 0) == !0 && results.push(this._applyDefault(k, options[k]));
                return results
            }
        }
        ,
        BaseClass.prototype._applyDefault = function(key, optionValue) {
            var descriptor, value;
            if (descriptor = this.constructor[DefinedPropertiesKey][key],
            !descriptor)
                throw Error("Missing dependant descriptor: " + key);
            if (descriptor.set && (descriptor.importable && (value = optionValue),
            value = Utils.valueOrDefault(optionValue, this._getPropertyDefaultValue(key)),
            null !== value && void 0 !== value))
                return this[key] = value
        }
        ,
        BaseClass
    }(EventEmitter)
}
, function(module, exports, __webpack_require__) {
    var EventEmitter3, EventKey, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    EventEmitter3 = __webpack_require__(8),
    EventKey = "_events",
    exports.EventEmitter = function(superClass) {
        function EventEmitter() {
            return EventEmitter.__super__.constructor.apply(this, arguments)
        }
        return extend(EventEmitter, superClass),
        EventEmitter.prototype.listenerEvents = function() {
            return _.keys(this[EventKey])
        }
        ,
        EventEmitter.prototype.removeAllListeners = function(eventName) {
            var eventNames, i, len, listener, results;
            for (eventNames = eventName ? [eventName] : this.listenerEvents(),
            results = [],
            i = 0,
            len = eventNames.length; i < len; i++)
                eventName = eventNames[i],
                results.push(function() {
                    var j, len1, ref, results1;
                    for (ref = this.listeners(eventName),
                    results1 = [],
                    j = 0,
                    len1 = ref.length; j < len1; j++)
                        listener = ref[j],
                        results1.push(this.removeListener(eventName, listener));
                    return results1
                }
                .call(this));
            return results
        }
        ,
        EventEmitter
    }(EventEmitter3)
}
, function(module, exports, __webpack_require__) {
    "use strict";
    function EE(fn, context, once) {
        this.fn = fn,
        this.context = context,
        this.once = once || !1
    }
    function EventEmitter() {}
    var has = Object.prototype.hasOwnProperty
      , prefix = "function" != typeof Object.create && "~";
    EventEmitter.prototype._events = void 0,
    EventEmitter.prototype.eventNames = function() {
        var name, events = this._events, names = [];
        if (!events)
            return names;
        for (name in events)
            has.call(events, name) && names.push(prefix ? name.slice(1) : name);
        return Object.getOwnPropertySymbols ? names.concat(Object.getOwnPropertySymbols(events)) : names
    }
    ,
    EventEmitter.prototype.listeners = function(event, exists) {
        var evt = prefix ? prefix + event : event
          , available = this._events && this._events[evt];
        if (exists)
            return !!available;
        if (!available)
            return [];
        if (available.fn)
            return [available.fn];
        for (var i = 0, l = available.length, ee = new Array(l); i < l; i++)
            ee[i] = available[i].fn;
        return ee
    }
    ,
    EventEmitter.prototype.emit = function(event, a1, a2, a3, a4, a5) {
        var evt = prefix ? prefix + event : event;
        if (!this._events || !this._events[evt])
            return !1;
        var args, i, listeners = this._events[evt], len = arguments.length;
        if ("function" == typeof listeners.fn) {
            switch (listeners.once && this.removeListener(event, listeners.fn, void 0, !0),
            len) {
            case 1:
                return listeners.fn.call(listeners.context),
                !0;
            case 2:
                return listeners.fn.call(listeners.context, a1),
                !0;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2),
                !0;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3),
                !0;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4),
                !0;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5),
                !0
            }
            for (i = 1,
            args = new Array(len - 1); i < len; i++)
                args[i - 1] = arguments[i];
            listeners.fn.apply(listeners.context, args)
        } else {
            var j, length = listeners.length;
            for (i = 0; i < length; i++)
                switch (listeners[i].once && this.removeListener(event, listeners[i].fn, void 0, !0),
                len) {
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                default:
                    if (!args)
                        for (j = 1,
                        args = new Array(len - 1); j < len; j++)
                            args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args)
                }
        }
        return !0
    }
    ,
    EventEmitter.prototype.on = function(event, fn, context) {
        var listener = new EE(fn,context || this)
          , evt = prefix ? prefix + event : event;
        return this._events || (this._events = prefix ? {} : Object.create(null)),
        this._events[evt] ? this._events[evt].fn ? this._events[evt] = [this._events[evt], listener] : this._events[evt].push(listener) : this._events[evt] = listener,
        this
    }
    ,
    EventEmitter.prototype.once = function(event, fn, context) {
        var listener = new EE(fn,context || this,!0)
          , evt = prefix ? prefix + event : event;
        return this._events || (this._events = prefix ? {} : Object.create(null)),
        this._events[evt] ? this._events[evt].fn ? this._events[evt] = [this._events[evt], listener] : this._events[evt].push(listener) : this._events[evt] = listener,
        this
    }
    ,
    EventEmitter.prototype.removeListener = function(event, fn, context, once) {
        var evt = prefix ? prefix + event : event;
        if (!this._events || !this._events[evt])
            return this;
        var listeners = this._events[evt]
          , events = [];
        if (fn)
            if (listeners.fn)
                (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) && events.push(listeners);
            else
                for (var i = 0, length = listeners.length; i < length; i++)
                    (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) && events.push(listeners[i]);
        return events.length ? this._events[evt] = 1 === events.length ? events[0] : events : delete this._events[evt],
        this
    }
    ,
    EventEmitter.prototype.removeAllListeners = function(event) {
        return this._events ? (event ? delete this._events[prefix ? prefix + event : event] : this._events = prefix ? {} : Object.create(null),
        this) : this
    }
    ,
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener,
    EventEmitter.prototype.addListener = EventEmitter.prototype.on,
    EventEmitter.prototype.setMaxListeners = function() {
        return this
    }
    ,
    EventEmitter.prefixed = prefix,
    module.exports = EventEmitter
}
, function(module, exports) {
    WebKitCSSMatrix.prototype.skew = function(skew) {
        var m, rad, value;
        return skew ? (rad = skew * Math.PI / 180,
        value = Math.tan(rad),
        m = new WebKitCSSMatrix,
        m.m12 = value,
        m.m21 = value,
        this.multiply(m)) : this
    }
    ,
    WebKitCSSMatrix.prototype.point = function(point) {
        var ref, w, x, y, z;
        return null == point && (point = {}),
        ref = _.defaults(point, {
            x: 0,
            y: 0,
            z: 0
        }),
        x = ref.x,
        y = ref.y,
        z = ref.z,
        w = this.m14 * x + this.m24 * y + this.m34 * z + this.m44,
        w = w || 1,
        point = {
            x: (this.m11 * x + this.m21 * y + this.m31 * z + this.m41) / w,
            y: (this.m12 * x + this.m22 * y + this.m32 * z + this.m42) / w,
            z: (this.m13 * x + this.m23 * y + this.m33 * z + this.m43) / w
        }
    }
    ,
    exports.Matrix = WebKitCSSMatrix
}
, function(module, exports, __webpack_require__) {
    var BaseClass, ColorModel, ColorType, _, bound01, convertToPercentage, correctAlpha, cssNames, hslToRgb, inputData, isNumeric, isOnePointZero, isPercentage, libhusl, matchers, numberFromString, pad2, percentToFraction, rgbToHex, rgbToHsl, rgbToRgb, rgbaFromHusl, stringToObject, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, slice = [].slice;
    _ = __webpack_require__(1)._,
    BaseClass = __webpack_require__(6).BaseClass,
    libhusl = __webpack_require__(11),
    ColorType = {
        RGB: "rgb",
        HSL: "hsl",
        HEX: "hex",
        NAME: "name"
    },
    exports.Color = function(superClass) {
        function Color(color1, r, g, b) {
            var color, input;
            return this.color = color1,
            this.toInspect = bind(this.toInspect, this),
            "" === this.color && (this.color = null),
            color = this.color,
            Color.isColorObject(color) ? color : (input = inputData(color, r, g, b),
            this._type = input.type,
            this._r = input.r,
            this._g = input.g,
            this._b = input.b,
            this._a = input.a,
            this._h = input.h,
            this._s = input.s,
            this._l = input.l,
            void (this._roundA = Math.round(100 * this._a) / 100))
        }
        return extend(Color, superClass),
        Color.define("r", {
            get: function() {
                return this._r
            }
        }),
        Color.define("g", {
            get: function() {
                return this._g
            }
        }),
        Color.define("b", {
            get: function() {
                return this._b
            }
        }),
        Color.define("a", {
            get: function() {
                return this._a
            }
        }),
        Color.define("h", {
            get: function() {
                return this._h
            }
        }),
        Color.define("s", {
            get: function() {
                return this._s
            }
        }),
        Color.define("l", {
            get: function() {
                return this._l
            }
        }),
        Color.prototype.toHex = function(allow3Char) {
            return rgbToHex(this._r, this._g, this._b, allow3Char)
        }
        ,
        Color.prototype.toHexString = function(allow3Char) {
            return "#" + this.toHex(allow3Char)
        }
        ,
        Color.prototype.toRgb = function() {
            return void 0 === this._rgb && (this._rgb = {
                r: Math.round(this._r),
                g: Math.round(this._g),
                b: Math.round(this._b),
                a: this._a
            }),
            _.clone(this._rgb)
        }
        ,
        Color.prototype.toRgbString = function() {
            return 1 === this._a ? "rgb(" + Utils.round(this._r, 0) + ", " + Utils.round(this._g, 0) + ", " + Utils.round(this._b, 0) + ")" : "rgba(" + Utils.round(this._r, 0) + ", " + Utils.round(this._g, 0) + ", " + Utils.round(this._b, 0) + ", " + this._roundA + ")"
        }
        ,
        Color.prototype.toHsl = function() {
            return void 0 === this._hsl && (this._hsl = {
                h: this.h,
                s: this.s,
                l: this.l,
                a: this.a
            }),
            _.clone(this._hsl)
        }
        ,
        Color.prototype.toHusl = function() {
            var c, husl;
            return void 0 === this._husl && (c = libhusl._conv,
            husl = c.lch.husl(c.luv.lch(c.xyz.luv(c.rgb.xyz([this.r / 255, this.g / 255, this.b / 255])))),
            this._husl = {
                h: husl[0],
                s: husl[1],
                l: husl[2]
            }),
            _.clone(this._husl)
        }
        ,
        Color.prototype.toHslString = function() {
            var h, hsl, l, s;
            return void 0 === this._hslString && (hsl = this.toHsl(),
            h = Math.round(hsl.h),
            s = Math.round(100 * hsl.s),
            l = Math.round(100 * hsl.l),
            1 === this._a ? this._hslString = "hsl(" + h + ", " + s + "%, " + l + "%)" : this._hslString = "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")"),
            this._hslString
        }
        ,
        Color.prototype.toName = function() {
            var hex, i, key, len, ref, value;
            if (0 === this._a)
                return "transparent";
            if (this._a < 1)
                return !1;
            for (hex = rgbToHex(this._r, this._g, this._b, !0),
            ref = _.keys(cssNames),
            i = 0,
            len = ref.length; i < len; i++)
                if (key = ref[i],
                value = cssNames[key],
                value === hex)
                    return key;
            return !1
        }
        ,
        Color.prototype.lighten = function(amount) {
            var hsl;
            return null == amount && (amount = 10),
            hsl = this.toHsl(),
            hsl.l += amount / 100,
            hsl.l = Math.min(1, Math.max(0, hsl.l)),
            new Color(hsl)
        }
        ,
        Color.prototype.brighten = function(amount) {
            var rgb;
            return null == amount && (amount = 10),
            rgb = this.toRgb(),
            rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100)))),
            rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100)))),
            rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100)))),
            new Color(rgb)
        }
        ,
        Color.prototype.darken = function(amount) {
            var hsl;
            return null == amount && (amount = 10),
            hsl = this.toHsl(),
            hsl.l -= amount / 100,
            hsl.l = Math.min(1, Math.max(0, hsl.l)),
            new Color(hsl)
        }
        ,
        Color.prototype.desaturate = function(amount) {
            var hsl;
            return null == amount && (amount = 10),
            hsl = this.toHsl(),
            hsl.s -= amount / 100,
            hsl.s = Math.min(1, Math.max(0, hsl.s)),
            new Color(hsl)
        }
        ,
        Color.prototype.saturate = function(amount) {
            var hsl;
            return null == amount && (amount = 10),
            hsl = this.toHsl(),
            hsl.s += amount / 100,
            hsl.s = Math.min(1, Math.max(0, hsl.s)),
            new Color(hsl)
        }
        ,
        Color.prototype.grayscale = function() {
            var hsl;
            return hsl = this.toHsl(),
            new Color(hsl).desaturate(100)
        }
        ,
        Color.prototype.toString = function() {
            return this.toRgbString()
        }
        ,
        Color.prototype.alpha = function(alpha) {
            var result;
            return null == alpha && (alpha = 1),
            result = new Color({
                r: this.r,
                g: this.g,
                b: this.b,
                a: alpha
            })
        }
        ,
        Color.prototype.transparent = function() {
            return this.alpha(0)
        }
        ,
        Color.prototype.mix = function(colorB, fraction, limit, model) {
            return null == limit && (limit = !1),
            Color.mix(this, colorB, fraction, limit, model)
        }
        ,
        Color.prototype.copy = function() {
            return new Color(this)
        }
        ,
        Color.prototype.isEqual = function(colorB) {
            return Color.equal(this, colorB)
        }
        ,
        Color.prototype.toInspect = function() {
            return this._type === ColorType.HSL ? "<" + this.constructor.name + " h:" + this.h + " s:" + this.s + " l:" + this.l + " a:" + this.a + ">" : this._type === ColorType.HEX || this._type === ColorType.NAME ? "<" + this.constructor.name + ' "' + this.color + '">' : "<" + this.constructor.name + " r:" + this.r + " g:" + this.g + " b:" + this.b + " a:" + this.a + ">"
        }
        ,
        Color.mix = function(colorA, colorB, fraction, limit, model) {
            var deltaH, fromH, hslA, hslB, result, toH, tween;
            return null == fraction && (fraction = .5),
            null == limit && (limit = !1),
            result = null,
            "string" == typeof colorA && this.isColorString(colorA) && (colorA = new Color(colorA)),
            "string" == typeof colorB && this.isColorString(colorB) && (colorB = new Color(colorB)),
            !(colorA instanceof Color) && colorB instanceof Color ? colorA = colorB.transparent() : colorA instanceof Color && 0 === colorA._a && colorB instanceof Color && 0 !== colorB._a ? colorA = colorB.transparent() : !(colorB instanceof Color) && colorA instanceof Color ? colorB = colorA.transparent() : colorB instanceof Color && 0 === colorB._a && colorA instanceof Color && 0 !== colorA._a && (colorB = colorA.transparent()),
            colorB instanceof Color && (ColorModel.isRGB(model) ? result = new Color({
                r: Utils.modulate(fraction, [0, 1], [colorA._r, colorB._r], limit),
                g: Utils.modulate(fraction, [0, 1], [colorA._g, colorB._g], limit),
                b: Utils.modulate(fraction, [0, 1], [colorA._b, colorB._b], limit),
                a: Utils.modulate(fraction, [0, 1], [colorA._a, colorB._a], limit)
            }) : (ColorModel.isHSL(model) ? (hslA = colorA.toHsl(),
            hslB = colorB.toHsl()) : (hslA = colorA.toHusl(),
            hslB = colorB.toHusl()),
            0 === hslA.s ? hslA.h = hslB.h : 0 === hslB.s && (hslB.h = hslA.h),
            fromH = hslA.h,
            toH = hslB.h,
            deltaH = toH - fromH,
            deltaH > 180 ? deltaH = toH - 360 - fromH : deltaH < -180 && (deltaH = toH + 360 - fromH),
            tween = {
                h: Utils.modulate(fraction, [0, 1], [fromH, fromH + deltaH], limit),
                s: Utils.modulate(fraction, [0, 1], [hslA.s, hslB.s], limit),
                l: Utils.modulate(fraction, [0, 1], [hslA.l, hslB.l], limit),
                a: Utils.modulate(fraction, [0, 1], [colorA.a, colorB.a], limit)
            },
            result = new Color(ColorModel.isHSL(model) ? tween : rgbaFromHusl(tween)))),
            result
        }
        ,
        Color.random = function(alpha) {
            var c;
            return null == alpha && (alpha = 1),
            c = function() {
                return parseInt(255 * Math.random())
            }
            ,
            new Color("rgba(" + c() + ", " + c() + ", " + c() + ", " + alpha + ")")
        }
        ,
        Color.grey = function(g, alpha) {
            return null == g && (g = .5),
            null == alpha && (alpha = 1),
            g = parseInt(255 * g),
            new Color("rgba(" + g + ", " + g + ", " + g + ", " + alpha + ")")
        }
        ,
        Color.gray = function() {
            var args;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            this.grey.apply(this, args)
        }
        ,
        Color.toColor = function(color) {
            return new Color(color)
        }
        ,
        Color.validColorValue = function(color) {
            return color instanceof Color || null === color
        }
        ,
        Color.isColor = function(color) {
            return _.isString(color) ? this.isColorString(color) : this.isColorObject(color)
        }
        ,
        Color.isColorObject = function(color) {
            return color instanceof Color
        }
        ,
        Color.isColorString = function(colorString) {
            return !!_.isString(colorString) && stringToObject(colorString) !== !1
        }
        ,
        Color.isValidColorProperty = function(name, value) {
            return !!(_.endsWith(name.toLowerCase(), "color") && _.isString(value) && Color.isColorString(value))
        }
        ,
        Color.equal = function(colorA, colorB) {
            return !(!this.validColorValue(colorA) && !Color.isColorString(colorA)) && (!(!this.validColorValue(colorB) && !Color.isColorString(colorB)) && (colorA = new Color(colorA),
            colorB = new Color(colorB),
            colorA.r === colorB.r && (colorA.g === colorB.g && (colorA.b === colorB.b && colorA.a === colorB.a))))
        }
        ,
        Color.rgbToHsl = function(a, b, c) {
            return rgbToHsl(a, b, c)
        }
        ,
        Color
    }(BaseClass),
    ColorModel = {
        RGB: "rgb",
        RGBA: "rgba",
        HSL: "hsl",
        HSLA: "hsla"
    },
    ColorModel.isRGB = function(colorModel) {
        var ref;
        return !!_.isString(colorModel) && ((ref = colorModel.toLowerCase()) === ColorModel.RGB || ref === ColorModel.RGBA)
    }
    ,
    ColorModel.isHSL = function(colorModel) {
        var ref;
        return !!_.isString(colorModel) && ((ref = colorModel.toLowerCase()) === ColorModel.HSL || ref === ColorModel.HSLA)
    }
    ,
    rgbaFromHusl = function(husl) {
        var c, rgb, rgba;
        return c = libhusl._conv,
        rgb = c.xyz.rgb(c.luv.xyz(c.lch.luv(c.husl.lch([husl.h, husl.s, husl.l])))),
        rgba = {
            r: 255 * rgb[0],
            g: 255 * rgb[1],
            b: 255 * rgb[2],
            a: husl.a
        }
    }
    ,
    inputData = function(color, g, b, alpha) {
        var a, h, hsl, l, ok, rgb, s, type;
        return rgb = {
            r: 0,
            g: 0,
            b: 0
        },
        hsl = {
            h: 0,
            s: 0,
            l: 0
        },
        a = 1,
        ok = !1,
        type = ColorType.RGB,
        null === color ? a = 0 : _.isNumber(color) ? (rgb.r = color,
        _.isNumber(g) && (rgb.g = g),
        _.isNumber(b) && (rgb.b = b),
        _.isNumber(alpha) && (a = alpha)) : ("string" == typeof color && (color = stringToObject(color),
        color || (color = {
            r: 0,
            g: 0,
            b: 0,
            a: 0
        }),
        color.hasOwnProperty("type") && (type = color.type)),
        "object" == typeof color && (color.hasOwnProperty("r") || color.hasOwnProperty("g") || color.hasOwnProperty("b") ? rgb = rgbToRgb(color.r, color.g, color.b) : (color.hasOwnProperty("h") || color.hasOwnProperty("s") || color.hasOwnProperty("l")) && (h = isNumeric(color.h) ? parseFloat(color.h) : 0,
        h = (h + 360) % 360,
        s = isNumeric(color.s) ? color.s : 1,
        _.isString(color.s) && (s = numberFromString(color.s)),
        l = isNumeric(color.l) ? color.l : .5,
        _.isString(color.l) && (l = numberFromString(color.l)),
        rgb = hslToRgb(h, s, l),
        type = ColorType.HSL,
        hsl = {
            h: h,
            s: s,
            l: l
        }),
        color.hasOwnProperty("a") && (a = color.a))),
        a = correctAlpha(a),
        type !== ColorType.HSL && (hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)),
        {
            type: type,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            h: Utils.clamp(hsl.h, 0, 360),
            s: Utils.clamp(hsl.s, 0, 1),
            l: Utils.clamp(hsl.l, 0, 1),
            a: a
        }
    }
    ,
    numberFromString = function(string) {
        return string.match(/\d+/)[0]
    }
    ,
    rgbToRgb = function(r, g, b) {
        return {
            r: isNumeric(r) ? 255 * bound01(r, 255) : 0,
            g: isNumeric(g) ? 255 * bound01(g, 255) : 0,
            b: isNumeric(b) ? 255 * bound01(b, 255) : 0
        }
    }
    ,
    rgbToHex = function(r, g, b, allow3Char) {
        var hex;
        return hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))],
        allow3Char && hex[0].charAt(0) === hex[0].charAt(1) && hex[1].charAt(0) === hex[1].charAt(1) && hex[2].charAt(0) === hex[2].charAt(1) ? hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) : hex.join("")
    }
    ,
    rgbToHsl = function(r, g, b) {
        var d, h, l, max, min, s;
        if (r = bound01(r, 255),
        g = bound01(g, 255),
        b = bound01(b, 255),
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        h = s = l = (max + min) / 2,
        max === min)
            h = s = 0;
        else {
            switch (d = max - min,
            s = l > .5 ? d / (2 - max - min) : d / (max + min),
            max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4
            }
            h /= 6
        }
        return {
            h: 360 * h,
            s: s,
            l: l
        }
    }
    ,
    hslToRgb = function(h, s, l) {
        var b, g, hue2rgb, p, q, r;
        return r = void 0,
        g = void 0,
        b = void 0,
        h = bound01(h, 360),
        s = bound01(100 * s, 100),
        l = bound01(100 * l, 100),
        hue2rgb = function(p, q, t) {
            return t < 0 && (t += 1),
            t > 1 && (t -= 1),
            t < 1 / 6 ? p + 6 * (q - p) * t : t < .5 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p
        }
        ,
        0 === s ? r = g = b = l : (q = l < .5 ? l * (1 + s) : l + s - l * s,
        p = 2 * l - q,
        r = hue2rgb(p, q, h + 1 / 3),
        g = hue2rgb(p, q, h),
        b = hue2rgb(p, q, h - 1 / 3)),
        {
            r: 255 * r,
            g: 255 * g,
            b: 255 * b
        }
    }
    ,
    convertToPercentage = function(n) {
        return n <= 1 && (n = 100 * n + "%"),
        n
    }
    ,
    correctAlpha = function(a) {
        return a = parseFloat(a),
        a < 0 && (a = 0),
        (isNaN(a) || a > 1) && (a = 1),
        a
    }
    ,
    bound01 = function(n, max) {
        var processPercent;
        return isOnePointZero(n) && (n = "100%"),
        processPercent = isPercentage(n),
        n = Math.min(max, Math.max(0, parseFloat(n))),
        processPercent && (n = parseInt(n * max, 10) / 100),
        Math.abs(n - max) < 1e-6 ? 1 : n % max / parseFloat(max)
    }
    ,
    isOnePointZero = function(n) {
        return "string" == typeof n && n.indexOf(".") !== -1 && 1 === parseFloat(n)
    }
    ,
    isPercentage = function(n) {
        return "string" == typeof n && n.indexOf("%") !== -1
    }
    ,
    pad2 = function(char) {
        return 1 === char.length ? "0" + char : "" + char
    }
    ,
    matchers = function() {
        var css_integer, css_number, css_unit, permissive_match3, permissive_match4;
        return css_integer = "[-\\+]?\\d+%?",
        css_number = "[-\\+]?\\d*\\.\\d+%?",
        css_unit = "(?:" + css_number + ")|(?:" + css_integer + ")",
        permissive_match3 = "[\\s|\\(]+(" + css_unit + ")[,|\\s]+(" + css_unit + ")[,|\\s]+(" + css_unit + ")\\s*\\)?",
        permissive_match4 = "[\\s|\\(]+(" + css_unit + ")[,|\\s]+(" + css_unit + ")[,|\\s]+(" + css_unit + ")[,|\\s]+(" + css_unit + ")\\s*\\)?",
        {
            rgb: new RegExp("rgb" + permissive_match3),
            rgba: new RegExp("rgba" + permissive_match4),
            hsl: new RegExp("hsl" + permissive_match3),
            hsla: new RegExp("hsla" + permissive_match4),
            hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
            hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        }
    }(),
    isNumeric = function(value) {
        return !isNaN(value) && isFinite(value)
    }
    ,
    percentToFraction = function(percentage) {
        return numberFromString(percentage) / 100
    }
    ,
    stringToObject = function(color) {
        var match, named, trimLeft, trimRight;
        if (trimLeft = /^[\s,#]+/,
        trimRight = /\s+$/,
        color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase(),
        named = !1,
        cssNames[color])
            color = cssNames[color],
            named = !0,
            {
                type: ColorType.NAME
            };
        else if ("transparent" === color)
            return {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
                type: ColorType.NAME
            };
        return match = void 0,
        (match = matchers.rgb.exec(color)) ? {
            r: match[1],
            g: match[2],
            b: match[3]
        } : (match = matchers.rgba.exec(color)) ? {
            r: match[1],
            g: match[2],
            b: match[3],
            a: match[4]
        } : (match = matchers.hsl.exec(color)) ? {
            h: match[1],
            s: percentToFraction(match[2]),
            l: percentToFraction(match[3])
        } : (match = matchers.hsla.exec(color)) ? {
            h: match[1],
            s: percentToFraction(match[2]),
            l: percentToFraction(match[3]),
            a: match[4]
        } : (match = matchers.hex6.exec(color) || (match = matchers.hex6.exec(cssNames[color]))) ? {
            r: parseInt(match[1], 16),
            g: parseInt(match[2], 16),
            b: parseInt(match[3], 16),
            a: 1,
            type: ColorType.HEX
        } : !!(match = matchers.hex3.exec(color) || (match = matchers.hex3.exec(cssNames[color]))) && {
            r: parseInt(match[1] + "" + match[1], 16),
            g: parseInt(match[2] + "" + match[2], 16),
            b: parseInt(match[3] + "" + match[3], 16),
            type: ColorType.HEX
        }
    }
    ,
    cssNames = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    }
}
, function(module, exports, __webpack_require__) {
    var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
    (function(module) {
        (function() {
            var L_to_Y, Y_to_L, conv, distanceFromPole, dotProduct, epsilon, fromLinear, getBounds, intersectLineLine, kappa, lengthOfRayUntilIntersect, m, m_inv, maxChromaForLH, maxSafeChromaForL, refU, refV, root, toLinear;
            m = {
                R: [3.2409699419045213, -1.5373831775700935, -.4986107602930033],
                G: [-.9692436362808798, 1.8759675015077206, .04155505740717561],
                B: [.05563007969699361, -.20397695888897657, 1.0569715142428786]
            },
            m_inv = {
                X: [.4123907992659595, .35758433938387796, .1804807884018343],
                Y: [.21263900587151036, .7151686787677559, .07219231536073371],
                Z: [.01933081871559185, .11919477979462599, .9505321522496606]
            },
            refU = .19783000664283681,
            refV = .468319994938791,
            kappa = 903.2962962962963,
            epsilon = .008856451679035631,
            getBounds = function(L) {
                var bottom, channel, j, k, len1, len2, m1, m2, m3, ref, ref1, ref2, ret, sub1, sub2, t, top1, top2;
                for (sub1 = Math.pow(L + 16, 3) / 1560896,
                sub2 = sub1 > epsilon ? sub1 : L / kappa,
                ret = [],
                ref = ["R", "G", "B"],
                j = 0,
                len1 = ref.length; j < len1; j++)
                    for (channel = ref[j],
                    ref1 = m[channel],
                    m1 = ref1[0],
                    m2 = ref1[1],
                    m3 = ref1[2],
                    ref2 = [0, 1],
                    k = 0,
                    len2 = ref2.length; k < len2; k++)
                        t = ref2[k],
                        top1 = (284517 * m1 - 94839 * m3) * sub2,
                        top2 = (838422 * m3 + 769860 * m2 + 731718 * m1) * L * sub2 - 769860 * t * L,
                        bottom = (632260 * m3 - 126452 * m2) * sub2 + 126452 * t,
                        ret.push([top1 / bottom, top2 / bottom]);
                return ret
            }
            ,
            intersectLineLine = function(line1, line2) {
                return (line1[1] - line2[1]) / (line2[0] - line1[0])
            }
            ,
            distanceFromPole = function(point) {
                return Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2))
            }
            ,
            lengthOfRayUntilIntersect = function(theta, line) {
                var b1, len, m1;
                return m1 = line[0],
                b1 = line[1],
                len = b1 / (Math.sin(theta) - m1 * Math.cos(theta)),
                len < 0 ? null : len
            }
            ,
            maxSafeChromaForL = function(L) {
                var b1, j, len1, lengths, m1, ref, ref1, x;
                for (lengths = [],
                ref = getBounds(L),
                j = 0,
                len1 = ref.length; j < len1; j++)
                    ref1 = ref[j],
                    m1 = ref1[0],
                    b1 = ref1[1],
                    x = intersectLineLine([m1, b1], [-1 / m1, 0]),
                    lengths.push(distanceFromPole([x, b1 + x * m1]));
                return Math.min.apply(Math, lengths)
            }
            ,
            maxChromaForLH = function(L, H) {
                var hrad, j, l, len1, lengths, line, ref;
                for (hrad = H / 360 * Math.PI * 2,
                lengths = [],
                ref = getBounds(L),
                j = 0,
                len1 = ref.length; j < len1; j++)
                    line = ref[j],
                    l = lengthOfRayUntilIntersect(hrad, line),
                    null !== l && lengths.push(l);
                return Math.min.apply(Math, lengths)
            }
            ,
            dotProduct = function(a, b) {
                var i, j, ref, ret;
                for (ret = 0,
                i = j = 0,
                ref = a.length - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j)
                    ret += a[i] * b[i];
                return ret
            }
            ,
            fromLinear = function(c) {
                return c <= .0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - .055
            }
            ,
            toLinear = function(c) {
                var a;
                return a = .055,
                c > .04045 ? Math.pow((c + a) / (1 + a), 2.4) : c / 12.92
            }
            ,
            conv = {
                xyz: {},
                luv: {},
                lch: {},
                husl: {},
                huslp: {},
                rgb: {},
                hex: {}
            },
            conv.xyz.rgb = function(tuple) {
                var B, G, R;
                return R = fromLinear(dotProduct(m.R, tuple)),
                G = fromLinear(dotProduct(m.G, tuple)),
                B = fromLinear(dotProduct(m.B, tuple)),
                [R, G, B]
            }
            ,
            conv.rgb.xyz = function(tuple) {
                var B, G, R, X, Y, Z, rgbl;
                return R = tuple[0],
                G = tuple[1],
                B = tuple[2],
                rgbl = [toLinear(R), toLinear(G), toLinear(B)],
                X = dotProduct(m_inv.X, rgbl),
                Y = dotProduct(m_inv.Y, rgbl),
                Z = dotProduct(m_inv.Z, rgbl),
                [X, Y, Z]
            }
            ,
            Y_to_L = function(Y) {
                return Y <= epsilon ? Y * kappa : 116 * Math.pow(Y, 1 / 3) - 16
            }
            ,
            L_to_Y = function(L) {
                return L <= 8 ? L / kappa : Math.pow((L + 16) / 116, 3)
            }
            ,
            conv.xyz.luv = function(tuple) {
                var L, U, V, X, Y, Z, varU, varV;
                return X = tuple[0],
                Y = tuple[1],
                Z = tuple[2],
                0 === Y ? [0, 0, 0] : (L = Y_to_L(Y),
                varU = 4 * X / (X + 15 * Y + 3 * Z),
                varV = 9 * Y / (X + 15 * Y + 3 * Z),
                U = 13 * L * (varU - refU),
                V = 13 * L * (varV - refV),
                [L, U, V])
            }
            ,
            conv.luv.xyz = function(tuple) {
                var L, U, V, X, Y, Z, varU, varV;
                return L = tuple[0],
                U = tuple[1],
                V = tuple[2],
                0 === L ? [0, 0, 0] : (varU = U / (13 * L) + refU,
                varV = V / (13 * L) + refV,
                Y = L_to_Y(L),
                X = 0 - 9 * Y * varU / ((varU - 4) * varV - varU * varV),
                Z = (9 * Y - 15 * varV * Y - varV * X) / (3 * varV),
                [X, Y, Z])
            }
            ,
            conv.luv.lch = function(tuple) {
                var C, H, Hrad, L, U, V;
                return L = tuple[0],
                U = tuple[1],
                V = tuple[2],
                C = Math.sqrt(Math.pow(U, 2) + Math.pow(V, 2)),
                C < 1e-8 ? H = 0 : (Hrad = Math.atan2(V, U),
                H = 360 * Hrad / 2 / Math.PI,
                H < 0 && (H = 360 + H)),
                [L, C, H]
            }
            ,
            conv.lch.luv = function(tuple) {
                var C, H, Hrad, L, U, V;
                return L = tuple[0],
                C = tuple[1],
                H = tuple[2],
                Hrad = H / 360 * 2 * Math.PI,
                U = Math.cos(Hrad) * C,
                V = Math.sin(Hrad) * C,
                [L, U, V]
            }
            ,
            conv.husl.lch = function(tuple) {
                var C, H, L, S, max;
                return H = tuple[0],
                S = tuple[1],
                L = tuple[2],
                L > 99.9999999 || L < 1e-8 ? C = 0 : (max = maxChromaForLH(L, H),
                C = max / 100 * S),
                [L, C, H]
            }
            ,
            conv.lch.husl = function(tuple) {
                var C, H, L, S, max;
                return L = tuple[0],
                C = tuple[1],
                H = tuple[2],
                L > 99.9999999 || L < 1e-8 ? S = 0 : (max = maxChromaForLH(L, H),
                S = C / max * 100),
                [H, S, L]
            }
            ,
            conv.huslp.lch = function(tuple) {
                var C, H, L, S, max;
                return H = tuple[0],
                S = tuple[1],
                L = tuple[2],
                L > 99.9999999 || L < 1e-8 ? C = 0 : (max = maxSafeChromaForL(L),
                C = max / 100 * S),
                [L, C, H]
            }
            ,
            conv.lch.huslp = function(tuple) {
                var C, H, L, S, max;
                return L = tuple[0],
                C = tuple[1],
                H = tuple[2],
                L > 99.9999999 || L < 1e-8 ? S = 0 : (max = maxSafeChromaForL(L),
                S = C / max * 100),
                [H, S, L]
            }
            ,
            conv.rgb.hex = function(tuple) {
                var ch, hex, j, len1;
                for (hex = "#",
                j = 0,
                len1 = tuple.length; j < len1; j++) {
                    if (ch = tuple[j],
                    ch = Math.round(1e6 * ch) / 1e6,
                    ch < 0 || ch > 1)
                        throw new Error("Illegal rgb value: " + ch);
                    ch = Math.round(255 * ch).toString(16),
                    1 === ch.length && (ch = "0" + ch),
                    hex += ch
                }
                return hex
            }
            ,
            conv.hex.rgb = function(hex) {
                var b, g, j, len1, n, r, ref, results;
                for ("#" === hex.charAt(0) && (hex = hex.substring(1, 7)),
                r = hex.substring(0, 2),
                g = hex.substring(2, 4),
                b = hex.substring(4, 6),
                ref = [r, g, b],
                results = [],
                j = 0,
                len1 = ref.length; j < len1; j++)
                    n = ref[j],
                    results.push(parseInt(n, 16) / 255);
                return results
            }
            ,
            conv.lch.rgb = function(tuple) {
                return conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(tuple)))
            }
            ,
            conv.rgb.lch = function(tuple) {
                return conv.luv.lch(conv.xyz.luv(conv.rgb.xyz(tuple)))
            }
            ,
            conv.husl.rgb = function(tuple) {
                return conv.lch.rgb(conv.husl.lch(tuple))
            }
            ,
            conv.rgb.husl = function(tuple) {
                return conv.lch.husl(conv.rgb.lch(tuple))
            }
            ,
            conv.huslp.rgb = function(tuple) {
                return conv.lch.rgb(conv.huslp.lch(tuple))
            }
            ,
            conv.rgb.huslp = function(tuple) {
                return conv.lch.huslp(conv.rgb.lch(tuple))
            }
            ,
            root = {},
            root.fromRGB = function(R, G, B) {
                return conv.rgb.husl([R, G, B])
            }
            ,
            root.fromHex = function(hex) {
                return conv.rgb.husl(conv.hex.rgb(hex))
            }
            ,
            root.toRGB = function(H, S, L) {
                return conv.husl.rgb([H, S, L])
            }
            ,
            root.toHex = function(H, S, L) {
                return conv.rgb.hex(conv.husl.rgb([H, S, L]))
            }
            ,
            root.p = {},
            root.p.toRGB = function(H, S, L) {
                return conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(conv.huslp.lch([H, S, L]))))
            }
            ,
            root.p.toHex = function(H, S, L) {
                return conv.rgb.hex(conv.xyz.rgb(conv.luv.xyz(conv.lch.luv(conv.huslp.lch([H, S, L])))))
            }
            ,
            root.p.fromRGB = function(R, G, B) {
                return conv.lch.huslp(conv.luv.lch(conv.xyz.luv(conv.rgb.xyz([R, G, B]))))
            }
            ,
            root.p.fromHex = function(hex) {
                return conv.lch.huslp(conv.luv.lch(conv.xyz.luv(conv.rgb.xyz(conv.hex.rgb(hex)))))
            }
            ,
            root._conv = conv,
            root._getBounds = getBounds,
            root._maxChromaForLH = maxChromaForLH,
            root._maxSafeChromaForL = maxSafeChromaForL,
            "undefined" != typeof module && null !== module || "undefined" != typeof jQuery && null !== jQuery || "undefined" != typeof requirejs && null !== requirejs || (this.HUSL = root),
            "undefined" != typeof module && null !== module && (module.exports = root),
            "undefined" != typeof jQuery && null !== jQuery && (jQuery.husl = root),
            "undefined" != typeof requirejs && null !== requirejs && null !== __webpack_require__(12) && (__WEBPACK_AMD_DEFINE_FACTORY__ = root,
            __WEBPACK_AMD_DEFINE_RESULT__ = "function" == typeof __WEBPACK_AMD_DEFINE_FACTORY__ ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__,
            !(void 0 !== __WEBPACK_AMD_DEFINE_RESULT__ && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)))
        }
        ).call(this)
    }
    ).call(exports, __webpack_require__(3)(module))
}
, function(module, exports) {
    module.exports = function() {
        throw new Error("define cannot be used indirect")
    }
}
, function(module, exports, __webpack_require__) {
    var Animation, BaseClass, Color, Config, Defaults, EventEmitter, Events, Gestures, LayerDraggable, LayerPinchable, LayerStates, LayerStyle, Matrix, NoCacheDateKey, Utils, _, layerProperty, layerPropertyIgnore, layerPropertyPointTransformer, layerValueTypeError, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    , slice = [].slice;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Config = __webpack_require__(14).Config,
    Events = __webpack_require__(15).Events,
    Defaults = __webpack_require__(17).Defaults,
    BaseClass = __webpack_require__(6).BaseClass,
    EventEmitter = __webpack_require__(7).EventEmitter,
    Color = __webpack_require__(10).Color,
    Matrix = __webpack_require__(9).Matrix,
    Animation = __webpack_require__(18).Animation,
    LayerStyle = __webpack_require__(25).LayerStyle,
    LayerStates = __webpack_require__(26).LayerStates,
    LayerDraggable = __webpack_require__(28).LayerDraggable,
    LayerPinchable = __webpack_require__(35).LayerPinchable,
    Gestures = __webpack_require__(16).Gestures,
    NoCacheDateKey = Date.now(),
    layerValueTypeError = function(name, value) {
        throw new Error("Layer." + name + ": value '" + value + "' of type '" + typeof value + "'' is not valid")
    }
    ,
    layerProperty = function(obj, name, cssProperty, fallback, validator, transformer, options, set) {
        var result;
        return null == options && (options = {}),
        result = {
            default: fallback,
            get: function() {
                return this._properties.hasOwnProperty(name) ? this._properties[name] : fallback
            },
            set: function(value) {
                if (transformer && (value = transformer(value, this, name)),
                value !== this._properties[name] && (value && validator && !validator(value) && layerValueTypeError(name, value),
                this._properties[name] = value,
                null !== cssProperty && (this._element.style[cssProperty] = LayerStyle[cssProperty](this)),
                "function" == typeof set && set(this, value),
                !this.__constructor))
                    return this.emit("change:" + name, value),
                    "x" !== name && "y" !== name || this.emit("change:point", value),
                    "width" !== name && "height" !== name || this.emit("change:size", value),
                    "x" !== name && "y" !== name && "width" !== name && "height" !== name || this.emit("change:frame", value),
                    "rotationZ" === name ? this.emit("change:rotation", value) : void 0
            }
        },
        result = _.extend(result, options)
    }
    ,
    layerPropertyPointTransformer = function(value, layer, property) {
        return _.isFunction(value) && (value = value(layer, property)),
        value
    }
    ,
    layerPropertyIgnore = function(options, propertyName, properties) {
        var i, len, p;
        if (!options.hasOwnProperty(propertyName))
            return options;
        for (i = 0,
        len = properties.length; i < len; i++)
            if (p = properties[i],
            options.hasOwnProperty(p))
                return delete options[propertyName],
                options;
        return options
    }
    ,
    exports.Layer = function(superClass) {
        function Layer(options) {
            var i, len, p, ref;
            if (null == options && (options = {}),
            this.addListener = bind(this.addListener, this),
            this.once = bind(this.once, this),
            this.convertPointToLayer = bind(this.convertPointToLayer, this),
            this.convertPointToCanvas = bind(this.convertPointToCanvas, this),
            this.convertPointToScreen = bind(this.convertPointToScreen, this),
            this.__constructorCalled)
                throw Error("Layer.constructor " + this.toInspect() + " called twice");
            for (this.__constructorCalled = !0,
            this.__constructor = !0,
            this._properties = {},
            this._style = {},
            this._children = [],
            this._prefer2d = !1,
            this._alwaysUseImageCache = !1,
            this._cancelClickEventInDragSession = !0,
            this._cancelClickEventInDragSessionVelocity = .1,
            this._cancelClickEventInDragSessionOffset = 8,
            this._createElement(),
            layerPropertyIgnore(options, "point", ["x", "y"]),
            layerPropertyIgnore(options, "size", ["width", "height"]),
            layerPropertyIgnore(options, "frame", ["x", "y", "width", "height"]),
            !options.hasOwnProperty("parent") && options.hasOwnProperty("superLayer") && (options.parent = options.superLayer,
            delete options.superLayer),
            Layer.__super__.constructor.call(this, Defaults.getDefaults("Layer", options)),
            this._context.addLayer(this),
            this._id = this._context.layerCounter,
            options.parent ? this.parent = options.parent : options.shadow || this._insertElement(),
            options.hasOwnProperty("index") && (this.index = options.index),
            ref = ["x", "y", "width", "height"],
            i = 0,
            len = ref.length; i < len; i++)
                p = ref[i],
                options.hasOwnProperty(p) && (this[p] = options[p]);
            this._context.emit("layer:create", this),
            this.label = this.label,
            delete this.__constructor
        }
        return extend(Layer, superClass),
        Layer.define("context", {
            get: function() {
                return this._context
            }
        }),
        Layer.define("label", {
            get: function() {
                return this._label
            },
            set: function(value) {
                return null == value && (value = ""),
                this._label = value,
                Utils.labelLayer(this, this._label)
            }
        }),
        Layer.define("custom", Layer.simpleProperty("custom", void 0)),
        Layer.define("animationOptions", Layer.simpleProperty("animationOptions", {})),
        Layer.define("width", layerProperty(Layer, "width", "width", 100, _.isNumber)),
        Layer.define("height", layerProperty(Layer, "height", "height", 100, _.isNumber)),
        Layer.define("visible", layerProperty(Layer, "visible", "display", !0, _.isBoolean)),
        Layer.define("opacity", layerProperty(Layer, "opacity", "opacity", 1, _.isNumber)),
        Layer.define("index", layerProperty(Layer, "index", "zIndex", 0, _.isNumber, null, {
            importable: !1,
            exportable: !1
        })),
        Layer.define("clip", layerProperty(Layer, "clip", "overflow", !1, _.isBoolean)),
        Layer.define("scrollHorizontal", layerProperty(Layer, "scrollHorizontal", "overflowX", !1, _.isBoolean, null, {}, function(layer, value) {
            if (value === !0)
                return layer.ignoreEvents = !1
        })),
        Layer.define("scrollVertical", layerProperty(Layer, "scrollVertical", "overflowY", !1, _.isBoolean, null, {}, function(layer, value) {
            if (value === !0)
                return layer.ignoreEvents = !1
        })),
        Layer.define("scroll", {
            get: function() {
                return this.scrollHorizontal === !0 || this.scrollVertical === !0
            },
            set: function(value) {
                return this.scrollHorizontal = this.scrollVertical = value
            }
        }),
        Layer.define("ignoreEvents", layerProperty(Layer, "ignoreEvents", "pointerEvents", !0, _.isBoolean)),
        Layer.define("x", layerProperty(Layer, "x", "webkitTransform", 0, _.isNumber, layerPropertyPointTransformer, {
            depends: ["width", "height"]
        })),
        Layer.define("y", layerProperty(Layer, "y", "webkitTransform", 0, _.isNumber, layerPropertyPointTransformer, {
            depends: ["width", "height"]
        })),
        Layer.define("z", layerProperty(Layer, "z", "webkitTransform", 0, _.isNumber)),
        Layer.define("scaleX", layerProperty(Layer, "scaleX", "webkitTransform", 1, _.isNumber)),
        Layer.define("scaleY", layerProperty(Layer, "scaleY", "webkitTransform", 1, _.isNumber)),
        Layer.define("scaleZ", layerProperty(Layer, "scaleZ", "webkitTransform", 1, _.isNumber)),
        Layer.define("scale", layerProperty(Layer, "scale", "webkitTransform", 1, _.isNumber)),
        Layer.define("skewX", layerProperty(Layer, "skewX", "webkitTransform", 0, _.isNumber)),
        Layer.define("skewY", layerProperty(Layer, "skewY", "webkitTransform", 0, _.isNumber)),
        Layer.define("skew", layerProperty(Layer, "skew", "webkitTransform", 0, _.isNumber)),
        Layer.define("originX", layerProperty(Layer, "originX", "webkitTransformOrigin", .5, _.isNumber)),
        Layer.define("originY", layerProperty(Layer, "originY", "webkitTransformOrigin", .5, _.isNumber)),
        Layer.define("originZ", layerProperty(Layer, "originZ", null, 0, _.isNumber)),
        Layer.define("perspective", layerProperty(Layer, "perspective", "webkitPerspective", 0, _.isNumber)),
        Layer.define("perspectiveOriginX", layerProperty(Layer, "perspectiveOriginX", "webkitPerspectiveOrigin", .5, _.isNumber)),
        Layer.define("perspectiveOriginY", layerProperty(Layer, "perspectiveOriginY", "webkitPerspectiveOrigin", .5, _.isNumber)),
        Layer.define("rotationX", layerProperty(Layer, "rotationX", "webkitTransform", 0, _.isNumber)),
        Layer.define("rotationY", layerProperty(Layer, "rotationY", "webkitTransform", 0, _.isNumber)),
        Layer.define("rotationZ", layerProperty(Layer, "rotationZ", "webkitTransform", 0, _.isNumber)),
        Layer.define("rotation", {
            get: function() {
                return this.rotationZ
            },
            set: function(value) {
                return this.rotationZ = value
            }
        }),
        Layer.define("blur", layerProperty(Layer, "blur", "webkitFilter", 0, _.isNumber)),
        Layer.define("brightness", layerProperty(Layer, "brightness", "webkitFilter", 100, _.isNumber)),
        Layer.define("saturate", layerProperty(Layer, "saturate", "webkitFilter", 100, _.isNumber)),
        Layer.define("hueRotate", layerProperty(Layer, "hueRotate", "webkitFilter", 0, _.isNumber)),
        Layer.define("contrast", layerProperty(Layer, "contrast", "webkitFilter", 100, _.isNumber)),
        Layer.define("invert", layerProperty(Layer, "invert", "webkitFilter", 0, _.isNumber)),
        Layer.define("grayscale", layerProperty(Layer, "grayscale", "webkitFilter", 0, _.isNumber)),
        Layer.define("sepia", layerProperty(Layer, "sepia", "webkitFilter", 0, _.isNumber)),
        Layer.define("shadowX", layerProperty(Layer, "shadowX", "boxShadow", 0, _.isNumber)),
        Layer.define("shadowY", layerProperty(Layer, "shadowY", "boxShadow", 0, _.isNumber)),
        Layer.define("shadowBlur", layerProperty(Layer, "shadowBlur", "boxShadow", 0, _.isNumber)),
        Layer.define("shadowSpread", layerProperty(Layer, "shadowSpread", "boxShadow", 0, _.isNumber)),
        Layer.define("shadowColor", layerProperty(Layer, "shadowColor", "boxShadow", "", Color.validColorValue, Color.toColor)),
        Layer.define("backgroundColor", layerProperty(Layer, "backgroundColor", "backgroundColor", null, Color.validColorValue, Color.toColor)),
        Layer.define("color", layerProperty(Layer, "color", "color", null, Color.validColorValue, Color.toColor)),
        Layer.define("borderColor", layerProperty(Layer, "borderColor", "border", null, Color.validColorValue, Color.toColor)),
        Layer.define("borderWidth", layerProperty(Layer, "borderWidth", "border", 0, _.isNumber)),
        Layer.define("force2d", layerProperty(Layer, "force2d", "webkitTransform", !1, _.isBoolean)),
        Layer.define("flat", layerProperty(Layer, "flat", "webkitTransformStyle", !1, _.isBoolean)),
        Layer.define("backfaceVisible", layerProperty(Layer, "backfaceVisible", "webkitBackfaceVisibility", !0, _.isBoolean)),
        Layer.define("name", {
            default: "",
            get: function() {
                var name;
                return name = this._getPropertyValue("name"),
                null != name ? "" + name : ""
            },
            set: function(value) {
                return this._setPropertyValue("name", value),
                this._element.setAttribute("name", value)
            }
        }),
        Layer.define("matrix", {
            get: function() {
                return this.force2d ? this._matrix2d : (new Matrix).translate(this.x, this.y, this.z).scale(this.scale).scale(this.scaleX, this.scaleY, this.scaleZ).skew(this.skew).skewX(this.skewX).skewY(this.skewY).translate(0, 0, this.originZ).rotate(this.rotationX, 0, 0).rotate(0, this.rotationY, 0).rotate(0, 0, this.rotationZ).translate(0, 0, -this.originZ)
            }
        }),
        Layer.define("_matrix2d", {
            get: function() {
                return (new Matrix).translate(this.x, this.y).scale(this.scale).skewX(this.skew).skewY(this.skew).rotate(0, 0, this.rotationZ)
            }
        }),
        Layer.define("transformMatrix", {
            get: function() {
                return (new Matrix).translate(this.originX * this.width, this.originY * this.height).multiply(this.matrix).translate(-this.originX * this.width, -this.originY * this.height)
            }
        }),
        Layer.define("matrix3d", {
            get: function() {
                var parent, ppm;
                return parent = this.parent || this.context,
                ppm = Utils.perspectiveMatrix(parent),
                (new Matrix).multiply(ppm).multiply(this.transformMatrix)
            }
        }),
        Layer.define("borderRadius", {
            importable: !0,
            exportable: !0,
            default: 0,
            get: function() {
                return this._properties.borderRadius
            },
            set: function(value) {
                return value && !_.isNumber(value) && console.warn("Layer.borderRadius should be a numeric property, not type " + typeof value),
                this._properties.borderRadius = value,
                this._element.style.borderRadius = LayerStyle.borderRadius(this),
                this.emit("change:borderRadius", value)
            }
        }),
        Layer.define("cornerRadius", {
            importable: !1,
            exportable: !1,
            get: function() {
                return this.borderRadius
            },
            set: function(value) {
                return this.borderRadius = value
            }
        }),
        Layer.prototype._setGeometryValues = function(input, keys) {
            var i, j, k, len, len1, results, results1;
            if (_.isNumber(input)) {
                for (results = [],
                i = 0,
                len = keys.length; i < len; i++)
                    k = keys[i],
                    results.push(this[k] = input);
                return results
            }
            if (input) {
                for (results1 = [],
                j = 0,
                len1 = keys.length; j < len1; j++)
                    k = keys[j],
                    _.isNumber(input[k]) ? results1.push(this[k] = input[k]) : results1.push(void 0);
                return results1
            }
        }
        ,
        Layer.define("point", {
            importable: !0,
            exportable: !1,
            depends: ["width", "height", "size", "parent"],
            get: function() {
                return Utils.point(this)
            },
            set: function(input) {
                return input = layerPropertyPointTransformer(input, this, "point"),
                this._setGeometryValues(input, ["x", "y"])
            }
        }),
        Layer.define("size", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.size(this)
            },
            set: function(input) {
                return this._setGeometryValues(input, ["width", "height"])
            }
        }),
        Layer.define("frame", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.frame(this)
            },
            set: function(input) {
                return this._setGeometryValues(input, ["x", "y", "width", "height"])
            }
        }),
        Layer.define("minX", {
            importable: !0,
            exportable: !1,
            get: function() {
                return this.x
            },
            set: function(value) {
                return this.x = value
            }
        }),
        Layer.define("midX", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.frameGetMidX(this)
            },
            set: function(value) {
                return Utils.frameSetMidX(this, value)
            }
        }),
        Layer.define("maxX", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.frameGetMaxX(this)
            },
            set: function(value) {
                return Utils.frameSetMaxX(this, value)
            }
        }),
        Layer.define("minY", {
            importable: !0,
            exportable: !1,
            get: function() {
                return this.y
            },
            set: function(value) {
                return this.y = value
            }
        }),
        Layer.define("midY", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.frameGetMidY(this)
            },
            set: function(value) {
                return Utils.frameSetMidY(this, value)
            }
        }),
        Layer.define("maxY", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.frameGetMaxY(this)
            },
            set: function(value) {
                return Utils.frameSetMaxY(this, value)
            }
        }),
        Layer.prototype.convertPointToScreen = function(point) {
            return Utils.convertPointToContext(point, this, !1)
        }
        ,
        Layer.prototype.convertPointToCanvas = function(point) {
            return Utils.convertPointToContext(point, this, !0)
        }
        ,
        Layer.prototype.convertPointToLayer = function(point, layer) {
            return Utils.convertPoint(point, this, layer, !0)
        }
        ,
        Layer.define("canvasFrame", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.boundingFrame(this)
            },
            set: function(frame) {
                return this.frame = Utils.convertFrameFromContext(frame, this, !0, !1)
            }
        }),
        Layer.define("screenFrame", {
            importable: !0,
            exportable: !1,
            get: function() {
                return Utils.boundingFrame(this, !1)
            },
            set: function(frame) {
                return this.frame = Utils.convertFrameFromContext(frame, this, !1, !1)
            }
        }),
        Layer.prototype.contentFrame = function() {
            return this.children.length ? Utils.frameMerge(_.map(this.children, "frame")) : {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }
        }
        ,
        Layer.prototype.totalFrame = function() {
            return Utils.frameMerge(this.frame, this.contentFrame())
        }
        ,
        Layer.prototype.centerFrame = function() {
            var frame;
            return this.parent ? (frame = this.frame,
            Utils.frameSetMidX(frame, parseInt(this.parent.width / 2 - this.parent.borderWidth)),
            Utils.frameSetMidY(frame, parseInt(this.parent.height / 2 - this.parent.borderWidth)),
            frame) : (frame = this.frame,
            Utils.frameSetMidX(frame, parseInt(this._context.width / 2)),
            Utils.frameSetMidY(frame, parseInt(this._context.height / 2)),
            frame)
        }
        ,
        Layer.prototype.center = function() {
            return this.frame = this.centerFrame(),
            this
        }
        ,
        Layer.prototype.centerX = function(offset) {
            return null == offset && (offset = 0),
            this.x = this.centerFrame().x + offset,
            this
        }
        ,
        Layer.prototype.centerY = function(offset) {
            return null == offset && (offset = 0),
            this.y = this.centerFrame().y + offset,
            this
        }
        ,
        Layer.prototype.pixelAlign = function() {
            return this.x = parseInt(this.x),
            this.y = parseInt(this.y)
        }
        ,
        Layer.prototype.canvasScaleX = function(self) {
            var context, i, len, parent, ref, scale;
            for (null == self && (self = !0),
            scale = 1,
            self && (scale = this.scale * this.scaleX),
            ref = this.ancestors(context = !0),
            i = 0,
            len = ref.length; i < len; i++)
                parent = ref[i],
                scale = scale * parent.scale * parent.scaleX;
            return scale
        }
        ,
        Layer.prototype.canvasScaleY = function(self) {
            var context, i, len, parent, ref, scale;
            for (null == self && (self = !0),
            scale = 1,
            self && (scale = this.scale * this.scaleY),
            ref = this.ancestors(context = !0),
            i = 0,
            len = ref.length; i < len; i++)
                parent = ref[i],
                scale = scale * parent.scale * parent.scaleY;
            return scale
        }
        ,
        Layer.prototype.screenScaleX = function(self) {
            var context, i, len, parent, ref, scale;
            for (null == self && (self = !0),
            scale = 1,
            self && (scale = this.scale * this.scaleX),
            ref = this.ancestors(context = !1),
            i = 0,
            len = ref.length; i < len; i++)
                parent = ref[i],
                scale = scale * parent.scale * parent.scaleX;
            return scale
        }
        ,
        Layer.prototype.screenScaleY = function(self) {
            var context, i, len, parent, ref, scale;
            for (null == self && (self = !0),
            scale = 1,
            self && (scale = this.scale * this.scaleY),
            ref = this.ancestors(context = !1),
            i = 0,
            len = ref.length; i < len; i++)
                parent = ref[i],
                scale = scale * parent.scale * parent.scaleY;
            return scale
        }
        ,
        Layer.prototype.screenScaledFrame = function() {
            var context, factorX, factorY, frame, i, layerScaledFrame, layers, len, parent;
            for (frame = {
                x: 0,
                y: 0,
                width: this.width * this.screenScaleX(),
                height: this.height * this.screenScaleY()
            },
            layers = this.ancestors(context = !0),
            layers.push(this),
            layers.reverse(),
            i = 0,
            len = layers.length; i < len; i++)
                parent = layers[i],
                factorX = parent._parentOrContext() ? parent._parentOrContext().screenScaleX() : 1,
                factorY = parent._parentOrContext() ? parent._parentOrContext().screenScaleY() : 1,
                layerScaledFrame = parent.scaledFrame(),
                frame.x += layerScaledFrame.x * factorX,
                frame.y += layerScaledFrame.y * factorY;
            return frame
        }
        ,
        Layer.prototype.scaledFrame = function() {
            var frame, scaleX, scaleY;
            return frame = this.frame,
            scaleX = this.scale * this.scaleX,
            scaleY = this.scale * this.scaleY,
            frame.width *= scaleX,
            frame.height *= scaleY,
            frame.x += (1 - scaleX) * this.originX * this.width,
            frame.y += (1 - scaleY) * this.originY * this.height,
            frame
        }
        ,
        Layer.define("style", {
            importable: !0,
            exportable: !1,
            get: function() {
                return this._element.style
            },
            set: function(value) {
                return _.extend(this._element.style, value),
                this.emit("change:style")
            }
        }),
        Layer.prototype.computedStyle = function() {
            var getComputedStyle;
            return getComputedStyle = document.defaultView.getComputedStyle,
            null == getComputedStyle && (getComputedStyle = window.getComputedStyle),
            getComputedStyle(this._element)
        }
        ,
        Layer.define("classList", {
            importable: !0,
            exportable: !1,
            get: function() {
                return this._element.classList
            }
        }),
        Layer.prototype._createElement = function() {
            if (null == this._element)
                return this._element = document.createElement("div"),
                this._element.classList.add("framerLayer")
        }
        ,
        Layer.prototype._insertElement = function() {
            return this.bringToFront(),
            this._context.element.appendChild(this._element)
        }
        ,
        Layer.define("html", {
            get: function() {
                var ref;
                return (null != (ref = this._elementHTML) ? ref.innerHTML : void 0) || ""
            },
            set: function(value) {
                return this._elementHTML || (this._elementHTML = document.createElement("div"),
                this._element.appendChild(this._elementHTML)),
                this._elementHTML.innerHTML = value,
                this.emit("change:html")
            }
        }),
        Layer.prototype.querySelector = function(query) {
            return this._element.querySelector(query)
        }
        ,
        Layer.prototype.querySelectorAll = function(query) {
            return this._element.querySelectorAll(query)
        }
        ,
        Layer.prototype.destroy = function() {
            var ref;
            return this.parent && (this.parent._children = _.without(this.parent._children, this)),
            null != (ref = this._element.parentNode) && ref.removeChild(this._element),
            this.removeAllListeners(),
            this._context.removeLayer(this),
            this._context.emit("layer:destroy", this)
        }
        ,
        Layer.prototype.copy = function() {
            var child, copiedChild, i, layer, len, ref;
            for (layer = this.copySingle(),
            ref = this.children,
            i = 0,
            len = ref.length; i < len; i++)
                child = ref[i],
                copiedChild = child.copy(),
                copiedChild.parent = layer;
            return layer
        }
        ,
        Layer.prototype.copySingle = function() {
            var copy;
            return copy = new this.constructor(this.props),
            copy.style = this.style,
            copy
        }
        ,
        Layer.prototype._cleanupImageLoader = function() {
            var ref;
            return null != (ref = this._imageEventManager) && ref.removeAllListeners(),
            this._imageEventManager = null,
            this._imageLoader = null
        }
        ,
        Layer.define("image", {
            default: "",
            get: function() {
                return this._getPropertyValue("image")
            },
            set: function(value) {
                var currentValue, defaults, imageUrl, ref;
                return _.isString(value) || null === value || layerValueTypeError("image", value),
                currentValue = this._getPropertyValue("image"),
                currentValue === value ? this.emit("load") : (defaults = Defaults.getDefaults("Layer", {}),
                (null != (ref = this.backgroundColor) ? ref.isEqual(defaults.backgroundColor) : void 0) && (this.backgroundColor = null),
                this._setPropertyValue("image", value),
                null === value || "" === value ? (null != this._imageLoader && (this._imageEventManager.removeAllListeners(),
                this._imageLoader.src = null),
                this.style["background-image"] = null,
                void (null != this._imageLoader && (this.emit(Events.ImageLoadCancelled, this._imageLoader),
                this._cleanupImageLoader()))) : !_.endsWith("function" == typeof value.toLowerCase ? value.toLowerCase() : void 0, ".pdf") || Utils.isWebKit() && !Utils.isChrome() ? (imageUrl = value,
                this._alwaysUseImageCache === !1 && Utils.isLocalAssetUrl(imageUrl) && (imageUrl += "?nocache=" + NoCacheDateKey),
                this.listeners(Events.ImageLoaded, !0) || this.listeners(Events.ImageLoadError, !0) || this.listeners(Events.ImageLoadCancelled, !0) ? (this._imageLoader = new Image,
                this._imageLoader.name = imageUrl,
                this._imageLoader.src = imageUrl,
                this._imageEventManager = this._context.domEventManager.wrap(this._imageLoader),
                this._imageEventManager.addEventListener("load", function(_this) {
                    return function() {
                        return _this.style["background-image"] = "url('" + imageUrl + "')",
                        _this.emit(Events.ImageLoaded, _this._imageLoader),
                        _this._cleanupImageLoader()
                    }
                }(this)),
                this._imageEventManager.addEventListener("error", function(_this) {
                    return function() {
                        return _this.emit(Events.ImageLoadError, _this._imageLoader),
                        _this._cleanupImageLoader()
                    }
                }(this))) : this.style["background-image"] = "url('" + imageUrl + "')") : void (this.style["background-image"] = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAVlJREFUaAXtlwEOwiAMRdF4Cr3/0fQaSre9ZFSYLCrQpSSG/FLW9v92agghXJdP3KZlCp/J2up+WiUuzMt6zNukzPDYvALCsKme1/maV8BnQHqw9/IZ6KmAz0BP9ontMwATPXafgR6s65g+A5qRlrhmBu6FhG6LXf9/+JU/YclROkVWEs/8r9FLrChb2apSqVqWZgKmtRKz9/f+CdPxoVl8CAWylcWKUQZGwfhjB3OOHcw5djDn2MH6fBNLC42yaEnyoTXB2V36+lPlz+zN9x6HKfxrZwZ/HUbf5/lJviMpoBPWBWWxFJCtLNqplItIWuvPffx5Dphz7GB9vonNv4X2zICWuMTM3p7Gv/b5iVLmFaiZgb3M/Ns/Ud68AvIGkJ6ir8xh8wrQrzAve9Jjo2PzCsC8z4Aw0WP5DPRgXcf07wHNSEvsM9CS7VIsn4ESMy3sPgMtWN6K8QKfubDo2UqVogAAAABJRU5ErkJggg==')"))
            }
        }),
        Layer.define("parent", {
            enumerable: !1,
            exportable: !1,
            importable: !0,
            get: function() {
                return this._parent || null
            },
            set: function(layer) {
                if (layer !== this._parent) {
                    if (layer === this)
                        throw Error("Layer.parent: a layer cannot be it's own parent.");
                    if (!layer instanceof Layer)
                        throw Error("Layer.parent needs to be a Layer object");
                    return Utils.domCompleteCancel(this.__insertElement),
                    this._parent && (this._parent._children = _.without(this._parent._children, this),
                    this._parent._element.removeChild(this._element),
                    this._parent.emit("change:children", {
                        added: [],
                        removed: [this]
                    }),
                    this._parent.emit("change:subLayers", {
                        added: [],
                        removed: [this]
                    })),
                    layer ? (layer._element.appendChild(this._element),
                    layer._children.push(this),
                    layer.emit("change:children", {
                        added: [this],
                        removed: []
                    }),
                    layer.emit("change:subLayers", {
                        added: [this],
                        removed: []
                    })) : this._insertElement(),
                    this._parent = layer,
                    this.bringToFront(),
                    this.emit("change:parent"),
                    this.emit("change:superLayer")
                }
            }
        }),
        Layer.define("children", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return _.clone(this._children)
            }
        }),
        Layer.define("siblings", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return null === this.parent ? _.filter(this._context.layers, function(_this) {
                    return function(layer) {
                        return layer !== _this && null === layer.parent
                    }
                }(this)) : _.without(this.parent.children, this)
            }
        }),
        Layer.define("descendants", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                var f, result;
                return result = [],
                f = function(layer) {
                    return result.push(layer),
                    layer.children.map(f)
                }
                ,
                this.children.map(f),
                result
            }
        }),
        Layer.prototype.addChild = function(layer) {
            return layer.parent = this
        }
        ,
        Layer.prototype.removeChild = function(layer) {
            if (!(indexOf.call(this.children, layer) < 0))
                return layer.parent = null
        }
        ,
        Layer.prototype.childrenWithName = function(name) {
            return _.filter(this.children, function(layer) {
                return layer.name === name
            })
        }
        ,
        Layer.prototype.siblingsWithName = function(name) {
            return _.filter(this.siblingLayers, function(layer) {
                return layer.name === name
            })
        }
        ,
        Layer.prototype.ancestors = function(context) {
            var currentLayer, parents;
            if (null == context && (context = !1),
            parents = [],
            currentLayer = this,
            context === !1)
                for (; currentLayer.parent; )
                    parents.push(currentLayer.parent),
                    currentLayer = currentLayer.parent;
            else
                for (; currentLayer._parentOrContext(); )
                    parents.push(currentLayer._parentOrContext()),
                    currentLayer = currentLayer._parentOrContext();
            return parents
        }
        ,
        Layer.prototype.root = function(context) {
            return null == context && (context = !1),
            null === this.parent ? this : _.last(this.ancestors(context = context))
        }
        ,
        Layer.prototype.childrenAbove = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            _.filter(this.children, function(layer) {
                return Utils.framePointForOrigin(layer.frame, originX, originY).y < point.y
            })
        }
        ,
        Layer.prototype.childrenBelow = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            _.filter(this.children, function(layer) {
                return Utils.framePointForOrigin(layer.frame, originX, originY).y > point.y
            })
        }
        ,
        Layer.prototype.childrenLeft = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            _.filter(this.children, function(layer) {
                return Utils.framePointForOrigin(layer.frame, originX, originY).x < point.x
            })
        }
        ,
        Layer.prototype.childrenRight = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            _.filter(this.children, function(layer) {
                return Utils.framePointForOrigin(layer.frame, originX, originY).x > point.x
            })
        }
        ,
        Layer.prototype._parentOrContext = function() {
            return this.parent ? this.parent : this._context._parent ? this._context._parent : void 0
        }
        ,
        Layer.define("superLayer", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return this.parent
            },
            set: function(value) {
                return this.parent = value
            }
        }),
        Layer.define("subLayers", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return this.children
            }
        }),
        Layer.define("siblingLayers", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return this.siblings
            }
        }),
        Layer.prototype.superLayers = function(context) {
            return null == context && (context = !1),
            this.ancestors(context)
        }
        ,
        Layer.prototype.addSubLayer = function(layer) {
            return this.addChild(layer)
        }
        ,
        Layer.prototype.removeSubLayer = function(layer) {
            return this.removeChild(layer)
        }
        ,
        Layer.prototype.subLayersByName = function(name) {
            return this.childrenWithName(name)
        }
        ,
        Layer.prototype.siblingLayersByName = function(name) {
            return this.siblingsWithName(name)
        }
        ,
        Layer.prototype.subLayersAbove = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            this.childrenAbove(point, originX, originY)
        }
        ,
        Layer.prototype.subLayersBelow = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            this.childrenBelow(point, originX, originY)
        }
        ,
        Layer.prototype.subLayersLeft = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            this.childrenLeft(point, originX, originY)
        }
        ,
        Layer.prototype.subLayersRight = function(point, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            this.childrenRight(point, originX, originY)
        }
        ,
        Layer.prototype._superOrParentLayer = function() {
            return this._parentOrContext()
        }
        ,
        Layer.prototype.animate = function(properties, options) {
            var animation, stateName;
            return null == options && (options = {}),
            _.isString(properties) ? (stateName = properties,
            null != options.options && (options = options.options),
            this.states.machine.switchTo(stateName, options)) : (properties = _.clone(properties),
            null != properties.properties && (options = properties,
            properties = options.properties,
            delete options.properties),
            null != properties.options && (options = _.defaults({}, options, properties.options),
            delete properties.options),
            options = _.defaults({}, options, this.animationOptions),
            null == options.start && (options.start = !0),
            animation = new Animation(this,properties,options),
            options.start && animation.start(),
            animation)
        }
        ,
        Layer.prototype.stateCycle = function() {
            var args, options, states;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            states = _.flatten(args),
            _.isObject(_.last(states)) && (options = states.pop()),
            this.animate(this.states.machine.next(states), options)
        }
        ,
        Layer.prototype.stateSwitch = function(stateName, options) {
            if (null == options && (options = {}),
            null == stateName)
                throw new Error("Missing required argument 'stateName' in stateSwitch()");
            return options.animate === !0 ? this.animate(stateName, options) : this.animate(stateName, _.defaults({}, options, {
                instant: !0
            }))
        }
        ,
        Layer.prototype.animations = function(includePending) {
            return null == includePending && (includePending = !1),
            _.filter(this._context.animations, function(_this) {
                return function(animation) {
                    return animation.layer === _this && (includePending || !animation.isPending)
                }
            }(this))
        }
        ,
        Layer.prototype.animatingProperties = function() {
            var animation, i, j, len, len1, properties, propertyName, ref, ref1;
            for (properties = {},
            ref = this.animations(),
            i = 0,
            len = ref.length; i < len; i++)
                for (animation = ref[i],
                ref1 = animation.animatingProperties(),
                j = 0,
                len1 = ref1.length; j < len1; j++)
                    propertyName = ref1[j],
                    properties[propertyName] = animation;
            return properties
        }
        ,
        Layer.define("isAnimating", {
            enumerable: !1,
            exportable: !1,
            get: function() {
                return 0 !== this.animations().length
            }
        }),
        Layer.prototype.animateStop = function() {
            var ref;
            return _.invokeMap(this.animations(), "stop"),
            null != (ref = this._draggable) ? ref.animateStop() : void 0
        }
        ,
        Layer.prototype.bringToFront = function() {
            return this.index = _.max(_.union([0], this.siblingLayers.map(function(layer) {
                return layer.index
            }))) + 1
        }
        ,
        Layer.prototype.sendToBack = function() {
            return this.index = _.min(_.union([0], this.siblingLayers.map(function(layer) {
                return layer.index
            }))) - 1
        }
        ,
        Layer.prototype.placeBefore = function(layer) {
            var i, l, len, ref;
            if (!(indexOf.call(this.siblingLayers, layer) < 0)) {
                for (ref = this.siblingLayers,
                i = 0,
                len = ref.length; i < len; i++)
                    l = ref[i],
                    l.index <= layer.index && (l.index -= 1);
                return this.index = layer.index + 1
            }
        }
        ,
        Layer.prototype.placeBehind = function(layer) {
            var i, l, len, ref;
            if (!(indexOf.call(this.siblingLayers, layer) < 0)) {
                for (ref = this.siblingLayers,
                i = 0,
                len = ref.length; i < len; i++)
                    l = ref[i],
                    l.index >= layer.index && (l.index += 1);
                return this.index = layer.index - 1
            }
        }
        ,
        Layer.define("states", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return null == this._states && (this._states = new LayerStates(this)),
                this._states
            },
            set: function(states) {
                return this.states.machine.reset(),
                _.extend(this.states, states)
            }
        }),
        Layer.define("stateNames", {
            enumerable: !1,
            exportable: !1,
            importable: !1,
            get: function() {
                return this.states.machine.stateNames
            }
        }),
        Layer.define("draggable", {
            importable: !1,
            exportable: !1,
            get: function() {
                return null != this._draggable ? this._draggable : this._draggable = new LayerDraggable(this)
            },
            set: function(value) {
                if (_.isBoolean(value))
                    return this.draggable.enabled = value
            }
        }),
        Layer.define("pinchable", {
            importable: !1,
            exportable: !1,
            get: function() {
                return null != this._pinchable ? this._pinchable : this._pinchable = new LayerPinchable(this)
            },
            set: function(value) {
                if (_.isBoolean(value))
                    return this.pinchable.enabled = value
            }
        }),
        Layer.define("scrollFrame", {
            importable: !1,
            get: function() {
                var frame;
                return frame = {
                    x: this.scrollX,
                    y: this.scrollY,
                    width: this.width,
                    height: this.height
                }
            },
            set: function(frame) {
                return this.scrollX = frame.x,
                this.scrollY = frame.y
            }
        }),
        Layer.define("scrollX", {
            get: function() {
                return this._element.scrollLeft
            },
            set: function(value) {
                return _.isNumber(value) || layerValueTypeError("scrollX", value),
                this._element.scrollLeft = value
            }
        }),
        Layer.define("scrollY", {
            get: function() {
                return this._element.scrollTop
            },
            set: function(value) {
                return _.isNumber(value) || layerValueTypeError("scrollY", value),
                this._element.scrollTop = value
            }
        }),
        Layer.define("_domEventManager", {
            get: function() {
                return this._context.domEventManager.wrap(this._element)
            }
        }),
        Layer.prototype.emit = function() {
            var args, eventName, offset, parentDraggableLayer, velocity;
            if (eventName = arguments[0],
            args = 2 <= arguments.length ? slice.call(arguments, 1) : [],
            this._cancelClickEventInDragSession && !this._draggable && (eventName === Events.Click || eventName === Events.Tap || eventName === Events.TapStart || eventName === Events.TapEnd || eventName === Events.LongPress || eventName === Events.LongPressStart || eventName === Events.LongPressEnd) && (parentDraggableLayer = this._parentDraggableLayer())) {
                if (offset = parentDraggableLayer.draggable.offset,
                Math.abs(offset.x) > this._cancelClickEventInDragSessionOffset)
                    return;
                if (Math.abs(offset.y) > this._cancelClickEventInDragSessionOffset)
                    return;
                if (velocity = parentDraggableLayer.draggable.velocity,
                Math.abs(velocity.x) > this._cancelClickEventInDragSessionVelocity)
                    return;
                if (Math.abs(velocity.y) > this._cancelClickEventInDragSessionVelocity)
                    return
            }
            return Layer.__super__.emit.apply(this, [eventName].concat(slice.call(args), [this]))
        }
        ,
        Layer.prototype.once = function(eventName, listener) {
            return Layer.__super__.once.call(this, eventName, listener),
            this._addListener(eventName, listener)
        }
        ,
        Layer.prototype.addListener = function(eventName, listener) {
            if (!eventName)
                throw Error("Layer.on needs a valid event name");
            if (!listener)
                throw Error("Layer.on needs an event listener");
            return Layer.__super__.addListener.call(this, eventName, listener),
            this._addListener(eventName, listener)
        }
        ,
        Layer.prototype.removeListener = function(eventName, listener) {
            if (!eventName)
                throw Error("Layer.off needs a valid event name");
            return Layer.__super__.removeListener.call(this, eventName, listener),
            this._removeListener(eventName, listener)
        }
        ,
        Layer.prototype._addListener = function(eventName, listener) {
            if (_.startsWith(eventName, "change:") || (this.ignoreEvents = !1),
            (Utils.domValidEvent(this._element, eventName) || indexOf.call(_.values(Gestures), eventName) >= 0) && !this._domEventManager.listeners(eventName).length)
                return this._domEventManager.addEventListener(eventName, function(_this) {
                    return function(event) {
                        return _this.emit(eventName, event)
                    }
                }(this))
        }
        ,
        Layer.prototype._removeListener = function(eventName, listener) {
            if (!this.listeners(eventName).length)
                return this._domEventManager.removeAllListeners(eventName)
        }
        ,
        Layer.prototype._parentDraggableLayer = function() {
            var i, layer, len, ref, ref1;
            for (ref = this.ancestors(),
            i = 0,
            len = ref.length; i < len; i++)
                if (layer = ref[i],
                null != (ref1 = layer._draggable) ? ref1.enabled : void 0)
                    return layer;
            return null
        }
        ,
        Layer.prototype.on = Layer.prototype.addListener,
        Layer.prototype.off = Layer.prototype.removeListener,
        Layer.prototype.onClick = function(cb) {
            return this.on(Events.Click, cb)
        }
        ,
        Layer.prototype.onDoubleClick = function(cb) {
            return this.on(Events.DoubleClick, cb)
        }
        ,
        Layer.prototype.onScrollStart = function(cb) {
            return this.on(Events.ScrollStart, cb)
        }
        ,
        Layer.prototype.onScroll = function(cb) {
            return this.on(Events.Scroll, cb)
        }
        ,
        Layer.prototype.onScrollEnd = function(cb) {
            return this.on(Events.ScrollEnd, cb)
        }
        ,
        Layer.prototype.onScrollAnimationDidStart = function(cb) {
            return this.on(Events.ScrollAnimationDidStart, cb)
        }
        ,
        Layer.prototype.onScrollAnimationDidEnd = function(cb) {
            return this.on(Events.ScrollAnimationDidEnd, cb)
        }
        ,
        Layer.prototype.onTouchStart = function(cb) {
            return this.on(Events.TouchStart, cb)
        }
        ,
        Layer.prototype.onTouchEnd = function(cb) {
            return this.on(Events.TouchEnd, cb)
        }
        ,
        Layer.prototype.onTouchMove = function(cb) {
            return this.on(Events.TouchMove, cb)
        }
        ,
        Layer.prototype.onMouseUp = function(cb) {
            return this.on(Events.MouseUp, cb)
        }
        ,
        Layer.prototype.onMouseDown = function(cb) {
            return this.on(Events.MouseDown, cb)
        }
        ,
        Layer.prototype.onMouseOver = function(cb) {
            return this.on(Events.MouseOver, cb)
        }
        ,
        Layer.prototype.onMouseOut = function(cb) {
            return this.on(Events.MouseOut, cb)
        }
        ,
        Layer.prototype.onMouseMove = function(cb) {
            return this.on(Events.MouseMove, cb)
        }
        ,
        Layer.prototype.onMouseWheel = function(cb) {
            return this.on(Events.MouseWheel, cb)
        }
        ,
        Layer.prototype.onAnimationStart = function(cb) {
            return this.on(Events.AnimationStart, cb)
        }
        ,
        Layer.prototype.onAnimationStop = function(cb) {
            return this.on(Events.AnimationStop, cb)
        }
        ,
        Layer.prototype.onAnimationEnd = function(cb) {
            return this.on(Events.AnimationEnd, cb)
        }
        ,
        Layer.prototype.onAnimationDidStart = function(cb) {
            return this.on(Events.AnimationDidStart, cb)
        }
        ,
        Layer.prototype.onAnimationDidStop = function(cb) {
            return this.on(Events.AnimationDidStop, cb)
        }
        ,
        Layer.prototype.onAnimationDidEnd = function(cb) {
            return this.on(Events.AnimationDidEnd, cb)
        }
        ,
        Layer.prototype.onImageLoaded = function(cb) {
            return this.on(Events.ImageLoaded, cb)
        }
        ,
        Layer.prototype.onImageLoadError = function(cb) {
            return this.on(Events.ImageLoadError, cb)
        }
        ,
        Layer.prototype.onImageLoadCancelled = function(cb) {
            return this.on(Events.ImageLoadCancelled, cb)
        }
        ,
        Layer.prototype.onMove = function(cb) {
            return this.on(Events.Move, cb)
        }
        ,
        Layer.prototype.onDragStart = function(cb) {
            return this.on(Events.DragStart, cb)
        }
        ,
        Layer.prototype.onDragWillMove = function(cb) {
            return this.on(Events.DragWillMove, cb)
        }
        ,
        Layer.prototype.onDragMove = function(cb) {
            return this.on(Events.DragMove, cb)
        }
        ,
        Layer.prototype.onDragDidMove = function(cb) {
            return this.on(Events.DragDidMove, cb)
        }
        ,
        Layer.prototype.onDrag = function(cb) {
            return this.on(Events.Drag, cb)
        }
        ,
        Layer.prototype.onDragEnd = function(cb) {
            return this.on(Events.DragEnd, cb)
        }
        ,
        Layer.prototype.onDragAnimationStart = function(cb) {
            return this.on(Events.DragAnimationStart, cb)
        }
        ,
        Layer.prototype.onDragAnimationEnd = function(cb) {
            return this.on(Events.DragAnimationEnd, cb)
        }
        ,
        Layer.prototype.onDirectionLockStart = function(cb) {
            return this.on(Events.DirectionLockStart, cb)
        }
        ,
        Layer.prototype.onStateSwitchStart = function(cb) {
            return this.on(Events.StateSwitchStart, cb)
        }
        ,
        Layer.prototype.onStateSwitchStop = function(cb) {
            return this.on(Events.StateSwitchStop, cb)
        }
        ,
        Layer.prototype.onStateSwitchEnd = function(cb) {
            return this.on(Events.StateSwitchEnd, cb)
        }
        ,
        Layer.prototype.onStateWillSwitch = function(cb) {
            return this.on(Events.StateSwitchStart, cb)
        }
        ,
        Layer.prototype.onStateDidSwitch = function(cb) {
            return this.on(Events.StateSwitchEnd, cb)
        }
        ,
        Layer.prototype.onTap = function(cb) {
            return this.on(Events.Tap, cb)
        }
        ,
        Layer.prototype.onTapStart = function(cb) {
            return this.on(Events.TapStart, cb)
        }
        ,
        Layer.prototype.onTapEnd = function(cb) {
            return this.on(Events.TapEnd, cb)
        }
        ,
        Layer.prototype.onDoubleTap = function(cb) {
            return this.on(Events.DoubleTap, cb)
        }
        ,
        Layer.prototype.onForceTap = function(cb) {
            return this.on(Events.ForceTap, cb)
        }
        ,
        Layer.prototype.onForceTapChange = function(cb) {
            return this.on(Events.ForceTapChange, cb)
        }
        ,
        Layer.prototype.onForceTapStart = function(cb) {
            return this.on(Events.ForceTapStart, cb)
        }
        ,
        Layer.prototype.onForceTapEnd = function(cb) {
            return this.on(Events.ForceTapEnd, cb)
        }
        ,
        Layer.prototype.onLongPress = function(cb) {
            return this.on(Events.LongPress, cb)
        }
        ,
        Layer.prototype.onLongPressStart = function(cb) {
            return this.on(Events.LongPressStart, cb)
        }
        ,
        Layer.prototype.onLongPressEnd = function(cb) {
            return this.on(Events.LongPressEnd, cb)
        }
        ,
        Layer.prototype.onSwipe = function(cb) {
            return this.on(Events.Swipe, cb)
        }
        ,
        Layer.prototype.onSwipeStart = function(cb) {
            return this.on(Events.SwipeStart, cb)
        }
        ,
        Layer.prototype.onSwipeEnd = function(cb) {
            return this.on(Events.SwipeEnd, cb)
        }
        ,
        Layer.prototype.onSwipeUp = function(cb) {
            return this.on(Events.SwipeUp, cb)
        }
        ,
        Layer.prototype.onSwipeUpStart = function(cb) {
            return this.on(Events.SwipeUpStart, cb)
        }
        ,
        Layer.prototype.onSwipeUpEnd = function(cb) {
            return this.on(Events.SwipeUpEnd, cb)
        }
        ,
        Layer.prototype.onSwipeDown = function(cb) {
            return this.on(Events.SwipeDown, cb)
        }
        ,
        Layer.prototype.onSwipeDownStart = function(cb) {
            return this.on(Events.SwipeDownStart, cb)
        }
        ,
        Layer.prototype.onSwipeDownEnd = function(cb) {
            return this.on(Events.SwipeDownEnd, cb)
        }
        ,
        Layer.prototype.onSwipeLeft = function(cb) {
            return this.on(Events.SwipeLeft, cb)
        }
        ,
        Layer.prototype.onSwipeLeftStart = function(cb) {
            return this.on(Events.SwipeLeftStart, cb)
        }
        ,
        Layer.prototype.onSwipeLeftEnd = function(cb) {
            return this.on(Events.SwipeLeftEnd, cb)
        }
        ,
        Layer.prototype.onSwipeRight = function(cb) {
            return this.on(Events.SwipeRight, cb)
        }
        ,
        Layer.prototype.onSwipeRightStart = function(cb) {
            return this.on(Events.SwipeRightStart, cb)
        }
        ,
        Layer.prototype.onSwipeRightEnd = function(cb) {
            return this.on(Events.SwipeRightEnd, cb)
        }
        ,
        Layer.prototype.onPan = function(cb) {
            return this.on(Events.Pan, cb)
        }
        ,
        Layer.prototype.onPanStart = function(cb) {
            return this.on(Events.PanStart, cb)
        }
        ,
        Layer.prototype.onPanEnd = function(cb) {
            return this.on(Events.PanEnd, cb)
        }
        ,
        Layer.prototype.onPanLeft = function(cb) {
            return this.on(Events.PanLeft, cb)
        }
        ,
        Layer.prototype.onPanRight = function(cb) {
            return this.on(Events.PanRight, cb)
        }
        ,
        Layer.prototype.onPanUp = function(cb) {
            return this.on(Events.PanUp, cb)
        }
        ,
        Layer.prototype.onPanDown = function(cb) {
            return this.on(Events.PanDown, cb)
        }
        ,
        Layer.prototype.onPinch = function(cb) {
            return this.on(Events.Pinch, cb)
        }
        ,
        Layer.prototype.onPinchStart = function(cb) {
            return this.on(Events.PinchStart, cb)
        }
        ,
        Layer.prototype.onPinchEnd = function(cb) {
            return this.on(Events.PinchEnd, cb)
        }
        ,
        Layer.prototype.onScale = function(cb) {
            return this.on(Events.Scale, cb)
        }
        ,
        Layer.prototype.onScaleStart = function(cb) {
            return this.on(Events.ScaleStart, cb)
        }
        ,
        Layer.prototype.onScaleEnd = function(cb) {
            return this.on(Events.ScaleEnd, cb)
        }
        ,
        Layer.prototype.onRotate = function(cb) {
            return this.on(Events.Rotate, cb)
        }
        ,
        Layer.prototype.onRotateStart = function(cb) {
            return this.on(Events.RotateStart, cb)
        }
        ,
        Layer.prototype.onRotateEnd = function(cb) {
            return this.on(Events.RotateEnd, cb)
        }
        ,
        Layer.prototype._showHint = function(targetLayer) {
            var context, frame, i, j, layer, len, len1, parent, ref, ref1;
            if (this.visible && 0 !== this.opacity) {
                if (!this.shouldShowHint(targetLayer)) {
                    for (ref = this.children,
                    i = 0,
                    len = ref.length; i < len; i++)
                        layer = ref[i],
                        layer._showHint(targetLayer);
                    return null
                }
                for (frame = this.canvasFrame,
                ref1 = this.ancestors(context = !0),
                j = 0,
                len1 = ref1.length; j < len1; j++)
                    if (parent = ref1[j],
                    parent.clip && (frame = Utils.frameIntersection(frame, parent.canvasFrame)),
                    !frame)
                        return;
                return this.showHint(frame),
                _.invokeMap(this.children, "_showHint")
            }
        }
        ,
        Layer.prototype.willSeemToDoSomething = function() {
            return !this.ignoreEvents && (!this._draggable || this._draggable.isDragging !== !1 || this._draggable.isMoving !== !1)
        }
        ,
        Layer.prototype.shouldShowHint = function() {
            var eventName, i, j, len, len1, parent, ref, ref1;
            if (this.ignoreEvents === !0)
                return !1;
            if (this.isAnimating)
                return !1;
            for (ref = this.ancestors(),
            i = 0,
            len = ref.length; i < len; i++)
                if (parent = ref[i],
                parent.isAnimating)
                    return !1;
            if (this._draggable && this._draggable.horizontal === !1 && this._draggable.vertical === !1)
                return !1;
            if (0 === this.opacity)
                return !1;
            for (ref1 = this.listenerEvents(),
            j = 0,
            len1 = ref1.length; j < len1; j++)
                if (eventName = ref1[j],
                Events.isInteractive(eventName))
                    return !0;
            return !1
        }
        ,
        Layer.prototype.showHint = function(highlightFrame) {
            var animation, layer;
            return layer = new Layer({
                frame: Utils.frameInset(highlightFrame, -1),
                backgroundColor: null,
                borderColor: Framer.Defaults.Hints.color,
                borderRadius: this.borderRadius * Utils.average([this.canvasScaleX(), this.canvasScaleY()]),
                borderWidth: 3
            }),
            this._draggable && (layer.backgroundColor = null),
            Utils.frameInFrame(this.context.canvasFrame, highlightFrame) && (layer.backgroundColor = null),
            animation = layer.animate({
                properties: {
                    opacity: 0
                },
                curve: "ease-out",
                time: .5
            }),
            animation.onAnimationEnd(function() {
                return layer.destroy()
            })
        }
        ,
        Layer.prototype.toName = function() {
            var ref;
            return this.name ? name : (null != (ref = this.__framerInstanceInfo) ? ref.name : void 0) || ""
        }
        ,
        Layer.prototype.toInspect = function(constructor) {
            var name;
            return null == constructor && (constructor = this.constructor.name),
            name = this.name ? "name:" + this.name + " " : "",
            "<" + constructor + " " + this.toName() + " id:" + this.id + " " + name + " (" + Utils.roundWhole(this.x) + ", " + Utils.roundWhole(this.y) + ") " + Utils.roundWhole(this.width) + "x" + Utils.roundWhole(this.height) + ">"
        }
        ,
        Layer
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var FramerCSS, Utils;
    Utils = __webpack_require__(4),
    FramerCSS = "body {\n\tmargin: 0;\n}\n\n.framerContext {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n\tpointer-events: none;\n}\n\n.framerLayer {\n\tdisplay: block;\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\tbackground-size: cover;\n\t-webkit-overflow-scrolling: touch;\n\t-webkit-box-sizing: border-box;\n\t-webkit-user-select: none;\n}\n\n.framerLayer input,\n.framerLayer textarea,\n.framerLayer select,\n.framerLayer option,\n.framerLayer div[contenteditable=true]\n{\n\tpointer-events: auto;\n\t-webkit-user-select: auto;\n}\n\n.framerDebug {\n\tpadding: 6px;\n\tcolor: #fff;\n\tfont: 10px/1em Monaco;\n}\n",
    Utils.domComplete(function() {
        return Utils.insertCSS(FramerCSS)
    })
}
, function(module, exports, __webpack_require__) {
    var Events, Gestures, Utils, _, interactiveEvents, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    Utils = __webpack_require__(4),
    _ = __webpack_require__(1)._,
    Gestures = __webpack_require__(16).Gestures,
    Events = {},
    Events.MouseUp = "mouseup",
    Events.MouseDown = "mousedown",
    Events.MouseOver = "mouseover",
    Events.MouseOut = "mouseout",
    Events.MouseMove = "mousemove",
    Events.MouseWheel = "mousewheel",
    Events.DoubleClick = "dblclick",
    Events.MouseDoubleClick = "dblclick",
    Events.enableEmulatedTouchEvents = function(enable) {
        return null == enable && (enable = !0),
        enable ? (Events.TouchStart = Events.MouseDown,
        Events.TouchEnd = Events.MouseUp,
        Events.TouchMove = Events.MouseMove) : (Events.TouchStart = "touchstart",
        Events.TouchEnd = "touchend",
        Events.TouchMove = "touchmove")
    }
    ,
    Events.enableEmulatedTouchEvents(!1),
    Utils.isTouch() || Events.enableEmulatedTouchEvents(),
    Events.Click = Events.TouchEnd,
    Events.AnimationStart = "start",
    Events.AnimationHalt = "halt",
    Events.AnimationStop = "stop",
    Events.AnimationEnd = "end",
    Events.AnimationDidStart = Events.AnimationStart,
    Events.AnimationDidStop = Events.AnimationStop,
    Events.AnimationDidEnd = Events.AnimationEnd,
    Events.StateSwitchStart = "stateswitchstart",
    Events.StateSwitchStop = "stateswitchstop",
    Events.StateSwitchEnd = "stateswitchend",
    Events.StateWillSwitch = Events.StateSwitchStart,
    Events.StateDidSwitch = Events.StateSwitchEnd,
    Events.Scroll = "scroll",
    Events.ImageLoaded = "imageload",
    Events.ImageLoadError = "imageerror",
    Events.ImageLoadCancelled = "imagecancelled",
    _.extend(Events, Gestures),
    Events.touchEvent = function(event) {
        var ref, ref1, touchEvent;
        return touchEvent = null != (ref = event.touches) ? ref[0] : void 0,
        null == touchEvent && (touchEvent = null != (ref1 = event.changedTouches) ? ref1[0] : void 0),
        null == touchEvent && (touchEvent = event),
        touchEvent
    }
    ,
    Events.wrap = function(element) {
        return Framer.CurrentContext.domEventManager.wrap(element)
    }
    ,
    Events.isGesture = function(eventName) {
        return indexOf.call(Gestures, eventName) >= 0
    }
    ,
    interactiveEvents = _.values(Gestures).concat([Events.TouchStart, Events.TouchEnd, Events.MouseUp, Events.MouseDown, Events.MouseWheel, Events.DoubleClick]),
    Events.isInteractive = function(eventName) {
        return indexOf.call(interactiveEvents, eventName) >= 0
    }
    ,
    exports.Events = Events
}
, function(module, exports) {
    var Gestures;
    Gestures = {},
    Gestures.Tap = "tap",
    Gestures.TapStart = "tapstart",
    Gestures.TapEnd = "tapend",
    Gestures.DoubleTap = "doubletap",
    Gestures.ForceTap = "forcetap",
    Gestures.ForceTapChange = "forcetapchange",
    Gestures.ForceTapStart = "forcetapstart",
    Gestures.ForceTapEnd = "forcetapend",
    Gestures.LongPress = "longpress",
    Gestures.LongPressStart = "longpressstart",
    Gestures.LongPressEnd = "longpressend",
    Gestures.Swipe = "swipe",
    Gestures.SwipeStart = "swipestart",
    Gestures.SwipeEnd = "swipeend",
    Gestures.SwipeUp = "swipeup",
    Gestures.SwipeUpStart = "swipeupstart",
    Gestures.SwipeUpEnd = "swipeupend",
    Gestures.SwipeDown = "swipedown",
    Gestures.SwipeDownStart = "swipedownstart",
    Gestures.SwipeDownEnd = "swipedownend",
    Gestures.SwipeLeft = "swipeleft",
    Gestures.SwipeLeftStart = "swipeleftstart",
    Gestures.SwipeLeftEnd = "swipeleftend",
    Gestures.SwipeRight = "swiperight",
    Gestures.SwipeRightStart = "swiperightstart",
    Gestures.SwipeRightEnd = "swiperightend",
    Gestures.EdgeSwipe = "edgeswipe",
    Gestures.EdgeSwipeStart = "edgeswipestart",
    Gestures.EdgeSwipeEnd = "edgeswipeend",
    Gestures.EdgeSwipeTop = "edgeswipetop",
    Gestures.EdgeSwipeTopStart = "edgeswipetopstart",
    Gestures.EdgeSwipeTopEnd = "edgeswipetopend",
    Gestures.EdgeSwipeRight = "edgeswiperight",
    Gestures.EdgeSwipeRightStart = "edgeswiperightstart",
    Gestures.EdgeSwipeRightEnd = "edgeswiperightend",
    Gestures.EdgeSwipeBottom = "edgeswipebottom",
    Gestures.EdgeSwipeBottomStart = "edgeswipebottomstart",
    Gestures.EdgeSwipeBottomEnd = "edgeswipebottomend",
    Gestures.EdgeSwipeLeft = "edgeswipeleft",
    Gestures.EdgeSwipeLeftStart = "edgeswipeleftstart",
    Gestures.EdgeSwipeLeftEnd = "edgeswipeleftend",
    Gestures.Pan = "pan",
    Gestures.PanStart = "panstart",
    Gestures.PanEnd = "panend",
    Gestures.PanLeft = "panleft",
    Gestures.PanRight = "panright",
    Gestures.PanUp = "panup",
    Gestures.PanDown = "pandown",
    Gestures.Pinch = "pinch",
    Gestures.PinchStart = "pinchstart",
    Gestures.PinchEnd = "pinchend",
    Gestures.Scale = "scale",
    Gestures.ScaleStart = "scalestart",
    Gestures.ScaleEnd = "scaleend",
    Gestures.Rotate = "rotate",
    Gestures.RotateStart = "rotatestart",
    Gestures.RotateEnd = "rotateend",
    exports.Gestures = Gestures
}
, function(module, exports, __webpack_require__) {
    var Originals, Utils, _;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Originals = {
        Layer: {
            backgroundColor: "rgba(123, 123, 123, 0.5)",
            color: "white",
            shadowColor: "rgba(123, 123, 123, 0.5)",
            borderColor: "rgba(123, 123, 123, 0.5)",
            width: 200,
            height: 200
        },
        Animation: {
            curve: "ease",
            curveOptions: {},
            time: 1,
            repeat: 0,
            delay: 0,
            debug: !1,
            colorModel: "husl",
            animate: !0,
            looping: !1
        },
        Context: {
            perspective: 0,
            perspectiveOriginX: .5,
            perspectiveOriginY: .5,
            parent: null,
            name: null
        },
        DeviceComponent: {
            fullScreen: !1,
            padding: 50,
            deviceType: "apple-iphone-7-silver",
            deviceZoom: "fit",
            contentZoom: 1,
            orientation: "portrait",
            keyboard: !1,
            animationOptions: {
                time: .3,
                curve: "ease-in-out"
            }
        },
        LayerDraggable: {
            momentum: !0,
            momentumOptions: {
                friction: 2.1,
                tolerance: 1
            },
            bounce: !0,
            bounceOptions: {
                friction: 40,
                tension: 200,
                tolerance: 1
            },
            directionLock: !1,
            directionLockThreshold: {
                x: 10,
                y: 10
            },
            overdrag: !0,
            overdragScale: .5,
            pixelAlign: !0,
            velocityTimeout: 100,
            velocityScale: 890
        },
        FrictionSimulator: {
            friction: 2,
            tolerance: .1
        },
        SpringSimulator: {
            tension: 500,
            friction: 10,
            tolerance: 1e-4
        },
        MomentumBounceSimulator: {
            momentum: {
                friction: 2,
                tolerance: 10
            },
            bounce: {
                tension: 500,
                friction: 10,
                tolerance: 1
            }
        },
        GridComponent: {
            rows: 3,
            columns: 3,
            spacing: 0,
            backgroundColor: "transparent"
        },
        ScrollComponent: {
            clip: !0,
            mouseWheelEnabled: !1,
            backgroundColor: null
        },
        Hints: {
            color: "rgba(144, 19, 254, 0.8)"
        }
    },
    exports.Defaults = {
        getDefaults: function(className, options) {
            var defaults, k, ref, v;
            if (!Originals.hasOwnProperty(className))
                return {};
            if (!Framer.Defaults.hasOwnProperty(className))
                return {};
            options = _.clone(options),
            defaults = _.cloneDeep(Originals[className]),
            ref = Framer.Defaults[className];
            for (k in ref)
                v = ref[k],
                defaults[k] = _.isFunction(v) ? v() : v;
            for (k in defaults)
                v = defaults[k],
                options.hasOwnProperty(k) || (options[k] = v);
            return options
        },
        setup: function() {
            var className, classValues, k, ref, v;
            if (window.FramerDefaults) {
                ref = window.FramerDefaults;
                for (className in ref) {
                    classValues = ref[className];
                    for (k in classValues)
                        v = classValues[k],
                        Originals[className][k] = v
                }
            }
            return exports.Defaults.reset()
        },
        reset: function() {
            return window.Framer.Defaults = _.cloneDeep(Originals)
        }
    }
}
, function(module, exports, __webpack_require__) {
    var Animator, BaseClass, Config, Defaults, LinearAnimator, Utils, _, evaluateRelativeProperty, isRelativeProperty, numberRE, relativePropertyRE, slice = [].slice, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Config = __webpack_require__(14).Config,
    Defaults = __webpack_require__(17).Defaults,
    BaseClass = __webpack_require__(6).BaseClass,
    Animator = __webpack_require__(19).Animator,
    LinearAnimator = __webpack_require__(20).LinearAnimator,
    numberRE = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/,
    relativePropertyRE = new RegExp("^(?:([+-])=|)(" + numberRE.source + ")([a-z%]*)$","i"),
    isRelativeProperty = function(v) {
        return _.isString(v) && relativePropertyRE.test(v)
    }
    ,
    evaluateRelativeProperty = function(target, k, v) {
        var match, number, ref, rest, sign, unit;
        return ref = relativePropertyRE.exec(v),
        match = ref[0],
        sign = ref[1],
        number = ref[2],
        unit = ref[3],
        rest = 5 <= ref.length ? slice.call(ref, 4) : [],
        sign ? target[k] + (sign + 1) * number : +number
    }
    ,
    exports.Animation = function(superClass) {
        function Animation() {
            var args, layer, options, properties;
            if (args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            this._updateColorValue = bind(this._updateColorValue, this),
            this._updateNumberValue = bind(this._updateNumberValue, this),
            this._updateValues = bind(this._updateValues, this),
            this._prepareUpdateValues = bind(this._prepareUpdateValues, this),
            this._update = bind(this._update, this),
            this.finish = bind(this.finish, this),
            this._start = bind(this._start, this),
            this._noop = bind(this._noop, this),
            this._instant = bind(this._instant, this),
            this.start = bind(this.start, this),
            layer = null,
            properties = {},
            options = {},
            3 === arguments.length && (layer = args[0],
            properties = args[1],
            options = {},
            null != properties.options && (options = _.clone(properties.options)),
            args[2] && (options = _.extend({}, options, args[2]))),
            2 === arguments.length && (layer = args[0],
            properties = null != args[1].properties ? args[1].properties : args[1],
            null != args[1].options && (options = args[1].options)),
            1 === arguments.length && (layer = args[0].layer,
            properties = args[0].properties,
            options = null != args[0].options ? args[0].options : args[0]),
            delete options.layer,
            delete options.properties,
            delete options.options,
            this.options = _.cloneDeep(Defaults.getDefaults("Animation", options)),
            Animation.__super__.constructor.apply(this, arguments),
            this._layer = layer,
            !(layer instanceof _Layer))
                throw Error("Animation: missing layer");
            this.properties = Animation.filterAnimatableProperties(properties),
            properties.origin && console.warn("Animation.origin: please use layer.originX and layer.originY"),
            this.options.curveOptions = Animator.curveOptionsFor(this.options),
            this._originalState = this._currentState(),
            this._repeatCounter = this.options.repeat
        }
        return extend(Animation, superClass),
        Animation.define("layer", {
            get: function() {
                return this._layer
            }
        }),
        Animation.define("isPending", {
            get: function() {
                return null != this._delayTimer
            }
        }),
        Animation.define("isAnimating", {
            get: function() {
                return indexOf.call(this.layer.animations(), this) >= 0
            }
        }),
        Animation.define("looping", {
            get: function() {
                return this.options.looping
            },
            set: function(value) {
                var ref, ref1;
                if (null != (ref = this.options) && (ref.looping = value),
                (null != (ref1 = this.options) ? ref1.looping : void 0) && null != this.layer && !this.isAnimating)
                    return this.restart()
            }
        }),
        Animation.define("isNoop", Animation.simpleProperty("isNoop", !1)),
        Animation.prototype.start = function() {
            var animation, k, property, ref, ref1, ref2, ref3, start, v;
            this._animator = null != (ref = Animation._createAnimator(this.options)) ? ref : new LinearAnimator(this.options.curveOptions),
            this._target = this.layer,
            this._stateA = this._currentState(),
            this._stateB = {},
            ref1 = this.properties;
            for (k in ref1)
                v = ref1[k],
                _.isFunction(v) ? v = v(this.layer, k) : isRelativeProperty(v) && (v = evaluateRelativeProperty(this._target, k, v)),
                this._stateA[k] !== v && (this._stateB[k] = v);
            if (0 === _.keys(this._stateA).length)
                return console.warn("Animation: nothing to animate, no animatable properties"),
                this._noop();
            if (_.isEqual(this._stateA, this._stateB))
                return console.warn("Animation: nothing to animate, all properties are equal to what it is now"),
                this._noop();
            if (0 === _.keys(this._stateB).length)
                return this._noop();
            ref2 = this._target.animatingProperties();
            for (property in ref2)
                animation = ref2[property],
                this._stateA.hasOwnProperty(property) && animation.stop(),
                "x" === property && (this._stateA.hasOwnProperty("minX") || this._stateA.hasOwnProperty("midX") || this._stateA.hasOwnProperty("maxX")) && animation.stop(),
                "y" === property && (this._stateA.hasOwnProperty("minY") || this._stateA.hasOwnProperty("midY") || this._stateA.hasOwnProperty("maxY")) && animation.stop();
            if (this.options.debug) {
                console.log("Animation.start"),
                ref3 = this._stateB;
                for (k in ref3)
                    v = ref3[k],
                    console.log("\t" + k + ": " + this._stateA[k] + " -> " + this._stateB[k])
            }
            return _.isFunction(this.options.onStart) && this.on(Events.AnimationStart, this.options.onStart),
            _.isFunction(this.options.onHalt) && this.on(Events.AnimationHalt, this.options.onHalt),
            _.isFunction(this.options.onStop) && this.on(Events.AnimationStop, this.options.onStop),
            _.isFunction(this.options.onEnd) && this.on(Events.AnimationEnd, this.options.onEnd),
            this.once("end", function(_this) {
                return function() {
                    if ((_this._repeatCounter > 0 || _this.looping) && (_this.restart(),
                    !_this.looping))
                        return _this._repeatCounter--
                }
            }(this)),
            this._prepareUpdateValues(),
            start = this.options.animate === !1 || this.options.instant === !0 ? this._instant : this._start,
            this.layer.context.addAnimation(this),
            this.options.delay ? this._delayTimer = Utils.delay(this.options.delay, start) : start(),
            !0
        }
        ,
        Animation.prototype.stop = function(emit) {
            return null == emit && (emit = !0),
            null != this._delayTimer && (Framer.CurrentContext.removeTimer(this._delayTimer),
            this._delayTimer = null),
            this.layer.context.removeAnimation(this),
            emit && this.emit(Events.AnimationHalt),
            emit && this.emit(Events.AnimationStop),
            Framer.Loop.off("update", this._update)
        }
        ,
        Animation.prototype.reverse = function() {
            var options, properties;
            return properties = _.clone(this._originalState),
            options = _.clone(this.options),
            new Animation(this.layer,properties,options)
        }
        ,
        Animation.prototype.reset = function() {
            var k, ref, results, v;
            ref = this._stateA,
            results = [];
            for (k in ref)
                v = ref[k],
                results.push(this._target[k] = v);
            return results
        }
        ,
        Animation.prototype.restart = function() {
            return this.reset(),
            this.start()
        }
        ,
        Animation.prototype.copy = function() {
            var options, properties;
            return properties = _.clone(this.properties),
            options = _.clone(this.options),
            new Animation(this.layer,properties,options)
        }
        ,
        Animation.prototype.revert = function() {
            return this.reverse()
        }
        ,
        Animation.prototype.inverse = function() {
            return this.reverse()
        }
        ,
        Animation.prototype.invert = function() {
            return this.reverse()
        }
        ,
        Animation.prototype.emit = function(event) {
            return Animation.__super__.emit.apply(this, arguments),
            this.layer.emit(event, this)
        }
        ,
        Animation.prototype.animatingProperties = function() {
            return _.keys(this._stateA)
        }
        ,
        Animation.prototype._instant = function() {
            return this.emit(Events.AnimationStart),
            this._updateValues(1),
            this.emit(Events.AnimationStop),
            this.emit(Events.AnimationEnd)
        }
        ,
        Animation.prototype._noop = function() {
            return this.isNoop = !0,
            !this.isNoop
        }
        ,
        Animation.prototype._start = function() {
            return this._delayTimer = null,
            this.emit(Events.AnimationStart),
            Framer.Loop.on("update", this._update)
        }
        ,
        Animation.prototype.finish = function() {
            return this.stop(),
            this._updateValues(1)
        }
        ,
        Animation.prototype._update = function(delta) {
            var emit;
            return this._animator.finished() ? (this._updateValues(1),
            this.stop(emit = !1),
            this.emit(Events.AnimationStop),
            this.emit(Events.AnimationEnd)) : this._updateValues(this._animator.next(delta))
        }
        ,
        Animation.prototype._prepareUpdateValues = function() {
            var k, ref, results, v;
            this._valueUpdaters = {},
            ref = this._stateB,
            results = [];
            for (k in ref)
                v = ref[k],
                Color.isColorObject(v) || Color.isColorObject(this._stateA[k]) ? results.push(this._valueUpdaters[k] = this._updateColorValue) : results.push(this._valueUpdaters[k] = this._updateNumberValue);
            return results
        }
        ,
        Animation.prototype._updateValues = function(value) {
            var k, ref, v;
            ref = this._stateB;
            for (k in ref)
                v = ref[k],
                this._valueUpdaters[k](k, value);
            return null
        }
        ,
        Animation.prototype._updateNumberValue = function(key, value) {
            return this._target[key] = Utils.mapRange(value, 0, 1, this._stateA[key], this._stateB[key])
        }
        ,
        Animation.prototype._updateColorValue = function(key, value) {
            return this._target[key] = Color.mix(this._stateA[key], this._stateB[key], value, !1, this.options.colorModel)
        }
        ,
        Animation.prototype._currentState = function() {
            return _.pick(this.layer, _.keys(this.properties))
        }
        ,
        Animation._createAnimator = function(options) {
            var AnimatorClass, curveOptions, ref;
            return AnimatorClass = Animator.classForCurve(options.curve),
            null == AnimatorClass ? null : (curveOptions = null != (ref = options.curveOptions) ? ref : Animator.curveOptionsFor(options),
            options.debug && console.log("Animation.start " + AnimatorClass.name, curveOptions),
            new AnimatorClass(curveOptions))
        }
        ,
        Animation.isAnimatable = function(v) {
            return _.isNumber(v) || _.isFunction(v) || isRelativeProperty(v) || Color.isColorObject(v)
        }
        ,
        Animation.filterAnimatableProperties = function(properties) {
            var animatableProperties, derivedKey, derivedKeys, i, k, len, v;
            animatableProperties = {};
            for (k in properties)
                if (v = properties[k],
                "frame" === k || "size" === k || "point" === k) {
                    switch (k) {
                    case "frame":
                        derivedKeys = ["x", "y", "width", "height"];
                        break;
                    case "size":
                        derivedKeys = ["width", "height"];
                        break;
                    case "point":
                        derivedKeys = ["x", "y"];
                        break;
                    default:
                        derivedKeys = []
                    }
                    if (_.isObject(v))
                        _.defaults(animatableProperties, _.pick(v, derivedKeys));
                    else if (_.isNumber(v))
                        for (i = 0,
                        len = derivedKeys.length; i < len; i++)
                            derivedKey = derivedKeys[i],
                            animatableProperties[derivedKey] = v
                } else
                    this.isAnimatable(v) ? animatableProperties[k] = v : Color.isValidColorProperty(k, v) && (animatableProperties[k] = new Color(v));
            return animatableProperties
        }
        ,
        Animation.prototype.toInspect = function() {
            var ref;
            return "<" + this.constructor.name + " id:" + this.id + " layer:" + (null != (ref = this.layer) ? ref.toName() : void 0) + " [" + _.keys(this.properties).join(", ") + "] isAnimating:" + this.isAnimating + ">"
        }
        ,
        Animation.prototype.onAnimationStart = function(cb) {
            return this.on(Events.AnimationStart, cb)
        }
        ,
        Animation.prototype.onAnimationHalt = function(cb) {
            return this.on(Events.AnimationHalt, cb)
        }
        ,
        Animation.prototype.onAnimationStop = function(cb) {
            return this.on(Events.AnimationStop, cb)
        }
        ,
        Animation.prototype.onAnimationEnd = function(cb) {
            return this.on(Events.AnimationEnd, cb)
        }
        ,
        Animation.prototype.onAnimationDidStart = function(cb) {
            return this.on(Events.AnimationDidStart, cb)
        }
        ,
        Animation.prototype.onAnimationDidStop = function(cb) {
            return this.on(Events.AnimationDidStop, cb)
        }
        ,
        Animation.prototype.onAnimationDidEnd = function(cb) {
            return this.on(Events.AnimationDidEnd, cb)
        }
        ,
        Animation
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var AnimatorClassBezierPresets, AnimatorClasses, BezierCurveAnimator, LinearAnimator, SpringDHOAnimator, SpringRK4Animator, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    AnimatorClasses = {},
    AnimatorClassBezierPresets = ["ease", "ease-in", "ease-out", "ease-in-out"],
    exports.Animator = function() {
        function Animator(options) {
            null == options && (options = {}),
            this.setup(options)
        }
        return Animator.prototype.setup = function(options) {
            throw Error("Not implemented")
        }
        ,
        Animator.prototype.next = function(delta) {
            throw Error("Not implemented")
        }
        ,
        Animator.prototype.finished = function() {
            throw Error("Not implemented")
        }
        ,
        Animator.prototype.values = function(delta, limit) {
            var i, j, ref, values;
            for (null == delta && (delta = 1 / 60),
            null == limit && (limit = 100),
            values = [],
            i = j = 0,
            ref = limit; (0 <= ref ? j <= ref : j >= ref) && (values.push(this.next(delta)),
            !this.finished()); i = 0 <= ref ? ++j : --j)
                ;
            return values
        }
        ,
        Animator.classForCurve = function(curve) {
            var animatorClassName, parsedCurve;
            return parsedCurve = Utils.parseFunction(curve),
            animatorClassName = parsedCurve.name.toLowerCase(),
            AnimatorClasses.hasOwnProperty(animatorClassName) ? AnimatorClasses[animatorClassName] : indexOf.call(AnimatorClassBezierPresets, animatorClassName) >= 0 ? BezierCurveAnimator : null
        }
        ,
        Animator.curveOptionsFor = function(options) {
            var animatorClass, animatorClassName, curveOptions, i, j, k, l, len, len1, parsedCurve, ref, ref1, ref2, value;
            if (null == options && (options = {}),
            curveOptions = null != (ref = options.curveOptions) ? ref : {},
            animatorClass = this.classForCurve(options.curve),
            parsedCurve = Utils.parseFunction(options.curve),
            animatorClassName = parsedCurve.name.toLowerCase(),
            animatorClass !== LinearAnimator && animatorClass !== BezierCurveAnimator || ((_.isString(curveOptions) || _.isArray(curveOptions)) && (curveOptions = {
                values: curveOptions
            }),
            null == curveOptions.time && (curveOptions.time = options.time)),
            animatorClass === BezierCurveAnimator && indexOf.call(AnimatorClassBezierPresets, animatorClassName) >= 0 && (curveOptions.values = animatorClassName,
            null == curveOptions.time && (curveOptions.time = options.time)),
            parsedCurve.args.length) {
                if (animatorClass === BezierCurveAnimator && (curveOptions.values = parsedCurve.args.map(function(v) {
                    return parseFloat(v) || 0
                })),
                animatorClass === SpringRK4Animator)
                    for (ref1 = ["tension", "friction", "velocity", "tolerance"],
                    i = j = 0,
                    len = ref1.length; j < len; i = ++j)
                        k = ref1[i],
                        value = parseFloat(parsedCurve.args[i]),
                        value && (curveOptions[k] = value);
                if (animatorClass === SpringDHOAnimator)
                    for (ref2 = ["stiffness", "damping", "mass", "tolerance"],
                    i = l = 0,
                    len1 = ref2.length; l < len1; i = ++l)
                        k = ref2[i],
                        value = parseFloat(parsedCurve.args[i]),
                        value && (curveOptions[k] = value)
            }
            return curveOptions
        }
        ,
        Animator
    }(),
    LinearAnimator = __webpack_require__(20).LinearAnimator,
    BezierCurveAnimator = __webpack_require__(21).BezierCurveAnimator,
    SpringRK4Animator = __webpack_require__(22).SpringRK4Animator,
    SpringDHOAnimator = __webpack_require__(24).SpringDHOAnimator,
    AnimatorClasses.linear = LinearAnimator,
    AnimatorClasses["bezier-curve"] = BezierCurveAnimator,
    AnimatorClasses["spring-rk4"] = SpringRK4Animator,
    AnimatorClasses["spring-dho"] = SpringDHOAnimator,
    AnimatorClasses.spring = AnimatorClasses["spring-rk4"],
    AnimatorClasses["cubic-bezier"] = AnimatorClasses["bezier-curve"]
}
, function(module, exports, __webpack_require__) {
    var Animator, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Animator = __webpack_require__(19).Animator,
    exports.LinearAnimator = function(superClass) {
        function LinearAnimator() {
            return LinearAnimator.__super__.constructor.apply(this, arguments)
        }
        return extend(LinearAnimator, superClass),
        LinearAnimator.prototype.setup = function(options) {
            return this.options = _.defaults(options, {
                time: 1,
                precision: .001
            }),
            this._time = 0
        }
        ,
        LinearAnimator.prototype.next = function(delta) {
            return this._time += delta,
            this.finished() ? 1 : this._time / this.options.time
        }
        ,
        LinearAnimator.prototype.finished = function() {
            return this._time >= this.options.time - this.options.precision
        }
        ,
        LinearAnimator
    }(Animator)
}
, function(module, exports, __webpack_require__) {
    var Animator, BezierCurveDefaults, UnitBezier, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Animator = __webpack_require__(19).Animator,
    BezierCurveDefaults = {
        linear: [0, 0, 1, 1],
        ease: [.25, .1, .25, 1],
        "ease-in": [.42, 0, 1, 1],
        "ease-out": [0, 0, .58, 1],
        "ease-in-out": [.42, 0, .58, 1]
    },
    exports.BezierCurveAnimator = function(superClass) {
        function BezierCurveAnimator() {
            return BezierCurveAnimator.__super__.constructor.apply(this, arguments)
        }
        return extend(BezierCurveAnimator, superClass),
        BezierCurveAnimator.prototype.setup = function(options) {
            return _.isString(options) && BezierCurveDefaults.hasOwnProperty(options.toLowerCase()) && (options = {
                values: BezierCurveDefaults[options.toLowerCase()]
            }),
            options.values && _.isString(options.values) && BezierCurveDefaults.hasOwnProperty(options.values.toLowerCase()) && (options = {
                values: BezierCurveDefaults[options.values.toLowerCase()],
                time: options.time
            }),
            _.isArray(options) && 4 === options.length && (options = {
                values: options
            }),
            this.options = _.defaults(options, {
                values: BezierCurveDefaults["ease-in-out"],
                time: 1,
                precision: .001
            }),
            this._unitBezier = new UnitBezier(this.options.values[0],this.options.values[1],this.options.values[2],this.options.values[3],this._time = 0)
        }
        ,
        BezierCurveAnimator.prototype.next = function(delta) {
            return this._time += delta,
            this.finished() ? 1 : this._unitBezier.solve(this._time / this.options.time)
        }
        ,
        BezierCurveAnimator.prototype.finished = function() {
            return this._time >= this.options.time - this.options.precision
        }
        ,
        BezierCurveAnimator
    }(Animator),
    UnitBezier = function() {
        function UnitBezier(p1x, p1y, p2x, p2y) {
            this.cx = 3 * p1x,
            this.bx = 3 * (p2x - p1x) - this.cx,
            this.ax = 1 - this.cx - this.bx,
            this.cy = 3 * p1y,
            this.by = 3 * (p2y - p1y) - this.cy,
            this.ay = 1 - this.cy - this.by
        }
        return UnitBezier.prototype.epsilon = 1e-6,
        UnitBezier.prototype.sampleCurveX = function(t) {
            return ((this.ax * t + this.bx) * t + this.cx) * t
        }
        ,
        UnitBezier.prototype.sampleCurveY = function(t) {
            return ((this.ay * t + this.by) * t + this.cy) * t
        }
        ,
        UnitBezier.prototype.sampleCurveDerivativeX = function(t) {
            return (3 * this.ax * t + 2 * this.bx) * t + this.cx
        }
        ,
        UnitBezier.prototype.solveCurveX = function(x) {
            var d2, i, t0, t1, t2, x2;
            for (t2 = x,
            i = 0; i < 8; ) {
                if (x2 = this.sampleCurveX(t2) - x,
                Math.abs(x2) < this.epsilon)
                    return t2;
                if (d2 = this.sampleCurveDerivativeX(t2),
                Math.abs(d2) < this.epsilon)
                    break;
                t2 -= x2 / d2,
                i++
            }
            if (t0 = 0,
            t1 = 1,
            t2 = x,
            t2 < t0)
                return t0;
            if (t2 > t1)
                return t1;
            for (; t0 < t1; ) {
                if (x2 = this.sampleCurveX(t2),
                Math.abs(x2 - x) < this.epsilon)
                    return t2;
                x > x2 ? t0 = t2 : t1 = t2,
                t2 = .5 * (t1 - t0) + t0
            }
            return t2
        }
        ,
        UnitBezier.prototype.solve = function(x) {
            return this.sampleCurveY(this.solveCurveX(x))
        }
        ,
        UnitBezier
    }()
}
, function(module, exports, __webpack_require__) {
    var Animator, Integrator, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Animator = __webpack_require__(19).Animator,
    Integrator = __webpack_require__(23).Integrator,
    exports.SpringRK4Animator = function(superClass) {
        function SpringRK4Animator() {
            return this.finished = bind(this.finished, this),
            SpringRK4Animator.__super__.constructor.apply(this, arguments)
        }
        return extend(SpringRK4Animator, superClass),
        SpringRK4Animator.prototype.setup = function(options) {
            return this.options = _.defaults(options, {
                tension: 250,
                friction: 25,
                velocity: 0,
                tolerance: .01,
                time: null
            }),
            this._time = 0,
            this._value = 0,
            this._velocity = this.options.velocity,
            this._stopSpring = !1,
            this._integrator = new Integrator(function(_this) {
                return function(state) {
                    return -_this.options.tension * state.x - _this.options.friction * state.v
                }
            }(this))
        }
        ,
        SpringRK4Animator.prototype.next = function(delta) {
            var finalVelocity, net1DVelocity, netFloat, netValueIsLow, netVelocityIsLow, stateAfter, stateBefore;
            return this.finished() ? 1 : (this._time += delta,
            stateBefore = {},
            stateAfter = {},
            stateBefore.x = this._value - 1,
            stateBefore.v = this._velocity,
            stateAfter = this._integrator.integrateState(stateBefore, delta),
            this._value = 1 + stateAfter.x,
            finalVelocity = stateAfter.v,
            netFloat = stateAfter.x,
            net1DVelocity = stateAfter.v,
            netValueIsLow = Math.abs(netFloat) < this.options.tolerance,
            netVelocityIsLow = Math.abs(net1DVelocity) < this.options.tolerance,
            this._stopSpring = netValueIsLow && netVelocityIsLow,
            this._velocity = finalVelocity,
            this._value)
        }
        ,
        SpringRK4Animator.prototype.finished = function() {
            return this._stopSpring
        }
        ,
        SpringRK4Animator
    }(Animator)
}
, function(module, exports) {
    exports.Integrator = function() {
        function Integrator(_accelerationForState) {
            this._accelerationForState = _accelerationForState,
            _.isFunction(this._accelerationForState) || (console.warn("Integrator: an integrator must be constructed with an acceleration function"),
            this._accelerationForState = function() {
                return 0
            }
            )
        }
        return Integrator.prototype.integrateState = function(state, dt) {
            var a, b, c, d, dvdt, dxdt;
            return a = this._evaluateState(state),
            b = this._evaluateStateWithDerivative(state, .5 * dt, a),
            c = this._evaluateStateWithDerivative(state, .5 * dt, b),
            d = this._evaluateStateWithDerivative(state, dt, c),
            dxdt = 1 / 6 * (a.dx + 2 * (b.dx + c.dx) + d.dx),
            dvdt = 1 / 6 * (a.dv + 2 * (b.dv + c.dv) + d.dv),
            state.x = state.x + dxdt * dt,
            state.v = state.v + dvdt * dt,
            state
        }
        ,
        Integrator.prototype._evaluateState = function(initialState) {
            var output;
            return output = {},
            output.dx = initialState.v,
            output.dv = this._accelerationForState(initialState),
            output
        }
        ,
        Integrator.prototype._evaluateStateWithDerivative = function(initialState, dt, derivative) {
            var output, state;
            return state = {},
            state.x = initialState.x + derivative.dx * dt,
            state.v = initialState.v + derivative.dv * dt,
            output = {},
            output.dx = state.v,
            output.dv = this._accelerationForState(state),
            output
        }
        ,
        Integrator
    }()
}
, function(module, exports, __webpack_require__) {
    var Animator, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Animator = __webpack_require__(19).Animator,
    exports.SpringDHOAnimator = function(superClass) {
        function SpringDHOAnimator() {
            return this.finished = bind(this.finished, this),
            SpringDHOAnimator.__super__.constructor.apply(this, arguments)
        }
        return extend(SpringDHOAnimator, superClass),
        SpringDHOAnimator.prototype.setup = function(options) {
            return this.options = _.defaults(options, {
                velocity: 0,
                tolerance: 1e-4,
                stiffness: 50,
                damping: 2,
                mass: .2,
                time: null
            }),
            this._time = 0,
            this._value = 0,
            this._velocity = this.options.velocity
        }
        ,
        SpringDHOAnimator.prototype.next = function(delta) {
            var F_damper, F_spring, b, k;
            return this.finished() ? 1 : (this._time += delta,
            k = 0 - this.options.stiffness,
            b = 0 - this.options.damping,
            F_spring = k * (this._value - 1),
            F_damper = b * this._velocity,
            this._velocity += (F_spring + F_damper) / this.options.mass * delta,
            this._value += this._velocity * delta,
            this._value)
        }
        ,
        SpringDHOAnimator.prototype.finished = function() {
            return this._time > 0 && Math.abs(this._velocity) < this.options.tolerance
        }
        ,
        SpringDHOAnimator
    }(Animator)
}
, function(module, exports) {
    var _Force2DProperties, _WebkitProperties, filterFormat, roundToZero;
    filterFormat = function(value, unit) {
        return "" + Utils.round(value, 2) + unit
    }
    ,
    roundToZero = function(num) {
        return -1e-6 < num && num < 1e-6 ? 0 : num
    }
    ,
    _WebkitProperties = [["blur", "blur", 0, "px"], ["brightness", "brightness", 100, "%"], ["saturate", "saturate", 100, "%"], ["hue-rotate", "hueRotate", 0, "deg"], ["contrast", "contrast", 100, "%"], ["invert", "invert", 0, "%"], ["grayscale", "grayscale", 0, "%"], ["sepia", "sepia", 0, "%"]],
    _Force2DProperties = {
        z: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skewX: 0,
        skewY: 0,
        rotationX: 0,
        rotationY: 0
    },
    exports.LayerStyle = {
        width: function(layer) {
            return layer._properties.width + "px"
        },
        height: function(layer) {
            return layer._properties.height + "px"
        },
        display: function(layer) {
            return layer._properties.visible === !0 ? "block" : "none"
        },
        opacity: function(layer) {
            return layer._properties.opacity
        },
        webkitTransformStyle: function(layer) {
            return layer._properties.flat ? "flat" : "preserve-3d"
        },
        webkitBackfaceVisibility: function(layer) {
            return layer._properties.backfaceVisible ? "visible" : "hidden"
        },
        overflow: function(layer) {
            return layer._properties.scrollHorizontal === !0 || layer._properties.scrollVertical === !0 ? "auto" : layer._properties.clip === !0 ? "hidden" : "visible"
        },
        overflowX: function(layer) {
            return layer._properties.scrollHorizontal === !0 ? "scroll" : layer._properties.clip === !0 ? "hidden" : "visible"
        },
        overflowY: function(layer) {
            return layer._properties.scrollVertical === !0 ? "scroll" : layer._properties.clip === !0 ? "hidden" : "visible"
        },
        zIndex: function(layer) {
            return layer._properties.index
        },
        webkitFilter: function(layer) {
            var css, cssName, fallback, i, layerName, len, ref, unit;
            for (css = [],
            i = 0,
            len = _WebkitProperties.length; i < len; i++)
                ref = _WebkitProperties[i],
                cssName = ref[0],
                layerName = ref[1],
                fallback = ref[2],
                unit = ref[3],
                layer._properties.hasOwnProperty(layerName) && layer[layerName] !== fallback && css.push(cssName + "(" + filterFormat(layer[layerName], unit) + ")");
            return css.join(" ")
        },
        webkitTransform: function(layer) {
            return layer._prefer2d || layer._properties.force2d ? exports.LayerStyle.webkitTransformForce2d(layer) : "translate3d( " + roundToZero(layer._properties.x) + "px, " + roundToZero(layer._properties.y) + "px, " + roundToZero(layer._properties.z) + "px) scale3d( " + roundToZero(layer._properties.scaleX * layer._properties.scale) + ", " + roundToZero(layer._properties.scaleY * layer._properties.scale) + ", " + roundToZero(layer._properties.scaleZ) + ") skew(" + roundToZero(layer._properties.skew) + "deg," + roundToZero(layer._properties.skew) + "deg) skewX(" + roundToZero(layer._properties.skewX) + "deg) skewY(" + roundToZero(layer._properties.skewY) + "deg) translateZ(" + roundToZero(layer._properties.originZ) + "px) rotateX(" + roundToZero(layer._properties.rotationX) + "deg) rotateY(" + roundToZero(layer._properties.rotationY) + "deg) rotateZ(" + roundToZero(layer._properties.rotationZ) + "deg) translateZ(" + roundToZero(-layer._properties.originZ) + "px)"
        },
        webkitTransformForce2d: function(layer) {
            var css, p, v;
            css = [];
            for (p in _Force2DProperties)
                v = _Force2DProperties[p],
                layer._properties[p] !== v && console.warn("Layer property '" + p + "'' will be ignored with force2d enabled");
            return css.push("translate(" + roundToZero(layer._properties.x) + "px," + roundToZero(layer._properties.y) + "px)"),
            css.push("scale(" + roundToZero(layer._properties.scale) + ")"),
            css.push("skew(" + roundToZero(layer._properties.skew) + "deg," + roundToZero(layer._properties.skew) + "deg)"),
            css.push("rotate(" + roundToZero(layer._properties.rotationZ) + "deg)"),
            css.join(" ")
        },
        webkitTransformOrigin: function(layer) {
            return 100 * layer._properties.originX + "% " + 100 * layer._properties.originY + "%"
        },
        webkitPerspective: function(layer) {
            return "" + layer._properties.perspective
        },
        webkitPerspectiveOrigin: function(layer) {
            return 100 * layer._properties.perspectiveOriginX + "% " + 100 * layer._properties.perspectiveOriginY + "%"
        },
        pointerEvents: function(layer) {
            return layer._properties.ignoreEvents ? "none" : "auto"
        },
        boxShadow: function(layer) {
            var props;
            return props = layer._properties,
            props.shadowColor ? 0 === props.shadowX && 0 === props.shadowY && 0 === props.shadowBlur && 0 === props.shadowSpread ? "" : layer._properties.shadowX + "px " + layer._properties.shadowY + "px " + layer._properties.shadowBlur + "px " + layer._properties.shadowSpread + "px " + layer._properties.shadowColor : ""
        },
        backgroundColor: function(layer) {
            return layer._properties.backgroundColor
        },
        color: function(layer) {
            return layer._properties.color;
        },
        borderRadius: function(layer) {
            return _.isNumber(layer._properties.borderRadius) ? layer._properties.borderRadius + "px" : layer._properties.borderRadius
        },
        border: function(layer) {
            return layer._properties.borderWidth + "px solid " + layer._properties.borderColor
        }
    }
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Defaults, Events, LayerStateMachine, LayerStates, LayerStatesIgnoredKeys, _, deprecatedWarning, namedState, reservedStateError, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    , slice = [].slice;
    _ = __webpack_require__(1)._,
    Events = __webpack_require__(15).Events,
    BaseClass = __webpack_require__(6).BaseClass,
    Defaults = __webpack_require__(17).Defaults,
    LayerStateMachine = __webpack_require__(27).LayerStateMachine,
    LayerStatesIgnoredKeys = ["ignoreEvents", "name", "id"],
    reservedStateError = function(name) {
        throw Error("The state '" + name + "' is a reserved name.")
    }
    ,
    deprecatedWarning = function(name, suggestion) {
        var message;
        return message = "layer.states." + name + " is deprecated",
        null != suggestion && (message += ", use '" + suggestion + "' instead."),
        console.warn(message)
    }
    ,
    namedState = function(state, name) {
        return _.extend({}, {
            name: name
        }, state)
    }
    ,
    LayerStates = function() {
        function LayerStates(layer) {
            var _machine;
            _machine = new LayerStateMachine(layer,this),
            Object.defineProperty(this, "machine", {
                enumerable: !1,
                configurable: !1,
                get: function() {
                    return _machine
                },
                set: function() {
                    return reservedStateError("machine")
                }
            }),
            this.capture("default")
        }
        var capture, methods;
        return LayerStates.defineReserved = function(propertyName, descriptor) {
            return descriptor.configurable = !0,
            null == descriptor.enumerable && (descriptor.enumerable = !1),
            null == descriptor.set && (descriptor.set = function() {
                return reservedStateError(propertyName)
            }
            ),
            Object.defineProperty(this.prototype, propertyName, descriptor)
        }
        ,
        LayerStates.defineReserved("previous", {
            get: function() {
                return namedState(this[this.machine.previousName], this.machine.previousName)
            }
        }),
        LayerStates.defineReserved("current", {
            get: function() {
                return namedState(this[this.machine.currentName], this.machine.currentName)
            }
        }),
        capture = function(name) {
            return this[name] = LayerStates.filterStateProperties(this.machine.layer.props)
        }
        ,
        LayerStates.defineReserved("capture", {
            get: function() {
                return capture
            }
        }),
        LayerStates.filterStateProperties = function(properties) {
            var k, stateProperties, v;
            stateProperties = {};
            for (k in properties)
                v = properties[k],
                indexOf.call(LayerStatesIgnoredKeys, k) >= 0 || (Color.isValidColorProperty(k, v) ? stateProperties[k] = new Color(v) : this._isValidProperty(k, v) && (stateProperties[k] = v));
            return stateProperties
        }
        ,
        LayerStates._isValidProperty = function(k, v) {
            var ref;
            return !!_.isNumber(v) || (!!_.isFunction(v) || (!!_.isBoolean(v) || (!!_.isString(v) || (!!Color.isColorObject(v) || (null === v || "Layer" === (null != v && null != (ref = v.constructor) ? ref.name : void 0))))))
        }
        ,
        methods = {
            add: function(states, object) {
                return null == object && (object = {}),
                deprecatedWarning("add", "layer.states = "),
                _.isString(states) ? this[states] = object : this.machine.layer.states = states
            },
            remove: function(stateName) {
                return deprecatedWarning("remove", "delete layer.states.a"),
                delete this[stateName]
            },
            switch: function(stateName, options) {
                return deprecatedWarning("switch", 'layer.animate("state")'),
                this.machine.switchTo(stateName, options)
            },
            switchInstant: function(stateName) {
                return deprecatedWarning("switchInstant", 'layer.animate("state", {instant: true})'),
                this.machine.switchTo(stateName, {
                    instant: !0
                })
            },
            next: function() {
                var options;
                return options = 1 <= arguments.length ? slice.call(arguments, 0) : [],
                deprecatedWarning("next", "layer.stateCycle()"),
                options = _.flatten(options),
                this.machine.layer.stateCycle(options)
            }
        },
        LayerStates.defineReserved("add", {
            get: function() {
                return methods.add
            }
        }),
        LayerStates.defineReserved("remove", {
            get: function() {
                return methods.remove
            }
        }),
        LayerStates.defineReserved("switch", {
            get: function() {
                return methods.switch
            }
        }),
        LayerStates.defineReserved("switchInstant", {
            get: function() {
                return methods.switchInstant
            }
        }),
        LayerStates.defineReserved("next", {
            get: function() {
                return methods.next
            }
        }),
        LayerStates.defineReserved("animationOptions", {
            get: function() {
                return this.machine.layer.animationOptions
            },
            set: function(options) {
                return this.machine.layer.animationOptions = options
            }
        }),
        LayerStates
    }(),
    exports.LayerStates = LayerStates
}
, function(module, exports, __webpack_require__) {
    var BaseClass, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, slice = [].slice;
    BaseClass = __webpack_require__(6).BaseClass,
    exports.LayerStateMachine = function(superClass) {
        function LayerStateMachine(_layer, _states) {
            this._layer = _layer,
            this._states = _states,
            LayerStateMachine.__super__.constructor.apply(this, arguments),
            this.reset()
        }
        return extend(LayerStateMachine, superClass),
        LayerStateMachine.define("layer", {
            get: function() {
                return this._layer
            }
        }),
        LayerStateMachine.define("current", {
            get: function() {
                return this.currentName
            }
        }),
        LayerStateMachine.define("previous", {
            get: function() {
                return this.previousName
            }
        }),
        LayerStateMachine.define("currentName", {
            get: function() {
                return this._currentName
            }
        }),
        LayerStateMachine.define("previousName", {
            get: function() {
                return _.last(this._previousNames) || "default"
            }
        }),
        LayerStateMachine.define("stateNames", {
            get: function() {
                return Object.keys(this.states)
            }
        }),
        LayerStateMachine.define("states", {
            get: function() {
                return this._states
            }
        }),
        LayerStateMachine.prototype.switchInstant = function(stateName) {
            return this.switchTo(stateName, {
                instant: !0
            })
        }
        ,
        LayerStateMachine.prototype.switchTo = function(stateName, options) {
            var animation, onEnd, onStart, onStop, properties, ref, startAnimation, started, stateNameA, stateNameB, stateSwitched, switchState;
            if (null == options && (options = {}),
            !this.states[stateName])
                throw Error("No such state: '" + stateName + "'");
            return "previous" === stateName && (stateName = this.previousName),
            properties = _.clone(this.states[stateName]),
            properties.animationOptions && (options = _.defaults({}, options, properties.animationOptions)),
            delete properties.animationOptions,
            stateNameA = this.currentName,
            stateNameB = stateName,
            startAnimation = null == (ref = options.start) || ref,
            options.start = !1,
            animation = this.layer.animate(properties, options),
            stateSwitched = !1,
            switchState = function(_this) {
                return function() {
                    if (!stateSwitched)
                        return stateSwitched = !0,
                        _this._previousNames.push(stateNameA),
                        _this._currentName = stateNameB
                }
            }(this),
            onStart = function(_this) {
                return function() {
                    return _this.emit(Events.StateSwitchStart, stateNameA, stateNameB, _this),
                    switchState()
                }
            }(this),
            onStop = function(_this) {
                return function() {
                    return _this.emit(Events.StateSwitchStop, stateNameA, stateNameB, _this)
                }
            }(this),
            onEnd = function(_this) {
                return function() {
                    var i, instantProperties, k, len;
                    for (instantProperties = _.difference(_.keys(properties), _.keys(animation.properties)),
                    i = 0,
                    len = instantProperties.length; i < len; i++)
                        k = instantProperties[i],
                        _this.layer[k] = properties[k];
                    return _this.emit(Events.StateSwitchEnd, stateNameA, stateNameB, _this)
                }
            }(this),
            animation.on(Events.AnimationStart, onStart),
            animation.on(Events.AnimationStop, onStop),
            animation.on(Events.AnimationEnd, onEnd),
            startAnimation && (started = animation.start(),
            started || (onStart(),
            onStop(),
            onEnd())),
            switchState(),
            animation
        }
        ,
        LayerStateMachine.prototype.next = function(states) {
            return states.length || (states = this.stateNames),
            Utils.arrayNext(states, this.currentName)
        }
        ,
        LayerStateMachine.prototype.emit = function() {
            var args, ref;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            LayerStateMachine.__super__.emit.apply(this, arguments),
            (ref = this._layer).emit.apply(ref, args)
        }
        ,
        LayerStateMachine.prototype.reset = function() {
            var i, k, len, ref;
            for (ref = _.keys(this.states),
            i = 0,
            len = ref.length; i < len; i++)
                k = ref[i],
                "default" !== k && delete this.states[k];
            return this._previousNames = [],
            this._currentName = "default"
        }
        ,
        LayerStateMachine.prototype.toInspect = function(constructor) {
            return "<" + this.constructor.name + " id:" + this.id + " layer:" + this.layer.id + " current:'" + this.currentName + "'>"
        }
        ,
        LayerStateMachine
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Defaults, EventBuffer, Events, Gestures, Simulation, Utils, _, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    Simulation = __webpack_require__(29).Simulation,
    Defaults = __webpack_require__(17).Defaults,
    EventBuffer = __webpack_require__(34).EventBuffer,
    Gestures = __webpack_require__(16).Gestures,
    Events.Move = "move",
    Events.DragStart = "dragstart",
    Events.DragWillMove = "dragwillmove",
    Events.DragMove = "dragmove",
    Events.DragDidMove = "dragmove",
    Events.Drag = "dragmove",
    Events.DragEnd = "dragend",
    Events.DragAnimationStart = "draganimationstart",
    Events.DragAnimationEnd = "draganimationend",
    Events.DirectionLockStart = "directionlockstart",
    Events.DragSessionStart = "dragsessionstart",
    Events.DragSessionMove = "dragsessionmove",
    Events.DragSessionEnd = "dragsessionend",
    Events.DragAnimationDidStart = Events.DragAnimationStart,
    Events.DragAnimationDidEnd = Events.DragAnimationEnd,
    Events.DirectionLockDidStart = Events.DirectionLockStart,
    exports.LayerDraggable = function(superClass) {
        function LayerDraggable(layer) {
            var options;
            this.layer = layer,
            this._stopSimulation = bind(this._stopSimulation, this),
            this._onSimulationStop = bind(this._onSimulationStop, this),
            this._onSimulationStep = bind(this._onSimulationStep, this),
            this._touchEnd = bind(this._touchEnd, this),
            this._touchMove = bind(this._touchMove, this),
            this._touchStart = bind(this._touchStart, this),
            this._updateLayerPosition = bind(this._updateLayerPosition, this),
            this.touchStart = bind(this.touchStart, this),
            options = Defaults.getDefaults("LayerDraggable", {}),
            LayerDraggable.__super__.constructor.call(this, options),
            _.extend(this, options),
            this.enabled = !0,
            this._eventBuffer = new EventBuffer,
            this._constraints = null,
            this._ignoreUpdateLayerPosition = !0,
            this.attach()
        }
        return extend(LayerDraggable, superClass),
        LayerDraggable.define("speedX", LayerDraggable.simpleProperty("speedX", 1)),
        LayerDraggable.define("speedY", LayerDraggable.simpleProperty("speedY", 1)),
        LayerDraggable.define("horizontal", LayerDraggable.simpleProperty("horizontal", !0)),
        LayerDraggable.define("vertical", LayerDraggable.simpleProperty("vertical", !0)),
        LayerDraggable.define("momentumVelocityMultiplier", LayerDraggable.simpleProperty("momentumVelocityMultiplier", 800)),
        LayerDraggable.define("directionLock", LayerDraggable.simpleProperty("directionLock", !0)),
        LayerDraggable.define("directionLockThreshold", LayerDraggable.simpleProperty("directionLockThreshold", {
            x: 10,
            y: 10
        })),
        LayerDraggable.define("propagateEvents", LayerDraggable.simpleProperty("propagateEvents", !0)),
        LayerDraggable.define("constraints", {
            get: function() {
                return this._constraints
            },
            set: function(value) {
                if (value && _.isObject(value) ? (value = _.pick(value, ["x", "y", "width", "height"]),
                value = _.defaults(value, {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                }),
                this._constraints = value) : this._constraints = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                this._constraints)
                    return this._updateSimulationConstraints(this._constraints)
            }
        }),
        LayerDraggable.define("isDragging", {
            get: function() {
                return this._isDragging || !1
            }
        }),
        LayerDraggable.define("isAnimating", {
            get: function() {
                return this._isAnimating || !1
            }
        }),
        LayerDraggable.define("isMoving", {
            get: function() {
                return this._isMoving || !1
            }
        }),
        LayerDraggable.define("layerStartPoint", {
            get: function() {
                return this._layerStartPoint || this.layer.point
            }
        }),
        LayerDraggable.define("cursorStartPoint", {
            get: function() {
                return this._cursorStartPoint || {
                    x: 0,
                    y: 0
                }
            }
        }),
        LayerDraggable.define("layerCursorOffset", {
            get: function() {
                return this._layerCursorOffset || {
                    x: 0,
                    y: 0
                }
            }
        }),
        LayerDraggable.define("offset", {
            get: function() {
                var offset;
                return this._correctedLayerStartPoint ? offset = {
                    x: this.layer.x - this._correctedLayerStartPoint.x,
                    y: this.layer.y - this._correctedLayerStartPoint.y
                } : {
                    x: 0,
                    y: 0
                }
            }
        }),
        LayerDraggable.prototype.attach = function() {
            return this.layer.on(Gestures.TapStart, this.touchStart),
            this.layer.on("change:x", this._updateLayerPosition),
            this.layer.on("change:y", this._updateLayerPosition)
        }
        ,
        LayerDraggable.prototype.remove = function() {
            return this.layer.off(Gestures.TapStart, this.touchStart),
            this.layer.off(Gestures.Pan, this._touchMove),
            this.layer.off(Gestures.PanEnd, this._touchEnd)
        }
        ,
        LayerDraggable.prototype.updatePosition = function(point) {
            return point
        }
        ,
        LayerDraggable.prototype.touchStart = function(event) {
            return this._touchStart(event)
        }
        ,
        LayerDraggable.prototype._updateLayerPosition = function() {
            if (this._ignoreUpdateLayerPosition !== !0)
                return this._point = this.layer.point
        }
        ,
        LayerDraggable.prototype._touchStart = function(event) {
            var animation, i, len, properties, ref, touchEvent;
            for (Events.wrap(document).addEventListener(Gestures.Pan, this._touchMove),
            Events.wrap(document).addEventListener(Gestures.TapEnd, this._touchEnd),
            this._isMoving = this._isAnimating,
            ref = this.layer.animations(),
            i = 0,
            len = ref.length; i < len; i++)
                animation = ref[i],
                properties = animation.properties,
                (properties.hasOwnProperty("x") || properties.hasOwnProperty("y")) && animation.stop();
            return this._stopSimulation(),
            this._resetdirectionLock(),
            event.preventDefault(),
            this.propagateEvents === !1 && event.stopPropagation(),
            touchEvent = Events.touchEvent(event),
            this._eventBuffer.push({
                x: touchEvent.clientX,
                y: touchEvent.clientY,
                t: Date.now()
            }),
            this._layerStartPoint = this.layer.point,
            this._correctedLayerStartPoint = this.layer.point,
            this.constraints && this.bounce && (this._correctedLayerStartPoint = this._constrainPosition(this._correctedLayerStartPoint, this.constraints, 1 / this.overdragScale)),
            this._cursorStartPoint = {
                x: touchEvent.clientX,
                y: touchEvent.clientY
            },
            this._layerCursorOffset = {
                x: touchEvent.clientX - this._correctedLayerStartPoint.x,
                y: touchEvent.clientY - this._correctedLayerStartPoint.y
            },
            this._point = this._correctedLayerStartPoint,
            this._ignoreUpdateLayerPosition = !1,
            this.emit(Events.DragSessionStart, event)
        }
        ,
        LayerDraggable.prototype._touchMove = function(event) {
            var offset, point, touchEvent;
            if (this.enabled) {
                if (this._point || this.touchStart(event),
                event.preventDefault(),
                this.propagateEvents === !1 && event.stopPropagation(),
                touchEvent = Events.touchEvent(event),
                this._lastEvent = touchEvent,
                this._eventBuffer.push({
                    x: touchEvent.clientX,
                    y: touchEvent.clientY,
                    t: Date.now()
                }),
                point = _.clone(this._point),
                this.horizontal && (point.x = this._point.x + event.delta.x * this.speedX * (1 / this.layer.screenScaleX(!1))),
                this.vertical && (point.y = this._point.y + event.delta.y * this.speedY * (1 / this.layer.screenScaleY(!1))),
                this._point = _.clone(point),
                this._constraints && (point = this._constrainPosition(point, this._constraints, this.overdragScale)),
                this.directionLock) {
                    if (!this._directionLockEnabledX && !this._directionLockEnabledY)
                        return offset = event.offset,
                        offset.x = offset.x * this.speedX * (1 / this.layer.canvasScaleX()) * this.layer.scaleX * this.layer.scale,
                        offset.y = offset.y * this.speedY * (1 / this.layer.canvasScaleY()) * this.layer.scaleY * this.layer.scale,
                        void this._updatedirectionLock(offset);
                    this._directionLockEnabledX && (point.x = this._layerStartPoint.x),
                    this._directionLockEnabledY && (point.y = this._layerStartPoint.y)
                }
                return point.x === this._layerStartPoint.x && point.y === this._layerStartPoint.y || this._isDragging || (this._isDragging = !0,
                this._isMoving = !0,
                this.emit(Events.DragStart, event)),
                this.isDragging && this.emit(Events.DragWillMove, event),
                this.pixelAlign && (this.horizontal && (point.x = parseInt(point.x)),
                this.vertical && (point.y = parseInt(point.y))),
                this._ignoreUpdateLayerPosition = !0,
                this.layer.point = this.updatePosition(point),
                this._ignoreUpdateLayerPosition = !1,
                this.isDragging && (this.emit(Events.Move, this.layer.point),
                this.emit(Events.DragDidMove, event)),
                this.emit(Events.DragSessionMove, event)
            }
        }
        ,
        LayerDraggable.prototype._touchEnd = function(event) {
            return Events.wrap(document).removeEventListener(Gestures.Pan, this._touchMove),
            Events.wrap(document).removeEventListener(Gestures.TapEnd, this._touchEnd),
            this.propagateEvents === !1 && event.stopPropagation(),
            this._startSimulation(),
            this.emit(Events.DragSessionEnd, event),
            this._isDragging && this.emit(Events.DragEnd, event),
            this._isDragging = !1,
            this._isMoving = this._isAnimating,
            this._ignoreUpdateLayerPosition = !0,
            this._lastEvent = null,
            this._eventBuffer.reset()
        }
        ,
        LayerDraggable.define("constraintsOffset", {
            get: function() {
                var constrainedPoint, maxX, maxY, minX, minY, offset, point, ref;
                return this.constraints ? (ref = this._calculateConstraints(this.constraints),
                minX = ref.minX,
                maxX = ref.maxX,
                minY = ref.minY,
                maxY = ref.maxY,
                point = this.layer.point,
                constrainedPoint = {
                    x: Utils.clamp(point.x, minX, maxX),
                    y: Utils.clamp(point.y, minY, maxY)
                },
                offset = {
                    x: point.x - constrainedPoint.x,
                    y: point.y - constrainedPoint.y
                }) : {
                    x: 0,
                    y: 0
                }
            }
        }),
        LayerDraggable.define("isBeyondConstraints", {
            get: function() {
                var constraintsOffset;
                return constraintsOffset = this.constraintsOffset,
                0 !== constraintsOffset.x || 0 !== constraintsOffset.y
            }
        }),
        LayerDraggable.prototype._clampAndScale = function(value, min, max, scale) {
            return value < min && (value = min + (value - min) * scale),
            value > max && (value = max + (value - max) * scale),
            value
        }
        ,
        LayerDraggable.prototype._calculateConstraints = function(bounds) {
            var constraints;
            return bounds ? (bounds.width < this.layer.width && (bounds.width = this.layer.width),
            bounds.height < this.layer.height && (bounds.height = this.layer.height),
            constraints = {
                minX: Utils.frameGetMinX(bounds),
                maxX: Utils.frameGetMaxX(bounds),
                minY: Utils.frameGetMinY(bounds),
                maxY: Utils.frameGetMaxY(bounds)
            },
            constraints.maxX -= this.layer.width,
            constraints.maxY -= this.layer.height,
            constraints) : constraints = {
                minX: Infinity,
                maxX: Infinity,
                minY: Infinity,
                maxY: Infinity
            }
        }
        ,
        LayerDraggable.prototype._constrainPosition = function(proposedPoint, bounds, scale) {
            var maxX, maxY, minX, minY, point, ref;
            return ref = this._calculateConstraints(this._constraints),
            minX = ref.minX,
            maxX = ref.maxX,
            minY = ref.minY,
            maxY = ref.maxY,
            point = this.overdrag ? {
                x: this._clampAndScale(proposedPoint.x, minX, maxX, scale),
                y: this._clampAndScale(proposedPoint.y, minY, maxY, scale)
            } : {
                x: Utils.clamp(proposedPoint.x, minX, maxX),
                y: Utils.clamp(proposedPoint.y, minY, maxY)
            },
            0 !== this.speedX && this.horizontal !== !1 || (point.x = proposedPoint.x),
            0 !== this.speedY && this.vertical !== !1 || (point.y = proposedPoint.y),
            point
        }
        ,
        LayerDraggable.define("velocity", {
            get: function() {
                return this.isAnimating ? this._calculateSimulationVelocity() : this._eventBuffer.velocity
            }
        }),
        LayerDraggable.define("angle", {
            get: function() {
                return this._eventBuffer.angle
            }
        }),
        LayerDraggable.define("direction", {
            get: function() {
                var delta, ref, velocity;
                return velocity = this.velocity,
                0 === velocity.x && 0 === velocity.y ? (delta = null != (ref = this._lastEvent) ? ref.delta : void 0,
                delta ? Math.abs(delta.x) > Math.abs(delta.y) ? delta.x > 0 ? "right" : "left" : delta.y > 0 ? "down" : "up" : null) : Math.abs(velocity.x) > Math.abs(velocity.y) ? velocity.x > 0 ? "right" : "left" : velocity.y > 0 ? "down" : "up"
            }
        }),
        LayerDraggable.prototype.calculateVelocity = function() {
            return this.velocity
        }
        ,
        LayerDraggable.prototype._calculateSimulationVelocity = function() {
            var velocity, xFinished, yFinished;
            return xFinished = this._simulation.x.finished(),
            yFinished = this._simulation.y.finished(),
            velocity = {
                x: 0,
                y: 0
            },
            xFinished || (velocity.x = this._simulation.x.simulator.state.v / this.momentumVelocityMultiplier),
            yFinished || (velocity.y = this._simulation.y.simulator.state.v / this.momentumVelocityMultiplier),
            velocity
        }
        ,
        LayerDraggable.prototype.emit = function(eventName, event) {
            return this.layer.emit(eventName, event),
            LayerDraggable.__super__.emit.call(this, eventName, event)
        }
        ,
        LayerDraggable.prototype._updatedirectionLock = function(correctedDelta) {
            if (this._directionLockEnabledX = Math.abs(correctedDelta.y) > this.directionLockThreshold.y,
            this._directionLockEnabledY = Math.abs(correctedDelta.x) > this.directionLockThreshold.x,
            this._directionLockEnabledX || this._directionLockEnabledY)
                return this.emit(Events.DirectionLockStart, {
                    x: this._directionLockEnabledX,
                    y: this._directionLockEnabledY
                })
        }
        ,
        LayerDraggable.prototype._resetdirectionLock = function() {
            return this._directionLockEnabledX = !1,
            this._directionLockEnabledY = !1
        }
        ,
        LayerDraggable.prototype._setupSimulation = function() {
            if (!this._simulation)
                return this._simulation = {
                    x: this._setupSimulationForAxis("x"),
                    y: this._setupSimulationForAxis("y")
                },
                this._updateSimulationConstraints(this.constraints)
        }
        ,
        LayerDraggable.prototype._setupSimulationForAxis = function(axis) {
            var properties, simulation;
            return properties = {},
            properties[axis] = !0,
            simulation = new Simulation({
                layer: this.layer,
                properties: properties,
                model: "inertial-scroll",
                modelOptions: {
                    momentum: this.momentumOptions,
                    bounce: this.bounceOptions
                }
            }),
            simulation.on(Events.SimulationStep, function(_this) {
                return function(state) {
                    return _this._onSimulationStep(axis, state)
                }
            }(this)),
            simulation.on(Events.SimulationStop, function(_this) {
                return function(state) {
                    return _this._onSimulationStop(axis, state)
                }
            }(this)),
            simulation
        }
        ,
        LayerDraggable.prototype._updateSimulationConstraints = function(constraints) {
            var maxX, maxY, minX, minY, ref;
            if (this._simulation)
                return constraints ? (ref = this._calculateConstraints(this._constraints),
                minX = ref.minX,
                maxX = ref.maxX,
                minY = ref.minY,
                maxY = ref.maxY,
                this._simulation.x.simulator.options = {
                    min: minX,
                    max: maxX
                },
                this._simulation.y.simulator.options = {
                    min: minY,
                    max: maxY
                }) : (this._simulation.x.simulator.options = {
                    min: -Infinity,
                    max: Infinity
                },
                this._simulation.y.simulator.options = {
                    min: -Infinity,
                    max: Infinity
                })
        }
        ,
        LayerDraggable.prototype._onSimulationStep = function(axis, state) {
            var delta, maxX, maxY, minX, minY, ref, updatePoint;
            if (!("x" === axis && this.horizontal === !1 || "y" === axis && this.vertical === !1))
                return this.constraints ? this.bounce ? delta = state.x - this.layer[axis] : (ref = this._calculateConstraints(this._constraints),
                minX = ref.minX,
                maxX = ref.maxX,
                minY = ref.minY,
                maxY = ref.maxY,
                "x" === axis && (delta = Utils.clamp(state.x, minX, maxX) - this.layer[axis]),
                "y" === axis && (delta = Utils.clamp(state.x, minY, maxY) - this.layer[axis])) : delta = state.x - this.layer[axis],
                updatePoint = this.layer.point,
                "x" === axis && (updatePoint[axis] = updatePoint[axis] + delta),
                "y" === axis && (updatePoint[axis] = updatePoint[axis] + delta),
                this.updatePosition(updatePoint),
                this.layer[axis] = this.updatePosition(updatePoint)[axis],
                this.emit(Events.Move, this.layer.point)
        }
        ,
        LayerDraggable.prototype._onSimulationStop = function(axis, state) {
            if (("x" !== axis || this.horizontal !== !1) && ("y" !== axis || this.vertical !== !1) && this._simulation)
                return this.pixelAlign && (this.layer[axis] = parseInt(this.layer[axis])),
                this._simulation.x.finished() && this._simulation.y.finished() ? this._stopSimulation() : void 0
        }
        ,
        LayerDraggable.prototype._startSimulation = function() {
            var maxX, maxY, minX, minY, ref, startSimulationX, startSimulationY, velocity, velocityX, velocityY;
            if ((this.momentum || this.bounce) && !(this.isBeyondConstraints === !1 && this.momentum === !1 || this.isBeyondConstraints === !1 && this.isDragging === !1 || (ref = this._calculateConstraints(this._constraints),
            minX = ref.minX,
            maxX = ref.maxX,
            minY = ref.minY,
            maxY = ref.maxY,
            startSimulationX = this.overdrag === !0 || this.layer.x > minX && this.layer.x < maxX,
            startSimulationY = this.overdrag === !0 || this.layer.y > minY && this.layer.y < maxY,
            startSimulationX === startSimulationY && startSimulationY === !1)))
                return velocity = this.velocity,
                velocityX = velocity.x * this.momentumVelocityMultiplier * this.speedX * (1 / this.layer.canvasScaleX()) * this.layer.scaleX * this.layer.scale,
                velocityY = velocity.y * this.momentumVelocityMultiplier * this.speedY * (1 / this.layer.canvasScaleY()) * this.layer.scaleY * this.layer.scale,
                this._setupSimulation(),
                this._isAnimating = !0,
                this._isMoving = !0,
                this._simulation.x.simulator.setState({
                    x: this.layer.x,
                    v: velocityX
                }),
                startSimulationX && this._simulation.x.start(),
                this._simulation.y.simulator.setState({
                    x: this.layer.y,
                    v: velocityY
                }),
                startSimulationY && this._simulation.y.start(),
                this.emit(Events.DragAnimationStart)
        }
        ,
        LayerDraggable.prototype._stopSimulation = function() {
            var ref, ref1;
            if (this._isMoving && this.emit(Events.Move, this.layer.point),
            this._isAnimating = !1,
            this._isMoving = !1,
            this._simulation)
                return null != (ref = this._simulation) && ref.x.stop(),
                null != (ref1 = this._simulation) && ref1.y.stop(),
                this._simulation = null,
                this.emit(Events.DragAnimationEnd)
        }
        ,
        LayerDraggable.prototype.animateStop = function() {
            return this._stopSimulation()
        }
        ,
        LayerDraggable.prototype.onMove = function(cb) {
            return this.on(Events.Move, cb)
        }
        ,
        LayerDraggable.prototype.onDragStart = function(cb) {
            return this.on(Events.DragStart, cb)
        }
        ,
        LayerDraggable.prototype.onDragWillMove = function(cb) {
            return this.on(Events.DragWillMove, cb)
        }
        ,
        LayerDraggable.prototype.onDragMove = function(cb) {
            return this.on(Events.DragMove, cb)
        }
        ,
        LayerDraggable.prototype.onDragDidMove = function(cb) {
            return this.on(Events.DragDidMove, cb)
        }
        ,
        LayerDraggable.prototype.onDrag = function(cb) {
            return this.on(Events.Drag, cb)
        }
        ,
        LayerDraggable.prototype.onDragEnd = function(cb) {
            return this.on(Events.DragEnd, cb)
        }
        ,
        LayerDraggable.prototype.onDragAnimationStart = function(cb) {
            return this.on(Events.DragAnimationStart, cb)
        }
        ,
        LayerDraggable.prototype.onDragAnimationEnd = function(cb) {
            return this.on(Events.DragAnimationEnd, cb)
        }
        ,
        LayerDraggable.prototype.onDirectionLockStart = function(cb) {
            return this.on(Events.DirectionLockStart, cb)
        }
        ,
        LayerDraggable
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Config, Defaults, Events, FrictionSimulator, MomentumBounceSimulator, SimulatorClasses, SpringSimulator, Utils, _, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Config = __webpack_require__(14).Config,
    Defaults = __webpack_require__(17).Defaults,
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    SpringSimulator = __webpack_require__(30).SpringSimulator,
    FrictionSimulator = __webpack_require__(32).FrictionSimulator,
    MomentumBounceSimulator = __webpack_require__(33).MomentumBounceSimulator,
    Events.SimulationStart = "simulationStart",
    Events.SimulationStep = "simulationStep",
    Events.SimulationStop = "simulationStop",
    SimulatorClasses = {
        spring: SpringSimulator,
        friction: FrictionSimulator,
        "inertial-scroll": MomentumBounceSimulator
    },
    exports.Simulation = function(superClass) {
        function Simulation(options) {
            var SimulatorClass;
            null == options && (options = {}),
            this._update = bind(this._update, this),
            this._start = bind(this._start, this),
            this.start = bind(this.start, this),
            Simulation.__super__.constructor.call(this, options),
            this.options = _.defaults(options, {
                layer: null,
                properties: {},
                model: "spring",
                modelOptions: {},
                delay: 0,
                debug: !1
            }),
            this.layer = this.options.layer,
            this.properties = this.options.properties,
            this._running = !1,
            SimulatorClass = SimulatorClasses[this.options.model] || SpringSimulator,
            this._simulator = new SimulatorClass(this.options.modelOptions)
        }
        return extend(Simulation, superClass),
        Simulation.prototype.animatingProperties = function() {
            return _.keys(this.properties)
        }
        ,
        Simulation.prototype.start = function() {
            var animatingProperties, animation, property, ref;
            null === this.layer && console.error("Simulation: missing layer"),
            this.options.debug && console.log("Simulation.start " + this._simulator.constructor.name, this.options.modelOptions),
            animatingProperties = this.animatingProperties(),
            ref = this.layer.animatingProperties();
            for (property in ref)
                animation = ref[property],
                indexOf.call(animatingProperties, property) >= 0 && animation.stop();
            return this.options.delay ? Utils.delay(this.options.delay, this._start) : this._start(),
            !0
        }
        ,
        Simulation.prototype.stop = function(emit) {
            if (null == emit && (emit = !0),
            this._running)
                return this._running = !1,
                this.layer.context.removeAnimation(this),
                emit && this.emit(Events.SimulationStop),
                Framer.Loop.off("update", this._update)
        }
        ,
        Simulation.prototype.emit = function(event) {
            return Simulation.__super__.emit.apply(this, arguments),
            this.layer.emit(event, this)
        }
        ,
        Simulation.prototype._start = function() {
            if (!this._running)
                return this._running = !0,
                this.layer.context.addAnimation(this),
                this.emit(Events.SimulationStart),
                Framer.Loop.on("update", this._update)
        }
        ,
        Simulation.prototype._update = function(delta) {
            var emit, result;
            return this._simulator.finished() ? (this.stop(emit = !1),
            this.emit("end"),
            this.emit(Events.SimulationStop)) : (result = this._simulator.next(delta),
            this.emit(Events.SimulationStep, result, delta))
        }
        ,
        Simulation.define("simulator", {
            get: function() {
                return this._simulator
            }
        }),
        Simulation.prototype.finished = function() {
            return this._simulator.finished()
        }
        ,
        Simulation
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var Defaults, Integrator, Simulator, Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    Defaults = __webpack_require__(17).Defaults,
    Simulator = __webpack_require__(31).Simulator,
    Integrator = __webpack_require__(23).Integrator,
    exports.SpringSimulator = function(superClass) {
        function SpringSimulator() {
            return this.finished = bind(this.finished, this),
            SpringSimulator.__super__.constructor.apply(this, arguments)
        }
        return extend(SpringSimulator, superClass),
        SpringSimulator.prototype.setup = function(options) {
            return this.options = Defaults.getDefaults("SpringSimulator", options),
            this.options = _.defaults(options, {
                velocity: 0,
                position: 0,
                offset: 0
            }),
            this._state = {
                x: this.options.position,
                v: this.options.velocity
            },
            this._integrator = new Integrator(function(_this) {
                return function(state) {
                    return -_this.options.tension * state.x - _this.options.friction * state.v
                }
            }(this))
        }
        ,
        SpringSimulator.prototype.next = function(delta) {
            return this._state = this._integrator.integrateState(this._state, delta),
            this.getState()
        }
        ,
        SpringSimulator.prototype.finished = function() {
            var positionNearZero, velocityNearZero;
            return positionNearZero = Math.abs(this._state.x) < this.options.tolerance,
            velocityNearZero = Math.abs(this._state.v) < this.options.tolerance,
            positionNearZero && velocityNearZero
        }
        ,
        SpringSimulator.prototype.setState = function(state) {
            return this._state = {
                x: state.x - this.options.offset,
                v: state.v
            }
        }
        ,
        SpringSimulator.prototype.getState = function() {
            var state;
            return state = {
                x: this._state.x + this.options.offset,
                v: this._state.v
            }
        }
        ,
        SpringSimulator
    }(Simulator)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Config, Utils, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    _ = __webpack_require__(1)._,
    Config = __webpack_require__(14).Config,
    BaseClass = __webpack_require__(6).BaseClass,
    exports.Simulator = function(superClass) {
        function Simulator(options) {
            null == options && (options = {}),
            this._state = {
                x: 0,
                v: 0
            },
            this.options = null,
            this.setup(options)
        }
        return extend(Simulator, superClass),
        Simulator.define("state", {
            get: function() {
                return _.clone(this._state)
            },
            set: function(state) {
                return this._state = _.clone(state)
            }
        }),
        Simulator.prototype.setup = function(options) {
            throw Error("Not implemented")
        }
        ,
        Simulator.prototype.next = function(delta) {
            throw Error("Not implemented")
        }
        ,
        Simulator.prototype.finished = function() {
            throw Error("Not implemented")
        }
        ,
        Simulator.prototype.setState = function(state) {
            return this._state = state
        }
        ,
        Simulator
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var Defaults, Integrator, Simulator, Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    Defaults = __webpack_require__(17).Defaults,
    Simulator = __webpack_require__(31).Simulator,
    Integrator = __webpack_require__(23).Integrator,
    exports.FrictionSimulator = function(superClass) {
        function FrictionSimulator() {
            return this.finished = bind(this.finished, this),
            FrictionSimulator.__super__.constructor.apply(this, arguments)
        }
        return extend(FrictionSimulator, superClass),
        FrictionSimulator.prototype.setup = function(options) {
            return this.options = Defaults.getDefaults("FrictionSimulator", options),
            this.options = _.defaults(options, {
                velocity: 0,
                position: 0
            }),
            this._state = {
                x: this.options.position,
                v: this.options.velocity
            },
            this._integrator = new Integrator(function(_this) {
                return function(state) {
                    return -(_this.options.friction * state.v)
                }
            }(this))
        }
        ,
        FrictionSimulator.prototype.next = function(delta) {
            return this._state = this._integrator.integrateState(this._state, delta),
            this._state
        }
        ,
        FrictionSimulator.prototype.finished = function() {
            return Math.abs(this._state.v) < this.options.tolerance
        }
        ,
        FrictionSimulator
    }(Simulator)
}
, function(module, exports, __webpack_require__) {
    var Defaults, FrictionSimulator, Simulator, SpringSimulator, Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    Defaults = __webpack_require__(17).Defaults,
    Simulator = __webpack_require__(31).Simulator,
    SpringSimulator = __webpack_require__(30).SpringSimulator,
    FrictionSimulator = __webpack_require__(32).FrictionSimulator,
    exports.MomentumBounceSimulator = function(superClass) {
        function MomentumBounceSimulator() {
            return this.finished = bind(this.finished, this),
            MomentumBounceSimulator.__super__.constructor.apply(this, arguments)
        }
        return extend(MomentumBounceSimulator, superClass),
        MomentumBounceSimulator.prototype.setup = function(options) {
            return this.options = Defaults.getDefaults("MomentumBounceSimulator", options),
            this.options = _.defaults(options, {
                velocity: 0,
                position: 0,
                min: 0,
                max: 0
            }),
            this._frictionSimulator = new FrictionSimulator({
                friction: this.options.momentum.friction,
                tolerance: this.options.momentum.tolerance,
                velocity: this.options.velocity,
                position: this.options.position
            }),
            this._springSimulator = new SpringSimulator({
                tension: this.options.bounce.tension,
                friction: this.options.bounce.friction,
                tolerance: this.options.bounce.tolerance,
                velocity: this.options.velocity,
                position: this.options.position
            }),
            this._state = {
                x: this.options.position,
                v: this.options.velocity
            },
            this._useSpring = !1
        }
        ,
        MomentumBounceSimulator.prototype.next = function(delta) {
            return this._useSpring ? this._state = this._springSimulator.next(delta) : (this._state = this._frictionSimulator.next(delta),
            this._tryTransitionToSpring(this._state)),
            this._state
        }
        ,
        MomentumBounceSimulator.prototype.finished = function() {
            return this._useSpring ? this._springSimulator.finished() : this._frictionSimulator.finished()
        }
        ,
        MomentumBounceSimulator.prototype.setState = function(state) {
            var bound;
            return this._state = {
                x: state.x,
                v: state.v
            },
            this._frictionSimulator.setState(this._state),
            this._isValidState() ? this._tryTransitionToSpring() : (this._state.x <= this.options.min && (bound = this.options.min),
            this._state.x >= this.options.max && (bound = this.options.max),
            this._transitionToSpring(bound))
        }
        ,
        MomentumBounceSimulator.prototype._tryTransitionToSpring = function(force) {
            var aboveMaxWithVelocity, belowMinWithVelocity, bound;
            return belowMinWithVelocity = this._state.x < this.options.min && this._state.v <= 0,
            aboveMaxWithVelocity = this._state.x > this.options.max && this._state.v >= 0,
            belowMinWithVelocity || aboveMaxWithVelocity ? (belowMinWithVelocity && (bound = this.options.min),
            aboveMaxWithVelocity && (bound = this.options.max),
            this._transitionToSpring(bound)) : this._useSpring = !1
        }
        ,
        MomentumBounceSimulator.prototype._transitionToSpring = function(bound) {
            return this._useSpring = !0,
            this._springSimulator.options.offset = bound,
            this._springSimulator.setState(this._state)
        }
        ,
        MomentumBounceSimulator.prototype._isValidState = function() {
            var aboveMaxTravelingBack, belowMinTravelingBack, bound, check, friction, solution;
            return belowMinTravelingBack = this._state.x < this.options.min && this._state.v > 0,
            aboveMaxTravelingBack = this._state.x > this.options.max && this._state.v < 0,
            check = !1,
            belowMinTravelingBack ? (bound = this.options.min,
            check = !0) : aboveMaxTravelingBack && (bound = this.options.max,
            check = !0),
            !check || (friction = this._frictionSimulator.options.friction,
            solution = 1 - friction * (bound - this._state.x) / this._state.v,
            solution > 0)
        }
        ,
        MomentumBounceSimulator
    }(Simulator)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Events, Utils, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    Events.EventBufferReset = "eventbufferreset",
    Events.EventBufferUpdated = "eventbufferupdated",
    exports.EventBuffer = function(superClass) {
        function EventBuffer(options) {
            null == options && (options = {}),
            this.options = _.defaults(options, {
                velocityTimeout: 100
            }),
            this._events = []
        }
        return extend(EventBuffer, superClass),
        EventBuffer.prototype.push = function(event) {
            return this._events.push(event),
            this.emit(Events.EventBufferUpdated, event)
        }
        ,
        EventBuffer.prototype.reset = function() {
            return this._events.length = 0,
            this.emit(Events.EventBufferReset)
        }
        ,
        EventBuffer.define("length", {
            get: function() {
                return this._events.length
            }
        }),
        EventBuffer.define("first", {
            get: function() {
                return this._events[0]
            }
        }),
        EventBuffer.define("offset", {
            get: function() {
                var current, first, offset;
                return events.length < 2 ? {
                    x: 0,
                    y: 0
                } : (current = events[events.length - 1],
                first = events[0],
                offset = {
                    x: current.x - first.x,
                    y: current.y - first.y
                })
            }
        }),
        EventBuffer.define("events", {
            get: function() {
                var timeout;
                return timeout = Date.now() - this.options.velocityTimeout,
                _.filter(this._events, function(event) {
                    return event.t > timeout
                })
            }
        }),
        EventBuffer.define("angle", {
            get: function() {
                var events, p1, p2;
                return events = this.events,
                events.length < 2 ? 0 : (p1 = events[0],
                p2 = events[1],
                180 * Math.atan2(p2.y - p1.y, p2.x - p1.x) / Math.PI)
            }
        }),
        EventBuffer.define("velocity", {
            get: function() {
                var current, events, first, time, velocity;
                return events = this.events,
                events.length < 2 ? {
                    x: 0,
                    y: 0
                } : (current = events[events.length - 1],
                first = events[0],
                time = current.t - first.t,
                velocity = {
                    x: (current.x - first.x) / time,
                    y: (current.y - first.y) / time
                },
                Infinity === velocity.x && (velocity.x = 0),
                Infinity === velocity.y && (velocity.y = 0),
                velocity)
            }
        }),
        EventBuffer
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Events, Gestures, Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    Gestures = __webpack_require__(16).Gestures,
    Events.PinchStart = "pinchstart",
    Events.Pinch = "pinch",
    Events.PinchEnd = "pinchend",
    Events.RotateStart = "rotatestart",
    Events.Rotate = "rotate",
    Events.RotateEnd = "rotateend",
    Events.ScaleStart = "scalestart",
    Events.Scale = "scale",
    Events.ScaleEnd = "scaleend",
    exports.LayerPinchable = function(superClass) {
        function LayerPinchable(layer) {
            this.layer = layer,
            this._pinchEnd = bind(this._pinchEnd, this),
            this._pinch = bind(this._pinch, this),
            this._pinchStart = bind(this._pinchStart, this),
            this._centerOrigin = bind(this._centerOrigin, this),
            LayerPinchable.__super__.constructor.apply(this, arguments),
            this._attach()
        }
        return extend(LayerPinchable, superClass),
        LayerPinchable.define("enabled", LayerPinchable.simpleProperty("enabled", !0)),
        LayerPinchable.define("threshold", LayerPinchable.simpleProperty("threshold", 0)),
        LayerPinchable.define("centerOrigin", LayerPinchable.simpleProperty("centerOrigin", !0)),
        LayerPinchable.define("scale", LayerPinchable.simpleProperty("scale", !0)),
        LayerPinchable.define("scaleIncrements", LayerPinchable.simpleProperty("scaleIncrements", 0)),
        LayerPinchable.define("minScale", LayerPinchable.simpleProperty("minScale", 0)),
        LayerPinchable.define("maxScale", LayerPinchable.simpleProperty("maxScale", Number.MAX_VALUE)),
        LayerPinchable.define("scaleFactor", LayerPinchable.simpleProperty("scaleFactor", 1)),
        LayerPinchable.define("rotate", LayerPinchable.simpleProperty("rotate", !0)),
        LayerPinchable.define("rotateIncrements", LayerPinchable.simpleProperty("rotateIncrements", 0)),
        LayerPinchable.define("rotateMin", LayerPinchable.simpleProperty("rotateMin", 0)),
        LayerPinchable.define("rotateMax", LayerPinchable.simpleProperty("rotateMax", 0)),
        LayerPinchable.define("rotateFactor", LayerPinchable.simpleProperty("rotateFactor", 1)),
        LayerPinchable.prototype._attach = function() {
            return this.layer.on(Gestures.PinchStart, this._pinchStart),
            this.layer.on(Gestures.Pinch, this._pinch),
            this.layer.on(Gestures.PinchEnd, this._pinchEnd),
            this.layer.on(Gestures.TapStart, this._tapStart)
        }
        ,
        LayerPinchable.prototype._reset = function() {
            return this._scaleStart = null,
            this._rotationStart = null,
            this._rotationOffset = null
        }
        ,
        LayerPinchable.prototype._tapStart = function(event) {}
        ,
        LayerPinchable.prototype._centerOrigin = function(event) {
            var originDelta, pinchLocation, topInSuperAfter, topInSuperBefore;
            return topInSuperBefore = Utils.convertPoint({}, this.layer, this.layer.superLayer),
            pinchLocation = Utils.convertPointFromContext(event.touchCenter, this.layer, !0, !0),
            this.layer.originX = pinchLocation.x / this.layer.width,
            this.layer.originY = pinchLocation.y / this.layer.height,
            topInSuperAfter = Utils.convertPoint({}, this.layer, this.layer.superLayer),
            originDelta = {
                x: topInSuperAfter.x - topInSuperBefore.x,
                y: topInSuperAfter.y - topInSuperBefore.y
            },
            this.layer.x -= originDelta.x,
            this.layer.y -= originDelta.y
        }
        ,
        LayerPinchable.prototype._pinchStart = function(event) {
            return this._reset(),
            this.centerOrigin && this._centerOrigin(event),
            this.normalizeRotation = Utils.rotationNormalizer()
        }
        ,
        LayerPinchable.prototype._pinch = function(event) {
            var pointA, pointB, rotation, scale;
            if (2 === event.fingers && this.enabled && (pointA = {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            },
            pointB = {
                x: event.touches[1].pageX,
                y: event.touches[1].pageY
            },
            Utils.pointTotal(Utils.pointAbs(Utils.pointSubtract(pointA, pointB))) > this.threshold))
                return this.scale && (null == this._scaleStart && (this._scaleStart = this.layer.scale),
                scale = ((event.scale - 1) * this.scaleFactor + 1) * this._scaleStart,
                this.minScale && this.maxScale ? scale = Utils.clamp(scale, this.minScale, this.maxScale) : this.minScale ? scale = Utils.clamp(scale, this.minScale, 1e6) : this.maxScale && (scale = Utils.clamp(scale, 1e-5, this.maxScale)),
                this.scaleIncrements && (scale = Utils.nearestIncrement(scale, this.scaleIncrements)),
                this.layer.scale = scale,
                this.emit(Events.Scale, event)),
                this.rotate ? (null == this._rotationStart && (this._rotationStart = this.layer.rotation),
                null == this._rotationOffset && (this._rotationOffset = event.rotation),
                rotation = event.rotation - this._rotationOffset + this._rotationStart,
                rotation *= this.rotateFactor,
                rotation = this.normalizeRotation(rotation),
                this.rotateMin && this.rotateMax && (rotation = Utils.clamp(rotation, this.rotateMin, this.rotateMax)),
                this.rotateIncrements && (rotation = Utils.nearestIncrement(rotation, this.rotateIncrements)),
                this.layer.rotation = rotation) : void 0
        }
        ,
        LayerPinchable.prototype._pinchEnd = function(event) {
            return this._reset()
        }
        ,
        LayerPinchable
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var Layer, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Layer = __webpack_require__(13).Layer,
    exports.BackgroundLayer = function(superClass) {
        function BackgroundLayer(options) {
            var ref;
            null == options && (options = {}),
            this.layout = bind(this.layout, this),
            null == options.backgroundColor && (options.backgroundColor = "#fff"),
            console.warn('BackgroundLayer is deprecated, please use\n\nScreen.backgroundColor = "' + options.backgroundColor + '"\n\ninstead.'),
            BackgroundLayer.__super__.constructor.call(this, options),
            this.sendToBack(),
            this.layout(),
            this._context.domEventManager.wrap(window).addEventListener("resize", this.layout),
            null != (ref = Framer.Device) && ref.on("change:orientation", this.layout)
        }
        return extend(BackgroundLayer, superClass),
        BackgroundLayer.prototype.layout = function() {
            return this.parent ? this.frame = this.parent.frame : this.frame = this._context.frame
        }
        ,
        BackgroundLayer
    }(Layer)
}
, function(module, exports, __webpack_require__) {
    var Layer, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Layer = __webpack_require__(13).Layer,
    exports.VideoLayer = function(superClass) {
        function VideoLayer(options) {
            null == options && (options = {}),
            this.player = document.createElement("video"),
            this.player.setAttribute("webkit-playsinline", "true"),
            this.player.setAttribute("playsinline", ""),
            this.player.style.width = "100%",
            this.player.style.height = "100%",
            VideoLayer.__super__.constructor.call(this, options),
            this.player.on = this._context.domEventManager.wrap(this.player).addEventListener,
            this.player.off = this._context.domEventManager.wrap(this.player).removeEventListener,
            this.video = options.video,
            this._element.appendChild(this.player)
        }
        return extend(VideoLayer, superClass),
        VideoLayer.define("video", {
            get: function() {
                return this.player.src
            },
            set: function(video) {
                return this.player.src = video
            }
        }),
        VideoLayer
    }(Layer)
}
, function(module, exports, __webpack_require__) {
    var Layer, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    Layer = __webpack_require__(13).Layer,
    exports.SVGLayer = function(superClass) {
        function SVGLayer(options) {
            null == options && (options = {}),
            SVGLayer.__super__.constructor.call(this, _.defaults(options, {
                backgroundColor: null
            })),
            this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            this.svg.setAttribute("width", "100%"),
            this.svg.setAttribute("height", "100%"),
            this.svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink")
        }
        return extend(SVGLayer, superClass),
        SVGLayer.prototype.addShape = function(type) {
            var shape;
            return shape = document.createElementNS("http://www.w3.org/2000/svg", "circle"),
            this.svg.appendChild(shape),
            shape
        }
        ,
        SVGLayer
    }(Layer)
}
, function(module, exports, __webpack_require__) {
    var AnimationGroup, AnimationStateGroup, BaseClass, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, slice = [].slice, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    _ = __webpack_require__(1)._,
    BaseClass = __webpack_require__(6).BaseClass,
    AnimationGroup = function(superClass) {
        function AnimationGroup() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            AnimationGroup.__super__.constructor.apply(this, arguments),
            this._animations = _.flatten(args),
            this.stopAnimations = !0,
            this.stop()
        }
        return extend(AnimationGroup, superClass),
        AnimationGroup.prototype.start = function() {
            return this._start(this._animations)
        }
        ,
        AnimationGroup.prototype.stop = function() {
            return this._stop(),
            this._started = [],
            this._halted = [],
            this._stopped = [],
            this._ended = []
        }
        ,
        AnimationGroup.prototype._start = function(animations) {
            return this.stop(),
            this._onStart(),
            animations.map(function(_this) {
                return function(animation) {
                    return _this._started.push(animation),
                    animation.onAnimationHalt(function() {
                        if (_this._halted.push(animation),
                        !(_this._halted.length > 1))
                            return _this._stop(),
                            _this._onHalt()
                    }),
                    animation.onAnimationStop(function() {
                        if (_this._stopped.push(animation),
                        _this._stopped.length === _this._started.length)
                            return _this._onStop()
                    }),
                    animation.onAnimationEnd(function() {
                        if (_this._ended.push(animation),
                        _this._ended.length === _this._started.length)
                            return _this._onEnd()
                    }),
                    animation.start()
                }
            }(this))
        }
        ,
        AnimationGroup.prototype._stop = function() {
            if (this._started && this.stopAnimations === !0)
                return this._started.map(function(a) {
                    if (a.isAnimating)
                        return a.stop()
                })
        }
        ,
        AnimationGroup.prototype._onStart = function() {
            return this.emit(Events.AnimationStart)
        }
        ,
        AnimationGroup.prototype._onHalt = function() {
            return this.emit(Events.AnimationHalt)
        }
        ,
        AnimationGroup.prototype._onStop = function() {
            return this.emit(Events.AnimationStop)
        }
        ,
        AnimationGroup.prototype._onEnd = function() {
            return this.emit(Events.AnimationEnd)
        }
        ,
        AnimationGroup.prototype.onAnimationStart = function(cb) {
            return this.on(Events.AnimationStart, cb)
        }
        ,
        AnimationGroup.prototype.onAnimationHalt = function(cb) {
            return this.on(Events.AnimationHalt, cb)
        }
        ,
        AnimationGroup.prototype.onAnimationStop = function(cb) {
            return this.on(Events.AnimationStop, cb)
        }
        ,
        AnimationGroup.prototype.onAnimationEnd = function(cb) {
            return this.on(Events.AnimationEnd, cb)
        }
        ,
        AnimationGroup.prototype.onStart = function(cb) {
            return this.onAnimationStart(cb)
        }
        ,
        AnimationGroup.prototype.onHalt = function(cb) {
            return this.onAnimationHalt(cb)
        }
        ,
        AnimationGroup.prototype.onStop = function(cb) {
            return this.onAnimationStop(cb)
        }
        ,
        AnimationGroup.prototype.onEnd = function(cb) {
            return this.onAnimationEnd(cb)
        }
        ,
        AnimationGroup
    }(BaseClass),
    AnimationStateGroup = function(superClass) {
        function AnimationStateGroup() {
            var layers;
            layers = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            AnimationStateGroup.__super__.constructor.apply(this, arguments),
            this._layers = _.flatten(layers),
            this._state = "default"
        }
        return extend(AnimationStateGroup, superClass),
        AnimationStateGroup.prototype.animate = function(state) {
            var animations, i, layer, len, ref;
            for (animations = [],
            ref = this._layers,
            i = 0,
            len = ref.length; i < len; i++)
                layer = ref[i],
                layer.states[state] && animations.push(layer.animate(state, {
                    start: !1
                }));
            if (animations)
                return this._start(animations),
                this._state = state
        }
        ,
        AnimationStateGroup.define("state", {
            get: function() {
                return this._state
            }
        }),
        AnimationStateGroup.define("states", {
            get: function() {
                var i, j, layer, len, len1, ref, ref1, state, states;
                for (states = [],
                ref = this._layers,
                i = 0,
                len = ref.length; i < len; i++)
                    for (layer = ref[i],
                    ref1 = _.keys(layer.states),
                    j = 0,
                    len1 = ref1.length; j < len1; j++)
                        state = ref1[j],
                        indexOf.call(states, state) < 0 && states.push(state);
                return states
            }
        }),
        AnimationStateGroup.prototype.stateCycle = function() {
            var args, states;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            states = _.flatten(args),
            states.length || (states = this.states),
            this.animate(Utils.arrayNext(states, this.state))
        }
        ,
        AnimationStateGroup
    }(AnimationGroup),
    exports.AnimationGroup = AnimationGroup,
    exports.AnimationStateGroup = AnimationStateGroup
}
, function(module, exports) {
    var bottom, center, left, pixelRound, right, top, wrapper;
    pixelRound = parseInt,
    center = function(layer, property, offset) {
        var borderWidth, parent, x, y;
        return null == offset && (offset = 0),
        parent = Screen,
        layer.parent && (parent = layer.parent),
        borderWidth = parent.borderWidth,
        null == borderWidth && (borderWidth = 0),
        x = pixelRound(parent.width / 2 - layer.width / 2 - borderWidth + offset),
        y = pixelRound(parent.height / 2 - layer.height / 2 - borderWidth + offset),
        "x" === property ? x : "y" === property ? y : "point" === property ? {
            x: x,
            y: y
        } : 0
    }
    ,
    left = function(layer, property, offset) {
        var parent;
        if (null == offset && (offset = 0),
        "x" !== property)
            throw Error("Align.left only works for x");
        return parent = Screen,
        layer.parent && (parent = layer.parent),
        pixelRound(0 + offset)
    }
    ,
    right = function(layer, property, offset) {
        var borderWidth, parent;
        if (null == offset && (offset = 0),
        "x" !== property)
            throw Error("Align.right only works for x");
        return parent = Screen,
        layer.parent && (parent = layer.parent),
        borderWidth = parent.borderWidth,
        null == borderWidth && (borderWidth = 0),
        pixelRound(parent.width - 2 * borderWidth - layer.width + offset)
    }
    ,
    top = function(layer, property, offset) {
        var parent;
        if (null == offset && (offset = 0),
        "y" !== property)
            throw Error("Align.top only works for y");
        return parent = Screen,
        layer.parent && (parent = layer.parent),
        pixelRound(0 + offset)
    }
    ,
    bottom = function(layer, property, offset) {
        var borderWidth, parent;
        if (null == offset && (offset = 0),
        "y" !== property)
            throw Error("Align.bottom only works for y");
        return parent = Screen,
        layer.parent && (parent = layer.parent),
        borderWidth = parent.borderWidth,
        null == borderWidth && (borderWidth = 0),
        pixelRound(parent.height - 2 * borderWidth - layer.height + offset)
    }
    ,
    wrapper = function(f, name) {
        var align;
        return align = function(a, b) {
            return null == a || _.isNumber(a) ? function(l, p) {
                return f(l, p, a)
            }
            : f(a, b, 0)
        }
        ,
        align.toInspect = function() {
            return "Align." + name
        }
        ,
        align
    }
    ,
    exports.Align = {
        center: wrapper(center, "center"),
        left: wrapper(left, "left"),
        right: wrapper(right, "right"),
        top: wrapper(top, "top"),
        bottom: wrapper(bottom, "bottom")
    }
}
, function(module, exports, __webpack_require__) {
    var Context, Printer, Utils, _printer, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, slice = [].slice;
    Utils = __webpack_require__(4),
    Context = __webpack_require__(42).Context,
    Printer = function() {
        function Printer() {
            this.scrollToBottom = bind(this.scrollToBottom, this),
            this.print = bind(this.print, this),
            this.resize = bind(this.resize, this),
            this.createLayer = bind(this.createLayer, this),
            this._context = new Context({
                name: "PrintConsole"
            }),
            this._context.run(function(_this) {
                return function() {
                    return Events.wrap(window).addEventListener("resize", _this.resize)
                }
            }(this))
        }
        return Printer.prototype.createLayer = function() {
            return this._printLayer ? this._printLayer : (this._context.run(function(_this) {
                return function() {
                    return _this._container = new Layer({
                        backgroundColor: null
                    }),
                    _this._container.style.zIndex = 999,
                    _this._printLayer = new Layer({
                        parent: _this._container
                    }),
                    _this._printLayer.scrollVertical = !0,
                    _this._printLayer.ignoreEvents = !1,
                    _this._printLayer.html = "",
                    _this._printLayer.style = {
                        font: "12px/1.35em Menlo",
                        color: "rgba(0, 0, 0, .7)",
                        padding: "8px",
                        "padding-bottom": "30px",
                        "border-top": "1px solid #d9d9d9"
                    },
                    _this._printLayer.opacity = .9,
                    _this._printLayer.visible = !0,
                    _this._printLayer.backgroundColor = "white",
                    _this._closeButton = new Layer({
                        parent: _this._container,
                        html: '<svg><g stroke="#B8B8B8"><path d="M1,1 L8,8"></path><path d="M1,8 L8,1"></path></g></svg>',
                        y: 9,
                        width: 9,
                        height: 9,
                        backgroundColor: null
                    }),
                    _this._closeButton.style.cursor = "auto",
                    _this._closeButton.onClick(function() {
                        return _this.hide()
                    })
                }
            }(this)),
            this.resize(),
            this._printLayer)
        }
        ,
        Printer.prototype.resize = function() {
            if (this._printLayer)
                return this._container.width = window.innerWidth,
                this._container.height = 160,
                this._container.maxY = window.innerHeight,
                this._printLayer.size = this._container.size,
                this._closeButton.maxX = this._container.maxX - this._closeButton.y + 1
        }
        ,
        Printer.prototype.hide = function() {
            return this._context.visible = !1
        }
        ,
        Printer.prototype.print = function() {
            var args, printNode, printPrefix;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            this.createLayer(),
            this._context.visible = !0,
            printPrefix = "» ",
            printNode = document.createElement("div"),
            printNode.style["-webkit-user-select"] = "text",
            printNode.style.cursor = "auto",
            printNode.innerHTML = _.escape(printPrefix + args.map(function(obj) {
                return Utils.inspect(obj)
            }).join(", ")) + "<br>",
            this._printLayer._element.appendChild(printNode),
            this.scrollToBottom(),
            Utils.delay(0, this.scrollToBottom)
        }
        ,
        Printer.prototype.scrollToBottom = function() {
            if (this._printLayer)
                return this._printLayer._element.scrollTop = this._printLayer._element.scrollHeight
        }
        ,
        Printer
    }(),
    _printer = null,
    exports.print = function() {
        var args;
        return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
        null == _printer && (_printer = new Printer),
        _printer.print.apply(_printer, args)
    }
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Config, Contexts, DOMEventManager, Defaults, Utils, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    , slice = [].slice;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Config = __webpack_require__(14).Config,
    Defaults = __webpack_require__(17).Defaults,
    BaseClass = __webpack_require__(6).BaseClass,
    DOMEventManager = __webpack_require__(43).DOMEventManager,
    Contexts = [],
    exports.Context = function(superClass) {
        function Context(options) {
            if (null == options && (options = {}),
            options = Defaults.getDefaults("Context", options),
            Context.__super__.constructor.apply(this, arguments),
            !options.name)
                throw Error("Contexts need a name");
            this._parent = options.parent,
            this._name = options.name,
            this.perspective = options.perspective,
            this.perspectiveOriginX = options.perspectiveOriginX,
            this.perspectiveOriginY = options.perspectiveOriginY,
            this.reset(),
            options.hasOwnProperty("index") ? this.index = options.index : this.index = this.id,
            Contexts.push(this)
        }
        return extend(Context, superClass),
        Context.all = function() {
            return _.clone(Contexts)
        }
        ,
        Context.define("parent", {
            get: function() {
                return this._parent
            }
        }),
        Context.define("element", {
            get: function() {
                return this._element
            }
        }),
        Context.prototype.reset = function() {
            return this._createDOMEventManager(),
            this._createRootElement(),
            this.resetFrozenEvents(),
            this.resetLayers(),
            this.resetAnimations(),
            this.resetTimers(),
            this.resetIntervals(),
            this.emit("reset", this)
        }
        ,
        Context.prototype.destroy = function() {
            return this.reset(),
            this._destroyRootElement(),
            _.remove(Contexts, this)
        }
        ,
        Context.define("layers", {
            get: function() {
                return _.clone(this._layers)
            }
        }),
        Context.define("layerCounter", {
            get: function() {
                return this._layerCounter
            }
        }),
        Context.define("rootLayers", {
            get: function() {
                return _.filter(this._layers, function(layer) {
                    return null === layer.parent
                })
            }
        }),
        Context.define("visible", {
            get: function() {
                return this._visible || !0
            },
            set: function(value) {
                var ref;
                if (value !== this._visible)
                    return null != (ref = this._element) && (ref.style.visibility = value ? "visible" : "hidden"),
                    this._visible = value
            }
        }),
        Context.prototype.addLayer = function(layer) {
            if (!(indexOf.call(this._layers, layer) >= 0))
                return this._layerCounter++,
                this._layers.push(layer)
        }
        ,
        Context.prototype.removeLayer = function(layer) {
            return this._layers = _.without(this._layers, layer)
        }
        ,
        Context.prototype.resetLayers = function() {
            return this.resetGestures(),
            this._layers = [],
            this._layerCounter = 0
        }
        ,
        Context.prototype.layerForId = function(layerId) {
            var i, layer, len, ref;
            for (ref = this._layers,
            i = 0,
            len = ref.length; i < len; i++)
                if (layer = ref[i],
                layer.id === layerId)
                    return layer;
            return null
        }
        ,
        Context.prototype._layerForElement = function(element) {
            var i, layer, len, ref;
            for (ref = this._layers,
            i = 0,
            len = ref.length; i < len; i++)
                if (layer = ref[i],
                layer._element === element)
                    return layer;
            return null
        }
        ,
        Context.prototype.layerForElement = function(element) {
            var layer;
            return element ? (layer = this._layerForElement(element),
            layer ? layer : this.layerForElement(element.parentNode)) : null
        }
        ,
        Context.define("animations", {
            get: function() {
                return _.clone(this._animations)
            }
        }),
        Context.prototype.addAnimation = function(animation) {
            if (!(indexOf.call(this._animations, animation) >= 0))
                return this._animations.push(animation)
        }
        ,
        Context.prototype.removeAnimation = function(animation) {
            return this._animations = _.without(this._animations, animation)
        }
        ,
        Context.prototype.resetAnimations = function() {
            return this.stopAnimations(),
            this._animations = []
        }
        ,
        Context.prototype.stopAnimations = function() {
            if (this._animations)
                return this._animations.map(function(animation) {
                    return animation.stop(!0)
                })
        }
        ,
        Context.prototype.resetFrozenEvents = function() {
            return delete this._frozenEvents
        }
        ,
        Context.define("timers", {
            get: function() {
                return _.clone(this._timers)
            }
        }),
        Context.prototype.addTimer = function(timer) {
            if (!(indexOf.call(this._timers, timer) >= 0))
                return this._timers.push(timer)
        }
        ,
        Context.prototype.removeTimer = function(timer) {
            return window.clearTimeout(timer),
            this._timers = _.without(this._timers, timer)
        }
        ,
        Context.prototype.resetTimers = function() {
            return this._timers && this._timers.map(window.clearTimeout),
            this._timers = []
        }
        ,
        Context.define("intervals", {
            get: function() {
                return _.clone(this._intervals)
            }
        }),
        Context.prototype.addInterval = function(interval) {
            if (!(indexOf.call(this._intervals, interval) >= 0))
                return this._intervals.push(interval)
        }
        ,
        Context.prototype.removeInterval = function(interval) {
            return this._intervals = _.without(this._intervals, interval)
        }
        ,
        Context.prototype.resetIntervals = function() {
            return this._intervals && this._intervals.map(window.clearInterval),
            this._intervals = []
        }
        ,
        Context.prototype.resetGestures = function() {
            var i, layer, len, ref;
            if (this._layers)
                for (ref = this._layers,
                i = 0,
                len = ref.length; i < len; i++)
                    layer = ref[i],
                    layer._gestures && layer._gestures.destroy()
        }
        ,
        Context.prototype.run = function(fn) {
            var previousContext;
            return previousContext = Framer.CurrentContext,
            Framer.CurrentContext = this,
            fn(),
            Framer.CurrentContext = previousContext
        }
        ,
        Context.prototype.freeze = function() {
            var eventName, i, j, layer, layerId, layerListeners, len, len1, ref, ref1;
            if (null != this._frozenEvents)
                throw new Error("Context is already frozen");
            for (this._frozenEvents = {},
            ref = this._layers,
            i = 0,
            len = ref.length; i < len; i++) {
                for (layer = ref[i],
                layerListeners = {},
                ref1 = layer.listenerEvents(),
                j = 0,
                len1 = ref1.length; j < len1; j++)
                    eventName = ref1[j],
                    layerListeners[eventName] = layer.listeners(eventName);
                layer.removeAllListeners(),
                layerId = this._layers.indexOf(layer),
                this._frozenEvents[layerId] = layerListeners
            }
            return this.stopAnimations(),
            this.resetTimers(),
            this.resetIntervals()
        }
        ,
        Context.prototype.resume = function() {
            var eventName, events, i, layer, layerId, len, listener, listeners, ref;
            if (null == this._frozenEvents)
                throw new Error("Context is not frozen, cannot resume");
            ref = this._frozenEvents;
            for (layerId in ref) {
                events = ref[layerId],
                layer = this._layers[layerId];
                for (eventName in events)
                    for (listeners = events[eventName],
                    i = 0,
                    len = listeners.length; i < len; i++)
                        listener = listeners[i],
                        layer.on(eventName, listener)
            }
            return this.resetFrozenEvents()
        }
        ,
        Context.prototype._createDOMEventManager = function() {
            var ref;
            return null != (ref = this.domEventManager) && ref.reset(),
            this.domEventManager = new DOMEventManager
        }
        ,
        Context.prototype._createRootElement = function() {
            return this._destroyRootElement(),
            this._element = document.createElement("div"),
            this._element.id = "FramerContextRoot-" + this._name,
            this._element.classList.add("framerContext"),
            this._element.style.webkitPerspective = this.perspective,
            this._element.style.backgroundColor = this.backgroundColor,
            this.__pendingElementAppend = function(_this) {
                return function() {
                    var parentElement, ref;
                    return parentElement = null != (ref = _this._parent) ? ref._element : void 0,
                    null == parentElement && (parentElement = document.body),
                    parentElement.appendChild(_this._element)
                }
            }(this),
            Utils.domComplete(this.__pendingElementAppend)
        }
        ,
        Context.prototype._destroyRootElement = function() {
            var ref;
            return (null != (ref = this._element) ? ref.parentNode : void 0) && this._element.parentNode.removeChild(this._element),
            this.__pendingElementAppend && (Utils.domCompleteCancel(this.__pendingElementAppend),
            this.__pendingElementAppend = null),
            this._element = null
        }
        ,
        Context.define("width", {
            get: function() {
                return null != this.parent ? this.parent.width : window.innerWidth
            }
        }),
        Context.define("height", {
            get: function() {
                return null != this.parent ? this.parent.height : window.innerHeight
            }
        }),
        Context.define("frame", {
            get: function() {
                return {
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                }
            }
        }),
        Context.define("size", {
            get: function() {
                return _.pick(this.frame, ["width", "height"])
            }
        }),
        Context.define("point", {
            get: function() {
                return _.pick(this.frame, ["x", "y"])
            }
        }),
        Context.define("canvasFrame", {
            get: function() {
                return null == this.parent ? this.frame : this.parent.canvasFrame
            }
        }),
        Context.define("backgroundColor", {
            get: function() {
                return Color.isColor(this._backgroundColor) ? this._backgroundColor : "transparent"
            },
            set: function(value) {
                var ref;
                if (Color.isColor(value))
                    return this._backgroundColor = value,
                    null != (ref = this._element) ? ref.style.backgroundColor = new Color(value.toString()) : void 0
            }
        }),
        Context.define("perspective", {
            get: function() {
                return this._perspective
            },
            set: function(value) {
                var ref;
                if (_.isNumber(value))
                    return this._perspective = value,
                    null != (ref = this._element) ? ref.style.webkitPerspective = this._perspective : void 0
            }
        }),
        Context.prototype._updatePerspective = function() {
            var ref;
            return null != (ref = this._element) ? ref.style.webkitPerspectiveOrigin = 100 * this.perspectiveOriginX + "% " + 100 * this.perspectiveOriginY + "%" : void 0
        }
        ,
        Context.define("perspectiveOriginX", {
            get: function() {
                return _.isNumber(this._perspectiveOriginX) ? this._perspectiveOriginX : .5
            },
            set: function(value) {
                if (_.isNumber(value))
                    return this._perspectiveOriginX = value,
                    this._updatePerspective()
            }
        }),
        Context.define("perspectiveOriginY", {
            get: function() {
                return _.isNumber(this._perspectiveOriginY) ? this._perspectiveOriginY : .5
            },
            set: function(value) {
                if (_.isNumber(value))
                    return this._perspectiveOriginY = value,
                    this._updatePerspective()
            }
        }),
        Context.define("index", {
            get: function() {
                var ref;
                return (null != (ref = this._element) ? ref.style["z-index"] : void 0) || 0 || 0
            },
            set: function(value) {
                if (this._element)
                    return this._element.style["z-index"] = value
            }
        }),
        Context.prototype.ancestors = function() {
            var args, ref;
            return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
            (null != (ref = this._parent) ? ref.ancestors.apply(ref, args) : void 0) || []
        }
        ,
        Context.prototype.toInspect = function() {
            var round;
            return round = function(value) {
                return parseInt(value) === value ? parseInt(value) : Utils.round(value, 1)
            }
            ,
            "<" + this.constructor.name + " id:" + this.id + " name:" + this._name + " " + round(this.width) + "x" + round(this.height) + ">"
        }
        ,
        Context
    }(BaseClass)
}
, function(module, exports, __webpack_require__) {
    var DOMEventManagerElement, EventEmitter, EventManagerIdCounter, Utils, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    _ = __webpack_require__(1)._,
    EventEmitter = __webpack_require__(7).EventEmitter,
    Utils = __webpack_require__(4),
    EventManagerIdCounter = 0,
    DOMEventManagerElement = function(superClass) {
        function DOMEventManagerElement(element1) {
            this.element = element1
        }
        return extend(DOMEventManagerElement, superClass),
        DOMEventManagerElement.prototype.addListener = function(eventName, listener, capture) {
            return null == capture && (capture = !1),
            listener.capture = capture,
            DOMEventManagerElement.__super__.addListener.call(this, eventName, listener),
            this.element.addEventListener(eventName, listener, capture)
        }
        ,
        DOMEventManagerElement.prototype.removeListener = function(eventName, listener, capture) {
            return null == capture && (capture = !1),
            DOMEventManagerElement.__super__.removeListener.call(this, eventName, listener),
            this.element.removeEventListener(eventName, listener, listener.capture)
        }
        ,
        DOMEventManagerElement.prototype.addEventListener = DOMEventManagerElement.prototype.addListener,
        DOMEventManagerElement.prototype.removeEventListener = DOMEventManagerElement.prototype.removeListener,
        DOMEventManagerElement.prototype.on = DOMEventManagerElement.prototype.addListener,
        DOMEventManagerElement.prototype.off = DOMEventManagerElement.prototype.removeListener,
        DOMEventManagerElement
    }(EventEmitter),
    exports.DOMEventManager = function() {
        function DOMEventManager(element) {
            this.wrap = bind(this.wrap, this),
            this._elements = {}
        }
        return DOMEventManager.prototype.wrap = function(element) {
            return element._eventManagerId || (element._eventManagerId = EventManagerIdCounter++),
            this._elements[element._eventManagerId] || (this._elements[element._eventManagerId] = new DOMEventManagerElement(element)),
            this._elements[element._eventManagerId]
        }
        ,
        DOMEventManager.prototype.reset = function() {
            var element, elementEventManager, ref, results;
            ref = this._elements,
            results = [];
            for (element in ref)
                elementEventManager = ref[element],
                results.push(elementEventManager.removeAllListeners());
            return results
        }
        ,
        DOMEventManager
    }()
}
, function(module, exports, __webpack_require__) {
    var Defaults, EventMappers, Events, Layer, Utils, _, wrapComponent, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, slice = [].slice, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Layer = __webpack_require__(13).Layer,
    Events = __webpack_require__(15).Events,
    Defaults = __webpack_require__(17).Defaults,
    Events.ScrollStart = "scrollstart",
    Events.Scroll = "scroll",
    Events.ScrollMove = Events.Scroll,
    Events.ScrollEnd = "scrollend",
    Events.ScrollAnimationDidStart = "scrollanimationdidstart",
    Events.ScrollAnimationDidEnd = "scrollanimationdidend",
    EventMappers = {},
    EventMappers[Events.Move] = Events.Move,
    EventMappers[Events.ScrollStart] = Events.DragStart,
    EventMappers[Events.ScrollMove] = Events.DragMove,
    EventMappers[Events.ScrollEnd] = Events.DragEnd,
    EventMappers[Events.ScrollAnimationDidStart] = Events.DragAnimationStart,
    EventMappers[Events.ScrollAnimationDidEnd] = Events.DragAnimationEnd,
    EventMappers[Events.DirectionLockStart] = Events.DirectionLockStart,
    exports.ScrollComponent = function(superClass) {
        function ScrollComponent(options) {
            null == options && (options = {}),
            this._onMouseWheel = bind(this._onMouseWheel, this),
            this._onAnimationStop = bind(this._onAnimationStop, this),
            this._onAnimationStep = bind(this._onAnimationStep, this),
            this._onAnimationStart = bind(this._onAnimationStart, this),
            this.updateContent = bind(this.updateContent, this),
            ScrollComponent.__super__.constructor.call(this, Defaults.getDefaults("ScrollComponent", options)),
            this._contentInset = options.contentInset || Utils.rectZero(),
            this.setContentLayer(new Layer),
            this._applyProxyDefaults(options),
            this._enableMouseWheelHandling(options.mouseWheelEnabled),
            options.hasOwnProperty("wrap") && wrapComponent(this, options.wrap)
        }
        return extend(ScrollComponent, superClass),
        ScrollComponent.define("velocity", ScrollComponent.proxyProperty("content.draggable.velocity", {
            importable: !1,
            exportable: !1
        })),
        ScrollComponent.define("scrollHorizontal", ScrollComponent.proxyProperty("content.draggable.horizontal")),
        ScrollComponent.define("scrollVertical", ScrollComponent.proxyProperty("content.draggable.vertical")),
        ScrollComponent.define("speedX", ScrollComponent.proxyProperty("content.draggable.speedX")),
        ScrollComponent.define("speedY", ScrollComponent.proxyProperty("content.draggable.speedY")),
        ScrollComponent.define("isDragging", ScrollComponent.proxyProperty("content.draggable.isDragging", {
            importable: !1,
            exportable: !1
        })),
        ScrollComponent.define("isMoving", ScrollComponent.proxyProperty("content.draggable.isMoving", {
            importable: !1,
            exportable: !1
        })),
        ScrollComponent.define("isAnimating", ScrollComponent.proxyProperty("content.draggable.isAnimating", {
            importable: !1,
            exportable: !1
        })),
        ScrollComponent.define("propagateEvents", ScrollComponent.proxyProperty("content.draggable.propagateEvents")),
        ScrollComponent.define("directionLock", ScrollComponent.proxyProperty("content.draggable.directionLock")),
        ScrollComponent.define("directionLockThreshold", ScrollComponent.proxyProperty("content.draggable.directionLockThreshold")),
        ScrollComponent.define("content", {
            importable: !1,
            exportable: !1,
            get: function() {
                return this._content
            }
        }),
        ScrollComponent.define("mouseWheelSpeedMultiplier", ScrollComponent.simpleProperty("mouseWheelSpeedMultiplier", 1)),
        ScrollComponent.prototype.calculateContentFrame = function() {
            var contentFrame, size;
            return this.content ? (contentFrame = this.content.contentFrame(),
            size = {
                x: 0,
                y: 0,
                width: Math.max(this.width, contentFrame.x + contentFrame.width),
                height: Math.max(this.height, contentFrame.y + contentFrame.height)
            }) : Utils.rectZero()
        }
        ,
        ScrollComponent.prototype.setContentLayer = function(layer) {
            return this.content && (this._onAnimationStop(),
            this.content.off(Events.AnimationStart, this._onAnimationStart),
            this.content.off(Events.AnimationStop, this._onAnimationStop),
            this._content.destroy()),
            this._content = layer,
            this._content.parent = this,
            this._content.name = "content",
            this._content.clip = !0,
            this._content.draggable.enabled = !0,
            this._content.draggable.momentum = !0,
            this._content.on("change:children", this.updateContent),
            this.on("change:width", this.updateContent),
            this.on("change:height", this.updateContent),
            this.updateContent(),
            this.scrollPoint = {
                x: 0,
                y: 0
            },
            this.content.on(Events.AnimationStart, this._onAnimationStart),
            this.content.on(Events.AnimationStop, this._onAnimationStop),
            this._content
        }
        ,
        ScrollComponent.prototype.updateContent = function() {
            var constraintsFrame, contentFrame, ref;
            if (this.content)
                return contentFrame = this.calculateContentFrame(),
                this.content.width = contentFrame.width,
                this.content.height = contentFrame.height,
                constraintsFrame = this.calculateContentFrame(),
                constraintsFrame = {
                    x: -constraintsFrame.width + this.width - this._contentInset.right,
                    y: -constraintsFrame.height + this.height - this._contentInset.bottom,
                    width: constraintsFrame.width + constraintsFrame.width - this.width + this._contentInset.left + this._contentInset.right,
                    height: constraintsFrame.height + constraintsFrame.height - this.height + this._contentInset.top + this._contentInset.bottom
                },
                this.content.draggable.constraints = constraintsFrame,
                this.scrollPoint = this.scrollPoint,
                this.content.children.length && (null != (ref = this.content.backgroundColor) ? ref.isEqual(Framer.Defaults.Layer.backgroundColor) : void 0) ? this.content.backgroundColor = null : void 0
        }
        ,
        ScrollComponent.define("scroll", {
            exportable: !1,
            get: function() {
                return this.scrollHorizontal === !0 || this.scrollVertical === !0
            },
            set: function(value) {
                if (this.content)
                    return value === !1 && this.content.animateStop(),
                    this.scrollHorizontal = this.scrollVertical = value
            }
        }),
        ScrollComponent.prototype._calculateContentPoint = function(scrollPoint) {
            var point;
            return scrollPoint = _.defaults(scrollPoint, {
                x: 0,
                y: 0
            }),
            scrollPoint.x -= this.contentInset.left,
            scrollPoint.y -= this.contentInset.top,
            point = this._pointInConstraints(scrollPoint),
            Utils.pointInvert(point)
        }
        ,
        ScrollComponent.define("scrollX", {
            get: function() {
                return this.content ? 0 - this.content.x + this.contentInset.left : 0
            },
            set: function(value) {
                if (this.content)
                    return this.content.draggable.animateStop(),
                    this.content.x = this._calculateContentPoint({
                        x: value,
                        y: 0
                    }).x
            }
        }),
        ScrollComponent.define("scrollY", {
            get: function() {
                return this.content ? 0 - this.content.y + this.contentInset.top : 0
            },
            set: function(value) {
                if (this.content)
                    return this.content.draggable.animateStop(),
                    this.content.y = this._calculateContentPoint({
                        x: 0,
                        y: value
                    }).y
            }
        }),
        ScrollComponent.define("scrollPoint", {
            importable: !0,
            exportable: !1,
            get: function() {
                var point;
                return point = {
                    x: this.scrollX,
                    y: this.scrollY
                }
            },
            set: function(point) {
                if (this.content)
                    return this.scrollX = point.x,
                    this.scrollY = point.y
            }
        }),
        ScrollComponent.define("scrollFrame", {
            importable: !0,
            exportable: !1,
            get: function() {
                var rect;
                return rect = this.scrollPoint,
                rect.width = this.width,
                rect.height = this.height,
                rect
            },
            set: function(value) {
                return this.scrollPoint = value
            }
        }),
        ScrollComponent.define("contentInset", {
            get: function() {
                return _.clone(this._contentInset)
            },
            set: function(contentInset) {
                var contentFrame;
                if (this._contentInset = Utils.rectZero(Utils.parseRect(contentInset)),
                this.content)
                    return contentFrame = this.calculateContentFrame(),
                    contentFrame.x = contentFrame.x + this._contentInset.left,
                    contentFrame.y = contentFrame.y + this._contentInset.top,
                    this.content.frame = contentFrame,
                    this.updateContent()
            }
        }),
        ScrollComponent.define("direction", {
            importable: !1,
            exportable: !1,
            get: function() {
                var direction;
                return direction = this.content.draggable.direction,
                "down" === direction ? "up" : "up" === direction ? "down" : "right" === direction ? "left" : "left" === direction ? "right" : direction
            }
        }),
        ScrollComponent.define("angle", {
            importable: !1,
            exportable: !1,
            get: function() {
                return this.content ? -this.content.draggable.angle : 0
            }
        }),
        ScrollComponent.prototype.scrollToPoint = function(point, animate, animationOptions) {
            var contentPoint;
            return null == animate && (animate = !0),
            null == animationOptions && (animationOptions = {
                curve: "spring(500, 50, 0)"
            }),
            contentPoint = this._calculateContentPoint(point),
            this.content.draggable.animateStop(),
            animate ? (point = {},
            contentPoint.hasOwnProperty("x") && (point.x = contentPoint.x),
            contentPoint.hasOwnProperty("y") && (point.y = contentPoint.y),
            this.content.animateStop(),
            this.content.animate(point, animationOptions)) : this.content.point = contentPoint
        }
        ,
        ScrollComponent.prototype.scrollToTop = function(animate, animationOptions) {
            return null == animate && (animate = !0),
            null == animationOptions && (animationOptions = {
                curve: "spring(500, 50, 0)"
            }),
            this.scrollToPoint({
                x: 0,
                y: 0
            }, animate, animationOptions)
        }
        ,
        ScrollComponent.prototype.scrollToLayer = function(contentLayer, originX, originY, animate, animationOptions) {
            var scrollPoint;
            if (null == originX && (originX = 0),
            null == originY && (originY = 0),
            null == animate && (animate = !0),
            null == animationOptions && (animationOptions = {
                curve: "spring(500, 50, 0)"
            }),
            contentLayer && contentLayer.parent !== this.content)
                throw Error("Can't scroll to this layer because it's not in the ScrollComponent. Add it to the content like layer.parent = scroll.content.");
            return contentLayer && 0 !== this.content.children.length ? (scrollPoint = this._scrollPointForLayer(contentLayer, originX, originY),
            scrollPoint.x -= this.width * originX,
            scrollPoint.y -= this.height * originY) : scrollPoint = {
                x: 0,
                y: 0
            },
            this.scrollToPoint(scrollPoint, animate, animationOptions),
            contentLayer
        }
        ,
        ScrollComponent.prototype.scrollToClosestLayer = function(originX, originY, animate, animationOptions) {
            var closestLayer;
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            null == animate && (animate = !0),
            null == animationOptions && (animationOptions = {
                curve: "spring(500, 50, 0)"
            }),
            closestLayer = this.closestContentLayer(originX, originY, animate, animationOptions),
            closestLayer ? (this.scrollToLayer(closestLayer, originX, originY),
            closestLayer) : (closestLayer || this.scrollToPoint({
                x: 0,
                y: 0
            }),
            null)
        }
        ,
        ScrollComponent.prototype.closestContentLayer = function(originX, originY) {
            var scrollPoint;
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            scrollPoint = Utils.framePointForOrigin(this.scrollFrame, originX, originY),
            this.closestContentLayerForScrollPoint(scrollPoint, originX, originY)
        }
        ,
        ScrollComponent.prototype.closestContentLayerForScrollPoint = function(scrollPoint, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            _.head(this._contentLayersSortedByDistanceForScrollPoint(scrollPoint, originX, originY))
        }
        ,
        ScrollComponent.prototype._onAnimationStart = function(event) {
            return this.content.on("change:frame", this._onAnimationStep)
        }
        ,
        ScrollComponent.prototype._onAnimationStep = function(event) {
            return this.content.emit(Events.Move, this.content.point),
            this.emit(Events.Scroll, event)
        }
        ,
        ScrollComponent.prototype._onAnimationStop = function() {
            return this.content.off("change:frame", this._onAnimationStep)
        }
        ,
        ScrollComponent.prototype._scrollPointForLayer = function(layer, originX, originY, clamp) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            null == clamp && (clamp = !0),
            Utils.framePointForOrigin(layer, originX, originY)
        }
        ,
        ScrollComponent.prototype._contentLayersSortedByDistanceForScrollPoint = function(scrollPoint, originX, originY) {
            return null == originX && (originX = 0),
            null == originY && (originY = 0),
            Utils.frameSortByAbsoluteDistance(scrollPoint, this.content.children, originX, originY)
        }
        ,
        ScrollComponent.prototype._pointInConstraints = function(point) {
            var maxX, maxY, minX, minY, ref;
            return ref = this.content.draggable._calculateConstraints(this.content.draggable.constraints),
            minX = ref.minX,
            maxX = ref.maxX,
            minY = ref.minY,
            maxY = ref.maxY,
            point = {
                x: -Utils.clamp(-point.x, minX, maxX),
                y: -Utils.clamp(-point.y, minY, maxY)
            }
        }
        ,
        ScrollComponent.prototype.addListener = function() {
            var eventName, eventNames, i, j, len, listener, results;
            for (eventNames = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0,
            []),
            listener = arguments[i++],
            ScrollComponent.__super__.addListener.apply(this, arguments),
            results = [],
            j = 0,
            len = eventNames.length; j < len; j++)
                eventName = eventNames[j],
                indexOf.call(_.keys(EventMappers), eventName) >= 0 ? results.push(this.content.on(EventMappers[eventName], listener)) : results.push(void 0);
            return results
        }
        ,
        ScrollComponent.prototype.removeListener = function() {
            var eventName, eventNames, i, j, len, listener, results;
            for (eventNames = 2 <= arguments.length ? slice.call(arguments, 0, i = arguments.length - 1) : (i = 0,
            []),
            listener = arguments[i++],
            ScrollComponent.__super__.removeListener.apply(this, arguments),
            results = [],
            j = 0,
            len = eventNames.length; j < len; j++)
                eventName = eventNames[j],
                indexOf.call(_.keys(EventMappers), eventName) >= 0 ? results.push(this.content.off(EventMappers[eventName], listener)) : results.push(void 0);
            return results
        }
        ,
        ScrollComponent.prototype.on = ScrollComponent.prototype.addListener,
        ScrollComponent.prototype.off = ScrollComponent.prototype.removeListener,
        ScrollComponent.define("mouseWheelEnabled", {
            get: function() {
                return this._mouseWheelEnabled
            },
            set: function(value) {
                return this._mouseWheelEnabled = value,
                this._enableMouseWheelHandling(value)
            }
        }),
        ScrollComponent.prototype._enableMouseWheelHandling = function(enable) {
            return enable ? this.on(Events.MouseWheel, this._onMouseWheel) : this.off(Events.MouseWheel, this._onMouseWheel)
        }
        ,
        ScrollComponent.prototype._onMouseWheel = function(event) {
            var deltaX, deltaY, maxX, maxY, minX, minY, point, ref;
            if (deltaX = 0,
            deltaY = 0,
            this.scrollHorizontal && (deltaX = event.wheelDeltaX),
            this.scrollVertical && (deltaY = event.wheelDeltaY),
            0 !== deltaX || 0 !== deltaY)
                return this._mouseWheelScrolling || (this._mouseWheelScrolling = !0,
                this.emit(Events.ScrollStart, event)),
                this.content.animateStop(),
                ref = this.content.draggable._calculateConstraints(this.content.draggable.constraints),
                minX = ref.minX,
                maxX = ref.maxX,
                minY = ref.minY,
                maxY = ref.maxY,
                point = {
                    x: Utils.clamp(this.content.x + deltaX * this.mouseWheelSpeedMultiplier, minX, maxX),
                    y: Utils.clamp(this.content.y + deltaY * this.mouseWheelSpeedMultiplier, minY, maxY)
                },
                this.content.point = point,
                this.content.emit(Events.Move, point),
                this.emit(Events.Scroll, event),
                this._onMouseWheelEnd(event)
        }
        ,
        ScrollComponent.prototype._onMouseWheelEnd = Utils.debounce(.3, function(event) {
            return this.emit(Events.ScrollEnd, event),
            this._mouseWheelScrolling = !1
        }),
        ScrollComponent.prototype.copy = function() {
            var contentLayer, copy;
            return copy = ScrollComponent.__super__.copy.apply(this, arguments),
            contentLayer = _.head(_.without(copy.children, copy.content)),
            copy.setContentLayer(contentLayer),
            copy.props = this.props,
            copy
        }
        ,
        ScrollComponent.wrap = function(layer, options) {
            return wrapComponent(new this(options), layer, options)
        }
        ,
        ScrollComponent
    }(Layer),
    wrapComponent = function(instance, layer, options) {
        var isPageComponent, ref, screenFrame, scroll, wrapper;
        if (null == options && (options = {
            correct: !0
        }),
        !(layer instanceof Layer))
            throw new Error("ScrollComponent.wrap expects a layer, not " + layer + ". Are you sure the layer exists?");
        return scroll = instance,
        isPageComponent = "PageComponent" === instance.constructor.name,
        options.correct === !0 && (0 !== layer.children.length || isPageComponent || (wrapper = new Layer,
        wrapper.frame = layer.frame,
        layer.parent = wrapper,
        layer.x = layer.y = 0,
        layer = wrapper)),
        scroll.frame = layer.frame,
        scroll.parent = layer.parent,
        scroll.index = layer.index,
        null == layer.name || isPageComponent || (scroll.name = layer.name),
        null == scroll.__framerInstanceInfo && (scroll.__framerInstanceInfo = {}),
        null != (ref = scroll.__framerInstanceInfo) && (ref.name = instance.constructor.name),
        layer.image && !isPageComponent && (scroll.image = layer.image,
        layer.image = null),
        isPageComponent ? scroll.addPage(layer) : scroll.setContentLayer(layer),
        options.correct === !0 && (screenFrame = scroll.screenFrame,
        screenFrame.x < Screen.width && screenFrame.x + screenFrame.width > Screen.width && (scroll.width = Screen.width - screenFrame.x),
        screenFrame.y < Screen.height && screenFrame.y + screenFrame.height > Screen.height && (scroll.height = Screen.height - screenFrame.y)),
        scroll
    }
}
, function(module, exports, __webpack_require__) {
    var Events, ScrollComponent, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    Events = __webpack_require__(15).Events,
    ScrollComponent = __webpack_require__(44).ScrollComponent,
    exports.PageComponent = function(superClass) {
        function PageComponent(options) {
            this._resetHistory = bind(this._resetHistory, this),
            this._scrollEnd = bind(this._scrollEnd, this),
            this._scrollMove = bind(this._scrollMove, this),
            this._scrollStart = bind(this._scrollStart, this),
            PageComponent.__super__.constructor.call(this, _.defaults(options, {
                animationOptions: {
                    curve: "spring(500, 50, 0)"
                }
            })),
            this.content.draggable.momentum = !1,
            this.content.draggable.bounce = !1,
            this.content.on(Events.DragSessionStart, this._scrollStart),
            this.content.on(Events.DragSessionEnd, this._scrollEnd),
            this.content.on("change:frame", _.debounce(this._scrollMove, 16)),
            this.content.on("change:children", this._resetHistory),
            this._resetHistory()
        }
        return extend(PageComponent, superClass),
        PageComponent.define("originX", PageComponent.simpleProperty("originX", .5)),
        PageComponent.define("originY", PageComponent.simpleProperty("originY", .5)),
        PageComponent.define("velocityThreshold", PageComponent.simpleProperty("velocityThreshold", .1)),
        PageComponent.define("closestPage", {
            get: function() {
                return this.closestContentLayerForScrollPoint(this._originScrollPoint(), this.originX, this.originY)
            }
        }),
        PageComponent.define("currentPage", {
            get: function() {
                return _.last(this._previousPages)
            }
        }),
        PageComponent.define("previousPage", {
            get: function() {
                return this._previousPages[this._previousPages.length - 2]
            }
        }),
        PageComponent.prototype.nextPage = function(direction, currentPage, withoutCurrentPage) {
            var layers, point;
            return null == direction && (direction = "right"),
            null == currentPage && (currentPage = null),
            null == withoutCurrentPage && (withoutCurrentPage = !0),
            null == currentPage && (currentPage = this.currentPage),
            point = {
                x: 0,
                y: 0
            },
            currentPage && (point = Utils.framePointForOrigin(currentPage, this.originX, this.originY)),
            withoutCurrentPage || (point = {
                x: this.scrollX + this.originX * this.width,
                y: this.scrollY + this.originY * this.height
            }),
            "up" !== direction && "top" !== direction && "north" !== direction || (layers = this.content.childrenAbove(point, this.originX, this.originY)),
            "down" !== direction && "bottom" !== direction && "south" !== direction || (layers = this.content.childrenBelow(point, this.originX, this.originY)),
            "left" !== direction && "west" !== direction || (layers = this.content.childrenLeft(point, this.originX, this.originY)),
            "right" !== direction && "east" !== direction || (layers = this.content.childrenRight(point, this.originX, this.originY)),
            withoutCurrentPage && (layers = _.without(layers, currentPage)),
            layers = Utils.frameSortByAbsoluteDistance(point, layers, this.originX, this.originY),
            _.head(layers)
        }
        ,
        PageComponent.prototype.snapToPage = function(page, animate, animationOptions) {
            if (null == animate && (animate = !0),
            null == animationOptions && (animationOptions = null),
            this.scrollToLayer(page, this.originX, this.originY, animate, animationOptions),
            this.currentPage !== page)
                return this._previousPages.push(page),
                this.emit("change:previousPage", this.previousPage),
                this.emit("change:currentPage", this.currentPage)
        }
        ,
        PageComponent.prototype.snapToNextPage = function(direction, animate, animationOptions) {
            var nextPage;
            return null == direction && (direction = "right"),
            null == animate && (animate = !0),
            null == animationOptions && (animationOptions = null),
            null == animationOptions && (animationOptions = this.animationOptions),
            nextPage = this.nextPage(direction),
            null == nextPage && (nextPage = this.closestPage),
            this.snapToPage(nextPage, animate, animationOptions)
        }
        ,
        PageComponent.prototype.snapToPreviousPage = function() {
            if (this.previousPage)
                return this.snapToPage(this.previousPage),
                this._previousPages = this._previousPages.slice(0, +(this._previousPages.length - 3) + 1 || 9e9)
        }
        ,
        PageComponent.prototype.addPage = function(page, direction) {
            var directions, point, ref;
            if (null == direction && (direction = "right"),
            directions = ["down", "bottom", "south"] + ["right", "east"],
            ref = !direction,
            indexOf.call(directions, ref) >= 0)
                throw direction = "right",
                new Error(direction + " should be in " + directions);
            return point = page.point,
            this.content.children.length && ("right" !== direction && "east" !== direction || (point.x = Utils.frameGetMaxX(this.content.contentFrame())),
            "down" !== direction && "bottom" !== direction && "south" !== direction || (point.y = Utils.frameGetMaxY(this.content.contentFrame()))),
            page.point = point,
            page.parent !== this.content ? page.parent = this.content : this.updateContent()
        }
        ,
        PageComponent.prototype.horizontalPageIndex = function(page) {
            return _.sortBy(this.content.children, function(l) {
                return l.x
            }).indexOf(page)
        }
        ,
        PageComponent.prototype.verticalPageIndex = function(page) {
            return _.sortBy(this.content.children, function(l) {
                return l.y
            }).indexOf(page)
        }
        ,
        PageComponent.prototype._scrollStart = function() {
            return this._currentPage = this.currentPage
        }
        ,
        PageComponent.prototype._scrollMove = function() {
            var currentPage;
            if (currentPage = this.currentPage,
            currentPage !== _.last(this._previousPages) && void 0 !== currentPage)
                return this._previousPages.push(currentPage),
                this.emit("change:currentPage", {
                    old: this.previousPage,
                    new: currentPage
                })
        }
        ,
        PageComponent.prototype._scrollEnd = function() {
            var maximumVelocity, nextPage, velocity, xDisabled, xLock, yDisabled, yLock;
            if (!this.content.isAnimating)
                return velocity = this.content.draggable.velocity,
                xDisabled = !this.scrollHorizontal && ("right" === this.direction || "left" === this.direction),
                yDisabled = !this.scrollVertical && ("down" === this.direction || "up" === this.direction),
                xLock = this.content.draggable._directionLockEnabledX && ("right" === this.direction || "left" === this.direction),
                yLock = this.content.draggable._directionLockEnabledY && ("down" === this.direction || "up" === this.direction),
                maximumVelocity = Math.max(Math.abs(velocity.x), Math.abs(velocity.y)),
                maximumVelocity < this.velocityThreshold || xLock || yLock || xDisabled || yDisabled ? this.snapToPage(this.closestPage, !0, this.animationOptions) : (nextPage = this.nextPage(this.direction, this._currentPage, !1),
                null == nextPage && (nextPage = this.closestPage),
                this.snapToPage(nextPage, !0, this.animationOptions))
        }
        ,
        PageComponent.prototype._originScrollPoint = function() {
            var scrollPoint;
            return scrollPoint = this.scrollPoint,
            scrollPoint.x += this.width * this.originX,
            scrollPoint.y += this.height * this.originY,
            scrollPoint
        }
        ,
        PageComponent.prototype._resetHistory = function() {
            return this._currentPage = this.closestPage,
            this._previousPages = [this._currentPage]
        }
        ,
        PageComponent
    }(ScrollComponent)
}
, function(module, exports, __webpack_require__) {
    var Events, Knob, Layer, Utils, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    Utils = __webpack_require__(4),
    Layer = __webpack_require__(13).Layer,
    Events = __webpack_require__(15).Events,
    Events.SliderValueChange = "sliderValueChange",
    Knob = function(superClass) {
        function Knob(options) {
            Knob.__super__.constructor.call(this, options)
        }
        return extend(Knob, superClass),
        Knob.define("constrained", Knob.simpleProperty("constrained", !1)),
        Knob
    }(Layer),
    exports.SliderComponent = function(superClass) {
        function SliderComponent(options) {
            null == options && (options = {}),
            this._updateValue = bind(this._updateValue, this),
            this._knobDidMove = bind(this._knobDidMove, this),
            this._setRadius = bind(this._setRadius, this),
            this._updateFrame = bind(this._updateFrame, this),
            this._updateKnob = bind(this._updateKnob, this),
            this._updateFill = bind(this._updateFill, this),
            this._touchEnd = bind(this._touchEnd, this),
            this._touchStart = bind(this._touchStart, this),
            _.defaults(options, {
                backgroundColor: "#ccc",
                borderRadius: 50,
                clip: !1,
                width: 300,
                height: 10,
                value: 0,
                knobSize: 30
            }),
            null == options.hitArea && (options.hitArea = options.knobSize),
            this.knob = new Knob({
                backgroundColor: "#fff",
                shadowY: 1,
                shadowBlur: 3,
                shadowColor: "rgba(0, 0, 0, 0.35)",
                name: "knob"
            }),
            this.fill = new Layer({
                backgroundColor: "#333",
                width: 0,
                force2d: !0,
                name: "fill"
            }),
            this.sliderOverlay = new Layer({
                backgroundColor: null,
                name: "sliderOverlay"
            }),
            SliderComponent.__super__.constructor.call(this, options),
            this.knobSize = options.knobSize,
            this.knob.parent = this.fill.parent = this.sliderOverlay.parent = this,
            this.width > this.height ? this.fill.height = this.height : this.fill.width = this.width,
            this.fill.borderRadius = this.sliderOverlay.borderRadius = this.borderRadius,
            this.knob.draggable.enabled = !0,
            this.knob.draggable.overdrag = !1,
            this.knob.draggable.momentum = !0,
            this.knob.draggable.momentumOptions = {
                friction: 5,
                tolerance: .25
            },
            this.knob.draggable.bounce = !1,
            this.knob.borderRadius = this.knobSize / 2,
            this._updateFrame(),
            this._updateKnob(),
            this._updateFill(),
            this.on("change:frame", this._updateFrame),
            this.on("change:borderRadius", this._setRadius),
            this.knob.on("change:size", this._updateKnob),
            this.knob.on("change:frame", this._updateFill),
            this.knob.on("change:frame", this._knobDidMove),
            this.sliderOverlay.on(Events.TapStart, this._touchStart),
            this.sliderOverlay.on(Events.TapEnd, this._touchEnd)
        }
        return extend(SliderComponent, superClass),
        SliderComponent.prototype._touchStart = function(event) {
            var offsetX, offsetY;
            return event.preventDefault(),
            offsetX = this.min / this.canvasScaleX() - this.min,
            offsetY = this.min / this.canvasScaleY() - this.min,
            this.width > this.height ? this.value = this.valueForPoint(Events.touchEvent(event).clientX - this.screenScaledFrame().x) / this.canvasScaleX() - offsetX : this.value = this.valueForPoint(Events.touchEvent(event).clientY - this.screenScaledFrame().y) / this.canvasScaleY() - offsetY,
            this.knob.draggable._touchStart(event),
            this._updateValue()
        }
        ,
        SliderComponent.prototype._touchEnd = function(event) {
            return this._updateValue()
        }
        ,
        SliderComponent.prototype._updateFill = function() {
            return this.width > this.height ? this.fill.width = this.knob.midX : this.fill.height = this.knob.midY
        }
        ,
        SliderComponent.prototype._updateKnob = function() {
            return this.width > this.height ? (this.knob.midX = this.fill.width,
            this.knob.centerY()) : (this.knob.midY = this.fill.height,
            this.knob.centerX())
        }
        ,
        SliderComponent.prototype._updateFrame = function() {
            return this.knob.draggable.constraints = {
                x: -this.knob.width / 2,
                y: -this.knob.height / 2,
                width: this.width + this.knob.width,
                height: this.height + this.knob.height
            },
            this.knob.constrained && (this.knob.draggable.constraints = {
                x: 0,
                y: 0,
                width: this.width,
                height: this.height
            }),
            this.hitArea = this.hitArea,
            this.width > this.height ? (this.fill.height = this.height,
            this.knob.midX = this.pointForValue(this.value),
            this.knob.centerY()) : (this.fill.width = this.width,
            this.knob.midY = this.pointForValue(this.value),
            this.knob.centerX()),
            this.width > this.height ? (this.knob.draggable.speedY = 0,
            this.knob.draggable.speedX = 1) : (this.knob.draggable.speedX = 0,
            this.knob.draggable.speedY = 1),
            this.sliderOverlay.center()
        }
        ,
        SliderComponent.prototype._setRadius = function() {
            var radius;
            return radius = this.borderRadius,
            this.fill.style.borderRadius = radius + "px 0 0 " + radius + "px"
        }
        ,
        SliderComponent.define("knobSize", {
            get: function() {
                return this._knobSize
            },
            set: function(value) {
                var isRound;
                return isRound = 2 * this.knob.borderRadius === this._knobSize,
                this._knobSize = value,
                this.knob.width = this._knobSize,
                this.knob.height = this._knobSize,
                isRound && (this.knob.borderRadius = this._knobSize / 2),
                this._updateFrame()
            }
        }),
        SliderComponent.define("hitArea", {
            get: function() {
                return this._hitArea
            },
            set: function(value) {
                return this._hitArea = value,
                this.width > this.height ? (this.sliderOverlay.width = this.width + this.hitArea,
                this.sliderOverlay.height = this.hitArea) : (this.sliderOverlay.width = this.hitArea,
                this.sliderOverlay.height = this.height + this.hitArea)
            }
        }),
        SliderComponent.define("min", {
            get: function() {
                return this._min || 0
            },
            set: function(value) {
                return this._min = value
            }
        }),
        SliderComponent.define("max", {
            get: function() {
                return this._max || 1
            },
            set: function(value) {
                return this._max = value
            }
        }),
        SliderComponent.define("value", {
            get: function() {
                return this._value
            },
            set: function(value) {
                return this._value = Utils.clamp(value, this.min, this.max),
                this.width > this.height ? this.knob.midX = this.pointForValue(value) : this.knob.midY = this.pointForValue(value),
                this._updateFill(),
                this._updateValue()
            }
        }),
        SliderComponent.prototype._knobDidMove = function() {
            return this.width > this.height ? this.value = this.valueForPoint(this.knob.midX) : this.value = this.valueForPoint(this.knob.midY)
        }
        ,
        SliderComponent.prototype._updateValue = function() {
            if (this._lastUpdatedValue !== this.value)
                return this._lastUpdatedValue = this.value,
                this.emit("change:value", this.value),
                this.emit(Events.SliderValueChange, this.value)
        }
        ,
        SliderComponent.prototype.pointForValue = function(value) {
            return this.width > this.height ? this.knob.constrained ? Utils.modulate(value, [this.min, this.max], [0 + this.knob.width / 2, this.width - this.knob.width / 2], !0) : Utils.modulate(value, [this.min, this.max], [0, this.width], !0) : this.knob.constrained ? Utils.modulate(value, [this.min, this.max], [0 + this.knob.height / 2, this.height - this.knob.height / 2], !0) : Utils.modulate(value, [this.min, this.max], [0, this.height], !0)
        }
        ,
        SliderComponent.prototype.valueForPoint = function(value) {
            return this.width > this.height ? this.knob.constrained ? Utils.modulate(value, [0 + this.knob.width / 2, this.width - this.knob.width / 2], [this.min, this.max], !0) : Utils.modulate(value, [0, this.width], [this.min, this.max], !0) : this.knob.constrained ? Utils.modulate(value, [0 + this.knob.height / 2, this.height - this.knob.height / 2], [this.min, this.max], !0) : Utils.modulate(value, [0, this.height], [this.min, this.max], !0)
        }
        ,
        SliderComponent.prototype.animateToValue = function(value, animationOptions) {
            return null == animationOptions && (animationOptions = {
                curve: "spring(300, 25, 0)"
            }),
            this.width > this.height ? animationOptions.properties = {
                x: this.pointForValue(value) - this.knob.width / 2
            } : animationOptions.properties = {
                y: this.pointForValue(value) - this.knob.height / 2
            },
            this.knob.animate(animationOptions)
        }
        ,
        SliderComponent.prototype.onValueChange = function(cb) {
            return this.on(Events.SliderValueChange, cb)
        }
        ,
        SliderComponent
    }(Layer)
}
, function(module, exports, __webpack_require__) {
    var AppleIMac, AppleMacBook, AppleMacBookAir, AppleMacBookPro, AppleWatch38BlackLeatherDevice, AppleWatch38Device, AppleWatch42Device, AppleWatchSeries238Device, AppleWatchSeries242Device, BaseClass, BuiltInDevices, Defaults, DellXPS, Devices, Events, HTCa9BaseDevice, HTCm8BaseDevice, Layer, MSFTLumia950BaseDevice, Nexus4BaseDevice, Nexus5BaseDevice, Nexus6BaseDevice, Nexus9BaseDevice, PixelBaseDevice, SamsungGalaxyNote5BaseDevice, SonyW85OC, Utils, _, desktopReleaseVersion, googlePixelReleaseVersion, iPadAir2BaseDevice, iPadMini4BaseDevice, iPadProBaseDevice, iPhone5BaseDevice, iPhone5CBaseDevice, iPhone6BaseDevice, iPhone6PlusBaseDevice, iPhone7BaseDevice, iPhone7PlusBaseDevice, newDeviceMinVersion, oldDeviceMaxVersion, old_AppleWatch38Device, old_AppleWatch42Device, old_Nexus5BaseDevice, old_Nexus5BaseDeviceHand, old_Nexus9BaseDevice, old_iPadAirBaseDevice, old_iPadAirBaseDeviceHand, old_iPadMiniBaseDevice, old_iPadMiniBaseDeviceHand, old_iPhone5BaseDevice, old_iPhone5BaseDeviceHand, old_iPhone5CBaseDevice, old_iPhone5CBaseDeviceHand, old_iPhone6BaseDevice, old_iPhone6BaseDeviceHand, old_iPhone6PlusBaseDevice, old_iPhone6PlusBaseDeviceHand, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    Utils = __webpack_require__(4),
    _ = __webpack_require__(1)._,
    BaseClass = __webpack_require__(6).BaseClass,
    Layer = __webpack_require__(13).Layer,
    Defaults = __webpack_require__(17).Defaults,
    Events = __webpack_require__(15).Events,
    exports.DeviceComponent = function(superClass) {
        function DeviceComponent(options) {
            var defaults;
            null == options && (options = {}),
            this._orientationChange = bind(this._orientationChange, this),
            this._viewportOrientationOffset = bind(this._viewportOrientationOffset, this),
            this._updateDeviceImage = bind(this._updateDeviceImage, this),
            this.customize = bind(this.customize, this),
            this._update = bind(this._update, this),
            defaults = Defaults.getDefaults("DeviceComponent", options),
            Framer.Defaults.hasOwnProperty("DeviceView") && (defaults = _.extend(defaults, Framer.Defaults.DeviceView)),
            this._setup(),
            this.animationOptions = defaults.animationOptions,
            this.deviceType = defaults.deviceType,
            _.extend(this, _.defaults(options, defaults)),
            this.Type = {
                Tablet: "tablet",
                Phone: "phone",
                Computer: "computer"
            }
        }
        return extend(DeviceComponent, superClass),
        DeviceComponent.define("context", {
            get: function() {
                return this._context
            }
        }),
        DeviceComponent.prototype._setup = function() {
            var i, layer, len, ref;
            if (!this._setupDone) {
                for (this._setupDone = !0,
                this.background = new Layer,
                this.background.clip = !0,
                this.background.backgroundColor = "transparent",
                this.background.classList.add("DeviceBackground"),
                this.hands = new Layer,
                this.handsImageLayer = new Layer({
                    parent: this.hands
                }),
                this.phone = new Layer({
                    parent: this.hands
                }),
                this.screen = new Layer({
                    parent: this.phone
                }),
                this.viewport = new Layer({
                    parent: this.screen
                }),
                this.content = new Layer({
                    parent: this.viewport
                }),
                this.hands.backgroundColor = "transparent",
                this.hands._alwaysUseImageCache = !0,
                this.handsImageLayer.backgroundColor = "transparent",
                this.phone.backgroundColor = "transparent",
                this.phone.classList.add("DevicePhone"),
                this.screen.classList.add("DeviceScreen"),
                this.screen.clip = !0,
                this.viewport.backgroundColor = "transparent",
                this.viewport.classList.add("DeviceComponentPort"),
                this.content.backgroundColor = "transparent",
                this.content.classList.add("DeviceContent"),
                this.content.originX = 0,
                this.content.originY = 0,
                Utils.isMobile() || Framer.CurrentContext.domEventManager.wrap(window).addEventListener("resize", this._update),
                Utils.isMobile() && Framer.CurrentContext.domEventManager.wrap(window).addEventListener("resize", this._orientationChange),
                ref = [this.background, this.phone, this.viewport, this.content, this.screen],
                i = 0,
                len = ref.length; i < len; i++)
                    layer = ref[i],
                    layer.on("touchmove", function(event) {
                        return event.preventDefault()
                    });
                return this._context = new Framer.Context({
                    parent: this.content,
                    name: "DeviceScreen"
                }),
                this._context.perspective = 1200,
                this._context.device = this
            }
        }
        ,
        DeviceComponent.prototype._update = function() {
            var backgroundOverlap, contentScaleFactor, height, i, layer, len, ref, ref1, width;
            if (contentScaleFactor = this.contentScale,
            contentScaleFactor > 1 && (contentScaleFactor = 1),
            this._shouldRenderFullScreen()) {
                for (width = window.innerWidth / contentScaleFactor,
                height = window.innerHeight / contentScaleFactor,
                ref = [this.background, this.hands, this.phone, this.viewport, this.content, this.screen],
                i = 0,
                len = ref.length; i < len; i++)
                    layer = ref[i],
                    layer.x = layer.y = 0,
                    layer.width = width,
                    layer.height = height,
                    layer.scale = 1;
                return this.content.scale = contentScaleFactor
            }
            if (backgroundOverlap = 100,
            this.background.x = 0 - backgroundOverlap,
            this.background.y = 0 - backgroundOverlap,
            this.background.width = window.innerWidth + 2 * backgroundOverlap,
            this.background.height = window.innerHeight + 2 * backgroundOverlap,
            this._updateDeviceImage(),
            this.hands.scale = this._calculatePhoneScale(),
            this.hands.center(),
            this.phone.center(),
            ref1 = this._getOrientationDimensions(this._device.screenWidth / contentScaleFactor, this._device.screenHeight / contentScaleFactor),
            width = ref1[0],
            height = ref1[1],
            this.screen.width = this.viewport.width = this._device.screenWidth,
            this.screen.height = this.viewport.height = this._device.screenHeight,
            this.content.width = width,
            this.content.height = height,
            this.screen.center(),
            this.selectedHand && 0 === this._orientation)
                return this.setHand(this.selectedHand)
        }
        ,
        DeviceComponent.prototype._shouldRenderFullScreen = function() {
            return !this._device || (this.fullScreen === !0 || ("fullscreen" === this.deviceType || !Utils.isInsideIframe() && ("phone" === Utils.deviceType() && Utils.deviceType() === this._device.deviceType || ("tablet" === Utils.deviceType() && Utils.deviceType() === this._device.deviceType || ("phone" === Utils.deviceType() && "tablet" === this._device.deviceType || this._device.screenWidth === Canvas.width && this._device.screenHeight === Canvas.height)))))
        }
        ,
        DeviceComponent.prototype.setupContext = function() {
            return Framer.CurrentContext = this._context
        }
        ,
        DeviceComponent.define("fullScreen", {
            get: function() {
                return this._fullScreen
            },
            set: function(fullScreen) {
                return this._setFullScreen(fullScreen)
            }
        }),
        DeviceComponent.prototype._setFullScreen = function(fullScreen) {
            if ("fullscreen" !== this._deviceType && _.isBoolean(fullScreen) && fullScreen !== this._fullScreen)
                return this._fullScreen = fullScreen,
                fullScreen === !0 ? (this.phone.image = "",
                this.hands.image = "") : this._updateDeviceImage(),
                this._update(),
                this.emit("change:fullScreen")
        }
        ,
        DeviceComponent.define("screenSize", {
            get: function() {
                var size;
                return this._shouldRenderFullScreen() ? Canvas.size : size = this.isLandscape ? {
                    width: this._device.screenHeight,
                    height: this._device.screenWidth
                } : {
                    width: this._device.screenWidth,
                    height: this._device.screenHeight
                }
            }
        }),
        DeviceComponent.prototype.customize = function(deviceProps) {
            return Devices.custom = _.defaults(deviceProps, Devices.custom),
            this.deviceType = "custom"
        }
        ,
        DeviceComponent.define("deviceType", {
            get: function() {
                return this._deviceType
            },
            set: function(deviceType) {
                var device, i, key, lDevicetype, lKey, len, ref, shouldZoomToFit;
                if (deviceType !== this._deviceType || "custom" === deviceType) {
                    if (device = null,
                    _.isString(deviceType))
                        for (lDevicetype = deviceType.toLowerCase(),
                        ref = _.keys(Devices),
                        i = 0,
                        len = ref.length; i < len; i++)
                            key = ref[i],
                            lKey = key.toLowerCase(),
                            lDevicetype === lKey && (device = Devices[key]);
                    if (!device)
                        throw Error("No device named " + deviceType + ". Options are: " + _.keys(Devices));
                    if (this._device !== device)
                        return shouldZoomToFit = "fullscreen" === this._deviceType,
                        this.screen.backgroundColor = "black",
                        null != device.backgroundColor && (this.screen.backgroundColor = device.backgroundColor),
                        "computer" === device.deviceType && Utils.domComplete(function() {
                            return document.body.style.cursor = "auto"
                        }),
                        this._device = _.clone(device),
                        this._deviceType = deviceType,
                        this.fullscreen = !1,
                        this._updateDeviceImage(),
                        this._update(),
                        this.emit("change:deviceType"),
                        this.viewport.point = this._viewportOrientationOffset(),
                        shouldZoomToFit ? this.deviceScale = "fit" : void 0
                }
            }
        }),
        DeviceComponent.prototype._updateDeviceImage = function() {
            if (!/PhantomJS/.test(navigator.userAgent))
                return this._shouldRenderFullScreen() ? (this.phone.image = "",
                this.hands.image = "") : this._deviceImageUrl(this._deviceImageName()) ? (this.phone._alwaysUseImageCache = !0,
                this.phone.image = this._deviceImageUrl(this._deviceImageName()),
                this.phone.width = this._device.deviceImageWidth,
                this.phone.height = this._device.deviceImageHeight,
                this.hands.width = this.phone.width,
                this.hands.height = this.phone.height) : this.phone.image = ""
        }
        ,
        DeviceComponent.prototype._deviceImageName = function() {
            return this._device.hasOwnProperty("deviceImage") ? this._device.deviceImage : this._deviceType + ".png"
        }
        ,
        DeviceComponent.prototype._deviceImageUrl = function(name) {
            var ref, resourceUrl;
            if (!name)
                return null;
            if (_.startsWith(name, "http://") || _.startsWith(name, "https://"))
                return name;
            if (ref = this._deviceType,
            indexOf.call(BuiltInDevices, ref) < 0 || "custom" === this._deviceType)
                return name;
            if (resourceUrl = "//resources.framerjs.com/static/DeviceResources",
            Utils.isFileUrl(window.location.href) && (resourceUrl = "http:" + resourceUrl),
            Utils.isFramerStudio() && window.FramerStudioInfo && (this._device.minStudioVersion && Utils.framerStudioVersion() >= this._device.minStudioVersion || !this._device.minStudioVersion) && (this._device.maxStudioVersion && Utils.framerStudioVersion() <= this._device.maxStudioVersion || !this._device.maxStudioVersion))
                return resourceUrl = window.FramerStudioInfo.deviceImagesUrl,
                resourceUrl + "/" + name.replace(".png", ".jp2");
            if (this._device.deviceImageCompression === !0) {
                if (Utils.isWebPSupported())
                    return resourceUrl + "/" + name.replace(".png", ".webp");
                if (Utils.isJP2Supported())
                    return resourceUrl + "/" + name.replace(".png", ".jp2")
            }
            return resourceUrl + "/" + name
        }
        ,
        DeviceComponent.define("deviceScale", {
            get: function() {
                return this._shouldRenderFullScreen() ? 1 : this._deviceScale || 1
            },
            set: function(deviceScale) {
                return this.setDeviceScale(deviceScale, !1)
            }
        }),
        DeviceComponent.prototype.setDeviceScale = function(deviceScale, animate) {
            var phoneScale;
            if (null == animate && (animate = !1),
            deviceScale = "fit" === deviceScale || deviceScale < 0 ? "fit" : parseFloat(deviceScale),
            deviceScale !== this._deviceScale && (this._deviceScale = deviceScale,
            !this._shouldRenderFullScreen()))
                return phoneScale = "fit" === deviceScale ? this._calculatePhoneScale() : deviceScale,
                this.hands.animateStop(),
                animate ? this.hands.animate(_.extend(this.animationOptions, {
                    properties: {
                        scale: phoneScale
                    }
                })) : (this.hands.scale = phoneScale,
                this.hands.center()),
                this.emit("change:deviceScale")
        }
        ,
        DeviceComponent.prototype._calculatePhoneScale = function() {
            var height, paddingOffset, phoneScale, ref, ref1, width;
            return ref = this._getOrientationDimensions(this.phone.width, this.phone.height),
            width = ref[0],
            height = ref[1],
            paddingOffset = (null != (ref1 = this._device) ? ref1.paddingOffset : void 0) || 0,
            phoneScale = _.min([(window.innerWidth - 2 * (this.padding + paddingOffset)) / width, (window.innerHeight - 2 * (this.padding + paddingOffset)) / height]),
            phoneScale > 1 && (phoneScale = 1),
            this.emit("change:phoneScale", phoneScale),
            this._deviceScale && "fit" !== this._deviceScale ? this._deviceScale : phoneScale
        }
        ,
        DeviceComponent.define("contentScale", {
            get: function() {
                return this._contentScale || 1
            },
            set: function(contentScale) {
                return this.setContentScale(contentScale, !1)
            }
        }),
        DeviceComponent.prototype.setContentScale = function(contentScale, animate) {
            if (null == animate && (animate = !1),
            contentScale = parseFloat(contentScale),
            !(contentScale <= 0) && contentScale !== this._contentScale)
                return this._contentScale = contentScale,
                animate ? this.content.animate(_.extend(this.animationOptions, {
                    properties: {
                        scale: this._contentScale
                    }
                })) : this.content.scale = this._contentScale,
                this._update(),
                this.emit("change:contentScale")
        }
        ,
        DeviceComponent.define("orientation", {
            get: function() {
                return Utils.isMobile() ? window.orientation : this._orientation || 0
            },
            set: function(orientation) {
                return this.setOrientation(orientation, !1)
            }
        }),
        DeviceComponent.prototype.setOrientation = function(orientation, animate) {
            var animation, contentProperties, phoneProperties;
            if (null == animate && (animate = !1),
            Utils.framerStudioVersion() === oldDeviceMaxVersion && (orientation *= -1),
            "portrait" === orientation && (orientation = 0),
            "landscape" === orientation && (orientation = 90),
            !this._shouldRenderFullScreen() && (orientation = parseInt(orientation),
            (0 === orientation || 90 === orientation || orientation === -90) && orientation !== this._orientation))
                return this._orientation = orientation,
                phoneProperties = {
                    rotationZ: -this._orientation,
                    scale: this._calculatePhoneScale()
                },
                contentProperties = this._viewportOrientationOffset(),
                this.hands.animateStop(),
                this.viewport.animateStop(),
                animate ? (animation = this.hands.animate(_.extend(this.animationOptions, {
                    properties: phoneProperties
                })),
                this.viewport.animate(_.extend(this.animationOptions, {
                    properties: contentProperties
                })),
                animation.on(Events.AnimationEnd, function(_this) {
                    return function() {
                        return _this._update()
                    }
                }(this))) : (this.hands.props = phoneProperties,
                this.viewport.props = contentProperties,
                this._update()),
                0 !== this._orientation && (this.handsImageLayer.image = ""),
                this.emit("change:orientation", this._orientation)
        }
        ,
        DeviceComponent.prototype._viewportOrientationOffset = function() {
            var contentProperties, height, offset, ref, ref1, width, x, y;
            return ref = this._getOrientationDimensions(this._device.screenWidth, this._device.screenHeight),
            width = ref[0],
            height = ref[1],
            this.content.width = width,
            this.content.height = height,
            offset = (this.screen.width - width) / 2,
            this._orientation === -90 && (offset *= -1),
            ref1 = [0, 0],
            x = ref1[0],
            y = ref1[1],
            this.isLandscape && (x = offset,
            y = offset),
            contentProperties = {
                rotationZ: this._orientation,
                x: x,
                y: y
            }
        }
        ,
        DeviceComponent.prototype._orientationChange = function() {
            return this._orientation = window.orientation,
            this._update(),
            this.emit("change:orientation", window.orientation)
        }
        ,
        DeviceComponent.define("isPortrait", {
            get: function() {
                return Math.abs(this.orientation) % 180 === 0
            }
        }),
        DeviceComponent.define("isLandscape", {
            get: function() {
                return !this.isPortrait
            }
        }),
        DeviceComponent.define("orientationName", {
            get: function() {
                return this.isPortrait ? "portrait" : this.isLandscape ? "landscape" : void 0
            },
            set: function(orientationName) {
                return this.setOrientation(orientationName, !1)
            }
        }),
        DeviceComponent.prototype.rotateLeft = function(animate) {
            if (null == animate && (animate = !0),
            90 !== this.orientation)
                return this.setOrientation(this.orientation + 90, animate)
        }
        ,
        DeviceComponent.prototype.rotateRight = function(animate) {
            if (null == animate && (animate = !0),
            this.orientation !== -90)
                return this.setOrientation(this.orientation - 90, animate)
        }
        ,
        DeviceComponent.prototype._getOrientationDimensions = function(width, height) {
            return this.isLandscape ? [height, width] : [width, height]
        }
        ,
        DeviceComponent.prototype.handSwitchingSupported = function() {
            return void 0 !== this._device.hands
        }
        ,
        DeviceComponent.prototype.nextHand = function() {
            var hand, hands, nextHand, nextHandIndex;
            if (0 === this.hands.rotationZ)
                return !!(this.handSwitchingSupported() && (hands = _.keys(this._device.hands),
                hands.length > 0)) && (nextHandIndex = hands.indexOf(this.selectedHand) + 1,
                nextHand = "",
                nextHandIndex < hands.length && (nextHand = hands[nextHandIndex]),
                hand = this.setHand(nextHand),
                this._update(),
                hand)
        }
        ,
        DeviceComponent.prototype.setHand = function(hand) {
            var handData;
            return this.selectedHand = hand,
            hand && this.handSwitchingSupported() ? (handData = this._device.hands[hand],
            handData ? (this.hands.width = handData.width,
            this.hands.height = handData.height,
            this.hands.center(),
            this.phone.center(),
            this.handsImageLayer.size = this.hands.size,
            this.handsImageLayer.y = 0,
            handData.offset && (this.handsImageLayer.y = handData.offset),
            this.handsImageLayer.image = this.handImageUrl(hand),
            hand) : void 0) : this.handsImageLayer.image = ""
        }
        ,
        DeviceComponent.prototype.handImageUrl = function(hand) {
            var resourceUrl;
            return resourceUrl = "//resources.framerjs.com/static/DeviceResources",
            Utils.isFileUrl(window.location.href) && (resourceUrl = "http://" + resourceUrl),
            Utils.isFramerStudio() && window.FramerStudioInfo && Utils.framerStudioVersion() >= newDeviceMinVersion ? (resourceUrl = window.FramerStudioInfo.deviceImagesUrl,
            resourceUrl + "/" + hand + ".png") : Utils.isWebPSupported() ? resourceUrl + "/" + hand + ".webp" : Utils.isJP2Supported() ? resourceUrl + "/" + hand + ".jp2" : resourceUrl + "/" + hand + ".png"
        }
        ,
        DeviceComponent.prototype.toInspect = function() {
            return "<Device '" + this.deviceType + "' " + this.screenSize.width + "x" + this.screenSize.height + ">"
        }
        ,
        DeviceComponent
    }(BaseClass),
    googlePixelReleaseVersion = 75,
    desktopReleaseVersion = 70,
    newDeviceMinVersion = 53,
    oldDeviceMaxVersion = 52,
    iPadAir2BaseDevice = {
        deviceImageWidth: 1856,
        deviceImageHeight: 2608,
        deviceImageCompression: !0,
        screenWidth: 1536,
        screenHeight: 2048,
        deviceType: "tablet",
        minStudioVersion: newDeviceMinVersion
    },
    iPadMini4BaseDevice = {
        deviceImageWidth: 1936,
        deviceImageHeight: 2688,
        deviceImageCompression: !0,
        screenWidth: 1536,
        screenHeight: 2048,
        deviceType: "tablet",
        minStudioVersion: newDeviceMinVersion
    },
    iPadProBaseDevice = {
        deviceImageWidth: 2448,
        deviceImageHeight: 3432,
        deviceImageCompression: !0,
        screenWidth: 2048,
        screenHeight: 2732,
        deviceType: "tablet",
        minStudioVersion: newDeviceMinVersion
    },
    iPhone7BaseDevice = {
        deviceImageWidth: 874,
        deviceImageHeight: 1792,
        deviceImageCompression: !0,
        screenWidth: 750,
        screenHeight: 1334,
        deviceType: "phone",
        minStudioVersion: 71,
        hands: {
            "iphone-hands-2": {
                width: 2400,
                height: 3740
            },
            "iphone-hands-1": {
                width: 2400,
                height: 3740
            }
        }
    },
    iPhone7PlusBaseDevice = {
        deviceImageWidth: 1452,
        deviceImageHeight: 2968,
        deviceImageCompression: !0,
        screenWidth: 1242,
        screenHeight: 2208,
        deviceType: "phone",
        minStudioVersion: 71,
        hands: {
            "iphone-hands-2": {
                width: 3987,
                height: 6212
            },
            "iphone-hands-1": {
                width: 3987,
                height: 6212
            }
        }
    },
    iPhone6BaseDevice = {
        deviceImageWidth: 874,
        deviceImageHeight: 1792,
        deviceImageCompression: !0,
        screenWidth: 750,
        screenHeight: 1334,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 2400,
                height: 3740
            },
            "iphone-hands-1": {
                width: 2400,
                height: 3740
            }
        }
    },
    iPhone6PlusBaseDevice = {
        deviceImageWidth: 1452,
        deviceImageHeight: 2968,
        deviceImageCompression: !0,
        screenWidth: 1242,
        screenHeight: 2208,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 3987,
                height: 6212
            },
            "iphone-hands-1": {
                width: 3987,
                height: 6212
            }
        }
    },
    iPhone5BaseDevice = {
        deviceImageWidth: 768,
        deviceImageHeight: 1612,
        deviceImageCompression: !0,
        screenWidth: 640,
        screenHeight: 1136,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 2098,
                height: 3269,
                offset: 19
            },
            "iphone-hands-1": {
                width: 2098,
                height: 3269,
                offset: 19
            }
        }
    },
    iPhone5CBaseDevice = {
        deviceImageWidth: 776,
        deviceImageHeight: 1620,
        deviceImageCompression: !0,
        screenWidth: 640,
        screenHeight: 1136,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 2098,
                height: 3269,
                offset: 28
            },
            "iphone-hands-1": {
                width: 2098,
                height: 3269,
                offset: 28
            }
        }
    },
    Nexus4BaseDevice = {
        deviceImageWidth: 860,
        deviceImageHeight: 1668,
        deviceImageCompression: !0,
        screenWidth: 768,
        screenHeight: 1280,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 2362,
                height: 3681,
                offset: -52
            },
            "iphone-hands-1": {
                width: 2362,
                height: 3681,
                offset: -52
            }
        }
    },
    Nexus5BaseDevice = {
        deviceImageWidth: 1204,
        deviceImageHeight: 2432,
        deviceImageCompression: !0,
        screenWidth: 1080,
        screenHeight: 1920,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 3292,
                height: 5130,
                offset: 8
            },
            "iphone-hands-1": {
                width: 3292,
                height: 5130,
                offset: 8
            }
        }
    },
    Nexus6BaseDevice = {
        deviceImageWidth: 1576,
        deviceImageHeight: 3220,
        deviceImageCompression: !0,
        screenWidth: 1440,
        screenHeight: 2560,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 4304,
                height: 6707,
                offset: 8
            },
            "iphone-hands-1": {
                width: 4304,
                height: 6707,
                offset: 8
            }
        }
    },
    PixelBaseDevice = {
        deviceImageWidth: 1224,
        deviceImageHeight: 2492,
        deviceImageCompression: !0,
        screenWidth: 1080,
        screenHeight: 1920,
        deviceType: "phone",
        minStudioVersion: googlePixelReleaseVersion,
        hands: {
            "iphone-hands-2": {
                width: 3344,
                height: 5211,
                offset: 23
            },
            "iphone-hands-1": {
                width: 3344,
                height: 5211,
                offset: 23
            }
        }
    },
    Nexus9BaseDevice = {
        deviceImageWidth: 1896,
        deviceImageHeight: 2648,
        deviceImageCompression: !0,
        screenWidth: 1536,
        screenHeight: 2048,
        deviceType: "tablet",
        minStudioVersion: newDeviceMinVersion
    },
    HTCa9BaseDevice = {
        deviceImageWidth: 1252,
        deviceImageHeight: 2592,
        deviceImageCompression: !0,
        screenWidth: 1080,
        screenHeight: 1920,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 3436,
                height: 5354,
                offset: 36
            },
            "iphone-hands-1": {
                width: 3436,
                height: 5354,
                offset: 36
            }
        }
    },
    HTCm8BaseDevice = {
        deviceImageWidth: 1232,
        deviceImageHeight: 2572,
        deviceImageCompression: !0,
        screenWidth: 1080,
        screenHeight: 1920,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 3436,
                height: 5354,
                offset: 12
            },
            "iphone-hands-1": {
                width: 3436,
                height: 5354,
                offset: 12
            }
        }
    },
    MSFTLumia950BaseDevice = {
        deviceImageWidth: 1660,
        deviceImageHeight: 3292,
        deviceImageCompression: !0,
        screenWidth: 1440,
        screenHeight: 2560,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 4494,
                height: 7003,
                offset: -84
            },
            "iphone-hands-1": {
                width: 4494,
                height: 7003,
                offset: -84
            }
        }
    },
    SamsungGalaxyNote5BaseDevice = {
        deviceImageWidth: 1572,
        deviceImageHeight: 3140,
        deviceImageCompression: !0,
        screenWidth: 1440,
        screenHeight: 2560,
        deviceType: "phone",
        minStudioVersion: newDeviceMinVersion,
        hands: {
            "iphone-hands-2": {
                width: 4279,
                height: 6668,
                offset: -24
            },
            "iphone-hands-1": {
                width: 4279,
                height: 6668,
                offset: -84
            }
        }
    },
    AppleWatchSeries242Device = {
        deviceImageWidth: 512,
        deviceImageHeight: 990,
        deviceImageCompression: !0,
        screenWidth: 312,
        screenHeight: 390,
        minStudioVersion: 71
    },
    AppleWatchSeries238Device = {
        deviceImageWidth: 472,
        deviceImageHeight: 772,
        deviceImageCompression: !0,
        screenWidth: 272,
        screenHeight: 340,
        minStudioVersion: 71
    },
    AppleWatch42Device = {
        deviceImageWidth: 512,
        deviceImageHeight: 990,
        deviceImageCompression: !0,
        screenWidth: 312,
        screenHeight: 390,
        minStudioVersion: newDeviceMinVersion
    },
    AppleWatch38Device = {
        deviceImageWidth: 472,
        deviceImageHeight: 772,
        deviceImageCompression: !0,
        screenWidth: 272,
        screenHeight: 340,
        minStudioVersion: newDeviceMinVersion
    },
    AppleWatch38BlackLeatherDevice = {
        deviceImageWidth: 472,
        deviceImageHeight: 796,
        deviceImageCompression: !0,
        screenWidth: 272,
        screenHeight: 340,
        minStudioVersion: newDeviceMinVersion
    },
    AppleMacBook = {
        deviceImageWidth: 3084,
        deviceImageHeight: 1860,
        deviceImageCompression: !0,
        screenWidth: 2304,
        screenHeight: 1440,
        deviceType: "computer",
        minStudioVersion: desktopReleaseVersion
    },
    AppleMacBookAir = {
        deviceImageWidth: 2e3,
        deviceImageHeight: 1220,
        deviceImageCompression: !0,
        screenWidth: 1440,
        screenHeight: 900,
        deviceType: "computer",
        minStudioVersion: desktopReleaseVersion
    },
    AppleMacBookPro = {
        deviceImageWidth: 3820,
        deviceImageHeight: 2320,
        deviceImageCompression: !0,
        screenWidth: 2880,
        screenHeight: 1800,
        deviceType: "computer",
        minStudioVersion: desktopReleaseVersion
    },
    AppleIMac = {
        deviceImageWidth: 2800,
        deviceImageHeight: 2940,
        deviceImageCompression: !0,
        screenWidth: 2560,
        screenHeight: 1440,
        deviceType: "computer",
        minStudioVersion: desktopReleaseVersion
    },
    DellXPS = {
        deviceImageWidth: 5200,
        deviceImageHeight: 3040,
        deviceImageCompression: !0,
        screenWidth: 3840,
        screenHeight: 2160,
        deviceType: "computer",
        minStudioVersion: desktopReleaseVersion
    },
    SonyW85OC = {
        deviceImageWidth: 1320,
        deviceImageHeight: 860,
        deviceImageCompression: !0,
        screenWidth: 1280,
        screenHeight: 720,
        minStudioVersion: desktopReleaseVersion
    },
    old_iPhone6BaseDevice = {
        deviceImageWidth: 870,
        deviceImageHeight: 1738,
        deviceImageCompression: !0,
        screenWidth: 750,
        screenHeight: 1334,
        deviceType: "phone",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_iPhone6BaseDeviceHand = _.extend({}, old_iPhone6BaseDevice, {
        deviceImageWidth: 1988,
        deviceImageHeight: 2368,
        deviceImageCompression: !0,
        paddingOffset: -150,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_iPhone6PlusBaseDevice = {
        deviceImageWidth: 1460,
        deviceImageHeight: 2900,
        deviceImageCompression: !0,
        screenWidth: 1242,
        screenHeight: 2208,
        deviceType: "phone",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_iPhone6PlusBaseDeviceHand = _.extend({}, old_iPhone6PlusBaseDevice, {
        deviceImageWidth: 3128,
        deviceImageHeight: 3487,
        deviceImageCompression: !0,
        paddingOffset: -150,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_iPhone5BaseDevice = {
        deviceImageWidth: 780,
        deviceImageHeight: 1608,
        deviceImageCompression: !0,
        screenWidth: 640,
        screenHeight: 1136,
        deviceType: "phone",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_iPhone5BaseDeviceHand = _.extend({}, old_iPhone5BaseDevice, {
        deviceImageWidth: 1884,
        deviceImageHeight: 2234,
        deviceImageCompression: !0,
        paddingOffset: -200,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_iPhone5CBaseDevice = {
        deviceImageWidth: 776,
        deviceImageHeight: 1612,
        deviceImageCompression: !0,
        screenWidth: 640,
        screenHeight: 1136,
        deviceType: "phone",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_iPhone5CBaseDeviceHand = _.extend({}, old_iPhone5CBaseDevice, {
        deviceImageWidth: 1894,
        deviceImageHeight: 2244,
        deviceImageCompression: !0,
        paddingOffset: -200,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_iPadMiniBaseDevice = {
        deviceImageWidth: 872,
        deviceImageHeight: 1292,
        deviceImageCompression: !0,
        screenWidth: 768,
        screenHeight: 1024,
        deviceType: "tablet",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_iPadMiniBaseDeviceHand = _.extend({}, old_iPadMiniBaseDevice, {
        deviceImageWidth: 1380,
        deviceImageHeight: 2072,
        deviceImageCompression: !0,
        paddingOffset: -120,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_iPadAirBaseDevice = {
        deviceImageWidth: 1769,
        deviceImageHeight: 2509,
        deviceImageCompression: !0,
        screenWidth: 1536,
        screenHeight: 2048,
        deviceType: "tablet",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_iPadAirBaseDeviceHand = _.extend({}, old_iPadAirBaseDevice, {
        deviceImageWidth: 4744,
        deviceImageHeight: 4101,
        deviceImageCompression: !0,
        paddingOffset: -120,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_Nexus5BaseDevice = {
        deviceImageWidth: 1208,
        deviceImageHeight: 2440,
        deviceImageCompression: !0,
        screenWidth: 1080,
        screenHeight: 1920,
        deviceType: "phone",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_Nexus5BaseDeviceHand = _.extend({}, old_Nexus5BaseDevice, {
        deviceImageWidth: 2692,
        deviceImageHeight: 2996,
        deviceImageCompression: !0,
        paddingOffset: -120,
        maxStudioVersion: oldDeviceMaxVersion
    }),
    old_Nexus9BaseDevice = {
        deviceImageWidth: 1733,
        deviceImageHeight: 2575,
        deviceImageCompression: !0,
        screenWidth: 1536,
        screenHeight: 2048,
        deviceType: "tablet",
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_AppleWatch42Device = {
        deviceImageWidth: 552,
        deviceImageHeight: 938,
        deviceImageCompression: !0,
        screenWidth: 312,
        screenHeight: 390,
        maxStudioVersion: oldDeviceMaxVersion
    },
    old_AppleWatch38Device = {
        deviceImageWidth: 508,
        deviceImageHeight: 900,
        deviceImageCompression: !0,
        screenWidth: 272,
        screenHeight: 340,
        maxStudioVersion: oldDeviceMaxVersion
    },
    Devices = {
        fullscreen: {
            name: "Fullscreen",
            deviceType: "desktop",
            backgroundColor: "transparent"
        },
        custom: {
            name: "Custom",
            deviceImageWidth: 874,
            deviceImageHeight: 1792,
            screenWidth: 750,
            screenHeight: 1334,
            deviceType: "phone"
        },
        "apple-ipad-air-2-silver": _.clone(iPadAir2BaseDevice),
        "apple-ipad-air-2-gold": _.clone(iPadAir2BaseDevice),
        "apple-ipad-air-2-space-gray": _.clone(iPadAir2BaseDevice),
        "apple-ipad-mini-4-silver": _.clone(iPadMini4BaseDevice),
        "apple-ipad-mini-4-gold": _.clone(iPadMini4BaseDevice),
        "apple-ipad-mini-4-space-gray": _.clone(iPadMini4BaseDevice),
        "apple-ipad-pro-silver": _.clone(iPadProBaseDevice),
        "apple-ipad-pro-gold": _.clone(iPadProBaseDevice),
        "apple-ipad-pro-space-gray": _.clone(iPadProBaseDevice),
        "apple-iphone-7-gold": _.clone(iPhone7BaseDevice),
        "apple-iphone-7-rose-gold": _.clone(iPhone7BaseDevice),
        "apple-iphone-7-silver": _.clone(iPhone7BaseDevice),
        "apple-iphone-7-black": _.clone(iPhone7BaseDevice),
        "apple-iphone-7-jet-black": _.clone(iPhone7BaseDevice),
        "apple-iphone-7-plus-gold": _.clone(iPhone7PlusBaseDevice),
        "apple-iphone-7-plus-rose-gold": _.clone(iPhone7PlusBaseDevice),
        "apple-iphone-7-plus-silver": _.clone(iPhone7PlusBaseDevice),
        "apple-iphone-7-plus-black": _.clone(iPhone7PlusBaseDevice),
        "apple-iphone-7-plus-jet-black": _.clone(iPhone7PlusBaseDevice),
        "apple-iphone-6s-gold": _.clone(iPhone6BaseDevice),
        "apple-iphone-6s-rose-gold": _.clone(iPhone6BaseDevice),
        "apple-iphone-6s-silver": _.clone(iPhone6BaseDevice),
        "apple-iphone-6s-space-gray": _.clone(iPhone6BaseDevice),
        "apple-iphone-6s-plus-gold": _.clone(iPhone6PlusBaseDevice),
        "apple-iphone-6s-plus-rose-gold": _.clone(iPhone6PlusBaseDevice),
        "apple-iphone-6s-plus-silver": _.clone(iPhone6PlusBaseDevice),
        "apple-iphone-6s-plus-space-gray": _.clone(iPhone6PlusBaseDevice),
        "apple-iphone-5s-gold": _.clone(iPhone5BaseDevice),
        "apple-iphone-5s-silver": _.clone(iPhone5BaseDevice),
        "apple-iphone-5s-space-gray": _.clone(iPhone5BaseDevice),
        "apple-iphone-5c-blue": _.clone(iPhone5CBaseDevice),
        "apple-iphone-5c-green": _.clone(iPhone5CBaseDevice),
        "apple-iphone-5c-red": _.clone(iPhone5CBaseDevice),
        "apple-iphone-5c-white": _.clone(iPhone5CBaseDevice),
        "apple-iphone-5c-yellow": _.clone(iPhone5CBaseDevice),
        "apple-watch-series-2-38mm-black-steel-black": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-edition": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-rose-gold-aluminum-midnight-blue": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-cocoa": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-concrete": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-ocean-blue": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-red": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-turquoise": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-white": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-silver-aluminum-yellow": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-space-gray-aluminum-black": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-sport-aluminum-walnut": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-38mm-steel-white": _.clone(AppleWatchSeries238Device),
        "apple-watch-series-2-42mm-edition": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-gold-aluminum-cocoa": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-rose-gold-aluminum-midnight-blue": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-concrete": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-green": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-light-pink": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-ocean-blue": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-pink-sand": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-red": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-turquoise": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-white": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-silver-aluminum-yellow": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-space-black-steel-black": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-space-gray-aluminum-black": _.clone(AppleWatchSeries242Device),
        "apple-watch-series-2-42mm-steel-white": _.clone(AppleWatchSeries242Device),
        "apple-watch-nike-plus-38mm-silver-aluminum-flat-silver-volt": _.clone(AppleWatchSeries238Device),
        "apple-watch-nike-plus-38mm-silver-aluminum-flat-silver-white": _.clone(AppleWatchSeries238Device),
        "apple-watch-nike-plus-38mm-space-gray-aluminum-black-cool-gray": _.clone(AppleWatchSeries238Device),
        "apple-watch-nike-plus-38mm-space-gray-aluminum-black-volt": _.clone(AppleWatchSeries238Device),
        "apple-watch-nike-plus-42mm-silver-aluminum-flat-silver-volt": _.clone(AppleWatchSeries242Device),
        "apple-watch-nike-plus-42mm-silver-aluminum-flat-silver-white": _.clone(AppleWatchSeries242Device),
        "apple-watch-nike-plus-42mm-space-gray-aluminum-black-cool-gray": _.clone(AppleWatchSeries242Device),
        "apple-watch-nike-plus-42mm-space-gray-aluminum-black-volt": _.clone(AppleWatchSeries242Device),
        "apple-watch-38mm-gold-black-leather-closed": _.clone(AppleWatch38BlackLeatherDevice),
        "apple-watch-38mm-rose-gold-black-leather-closed": _.clone(AppleWatch38BlackLeatherDevice),
        "apple-watch-38mm-stainless-steel-black-leather-closed": _.clone(AppleWatch38BlackLeatherDevice),
        "apple-watch-38mm-black-steel-black-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-gold-midnight-blue-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-rose-gold-lavender-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-blue-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-fog-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-green-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-red-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-walnut-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-white-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-gold-antique-white-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-aluminum-rose-gold-stone-closed": _.clone(AppleWatch38Device),
        "apple-watch-38mm-sport-space-gray-black-closed": _.clone(AppleWatch38Device),
        "apple-watch-42mm-black-steel-black-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-gold-black-leather-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-gold-midnight-blue-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-rose-gold-black-leather-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-rose-gold-lavender-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-blue-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-fog-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-green-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-red-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-walnut-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-white-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-gold-antique-white-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-aluminum-rose-gold-stone-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-sport-space-gray-black-closed": _.clone(AppleWatch42Device),
        "apple-watch-42mm-stainless-steel-black-leather-closed": _.clone(AppleWatch42Device),
        "google-nexus-4": _.clone(Nexus4BaseDevice),
        "google-nexus-5x": _.clone(Nexus5BaseDevice),
        "google-nexus-6p": _.clone(Nexus6BaseDevice),
        "google-nexus-9": _.clone(Nexus9BaseDevice),
        "google-pixel-quite-black": _.clone(PixelBaseDevice),
        "google-pixel-really-blue": _.clone(PixelBaseDevice),
        "google-pixel-very-silver": _.clone(PixelBaseDevice),
        "htc-one-a9-black": _.clone(HTCa9BaseDevice),
        "htc-one-a9-white": _.clone(HTCa9BaseDevice),
        "htc-one-m8-black": _.clone(HTCm8BaseDevice),
        "htc-one-m8-gold": _.clone(HTCm8BaseDevice),
        "htc-one-m8-silver": _.clone(HTCm8BaseDevice),
        "microsoft-lumia-950-black": _.clone(MSFTLumia950BaseDevice),
        "microsoft-lumia-950-white": _.clone(MSFTLumia950BaseDevice),
        "samsung-galaxy-note-5-black": _.clone(SamsungGalaxyNote5BaseDevice),
        "samsung-galaxy-note-5-gold": _.clone(SamsungGalaxyNote5BaseDevice),
        "samsung-galaxy-note-5-pink": _.clone(SamsungGalaxyNote5BaseDevice),
        "samsung-galaxy-note-5-silver-titanium": _.clone(SamsungGalaxyNote5BaseDevice),
        "samsung-galaxy-note-5-white": _.clone(SamsungGalaxyNote5BaseDevice),
        "apple-macbook": _.clone(AppleMacBook),
        "apple-macbook-air": _.clone(AppleMacBookAir),
        "apple-macbook-pro": _.clone(AppleMacBookPro),
        "dell-xps": _.clone(DellXPS),
        "apple-imac": _.clone(AppleIMac),
        "sony-w85Oc": _.clone(SonyW85OC),
        "desktop-safari-1024-600": {
            deviceType: "browser",
            name: "Desktop Safari 1024 x 600",
            screenWidth: 1024,
            screenHeight: 600,
            deviceImageWidth: 1136,
            deviceImageHeight: 760,
            deviceImageCompression: !0,
            backgroundColor: "white"
        },
        "desktop-safari-1280-800": {
            deviceType: "browser",
            name: "Desktop Safari 1280 x 800",
            screenWidth: 1280,
            screenHeight: 800,
            deviceImageWidth: 1392,
            deviceImageHeight: 960,
            deviceImageCompression: !0,
            backgroundColor: "white"
        },
        "desktop-safari-1440-900": {
            deviceType: "browser",
            name: "Desktop Safari 1440 x 900",
            screenWidth: 1440,
            screenHeight: 900,
            deviceImageWidth: 1552,
            deviceImageHeight: 1060,
            deviceImageCompression: !0,
            backgroundColor: "white"
        },
        "iphone-6-spacegray": _.clone(old_iPhone6BaseDevice),
        "iphone-6-spacegray-hand": _.clone(old_iPhone6BaseDeviceHand),
        "iphone-6-silver": _.clone(old_iPhone6BaseDevice),
        "iphone-6-silver-hand": _.clone(old_iPhone6BaseDeviceHand),
        "iphone-6-gold": _.clone(old_iPhone6BaseDevice),
        "iphone-6-gold-hand": _.clone(old_iPhone6BaseDeviceHand),
        "iphone-6plus-spacegray": _.clone(old_iPhone6PlusBaseDevice),
        "iphone-6plus-spacegray-hand": _.clone(old_iPhone6PlusBaseDeviceHand),
        "iphone-6plus-silver": _.clone(old_iPhone6PlusBaseDevice),
        "iphone-6plus-silver-hand": _.clone(old_iPhone6PlusBaseDeviceHand),
        "iphone-6plus-gold": _.clone(old_iPhone6PlusBaseDevice),
        "iphone-6plus-gold-hand": _.clone(old_iPhone6PlusBaseDeviceHand),
        "iphone-5s-spacegray": _.clone(old_iPhone5BaseDevice),
        "iphone-5s-spacegray-hand": _.clone(old_iPhone5BaseDeviceHand),
        "iphone-5s-silver": _.clone(old_iPhone5BaseDevice),
        "iphone-5s-silver-hand": _.clone(old_iPhone5BaseDeviceHand),
        "iphone-5s-gold": _.clone(old_iPhone5BaseDevice),
        "iphone-5s-gold-hand": _.clone(old_iPhone5BaseDeviceHand),
        "iphone-5c-green": _.clone(old_iPhone5CBaseDevice),
        "iphone-5c-green-hand": _.clone(old_iPhone5CBaseDeviceHand),
        "iphone-5c-blue": _.clone(old_iPhone5CBaseDevice),
        "iphone-5c-blue-hand": _.clone(old_iPhone5CBaseDeviceHand),
        "iphone-5c-pink": _.clone(old_iPhone5CBaseDevice),
        "iphone-5c-pink-hand": _.clone(old_iPhone5CBaseDeviceHand),
        "iphone-5c-white": _.clone(old_iPhone5CBaseDevice),
        "iphone-5c-white-hand": _.clone(old_iPhone5CBaseDeviceHand),
        "iphone-5c-yellow": _.clone(old_iPhone5CBaseDevice),
        "iphone-5c-yellow-hand": _.clone(old_iPhone5CBaseDeviceHand),
        "ipad-mini-spacegray": _.clone(old_iPadMiniBaseDevice),
        "ipad-mini-spacegray-hand": _.clone(old_iPadMiniBaseDeviceHand),
        "ipad-mini-silver": _.clone(old_iPadMiniBaseDevice),
        "ipad-mini-silver-hand": _.clone(old_iPadMiniBaseDeviceHand),
        "ipad-air-spacegray": _.clone(old_iPadAirBaseDevice),
        "ipad-air-spacegray-hand": _.clone(old_iPadAirBaseDeviceHand),
        "ipad-air-silver": _.clone(old_iPadAirBaseDevice),
        "ipad-air-silver-hand": _.clone(old_iPadAirBaseDeviceHand),
        "nexus-5-black": _.clone(old_Nexus5BaseDevice),
        "nexus-5-black-hand": _.clone(old_Nexus5BaseDeviceHand),
        "nexus-9": _.clone(old_Nexus9BaseDevice),
        "applewatchsport-38-aluminum-sportband-black": _.clone(old_AppleWatch38Device),
        "applewatchsport-38-aluminum-sportband-blue": _.clone(old_AppleWatch38Device),
        "applewatchsport-38-aluminum-sportband-green": _.clone(old_AppleWatch38Device),
        "applewatchsport-38-aluminum-sportband-pink": _.clone(old_AppleWatch38Device),
        "applewatchsport-38-aluminum-sportband-white": _.clone(old_AppleWatch38Device),
        "applewatch-38-black-bracelet": _.clone(old_AppleWatch38Device),
        "applewatch-38-steel-bracelet": _.clone(old_AppleWatch38Device),
        "applewatchedition-38-gold-buckle-blue": _.clone(old_AppleWatch38Device),
        "applewatchedition-38-gold-buckle-gray": _.clone(old_AppleWatch38Device),
        "applewatchedition-38-gold-buckle-red": _.clone(old_AppleWatch38Device),
        "applewatchedition-38-gold-sportband-black": _.clone(old_AppleWatch38Device),
        "applewatchedition-38-gold-sportband-white": _.clone(old_AppleWatch38Device),
        "applewatchsport-42-aluminum-sportband-black": _.clone(old_AppleWatch42Device),
        "applewatchsport-42-aluminum-sportband-blue": _.clone(old_AppleWatch42Device),
        "applewatchsport-42-aluminum-sportband-green": _.clone(old_AppleWatch42Device),
        "applewatchsport-42-aluminum-sportband-pink": _.clone(old_AppleWatch42Device),
        "applewatchsport-42-aluminum-sportband-white": _.clone(old_AppleWatch42Device),
        "applewatch-42-black-bracelet": _.clone(old_AppleWatch42Device),
        "applewatch-42-steel-bracelet": _.clone(old_AppleWatch42Device),
        "applewatchedition-42-gold-buckle-blue": _.clone(old_AppleWatch42Device),
        "applewatchedition-42-gold-buckle-gray": _.clone(old_AppleWatch42Device),
        "applewatchedition-42-gold-buckle-red": _.clone(old_AppleWatch42Device),
        "applewatchedition-42-gold-sportband-black": _.clone(old_AppleWatch42Device),
        "applewatchedition-42-gold-sportband-white": _.clone(old_AppleWatch42Device)
    },
    exports.DeviceComponent.Devices = Devices,
    BuiltInDevices = _.keys(Devices)
}
, function(module, exports, __webpack_require__) {
    var Defaults, Layer, Utils, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    Defaults = __webpack_require__(17).Defaults,
    Layer = __webpack_require__(13).Layer,
    exports.GridComponent = function(superClass) {
        function GridComponent(options) {
            null == options && (options = {}),
            GridComponent.__super__.constructor.call(this, Defaults.getDefaults("GridComponent", options))
        }
        return extend(GridComponent, superClass),
        GridComponent.define("rows", {
            get: function() {
                return this._rows
            },
            set: function(value) {
                return this._rows = value,
                this._render()
            }
        }),
        GridComponent.define("columns", {
            get: function() {
                return this._columns
            },
            set: function(value) {
                return this._columns = value,
                this._render()
            }
        }),
        GridComponent.define("spacing", {
            get: function() {
                return this._spacing || {
                    horizontal: 0,
                    vertical: 0
                }
            },
            set: function(value) {
                return _.isNumber(value) && (value = {
                    horizontal: value,
                    vertical: value
                }),
                this._spacing = value,
                this._render()
            }
        }),
        GridComponent.define("renderCell", {
            get: function() {
                return this._renderCell || this._defaultRenderCell
            },
            set: function(f) {
                if (f !== this._renderCell) {
                    if (!_.isFunction(f))
                        throw Error("GridComponent.renderCell should be a function, not " + typeof f);
                    return this._renderCell = f,
                    this.render()
                }
            }
        }),
        GridComponent.define("cellWidth", {
            get: function() {
                return (this.width - this.spacing.horizontal * (this.columns - 1)) / this.columns
            }
        }),
        GridComponent.define("cellHeight", {
            get: function() {
                return (this.height - this.spacing.vertical * (this.rows - 1)) / this.rows
            }
        }),
        GridComponent.define("cells", {
            get: function() {
                return _.values(this._cells)
            }
        }),
        GridComponent.prototype.cellX = function(row) {
            return row * (this.cellWidth + this.spacing.horizontal)
        }
        ,
        GridComponent.prototype.cellY = function(column) {
            return column * (this.cellHeight + this.spacing.vertical)
        }
        ,
        GridComponent.prototype.cellFrame = function(column, row) {
            var frame;
            return frame = {
                x: this.cellX(column),
                y: this.cellY(row),
                width: this.cellWidth,
                height: this.cellHeight
            }
        }
        ,
        GridComponent.prototype.cell = function(column, row) {
            return this._cells[column + ":" + row]
        }
        ,
        GridComponent.prototype.render = function() {
            return this._render()
        }
        ,
        GridComponent.prototype._render = function() {
            var cell, column, frame, i, ref, results, row;
            for (this._reset(),
            results = [],
            row = i = ref = this.rows - 1; ref <= 0 ? i <= 0 : i >= 0; row = ref <= 0 ? ++i : --i)
                results.push(function() {
                    var j, ref1, results1;
                    for (results1 = [],
                    column = j = ref1 = this.columns - 1; ref1 <= 0 ? j <= 0 : j >= 0; column = ref1 <= 0 ? ++j : --j)
                        frame = this.cellFrame(column, row),
                        cell = new Layer({
                            parent: this,
                            frame: frame,
                            name: "Cell " + column + ":" + row
                        }),
                        this.renderCell(cell, row, column),
                        results1.push(this._cells[column + ":" + row] = cell);
                    return results1
                }
                .call(this));
            return results
        }
        ,
        GridComponent.prototype._defaultRenderCell = function(cell, column, row) {
            var fraction;
            return fraction = column / this.columns + row / this.rows / 2,
            cell.backgroundColor = "#28affa",
            cell.hueRotate = 20 * column + row % this.columns * (20 / (this.columns + 1)),
            Utils.labelLayer(cell, row + ":" + column),
            cell.style.fontSize = "30px"
        }
        ,
        GridComponent.prototype._reset = function() {
            return _.invokeMap(this.cells, "destroy"),
            this._cells = {}
        }
        ,
        GridComponent
    }(Layer)
}
, function(module, exports, __webpack_require__) {
    var AnimationGroup, Events, FlowComponentLayerScrollKey, Layer, LayerStateMachine, LayerStates, Transitions, Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, slice = [].slice;
    Utils = __webpack_require__(4),
    Layer = __webpack_require__(13).Layer,
    Events = __webpack_require__(15).Events,
    LayerStates = __webpack_require__(26).LayerStates,
    LayerStateMachine = __webpack_require__(27).LayerStateMachine,
    AnimationGroup = __webpack_require__(39).AnimationGroup,
    FlowComponentLayerScrollKey = "_flowComponentWrapped",
    Events.TransitionStart = "transitionstart",
    Events.TransitionHalt = "transitionhalt",
    Events.TransitionStop = "transitionstop",
    Events.TransitionEnd = "transitionend",
    exports.FlowComponent = function(superClass) {
        function FlowComponent(layerOrOptions, options) {
            var layer;
            null == layerOrOptions && (layerOrOptions = {}),
            null == options && (options = {}),
            this._runTransition = bind(this._runTransition, this),
            this._handleOverlayTap = bind(this._handleOverlayTap, this),
            this.showPrevious = bind(this.showPrevious, this),
            layer = null,
            layerOrOptions instanceof Layer ? (layer = layerOrOptions,
            options = options) : options = layerOrOptions,
            options = _.defaults({}, options, {
                backgroundColor: "black"
            }),
            options.size || (null == options.width && (options.width = Screen.width),
            null == options.height && (options.height = Screen.height)),
            null == options.clip && (options.clip = !0),
            FlowComponent.__super__.constructor.call(this, options),
            this.reset(),
            this.overlay = new Layer({
                name: "overlay",
                parent: this,
                size: 0,
                backgroundColor: "black",
                visible: !1
            }),
            this.overlay.onTap(this._handleOverlayTap),
            layer ? this.showNext(layer) : this._tempScroll = new ScrollComponent({
                name: "scrollComponent",
                parent: this,
                width: this.width,
                height: this.height
            })
        }
        return extend(FlowComponent, superClass),
        FlowComponent.prototype.reset = function() {
            var i, item, len, ref;
            if (this._stack)
                for (ref = this._stack,
                i = 0,
                len = ref.length; i < len; i++)
                    item = ref[i],
                    item.layer !== this._initial && (item.layer.visible = !1);
            if (this._stack = [],
            this._seen = [],
            this._current = null,
            this._isModal = !1,
            this._initial)
                return this.showNext(this._initial, {
                    animate: !1
                })
        }
        ,
        FlowComponent.define("isModal", {
            get: function() {
                return this._isModal
            }
        }),
        FlowComponent.define("stack", {
            get: function() {
                return this._stack.map(function(item) {
                    return item.layer
                })
            }
        }),
        FlowComponent.define("current", {
            get: function() {
                var ref;
                return null != (ref = this._stack[this._stack.length - 1]) ? ref.layer : void 0
            }
        }),
        FlowComponent.define("previous", {
            get: function() {
                var ref;
                return null != (ref = this._stack[this._stack.length - 2]) ? ref.layer : void 0
            }
        }),
        FlowComponent.define("header", {
            get: function() {
                return this._header
            },
            set: function(layer) {
                if (layer instanceof Layer)
                    return this._header = layer,
                    this._header.name = "header",
                    this._header.parent = this,
                    this._header.x = Align.center,
                    this._header.y = Align.top,
                    this.current ? this._wrapLayer(this.current) : void 0
            }
        }),
        FlowComponent.define("footer", {
            get: function() {
                return this._footer
            },
            set: function(layer) {
                if (layer instanceof Layer)
                    return this._footer = layer,
                    this._footer.name = "footer",
                    this._footer.parent = this,
                    this._footer.x = Align.center,
                    this._footer.y = Align.bottom,
                    this.current ? this._wrapLayer(this.current) : void 0
            }
        }),
        FlowComponent.prototype.transition = function(layer, transitionFunction, options) {
            var layerA, layerB, overlay, ref, template, transition, wrappedLayer;
            if (null == options && (options = {}),
            !layer)
                throw new Error("FlowComponent.transition expects a layer");
            if (!transitionFunction)
                throw new Error("FlowComponent.transition expects transitionFunction");
            if (layer !== this.current)
                return null != (ref = this._tempScroll) && ref.destroy(),
                options = _.defaults({}, options, {
                    animate: this._firstTransition === !0,
                    scroll: !0,
                    modal: !1
                }),
                this._isModal = options.modal,
                layer.visible = !0,
                layer.opacity = 1,
                layer.ignoreEvents = !1,
                wrappedLayer = layer,
                options.scroll && (wrappedLayer = this._wrapLayer(layer)),
                wrappedLayer.parent = this,
                wrappedLayer.visible = !options.animate,
                layerA = this._wrappedLayer(this.current),
                layerB = wrappedLayer,
                overlay = this.overlay,
                template = transitionFunction(this, layerA, layerB, overlay),
                transition = this._buildTransition(template, layerA, layerB, overlay),
                this._runTransition(transition, "forward", options.animate, this.current, layer),
                this._stack.push({
                    layer: layer,
                    transition: transition
                })
        }
        ,
        FlowComponent.prototype.showNext = function(layer, options) {
            return null == options && (options = {}),
            null == this._initial && (this._initial = layer),
            this.transition(layer, Transitions.show, options)
        }
        ,
        FlowComponent.prototype.showPrevious = function(options) {
            var count, i, n, previous, ref;
            if (null == options && (options = {}),
            this.previous && !this.isTransitioning) {
                if (options instanceof Framer._Layer && (options = {}),
                options = _.defaults({}, options, {
                    count: 1,
                    animate: !0
                }),
                options.count > 1)
                    for (count = options.count,
                    n = i = 2,
                    ref = count; 2 <= ref ? i <= ref : i >= ref; n = 2 <= ref ? ++i : --i)
                        this.showPrevious({
                            animate: !1,
                            count: 1
                        });
                return previous = this._stack.pop(),
                this._runTransition(null != previous ? previous.transition : void 0, "back", options.animate, this.current, previous.layer)
            }
        }
        ,
        FlowComponent.prototype.showOverlayCenter = function(layer, options) {
            return null == options && (options = {}),
            this._showOverlay(layer, Transitions.overlayCenter, options)
        }
        ,
        FlowComponent.prototype.showOverlayTop = function(layer, options) {
            return null == options && (options = {}),
            this._showOverlay(layer, Transitions.overlayTop, options)
        }
        ,
        FlowComponent.prototype.showOverlayRight = function(layer, options) {
            return null == options && (options = {}),
            this._showOverlay(layer, Transitions.overlayRight, options)
        }
        ,
        FlowComponent.prototype.showOverlayBottom = function(layer, options) {
            return null == options && (options = {}),
            this._showOverlay(layer, Transitions.overlayBottom, options)
        }
        ,
        FlowComponent.prototype.showOverlayLeft = function(layer, options) {
            return null == options && (options = {}),
            this._showOverlay(layer, Transitions.overlayLeft, options)
        }
        ,
        FlowComponent.prototype._showOverlay = function(layer, transition, options) {
            return null == options && (options = {}),
            this.transition(layer, transition, _.defaults({}, options, {
                animate: !0,
                scroll: !1,
                modal: !1
            }))
        }
        ,
        FlowComponent.prototype._handleOverlayTap = function() {
            if (!this.isModal)
                return this.showPrevious()
        }
        ,
        FlowComponent.prototype._wrapLayer = function(layer) {
            var _addListener, contentInset, height, scroll, width;
            if (scroll = null,
            width = this.width,
            height = this.height,
            this.header && (height = -this.header.height),
            this.footer && (height = -this.footer.height),
            layer[FlowComponentLayerScrollKey])
                scroll = layer[FlowComponentLayerScrollKey];
            else {
                if (layer.width === this.width && layer.height === height)
                    return layer;
                if (layer.width < this.width && layer.height < height)
                    return layer
            }
            return layer instanceof ScrollComponent && (scroll = layer),
            layer.point = Utils.pointZero(),
            scroll || (scroll = new ScrollComponent,
            scroll.name = "scrollComponent",
            scroll.backgroundColor = this.backgroundColor,
            layer[FlowComponentLayerScrollKey] = scroll,
            layer.parent = scroll.content,
            _addListener = layer.addListener,
            layer.on = function() {
                var args, event;
                if (event = arguments[0],
                args = 2 <= arguments.length ? slice.call(arguments, 1) : [],
                _addListener.apply(layer, [event].concat(slice.call(args))),
                event === Events.ScrollStart || event === Events.Scroll || event === Events.ScrollMove || event === Events.ScrollEnd || event === Events.ScrollAnimationDidStart || event === Events.ScrollAnimationDidEnd)
                    return scroll.addListener.apply(scroll, [event].concat(slice.call(args)))
            }
            ),
            scroll.parent = this,
            scroll.size = this.size,
            scroll.scrollHorizontal = layer.width > width,
            scroll.scrollVertical = layer.height > height,
            contentInset = {},
            this.header && (contentInset.top = this.header.height),
            this.footer && (contentInset.bottom = this.footer.height),
            scroll.contentInset = contentInset,
            scroll
        }
        ,
        FlowComponent.prototype._wrappedLayer = function(layer) {
            return layer ? layer[FlowComponentLayerScrollKey] || layer : null
        }
        ,
        FlowComponent.prototype._runTransition = function(transition, direction, animate, from, to) {
            var a, b;
            return "forward" === direction ? (a = from,
            b = to) : (a = to,
            b = from),
            this.emit(Events.TransitionStart, a, b, direction),
            Utils.delay(0, function(_this) {
                return function() {
                    return _this._firstTransition = !0,
                    transition[direction](animate)
                }
            }(this))
        }
        ,
        FlowComponent.prototype._buildTransition = function(template, layerA, layerB, overlay) {
            var transition;
            return transition = {},
            transition.forward = function(_this) {
                return function(animate, callback) {
                    var animations, forwardEvents, group, options;
                    return null == animate && (animate = !0),
                    forwardEvents = function(group, direction) {
                        return group.once(Events.AnimationHalt, function() {
                            return _this.emit(Events.TransitionHalt, layerA, layerB, direction)
                        }),
                        group.once(Events.AnimationStop, function() {
                            return _this.emit(Events.TransitionStop, layerA, layerB, direction)
                        }),
                        group.once(Events.AnimationEnd, function() {
                            return _this.emit(Events.TransitionEnd, layerA, layerB, direction)
                        })
                    }
                    ,
                    animations = [],
                    options = {
                        instant: !animate
                    },
                    layerA && template.layerA && (layerA.visible = !0,
                    animations.push(new Animation(layerA,template.layerA.hide,options))),
                    layerB && template.layerB && (layerB.props = template.layerB.hide,
                    layerB.bringToFront(),
                    layerB.visible = !0,
                    animations.push(new Animation(layerB,template.layerB.show,options))),
                    overlay && template.overlay && (overlay.visible = !0,
                    overlay.ignoreEvents = !1,
                    overlay.placeBehind(layerB),
                    overlay.props = template.overlay.hide,
                    animations.push(new Animation(overlay,template.overlay.show,options))),
                    overlay && template.overlay ? (_this.header && _this.header.placeBehind(overlay),
                    _this.footer && _this.footer.placeBehind(overlay)) : (_this.header && _this.header.bringToFront(),
                    _this.footer && _this.footer.bringToFront()),
                    group = new AnimationGroup(animations),
                    forwardEvents(group, "forward"),
                    group.once(Events.AnimationEnd, function() {
                        if (layerA && template.layerA && (!overlay || !template.overlay))
                            return layerA.visible = !1
                    }),
                    group.start()
                }
            }(this),
            transition.back = function(_this) {
                return function(animate, callback) {
                    var animations, forwardEvents, group, options;
                    return null == animate && (animate = !0),
                    forwardEvents = function(group, direction) {
                        return group.once(Events.AnimationHalt, function() {
                            return _this.emit(Events.TransitionHalt, layerB, layerA, direction)
                        }),
                        group.once(Events.AnimationStop, function() {
                            return _this.emit(Events.TransitionStop, layerB, layerA, direction)
                        }),
                        group.once(Events.AnimationEnd, function() {
                            return _this.emit(Events.TransitionEnd, layerB, layerA, direction)
                        })
                    }
                    ,
                    animations = [],
                    options = {
                        instant: !animate
                    },
                    overlay && template.overlay && (overlay.visible = !0,
                    overlay.ignoreEvents = !0,
                    animations.push(new Animation(overlay,template.overlay.hide,options))),
                    layerA && template.layerA && (layerA.visible = !0,
                    animations.push(new Animation(layerA,template.layerA.show,options))),
                    layerB && template.layerB && (layerB.visible = !0,
                    animations.push(new Animation(layerB,template.layerB.hide,options))),
                    group = new AnimationGroup(animations),
                    group.stopAnimations = !1,
                    forwardEvents(group, "back"),
                    group.once(Events.AnimationEnd, function() {
                        if (layerB && template.layerB)
                            return layerB.visible = !1
                    }),
                    group.start()
                }
            }(this),
            transition
        }
        ,
        FlowComponent.prototype.onTransitionStart = function(cb) {
            return this.on(Events.TransitionStart, cb)
        }
        ,
        FlowComponent.prototype.onTransitionHalt = function(cb) {
            return this.on(Events.TransitionHalt, cb)
        }
        ,
        FlowComponent.prototype.onTransitionStop = function(cb) {
            return this.on(Events.TransitionStop, cb)
        }
        ,
        FlowComponent.prototype.onTransitionEnd = function(cb) {
            return this.on(Events.TransitionEnd, cb)
        }
        ,
        FlowComponent.prototype.onStart = function(cb) {
            return this.onTransitionStart(cb)
        }
        ,
        FlowComponent.prototype.onHalt = function(cb) {
            return this.onTransitionHalt(cb)
        }
        ,
        FlowComponent.prototype.onStop = function(cb) {
            return this.onTransitionStop(cb)
        }
        ,
        FlowComponent.prototype.onEnd = function(cb) {
            return this.onTransitionEnd(cb)
        }
        ,
        FlowComponent
    }(Layer),
    Transitions = {},
    Transitions.show = function(nav, layerA, layerB, overlay) {
        var options, transition;
        return options = {
            curve: "spring(300, 35, 0)"
        },
        transition = {
            layerA: {
                show: {
                    options: options,
                    x: 0,
                    y: 0
                },
                hide: {
                    options: options,
                    x: 0 - (null != layerA ? layerA.width : void 0) / 2,
                    y: 0
                }
            },
            layerB: {
                show: {
                    options: options,
                    x: 0,
                    y: 0
                },
                hide: {
                    options: options,
                    x: layerB.width,
                    y: 0
                }
            }
        }
    }
    ,
    Transitions.overlayCenter = function(nav, layerA, layerB, overlay) {
        var transition;
        return transition = {
            layerB: {
                show: {
                    options: {
                        curve: "spring(500, 35, 0)"
                    },
                    x: Align.center,
                    y: Align.center,
                    scale: 1,
                    opacity: 1
                },
                hide: {
                    options: {
                        curve: "spring(500, 35, 0)"
                    },
                    x: Align.center,
                    y: Align.center,
                    scale: .5,
                    opacity: 0
                }
            },
            overlay: {
                show: {
                    options: {
                        time: .1
                    },
                    opacity: .5,
                    x: 0,
                    y: 0,
                    size: nav.size
                },
                hide: {
                    options: {
                        time: .1
                    },
                    opacity: 0,
                    x: 0,
                    y: 0,
                    size: nav.size
                }
            }
        }
    }
    ,
    Transitions.overlayLeft = function(nav, layerA, layerB, overlay) {
        var transition;
        return transition = {
            layerB: {
                show: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    y: 0,
                    x: 0
                },
                hide: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    y: 0,
                    x: 0 - (null != layerB ? layerB.width : void 0)
                }
            },
            overlay: {
                show: {
                    options: {
                        time: .1
                    },
                    opacity: .5,
                    x: 0,
                    y: 0,
                    size: nav.size
                },
                hide: {
                    options: {
                        time: .1
                    },
                    opacity: 0,
                    x: 0,
                    y: 0,
                    size: nav.size
                }
            }
        }
    }
    ,
    Transitions.overlayRight = function(nav, layerA, layerB, overlay) {
        var transition;
        return transition = {
            layerB: {
                show: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    y: 0,
                    x: (null != nav ? nav.width : void 0) - (null != layerB ? layerB.width : void 0)
                },
                hide: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    y: 0,
                    x: null != nav ? nav.width : void 0
                }
            },
            overlay: {
                show: {
                    options: {
                        time: .1
                    },
                    opacity: .5,
                    x: 0,
                    y: 0,
                    size: nav.size
                },
                hide: {
                    options: {
                        time: .1
                    },
                    opacity: 0,
                    x: 0,
                    y: 0,
                    size: nav.size
                }
            }
        }
    }
    ,
    Transitions.overlayTop = function(nav, layerA, layerB, overlay) {
        var transition;
        return transition = {
            layerB: {
                show: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    x: Align.center,
                    y: 0
                },
                hide: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    x: Align.center,
                    maxY: 0
                }
            },
            overlay: {
                show: {
                    options: {
                        time: .1
                    },
                    opacity: .5,
                    x: 0,
                    y: 0,
                    size: nav.size
                },
                hide: {
                    options: {
                        time: .1
                    },
                    opacity: 0,
                    x: 0,
                    y: 0,
                    size: nav.size
                }
            }
        }
    }
    ,
    Transitions.overlayBottom = function(nav, layerA, layerB, overlay) {
        var transition;
        return transition = {
            layerB: {
                show: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    x: Align.center,
                    y: (null != nav ? nav.height : void 0) - (null != layerB ? layerB.height : void 0)
                },
                hide: {
                    options: {
                        curve: "spring(300, 35, 0)"
                    },
                    x: Align.center,
                    y: null != nav ? nav.height : void 0
                }
            },
            overlay: {
                show: {
                    options: {
                        time: .1
                    },
                    opacity: .5,
                    x: 0,
                    y: 0,
                    size: nav.size
                },
                hide: {
                    options: {
                        time: .1
                    },
                    opacity: 0,
                    x: 0,
                    y: 0,
                    size: nav.size
                }
            }
        }
    }
}
, function(module, exports, __webpack_require__) {
    var SVGLayer, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    SVGLayer = __webpack_require__(38).SVGLayer,
    exports.CircularProgressComponent = function(superClass) {
        function CircularProgressComponent(options) {
            null == options && (options = {}),
            CircularProgressComponent.__super__.constructor.apply(this, arguments),
            this.backgroundColor = null,
            this.rotation = -90,
            this.rails = this.addShape("circle"),
            this.rails.setAttribute("fill", "transparent"),
            this.circle = this.addShape("circle"),
            this.circle.setAttribute("fill", "transparent"),
            this.strokeWidth = 1,
            this.progress = 0,
            this.railsColor = Color.grey(.2),
            this.progressColor = Color.grey(1),
            this.svg.appendChild(this.rails),
            this.svg.appendChild(this.circle),
            this._element.appendChild(this.svg)
        }
        return extend(CircularProgressComponent, superClass),
        CircularProgressComponent.define("radius", {
            get: function() {
                return this.width / 2 - this.strokeWidth / 2
            }
        }),
        CircularProgressComponent.define("strokeWidth", {
            get: function() {
                return this._strokeWidth || 1
            },
            set: function(value) {
                return this._strokeWidth = value,
                this.rails.cx.baseVal.value = this.width / 2,
                this.rails.cy.baseVal.value = this.width / 2,
                this.rails.r.baseVal.value = this.radius,
                this.rails.setAttribute("stroke-width", value),
                this.circle.cx.baseVal.value = this.width / 2,
                this.circle.cy.baseVal.value = this.width / 2,
                this.circle.r.baseVal.value = this.radius,
                this.circle.setAttribute("stroke-width", value)
            }
        }),
        CircularProgressComponent.define("progressColor", {
            get: function() {
                return this._progressColor || Color.grey(1)
            },
            set: function(value) {
                return this.circle.setAttribute("stroke", value)
            }
        }),
        CircularProgressComponent.define("railsColor", {
            get: function() {
                return this._progressColor || Color.grey(.1)
            },
            set: function(value) {
                return this.rails.setAttribute("stroke", value)
            }
        }),
        CircularProgressComponent.define("progress", {
            get: function() {
                return this._progress || 0
            },
            set: function(value) {
                var strokeDashArray, strokeDashOffset;
                return this._progress = Utils.clamp(value, 0, 1),
                strokeDashArray = this.radius * Math.PI * 2,
                strokeDashOffset = (1 - this.progress) * strokeDashArray,
                this.circle.setAttribute("stroke-dasharray", strokeDashArray),
                this.circle.setAttribute("stroke-dashoffset", strokeDashOffset)
            }
        }),
        CircularProgressComponent.prototype.setProgress = function(value, animated, animationOptions) {
            var animationProperties, dynamicTime;
            return null == animated && (animated = !0),
            null == animationOptions && (animationOptions = {}),
            animated ? (dynamicTime = .3 * Math.abs(this.progress - value),
            animationOptions = _.defaults(animationOptions, {
                curve: "linear",
                time: dynamicTime
            }),
            animationProperties = {
                progress: Utils.clamp(value, 0, 1)
            },
            this.animate(animationProperties, animationOptions)) : this.progress = value
        }
        ,
        CircularProgressComponent
    }(SVGLayer)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Events, MIDIComponent, MIDIInput, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    MIDIInput = __webpack_require__(52).MIDIInput,
    Events.MIDIComponentValueChange = "MIDIComponentValueChange",
    MIDIComponent = function(superClass) {
        function MIDIComponent(options) {
            null == options && (options = {}),
            MIDIComponent.__super__.constructor.call(this, options),
            MIDIInput.enabled = !0,
            MIDIInput.onCommand(function(_this) {
                return function(source, timeStamp, data) {
                    var b1, b2, b3, channel, command, data1, data2, info;
                    if (b1 = data[0],
                    b2 = data[1],
                    b3 = data[2],
                    command = 240 & b1,
                    channel = (15 & b1) + 1,
                    data1 = 127 & b2,
                    data2 = 127 & b3,
                    !(176 !== command && 144 !== command && 128 !== command || null != _this.source && _this.source !== source || null != _this.channel && _this.channel !== channel || null != _this.control && _this.control !== data1))
                        return info = {
                            source: source,
                            channel: channel,
                            control: data1
                        },
                        144 !== command && 128 !== command || (info = _.defaults(info, {
                            type: "note"
                        })),
                        _this.emit(Events.MIDIComponentValueChange, _this._modulate(data2), info)
                }
            }(this))
        }
        return extend(MIDIComponent, superClass),
        MIDIComponent.define("min", MIDIComponent.simpleProperty("min", 0)),
        MIDIComponent.define("max", MIDIComponent.simpleProperty("max", 127)),
        MIDIComponent.define("control", MIDIComponent.simpleProperty("control", null)),
        MIDIComponent.define("channel", MIDIComponent.simpleProperty("channel", null)),
        MIDIComponent.define("source", MIDIComponent.simpleProperty("source", null)),
        MIDIComponent.prototype._modulate = function(value) {
            return Utils.modulate(value, [0, 127], [this.min, this.max])
        }
        ,
        MIDIComponent.prototype.onValueChange = function(cb) {
            return this.on(Events.MIDIComponentValueChange, cb)
        }
        ,
        MIDIComponent
    }(BaseClass),
    exports.MIDIComponent = MIDIComponent
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Events, MIDIInput, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    Events.MIDICommand = "midiCommand",
    MIDIInput = function(superClass) {
        function MIDIInput() {
            return this._onmidimessage = bind(this._onmidimessage, this),
            this._requestResolved = bind(this._requestResolved, this),
            MIDIInput.__super__.constructor.apply(this, arguments)
        }
        return extend(MIDIInput, superClass),
        MIDIInput.define("enabled", {
            get: function() {
                var ref;
                return (null != (ref = this._inputs) ? ref.length : void 0) || this._request
            },
            set: function(value) {
                var ref;
                if (value !== this.enabled)
                    return navigator.requestMIDIAccess ? value ? this._request = navigator.requestMIDIAccess().then(this._requestResolved, this._requestRejected) : (null != (ref = this._inputs) && ref.map(close),
                    this._request = null,
                    this._inputs = []) : this._requestRejected()
            }
        }),
        MIDIInput.prototype._requestResolved = function(access) {
            return null == this._inputs && (this._inputs = []),
            access.inputs.forEach(function(_this) {
                return function(input) {
                    return _this._inputs.push(input),
                    input.onmidimessage = _this._onmidimessage(input.id)
                }
            }(this))
        }
        ,
        MIDIInput.prototype._requestRejected = function(error) {
            throw Error("Requesting MIDI access failed: " + (null != error ? error : "not supported by browser"))
        }
        ,
        MIDIInput.prototype._onmidimessage = function(sourceID) {
            return function(_this) {
                return function(message) {
                    return _this.emit(Events.MIDICommand, sourceID, message.timeStamp, message.data)
                }
            }(this)
        }
        ,
        MIDIInput.prototype.onCommand = function(cb) {
            return this.on(Events.MIDICommand, cb)
        }
        ,
        MIDIInput
    }(BaseClass),
    exports.MIDIInput = new MIDIInput
}
, function(module, exports, __webpack_require__) {
    var Config, EventEmitter, Utils, _, getTime, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    Config = __webpack_require__(14).Config,
    EventEmitter = __webpack_require__(7).EventEmitter,
    getTime = function() {
        return 1e3 * Utils.getTime()
    }
    ,
    exports.AnimationLoop = function(superClass) {
        function AnimationLoop() {
            this.start = bind(this.start, this),
            this.delta = 1 / 60,
            this.raf = !0,
            Utils.webkitVersion() > 600 && Utils.webkitVersion() < 601 && (Utils.isFramerStudio() || Utils.isDesktop()) && (this.raf = !1),
            this.maximumListeners = Infinity
        }
        return extend(AnimationLoop, superClass),
        AnimationLoop.prototype.start = function() {
            var _timestamp, animationLoop, tick, update;
            return animationLoop = this,
            _timestamp = getTime(),
            update = function() {
                var delta, timestamp;
                return animationLoop.delta ? delta = animationLoop.delta : (timestamp = getTime(),
                delta = (timestamp - _timestamp) / 1e3,
                _timestamp = timestamp),
                animationLoop.emit("update", delta),
                animationLoop.emit("render", delta)
            }
            ,
            (tick = function(timestamp) {
                return animationLoop.raf ? (update(),
                window.requestAnimationFrame(tick)) : window.setTimeout(function() {
                    return update(),
                    window.requestAnimationFrame(tick)
                }, 0)
            }
            )()
        }
        ,
        AnimationLoop
    }(EventEmitter)
}
, function(module, exports, __webpack_require__) {
    var ChromeAlert, Utils, _, getScaleFromName, resizeFrame, sanitizeLayerName, startsWithNumber;
    _ = __webpack_require__(1)._,
    Utils = __webpack_require__(4),
    ChromeAlert = "Importing layers is currently only supported on Safari. If you really want it to work with Chrome quit it, open a terminal and run:\nopen -a Google Chrome -–allow-file-access-from-files",
    resizeFrame = function(scale, frame) {
        var i, key, len, ref, result;
        if (1 === scale)
            return frame;
        for (result = {},
        ref = ["x", "y", "width", "height"],
        i = 0,
        len = ref.length; i < len; i++)
            key = ref[i],
            frame.hasOwnProperty(key) && (result[key] = frame[key] * scale);
        return result
    }
    ,
    getScaleFromName = function(str) {
        var m, re;
        return re = /@([\d]+|[\d]+.[\d]+)x/,
        m = void 0,
        null !== (m = re.exec(str)) && m[1] ? parseFloat(m[1]) : null
    }
    ,
    startsWithNumber = function(str) {
        return new RegExp("^[0-9]").test(str)
    }
    ,
    sanitizeLayerName = function(name) {
        var i, len, ref, suffix;
        for (ref = ["*", "-", ".png", ".jpg", ".pdf"],
        i = 0,
        len = ref.length; i < len; i++)
            suffix = ref[i],
            _.endsWith(name.toLowerCase(), suffix) && (name = name.slice(0, +(name.length - suffix.length - 1) + 1 || 9e9));
        return name
    }
    ,
    exports.Importer = function() {
        function Importer(path1, scale1, extraLayerProperties) {
            this.path = path1,
            this.scale = null != scale1 ? scale1 : 1,
            this.extraLayerProperties = null != extraLayerProperties ? extraLayerProperties : {},
            this.paths = {
                layerInfo: Utils.pathJoin(this.path, "layers.json"),
                images: Utils.pathJoin(this.path, "images"),
                documentName: this.path.split("/").pop()
            },
            this._createdLayers = [],
            this._createdLayersByName = {}
        }
        return Importer.prototype.load = function() {
            var i, j, layer, layerInfo, layersByName, len, len1, ref, ref1;
            if (layersByName = {},
            layerInfo = this._loadlayerInfo(),
            0 === layerInfo.length)
                throw new Error("Importer: no layers. Do you have at least one layer group?");
            for (layerInfo.map(function(_this) {
                return function(layerItemInfo) {
                    return _this._createLayer(layerItemInfo)
                }
            }(this)),
            ref = this._createdLayers,
            i = 0,
            len = ref.length; i < len; i++)
                layer = ref[i],
                this._correctLayer(layer);
            for (this._correctArtboards(this._createdLayers),
            ref1 = this._createdLayers,
            j = 0,
            len1 = ref1.length; j < len1; j++)
                layer = ref1[j],
                layer.parent || (layer.parent = null);
            return this._createdLayersByName
        }
        ,
        Importer.prototype._loadlayerInfo = function() {
            var importedKey, ref;
            return importedKey = this.paths.documentName + "/layers.json.js",
            (null != (ref = window.__imported__) ? ref.hasOwnProperty(importedKey) : void 0) ? _.cloneDeep(window.__imported__[importedKey]) : Framer.Utils.domLoadJSONSync(this.paths.layerInfo)
        }
        ,
        Importer.prototype._createLayer = function(info, parent) {
            var LayerClass, layer, layerInfo, ref, ref1;
            if (info.layerFrame && (info.layerFrame = resizeFrame(this.scale, info.layerFrame)),
            info.maskFrame && (info.maskFrame = resizeFrame(this.scale, info.maskFrame)),
            null != (null != (ref = info.image) ? ref.frame : void 0) && (info.image.frame = resizeFrame(this.scale, info.image.frame)),
            info.children || (info.children = []),
            LayerClass = Layer,
            layerInfo = {
                shadow: !0,
                name: sanitizeLayerName(info.name),
                frame: info.layerFrame,
                clip: !1,
                backgroundColor: null,
                visible: null == (ref1 = info.visible) || ref1
            },
            _.extend(layerInfo, this.extraLayerProperties),
            info.image && (layerInfo.frame = info.image.frame,
            layerInfo.image = Utils.pathJoin(this.path, info.image.path)),
            info.maskFrame && (layerInfo.clip = !0),
            "artboard" === info.kind && (layerInfo.backgroundColor = info.backgroundColor),
            (null != parent ? parent.contentLayer : void 0) ? layerInfo.parent = parent.contentLayer : parent && (layerInfo.parent = parent),
            startsWithNumber(layerInfo.name))
                throw new Error("Layer or Artboard names can not start with a number: '" + layerInfo.name + "'");
            return layer = new LayerClass(layerInfo),
            layer.name = layerInfo.name,
            layer.__framerImportedFromPath = this.path,
            layerInfo.name.toLowerCase().indexOf("scroll") !== -1 && (layer.scroll = !0),
            layerInfo.name.toLowerCase().indexOf("draggable") !== -1 && (layer.draggable.enabled = !0),
            layer.image || info.children.length || info.maskFrame || (layer.frame = Utils.frameZero()),
            _.clone(info.children).reverse().map(function(_this) {
                return function(info) {
                    return _this._createLayer(info, layer)
                }
            }(this)),
            "artboard" === info.kind ? layer.point = {
                x: 0,
                y: 0
            } : layer.image || info.maskFrame || (layer.frame = layer.contentFrame()),
            layer._info = info,
            this._createdLayers.push(layer),
            this._createdLayersByName[layer.name] = layer
        }
        ,
        Importer.prototype._correctArtboards = function(layers) {
            var i, j, layer, leftMostLayer, len, len1, pointOffset, results;
            for (leftMostLayer = null,
            i = 0,
            len = layers.length; i < len; i++)
                layer = layers[i],
                "artboard" === layer._info.kind && (layer.point = layer._info.layerFrame,
                layer.visible = !0,
                (null === leftMostLayer || layer.x < leftMostLayer.x) && (leftMostLayer = layer));
            if (leftMostLayer) {
                for (pointOffset = leftMostLayer.point,
                results = [],
                j = 0,
                len1 = layers.length; j < len1; j++)
                    layer = layers[j],
                    "artboard" === layer._info.kind ? (layer.x -= pointOffset.x,
                    results.push(layer.y -= pointOffset.y)) : results.push(void 0);
                return results
            }
        }
        ,
        Importer.prototype._correctLayer = function(layer) {
            var traverse;
            if (traverse = function(layer) {
                var child, i, len, ref, results;
                for (layer.parent && (layer.frame = Utils.convertPoint(layer.frame, null, layer.parent)),
                ref = layer.children,
                results = [],
                i = 0,
                len = ref.length; i < len; i++)
                    child = ref[i],
                    results.push(traverse(child));
                return results
            }
            ,
            !layer.parent)
                return traverse(layer)
        }
        ,
        Importer
    }(),
    exports.Importer.load = function(path, scale) {
        var importer;
        return null == scale && (scale = getScaleFromName(path)),
        null == scale && (scale = 1),
        importer = new exports.Importer(path,scale),
        importer.load()
    }
}
, function(module, exports, __webpack_require__) {
    exports.TouchEmulator = __webpack_require__(56),
    exports.MobileScrollFix = __webpack_require__(57),
    exports.ErrorDisplay = __webpack_require__(58),
    exports.OmitNew = __webpack_require__(59),
    exports.Hints = __webpack_require__(60),
    exports.Preloader = __webpack_require__(61),
    exports.ShareInfo = __webpack_require__(62)
}
, function(module, exports, __webpack_require__) {
    var BaseClass, TouchEmulator, Utils, cancelEvent, createTouch, dispatchTouchEvent, touchEmulator, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    BaseClass = __webpack_require__(6).BaseClass,
    createTouch = function(event, identifier, offset) {
        var touch;
        return null == offset && (offset = {
            x: 0,
            y: 0
        }),
        touch = {
            identifier: identifier,
            target: event.target,
            pageX: event.pageX - offset.x,
            pageY: event.pageY - offset.y,
            clientX: event.clientX - offset.x,
            clientY: event.clientY - offset.y,
            screenX: event.screenX - offset.x,
            screenY: event.screenY - offset.y
        }
    }
    ,
    dispatchTouchEvent = function(type, target, event, offset) {
        var touchEvent, touches;
        return null == target && (target = event.target),
        touchEvent = document.createEvent("MouseEvent"),
        touchEvent.initMouseEvent(type, !0, !0, window, event.detail, event.screenX, event.screenY, event.clientX, event.clientY, event.ctrlKey, event.shiftKey, event.altKey, event.metaKey, event.button, event.relatedTarget),
        touches = [],
        touches.push(createTouch(event, 1)),
        offset && touches.push(createTouch(event, 2, offset)),
        touchEvent.touches = touchEvent.changedTouches = touchEvent.targetTouches = touches,
        target.dispatchEvent(touchEvent)
    }
    ,
    cancelEvent = function(event) {
        return event.preventDefault(),
        event.stopPropagation()
    }
    ,
    TouchEmulator = function(superClass) {
        function TouchEmulator() {
            this.mousemovePosition = bind(this.mousemovePosition, this),
            this.mouseout = bind(this.mouseout, this),
            this.mouseup = bind(this.mouseup, this),
            this.mousemove = bind(this.mousemove, this),
            this.mousedown = bind(this.mousedown, this),
            this.keyup = bind(this.keyup, this),
            this.keydown = bind(this.keydown, this);
            var touchPointerInitialOffset;
            this.touchPointerImage = "url('images/cursor-active.png')",
            this.touchPointerImageActive = "url('images/cursor-active.png')",
            this.touchPointerImageSize = 64,
            this.touchPointerInitialOffset = {
                x: 0,
                y: 0
            },
            this.keyPinchCode = 18,
            this.keyPanCode = 91,
            this.context = new Framer.Context({
                name: "TouchEmulator"
            }),
            this.context._element.style.zIndex = 1e4,
            this.wrap = this.context.domEventManager.wrap,
            this.wrap(document).addEventListener("mousedown", this.mousedown, !0),
            this.wrap(document).addEventListener("mousemove", this.mousemove, !0),
            this.wrap(document).addEventListener("mouseup", this.mouseup, !0),
            this.wrap(document).addEventListener("keydown", this.keydown, !0),
            this.wrap(document).addEventListener("keyup", this.keyup, !0),
            this.wrap(document).addEventListener("mouseout", this.mouseout, !0),
            this.isMouseDown = !1,
            this.isPinchKeyDown = !1,
            this.isPanKeyDown = !1,
            touchPointerInitialOffset = this.touchPointerInitialOffset,
            this.context.run(function(_this) {
                return function() {
                    return _this.touchPointLayer = new Layer({
                        width: _this.touchPointerImageSize,
                        height: _this.touchPointerImageSize,
                        backgroundColor: null,
                        opacity: 0
                    }),
                    _this.touchPointLayer.style.backgroundImage = _this.touchPointerImage
                }
            }(this))
        }
        return extend(TouchEmulator, superClass),
        TouchEmulator.prototype.destroy = function() {
            return this.context.reset(),
            this.context = null
        }
        ,
        TouchEmulator.prototype.keydown = function(event) {
            if (event.keyCode === this.keyPinchCode && (this.isPinchKeyDown = !0,
            this.startPoint = this.centerPoint = null,
            this.showTouchCursor(),
            this.touchPointLayer.midX = this.point.x,
            this.touchPointLayer.midY = this.point.y),
            event.keyCode === this.keyPanCode)
                return this.isPanKeyDown = !0,
                cancelEvent(event)
        }
        ,
        TouchEmulator.prototype.keyup = function(event) {
            if (event.keyCode === this.keyPinchCode && (cancelEvent(event),
            this.isPinchKeyDown = !1,
            this.hideTouchCursor()),
            event.keyCode === this.keyPanCode && (cancelEvent(event),
            this.touchPoint && this.point))
                return this.centerPoint = Utils.pointCenter(this.touchPoint, this.point),
                this.isPanKeyDown = !1
        }
        ,
        TouchEmulator.prototype.mousedown = function(event) {
            return this.isMouseDown = !0,
            this.target = event.target,
            this.isPinchKeyDown ? dispatchTouchEvent("touchstart", this.target, event, this.touchPointDelta) : dispatchTouchEvent("touchstart", this.target, event),
            this.touchPointLayer.style.backgroundImage = this.touchPointerImageActive
        }
        ,
        TouchEmulator.prototype.mousemove = function(event) {
            if (this.point = {
                x: event.pageX,
                y: event.pageY
            },
            null == this.startPoint && (this.startPoint = this.point),
            null == this.centerPoint && (this.centerPoint = this.point),
            this.isPinchKeyDown && !this.isPanKeyDown && this.touchPointerInitialOffset && this.centerPoint && (this.touchPoint = Utils.pointAdd(this.touchPointerInitialOffset, this.pinchPoint(this.point, this.centerPoint)),
            this.touchPointDelta = Utils.pointSubtract(this.point, this.touchPoint)),
            this.isPinchKeyDown && this.isPanKeyDown && this.touchPoint && this.touchPointDelta && (this.touchPoint = this.panPoint(this.point, this.touchPointDelta)),
            (this.isPinchKeyDown || this.isPanKeyDown) && this.touchPoint && (this.touchPointLayer.visible = !0,
            this.touchPointLayer.midX = this.touchPoint.x,
            this.touchPointLayer.midY = this.touchPoint.y),
            this.isMouseDown)
                return (this.isPinchKeyDown || this.isPanKeyDown) && this.touchPointDelta ? dispatchTouchEvent("touchmove", this.target, event, this.touchPointDelta) : dispatchTouchEvent("touchmove", this.target, event)
        }
        ,
        TouchEmulator.prototype.mouseup = function(event) {
            return this.isPinchKeyDown || this.isPanKeyDown ? dispatchTouchEvent("touchend", this.target, event, this.touchPointDelta) : dispatchTouchEvent("touchend", this.target, event),
            this.endMultiTouch()
        }
        ,
        TouchEmulator.prototype.mouseout = function(event) {
            var fromElement;
            if (!this.isMouseDown)
                return fromElement = event.relatedTarget || event.toElement,
                fromElement && "HTML" !== fromElement.nodeName ? void 0 : this.endMultiTouch()
        }
        ,
        TouchEmulator.prototype.showTouchCursor = function() {
            return this.point || (this.point = {
                x: event.pageX,
                y: event.pageY
            }),
            this.touchPointLayer.animateStop(),
            this.touchPointLayer.midX = this.point.x,
            this.touchPointLayer.midY = this.point.y,
            this.touchPointLayer.scale = 1.8,
            this.touchPointLayer.animate({
                opacity: 1,
                scale: 1,
                options: {
                    time: .1,
                    curve: "ease-out"
                }
            })
        }
        ,
        TouchEmulator.prototype.hideTouchCursor = function() {
            if (this.touchPointLayer.opacity > 0)
                return this.touchPointLayer.animateStop(),
                this.touchPointLayer.animate({
                    opacity: 0,
                    scale: 1.2,
                    options: {
                        time: .08
                    }
                })
        }
        ,
        TouchEmulator.prototype.mousemovePosition = function(event) {
            return this.point = {
                x: event.pageX,
                y: event.pageY
            }
        }
        ,
        TouchEmulator.prototype.endMultiTouch = function() {
            return this.isMouseDown = !1,
            this.touchPointLayer.style.backgroundImage = this.touchPointerImage,
            this.hideTouchCursor()
        }
        ,
        TouchEmulator.prototype.pinchPoint = function(point, centerPoint) {
            return Utils.pointSubtract(centerPoint, Utils.pointSubtract(point, centerPoint))
        }
        ,
        TouchEmulator.prototype.panPoint = function(point, offsetPoint) {
            return Utils.pointSubtract(point, offsetPoint)
        }
        ,
        TouchEmulator
    }(BaseClass),
    touchEmulator = null,
    exports.enable = function() {
        if (!Utils.isTouch())
            return null == touchEmulator && (touchEmulator = new TouchEmulator),
            Events.enableEmulatedTouchEvents(!0)
    }
    ,
    exports.disable = function() {
        if (touchEmulator)
            return touchEmulator.destroy(),
            touchEmulator = null,
            Events.enableEmulatedTouchEvents(!1)
    }
}
, function(module, exports, __webpack_require__) {
    var Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    exports.enable = function() {
        var MobileScrollFixLayer, handleScrollingLayerTouchMove, handleScrollingLayerTouchStart;
        return document.ontouchmove = function(event) {
            if (event.target === document.body)
                return event.preventDefault()
        }
        ,
        handleScrollingLayerTouchMove = function(event) {
            return event.stopPropagation()
        }
        ,
        handleScrollingLayerTouchStart = function(event) {
            var element, startTopScroll;
            if (element = this._element,
            startTopScroll = element.scrollTop,
            startTopScroll <= 0 && (element.scrollTop = 1),
            startTopScroll + element.offsetHeight >= element.scrollHeight)
                return element.scrollTop = element.scrollHeight - element.offsetHeight - 1
        }
        ,
        MobileScrollFixLayer = function(superClass) {
            function MobileScrollFixLayer(options) {
                this._updateScrollListeners = bind(this._updateScrollListeners, this),
                MobileScrollFixLayer.__super__.constructor.call(this, options),
                "Layer" === this.constructor.name && (this.on("change:scrollVertical", this._updateScrollListeners),
                this._updateScrollListeners())
            }
            return extend(MobileScrollFixLayer, superClass),
            MobileScrollFixLayer.prototype._updateScrollListeners = function() {
                return this.scrollVertical === !0 ? (this.on("touchmove", handleScrollingLayerTouchMove),
                this.on("touchstart", handleScrollingLayerTouchStart)) : (this.off("touchmove", handleScrollingLayerTouchMove),
                this.off("touchstart", handleScrollingLayerTouchStart))
            }
            ,
            MobileScrollFixLayer.prototype.toInspect = function() {
                return "MobileScrollFixLayer" === this.constructor.name ? MobileScrollFixLayer.__super__.toInspect.call(this, "Layer") : MobileScrollFixLayer.__super__.toInspect.apply(this, arguments)
            }
            ,
            MobileScrollFixLayer
        }(Framer.Layer),
        window.Layer = window.Framer.Layer = MobileScrollFixLayer
    }
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Config, Context, ErrorDisplay, Layer, Utils, _context, _error, _errorDisplay, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    Utils = __webpack_require__(4),
    BaseClass = __webpack_require__(6).BaseClass,
    Context = __webpack_require__(42).Context,
    Layer = __webpack_require__(13).Layer,
    _error = null,
    _context = null,
    Config = {},
    Utils.isMobile() ? (Config.height = 100,
    Config.textInset = 20,
    Config.fontSize = 32) : (Config.height = 40,
    Config.textInset = 12,
    Config.fontSize = 14),
    ErrorDisplay = function(superClass) {
        function ErrorDisplay() {
            this.resize = bind(this.resize, this),
            null == this._context && (this._context = new Context({
                name: "ErrorDisplay"
            })),
            this._context.index = 1e3,
            this._context.run(function(_this) {
                return function() {
                    return Events.wrap(window).addEventListener("error", function(e) {
                        return _this.showError(e.message)
                    }),
                    Events.wrap(window).addEventListener("resize", function(e) {
                        return _this.resize()
                    })
                }
            }(this))
        }
        return extend(ErrorDisplay, superClass),
        ErrorDisplay.prototype.createLayer = function() {
            return this._errorLayer ? this._errorLayer : (this._context.run(function(_this) {
                return function() {
                    var error;
                    return error = new Layer({
                        name: "error",
                        y: Align.bottom,
                        width: Canvas.width,
                        height: Config.height,
                        backgroundColor: "rgba(255, 0, 0, 1)"
                    }),
                    error.text = new Layer({
                        name: "text",
                        parent: error,
                        size: Utils.frameInset(error, Config.textInset),
                        point: Align.center,
                        backgroundColor: null,
                        clip: !0
                    }),
                    error.text.style = {
                        font: Config.fontSize + "px/1em " + Utils.deviceFont(),
                        lineHeight: parseInt(error.text.height - 2) + "px",
                        textAlign: "center",
                        wordWrap: "break-word",
                        textOverflow: "ellipsis"
                    },
                    error.onTap(function() {
                        var ref;
                        return null != (ref = _this._errorLayer) && ref.destroy(),
                        _this._errorLayer = null
                    }),
                    _this._errorLayer = error,
                    _this.resize()
                }
            }(this)),
            this._errorLayer)
        }
        ,
        ErrorDisplay.prototype.resize = function() {
            if (this._errorLayer)
                return this._errorLayer.width = Canvas.width,
                this._errorLayer.y = Canvas.height - this._errorLayer.height,
                this._errorLayer.text.size = Utils.frameInset(this._errorLayer, Config.textInset),
                this._errorLayer.text.point = Align.center
        }
        ,
        ErrorDisplay.prototype.showError = function(message) {
            var animation, error;
            return error = this.createLayer(),
            error.scale = 1.1,
            error.text.html = message,
            animation = error.animate({
                scale: 1,
                options: {
                    curve: "spring(800, 55, 10)"
                }
            })
        }
        ,
        ErrorDisplay.prototype.destroy = function() {
            var ref;
            return null != (ref = this._context) ? ref.destroy() : void 0
        }
        ,
        ErrorDisplay
    }(BaseClass),
    _errorDisplay = null,
    exports.enable = function() {
        if (!_errorDisplay)
            return _errorDisplay = new ErrorDisplay
    }
    ,
    exports.disable = function() {
        if (_errorDisplay)
            return _errorDisplay.destroy(),
            _errorDisplay = null
    }
}
, function(module, exports) {
    var slice = [].slice;
    exports.enable = function(module) {
        var ClassWrapper;
        return null == module && (module = window),
        ClassWrapper = function(Klass) {
            return function() {
                var args;
                return args = 1 <= arguments.length ? slice.call(arguments, 0) : [],
                this.prototype = function(func, args, ctor) {
                    ctor.prototype = func.prototype;
                    var child = new ctor
                      , result = func.apply(child, args);
                    return Object(result) === result ? result : child
                }(Klass, args, function() {})
            }
        }
        ,
        module.Frame = ClassWrapper(Framer.Frame),
        module.Layer = ClassWrapper(Framer.Layer),
        module.BackgroundLayer = ClassWrapper(Framer.BackgroundLayer),
        module.VideoLayer = ClassWrapper(Framer.VideoLayer),
        module.Animation = ClassWrapper(Framer.Animation)
    }
}
, function(module, exports, __webpack_require__) {
    var Context, Hints, hints, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    Context = __webpack_require__(42).Context,
    Hints = function() {
        function Hints() {
            this._handleUp = bind(this._handleUp, this),
            this._handleDown = bind(this._handleDown, this),
            this._context = new Framer.Context({
                name: "Hints"
            }),
            this._context.index = 1e4,
            this._context.run(function(_this) {
                return function() {
                    var capture;
                    return Utils.isTouch() ? (Events.wrap(document).addEventListener("touchstart", _this._handleDown, capture = !0),
                    Events.wrap(document).addEventListener("touchend", _this._handleUp, capture = !0)) : (Events.wrap(document).addEventListener("mousedown", _this._handleDown, capture = !0),
                    Events.wrap(document).addEventListener("mouseup", _this._handleUp, capture = !0))
                }
            }(this))
        }
        return Hints.prototype._handleDown = function(event) {
            if (!this._isPreloading())
                return this._target = event.target
        }
        ,
        Hints.prototype._handleUp = function(event) {
            var context, i, layer, len, ref;
            if (!this._isPreloading()) {
                if (layer = Framer.CurrentContext.layerForElement(this._target),
                !layer)
                    for (ref = Context.all(),
                    i = 0,
                    len = ref.length; i < len; i++)
                        if (context = ref[i],
                        context !== Framer.DefaultContext && context !== Framer.CurrentContext && context.layerForElement(this._target))
                            return;
                if (!layer || !layer.willSeemToDoSomething())
                    return this.showHints()
            }
        }
        ,
        Hints.prototype._isPreloading = function() {
            var ref;
            return (null != (ref = Framer.Preloader) ? ref.isLoading : void 0) === !0
        }
        ,
        Hints.prototype.showHints = function() {
            var context;
            return context = Framer.CurrentContext,
            this._context.run(function() {
                return _.invokeMap(context.rootLayers, "_showHint")
            })
        }
        ,
        Hints.prototype.destroy = function() {
            return this._context.destroy()
        }
        ,
        Hints
    }(),
    hints = null,
    exports.enable = function() {
        return null != hints ? hints : hints = new Hints(Framer.CurrentContext)
    }
    ,
    exports.disable = function() {
        if (hints)
            return hints.destroy(),
            hints = null
    }
    ,
    exports.showHints = function() {
        if (hints)
            return Utils.delay(.5, function() {
                return hints.showHints()
            })
    }
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Context, Preloader, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, indexOf = [].indexOf || function(item) {
        for (var i = 0, l = this.length; i < l; i++)
            if (i in this && this[i] === item)
                return i;
        return -1
    }
    ;
    BaseClass = __webpack_require__(6).BaseClass,
    Context = __webpack_require__(42).Context,
    Preloader = function(superClass) {
        function Preloader(options) {
            null == options && (options = {}),
            this._setupContext = bind(this._setupContext, this),
            this._handleTimeout = bind(this._handleTimeout, this),
            this._handleProgress = bind(this._handleProgress, this),
            this._end = bind(this._end, this),
            this.end = bind(this.end, this),
            this._start = bind(this._start, this),
            this.start = bind(this.start, this),
            this.addPlayer = bind(this.addPlayer, this),
            this.addImage = bind(this.addImage, this),
            this.setLogo = bind(this.setLogo, this),
            this._media = [],
            this._mediaLoaded = [],
            this._isLoading = !1,
            this.timeout = 30,
            this.start()
        }
        return extend(Preloader, superClass),
        Preloader.prototype.setupContext = function() {
            return this.context = new Context({
                name: "Preloader"
            }),
            this.context.run(this._setupContext)
        }
        ,
        Preloader.define("progress", {
            get: function() {
                return this._mediaLoaded.length / this._media.length || 0
            }
        }),
        Preloader.define("time", {
            get: function() {
                return (Date.now() - this._startTime) / 1e3
            }
        }),
        Preloader.define("isLoading", {
            get: function() {
                return this._isLoading
            }
        }),
        Preloader.define("isReady", {
            get: function() {
                return !!this.isLoading && this._mediaLoaded.length === this._media.length
            }
        }),
        Preloader.prototype.setLogo = function(url) {
            if (this._logo = url,
            this.brand)
                return this.brand.style["background-image"] = "url('" + url + "')"
        }
        ,
        Preloader.prototype.addImagesFromContext = function(context) {
            return _.pluck(context.layers, "image").map(this.addImage)
        }
        ,
        Preloader.prototype.addPlayersFromContext = function(context) {
            return _.pluck(context.layers, "player").map(this.addPlayer)
        }
        ,
        Preloader.prototype.addImage = function(image) {
            if (image && indexOf.call(this._media, image) < 0)
                return this._media.push(image),
                Utils.loadImage(image, function(_this) {
                    return function(error) {
                        return _this._mediaLoaded.push(image),
                        _this._handleProgress()
                    }
                }(this))
        }
        ,
        Preloader.prototype.addPlayer = function(player) {
            if (player && indexOf.call(this._media, player) < 0 && null != player.src && "undefined" !== player.getAttribute("src") && null != player.readyState && player.readyState < 3)
                return this._media.push(player),
                Events.wrap(player).addEventListener("canplaythrough", function(_this) {
                    return function() {
                        return _this._mediaLoaded.push(player),
                        _this._handleProgress()
                    }
                }(this))
        }
        ,
        Preloader.prototype.start = function() {
            if (!this.isLoading)
                return this._isLoading = !0,
                this._startTime = Date.now(),
                this.emit("start"),
                this.setupContext(),
                Utils.delay(.2, this._start)
        }
        ,
        Preloader.prototype._start = function() {
            return Utils.delay(.2, function(_this) {
                return function() {
                    return _this.cover.visible = !0
                }
            }(this)),
            this.addImagesFromContext(Framer.DefaultContext),
            this.addImagesFromContext(Framer.CurrentContext),
            this.addPlayersFromContext(Framer.DefaultContext),
            this.addPlayersFromContext(Framer.CurrentContext),
            this._media.length ? Utils.delay(this.timeout, this._handleTimeout) : this.end()
        }
        ,
        Preloader.prototype.end = function() {
            if (this.isLoading)
                return this._end()
        }
        ,
        Preloader.prototype._end = function(animated) {
            var finalize, ref, ref1;
            return null == animated && (animated = !0),
            Framer.DefaultContext.visible = !0,
            finalize = function(_this) {
                return function() {
                    var ref;
                    return _this.emit("end"),
                    _this._isLoading = !1,
                    null != (ref = _this.context) ? ref.destroy() : void 0
                }
            }(this),
            (null != (ref = this.cover) ? ref.visible : void 0) && animated ? (null != (ref1 = this.cover) && ref1.animate({
                properties: {
                    opacity: 0
                },
                time: .13
            }),
            this.cover.onAnimationDidEnd(finalize)) : finalize()
        }
        ,
        Preloader.prototype._handleProgress = function() {
            var ref;
            if (this.emit("progress", this.progress),
            null != (ref = this.progressIndicator) && ref.setProgress(this.progress),
            this.isReady)
                return this._handleLoaded()
        }
        ,
        Preloader.prototype._handleLoaded = function() {
            return this.time > .5 ? Utils.delay(.2, this.end) : this.end()
        }
        ,
        Preloader.prototype._handleTimeout = function() {
            if (this.isLoading)
                return console.warn("Preloader timeout, ending"),
                this.end()
        }
        ,
        Preloader.prototype._setupContext = function() {
            var layout, logoUrl;
            return this.cover = new Layer({
                frame: Canvas,
                backgroundColor: "white",
                visible: !1
            }),
            this.progressIndicator = new CircularProgressComponent({
                size: 160,
                point: Align.center,
                parent: this.cover
            }),
            this.progressIndicator.railsColor = Color.grey(0, .1),
            this.progressIndicator.progressColor = "rgb(75, 169, 248)",
            this.progressIndicator.setProgress(this.progress),
            this.brand = new Layer({
                size: 96,
                parent: this.cover,
                backgroundColor: null,
                style: {
                    backgroundSize: "50%"
                }
            }),
            Utils.isMobile() && (this.progressIndicator.scale = 1.25,
            this.brand.scale = 1.25),
            this._logo ? this.setLogo(this._logo) : (logoUrl = "//resources.framerjs.com/static/images/preloader/framer-logo.png",
            _.startsWith(window.location.href, "file://") && (logoUrl = "http:" + logoUrl),
            this.setLogo(logoUrl)),
            (layout = function(_this) {
                return function() {
                    return _this.cover.frame = Canvas,
                    _this.progressIndicator.point = Align.center,
                    _this.brand.x = Align.center,
                    _this.brand.y = Align.center(2)
                }
            }(this))(),
            Canvas.onResize(layout)
        }
        ,
        Preloader
    }(BaseClass),
    exports.enable = function() {
        return null != Framer.Preloader ? Framer.Preloader : Framer.Preloader = new Preloader
    }
    ,
    exports.disable = function() {
        if (Framer.Preloader)
            return Framer.Preloader._end(!1),
            Framer.Preloader = null
    }
    ,
    exports.addImage = function(url) {
        var ref;
        return null != (ref = Framer.Preloader) ? ref.addImage(url) : void 0
    }
    ,
    exports.setLogo = function(url) {
        var ref;
        return null != (ref = Framer.Preloader) ? ref.setLogo(url) : void 0
    }
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Context, ShareComponent, ShareInfo, ShareInfoDisabled, _, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    _ = __webpack_require__(1)._,
    BaseClass = __webpack_require__(6).BaseClass,
    Context = __webpack_require__(42).Context,
    ShareComponent = __webpack_require__(63).ShareComponent,
    ShareInfoDisabled = !1,
    ShareInfo = function(superClass) {
        function ShareInfo(options) {
            var run;
            null == options && (options = {}),
            this.context = new Framer.Context({
                name: "Sharing"
            }),
            this.context.index = 2e4,
            run = function(_this) {
                return function() {
                    return _this.context.run(function() {
                        var share;
                        return share = new ShareComponent(Framer.Info)
                    })
                }
            }(this),
            _.isEmpty(Framer.Info) ? Utils.delay(0, run) : run()
        }
        return extend(ShareInfo, superClass),
        ShareInfo.prototype.destroy = function() {
            return this.context.destroy()
        }
        ,
        ShareInfo
    }(BaseClass),
    exports.enable = function() {
        if (!ShareInfoDisabled)
            return null != Framer.ShareInfo ? Framer.ShareInfo : Framer.ShareInfo = new ShareInfo
    }
    ,
    exports.disable = function(force) {
        if (null == force && (force = !0),
        ShareInfoDisabled = force,
        Framer.ShareInfo)
            return Framer.ShareInfo.destroy(),
            Framer.ShareInfo = null
    }
}
, function(module, exports, __webpack_require__) {
    var Button, ShareComponent, ShareLayer, _, css, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    _ = __webpack_require__(1)._,
    css = '@font-face {\n\tfont-family: "Roboto";\n\tfont-style: normal;\n\tfont-weight: 400;\n\tsrc: local("Roboto"), local("Roboto-Regular"), url("//fonts.gstatic.com/s/roboto/v15/zN7GBFwfMP4uA6AR0HCoLQ.ttf") format("truetype");\n}\n@font-face {\n\tfont-family: "Roboto";\n\tfont-style: normal;\n\tfont-weight: 500;\n\tsrc: local("Roboto Medium"), local("Roboto-Medium"), url("//fonts.gstatic.com/s/roboto/v15/RxZJdnzeo3R5zSexge8UUaCWcynf_cDxXwCLxiixG1c.ttf") format("truetype");\n}',
    Utils.insertCSS(css),
    ShareLayer = function(superClass) {
        function ShareLayer(options) {
            var defaultProps;
            ShareLayer.__super__.constructor.call(this, options),
            defaultProps = {
                backgroundColor: null,
                ignoreEvents: !1,
                style: {
                    fontFamily: "Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
                    textAlign: "left",
                    fontSize: "14px",
                    color: "#111",
                    lineHeight: "1",
                    webkitFontSmoothing: "antialiased"
                }
            },
            options.parent && (defaultProps.width = options.parent.width),
            this.props = _.merge(defaultProps, options)
        }
        return extend(ShareLayer, superClass),
        ShareLayer
    }(Layer),
    Button = function(superClass) {
        function Button(options) {
            var defaultProps;
            Button.__super__.constructor.call(this, options),
            options = _.defaults(options, {
                newWindow: !0
            }),
            defaultProps = {
                height: 33,
                style: {
                    fontWeight: "500",
                    webkitUserSelect: "text",
                    borderRadius: 3,
                    textAlign: "center",
                    paddingTop: "9px"
                }
            },
            this.props = _.merge(defaultProps, options),
            this.states = {
                hover: {
                    opacity: .8
                },
                full: {
                    opacity: 1
                }
            },
            this.animationOptions = {
                time: .3
            },
            this.onMouseOver(function() {
                return this.style.cursor = "pointer",
                this.animate("hover")
            }),
            this.onMouseOut(function() {
                return this.animate("full")
            }),
            this.onTap(function() {
                return options.shareButton ? window.open(options.url, "Share", "width=560, height=714") : window.open(options.url, "_blank")
            })
        }
        return extend(Button, superClass),
        Button
    }(ShareLayer),
    ShareComponent = function() {
        function ShareComponent(shareInfo) {
            this.__calculateAvailableSpace = bind(this.__calculateAvailableSpace, this),
            this._openIfEnoughSpace = bind(this._openIfEnoughSpace, this);
            var projectId;
            this.shareInfo = _.clone(shareInfo),
            projectId = window.location.pathname.replace(/\//g, ""),
            document.title = this.shareInfo.title,
            this.options = {
                padding: 20,
                width: 250,
                minAvailableSpace: 300,
                minAvailableSpaceFullScreen: 500,
                maxDescriptionLength: 145,
                id: projectId
            },
            this.state = localStorage.getItem("framerShareSheetState-" + this.options.id),
            this.options.fixed = !!this.state,
            this._checkData(),
            Utils.isMobile() || this.render()
        }
        return ShareComponent.prototype.render = function() {
            return this._renderSheet(),
            this._renderCTA(),
            this._renderToggleButtons(),
            this._renderInfo(),
            this.shareInfo.description && this._renderDescription(),
            this.shareInfo.openInFramerURL && this.shareInfo.date && this._renderDate(),
            this.shareInfo.openInFramerURL && this._renderButtons(),
            this._updateHeight(),
            this.sheet.minHeight = this.sheet.maxHeight,
            Utils.delay(.1, function(_this) {
                return function() {
                    return _this._calculateAvailableSpace(),
                    "open" === _this.state ? _this._openSheet() : "closed" === _this.state ? _this._closeSheet() : _this._openIfEnoughSpace()
                }
            }(this)),
            this._startListening()
        }
        ,
        ShareComponent.prototype._truncateCredential = function(str) {
            var maxLength, maxLengthWithAvatar;
            return maxLength = 32,
            maxLengthWithAvatar = 23,
            str = _.escape(str),
            this.shareInfo.twitter && str.length > maxLengthWithAvatar ? str = _.truncate(str, {
                length: maxLengthWithAvatar
            }) : str.length > maxLength && (str = _.truncate(str, {
                length: maxLength
            })),
            str
        }
        ,
        ShareComponent.prototype._checkData = function() {
            if (_.startsWith(this.shareInfo.twitter, "@") && (this.shareInfo.twitter = _.trimStart(this.shareInfo.twitter, "@")),
            this.shareInfo.title)
                return this.shareInfo.title = this._truncateCredential(this.shareInfo.title)
        }
        ,
        ShareComponent.prototype._renderSheet = function() {
            return this.sheet = new ShareLayer({
                width: this.options.width,
                clip: !0,
                ignoreEvents: !1,
                point: 10,
                borderRadius: 4,
                backgroundColor: "#FFF",
                visible: !1,
                style: {
                    boxShadow: "0 0 0 1px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .08)"
                }
            })
        }
        ,
        ShareComponent.prototype._renderToggleButtons = function() {
            var openLabel, openLogo;
            return this.open = new Layer({
                height: 30,
                width: 144,
                point: this.sheet.point,
                borderRadius: 4,
                backgroundColor: "#FFF",
                visible: !1,
                style: {
                    boxShadow: "0 0 0 1px rgba(0, 0, 0, .12), 0 1px 3px rgba(0, 0, 0, .08)"
                }
            }),
            openLogo = new Layer({
                parent: this.open,
                width: 10,
                height: 15,
                backgroundColor: null,
                style: {
                    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAeCAYAAAAsEj5rAAAABGdBTUEAALGPC/xhBQAAANRJREFUSA2t1dENgjAQBuA7wqsuoEs5hi5Bu4RsoQs4jiygvtceCgRoubZ3f0JI2t5HAy3FtnMGABp/qQRJ0UR7UBMdQS10BmqgK1CKBkEJGgVL0U2wBGXBXBQPN+eoiAsi2OcJDTeu4gYM/f6xzfHeb9OhKXhPBqk6Bc0CU9BskEOLwC20GIyhIjCEisElWlODRv5LCuru8bF+gfFnSrtP2qYVXHcGEK3GLMn4vUNFdPooSugE0nwV0DmogK5BIRoGhSiVx3N5Gzi/kv7qcWTZQ2hivjMmakz6/b3iAAAAAElFTkSuQmCC')"
                },
                y: Align.center(1),
                x: 10
            }),
            openLabel = new ShareLayer({
                parent: this.open,
                width: this.open - 40,
                height: 14,
                x: 30,
                y: Align.center(),
                html: "Made with Framer",
                style: {
                    fontWeight: "500",
                    fontSize: "13px"
                }
            }),
            this.close = new Layer({
                parent: this.cta,
                ignoreEvents: !1,
                size: 9,
                point: 6,
                backgroundColor: null,
                style: {
                    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAABGdBTUEAALGPC/xhBQAAAQxJREFUOBGt09sKgzAMBuB4Qr3Xe0Xf/4kUFXwB0QsFZdvfkWzWahEMuNm1/UjSznl9gh4I9wFDEQIty0J1XdO2bVYbRbRtS9M0yVqB+r5XE1VVXWJAmqahYRgIezgEyrKMoiiieZ7pDGNkHEcKgoDyPGeHBPI8j8qyPMV0pCgKCsNQIOezYHdq6BEyQmbIELjruqoczkRHoB0g/Liuq2o8YyjjCjmFMPGfGcbATJlgDiE9+g5/nygHmznQQ9/3eXj4NkJ6Y22nCfUA6QjKwWPDdpAJwRGjpKurscvoDOFm2O6ZZNR1nfWIdQz/TQ6BkiRRN/XqiLGJsTiOKU1TdswXUmZvvEhGN/YYl74B52DXxksJUvAAAAAASUVORK5CYII=')"
                }
            }),
            this._enableUserSelect(this.close),
            this._showPointer(this.close),
            this._showPointer(this.open)
        }
        ,
        ShareComponent.prototype._renderCTA = function() {
            var ctaLink, ctaLogo, ctaSlogan;
            return this.cta = new ShareLayer({
                parent: this.sheet,
                style: {
                    borderBottom: "1px solid #E8E8E8"
                },
                height: 118
            }),
            ctaLogo = new Layer({
                parent: this.cta,
                width: 16,
                height: 24,
                x: Align.center(),
                y: 20,
                backgroundColor: null,
                style: {
                    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAwCAYAAABwrHhvAAAABGdBTUEAALGPC/xhBQAAAShJREFUWAnF2MsNwjAMBmCngiPMgdiGMWAJ0iXoGB2APRALsACcAImAoaLqO3Fi21LU0+98iSKlrSkuzgLA/jNUyuCsmogvQBPxB2ghGgANRAcgjegFSCIGAVKIUYAEYhLAjfACcCK8AVyIIAAHIhiQGkECpESQAakQZlU+HDajVgYmP23mlp6nJqvcC9x+XT71AOiIQWTVQqIfVEQyAHUnkgIoiOSAUAQLIATBBvBFsAJ8EOyAKYQIYAwhBhhCiAL6EOKANiL6OsaG1MKrfHY+3nNwjv5/oFhGvdRkcFhYMCanriI29zsDioj6ECohagDupQKiCVBAdAHCiH6AIGIYIIQYBwggpgHMCD8AI8IfwIQIAzAhsG147W4WtteoL+vwSdsJRETWGylMpVP7hSF+AAAAAElFTkSuQmCC')"
                }
            }),
            ctaSlogan = new ShareLayer({
                parent: this.cta,
                y: ctaLogo.y + 36,
                height: 30,
                html: "Made with Framer",
                style: {
                    textAlign: "center",
                    fontSize: "18px"
                }
            }),
            this._enableUserSelect(ctaSlogan),
            ctaLink = new Button({
                url: "http://framerjs.com/?utm_source=share.framerjs.com&utm_medium=banner&utm_campaign=product",
                parent: this.cta,
                y: ctaSlogan.y + 24,
                height: 16,
                width: 120,
                x: Align.center(),
                html: "Try it for free now",
                style: {
                    textAlign: "center",
                    color: "#00AAFF",
                    padding: 0
                }
            })
        }
        ,
        ShareComponent.prototype._renderInfo = function() {
            var avatarBorder, fallbackTitle, name, ref, showAuthor;
            if (this.info = new ShareLayer({
                parent: this.sheet,
                width: this.sheet.width - 2 * this.options.padding,
                y: this.cta.maxY + 20,
                x: 20
            }),
            this.credentials = new ShareLayer({
                parent: this.info,
                height: 16
            }),
            fallbackTitle = _.replace("undefined" != typeof FramerStudioInfo && null !== FramerStudioInfo ? FramerStudioInfo.documentTitle : void 0, /\.framer$/, ""),
            this.credentialsTitle = new ShareLayer({
                parent: this.credentials,
                height: 18,
                html: this.shareInfo.title || fallbackTitle,
                style: {
                    fontWeight: "500",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    lineHeight: "1.3"
                }
            }),
            this._enableUserSelect(this.credentialsTitle),
            this.shareInfo.twitter && (this.credentialsTitle.width = this.credentials - 50),
            showAuthor = function(_this) {
                return function(content) {
                    return null == content && (content = _this.shareInfo.author),
                    _this.credentials.height = 40,
                    _this.credentialsTitle.y = 3,
                    _this.credentialsAuthor = new ShareLayer({
                        parent: _this.credentials,
                        html: content,
                        y: _this.credentialsTitle.maxY,
                        height: 18,
                        style: {
                            color: "#808080",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            lineHeight: "1.3"
                        }
                    }),
                    _this._enableUserSelect(_this.credentialsAuthor),
                    _this.shareInfo.twitter && (_this.credentialsAuthor.width = _this.credentials - 50),
                    _this._showPointer(_this.credentialsAuthor)
                }
            }(this),
            this.shareInfo.twitter && (this.credentials.x = 50,
            this.avatar = new Button({
                url: "https://twitter.com/" + this.shareInfo.twitter,
                size: 40,
                parent: this.info,
                borderRadius: 100
            }),
            this.avatar.onImageLoadError(function(_this) {
                return function() {
                    return _this.credentials.x = 0,
                    _this.avatar.destroy()
                }
            }(this)),
            this.avatar.image = "https://twitter.com/" + this.shareInfo.twitter + "/profile_image?size=bigger",
            avatarBorder = new ShareLayer({
                size: this.avatar.width - 2,
                point: 1,
                parent: this.avatar,
                borderRadius: 100,
                style: {
                    boxShadow: "0 0 0 1px rgba(0, 0, 0, .1)"
                }
            }),
            name = this.shareInfo.author ? this.shareInfo.author : "@" + this.shareInfo.twitter,
            name = this._truncateCredential(name),
            showAuthor("<a href='http://twitter.com/" + this.shareInfo.twitter + "' style='text-decoration: none; -webkit-user-select: auto;' target='_blank'>" + name + "</a>"),
            this.credentialsTitle.width = 155,
            null != (ref = this.credentialsAuthor) && (ref.width = 155)),
            this.shareInfo.author && !this.shareInfo.twitter)
                return showAuthor(this._truncateCredential(this.shareInfo.author))
        }
        ,
        ShareComponent.prototype._renderDate = function() {
            var date, months, verticalPosition;
            return verticalPosition = this.description ? this.description.maxY : this.credentials.maxY,
            date = new Date(this.shareInfo.date),
            months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            this.date = new ShareLayer({
                parent: this.info,
                height: 10,
                y: verticalPosition + 12,
                html: "Shared on " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear(),
                style: {
                    textTransform: "uppercase",
                    fontSize: "11px",
                    color: "#999",
                    letterSpacing: ".2px"
                }
            })
        }
        ,
        ShareComponent.prototype._enableUserSelect = function(layer) {
            return layer.html || (layer.html = ""),
            layer._elementHTML.style["-webkit-user-select"] = "auto",
            layer._elementHTML.style.cursor = "auto"
        }
        ,
        ShareComponent.prototype._renderDescription = function() {
            var descriptionStyle, parseDescription, showFullDescription;
            return parseDescription = function(text) {
                var httpRegex, lineBreakRegex, removeAllTagsExceptBreaks, urlRegex, urlified;
                return urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi,
                httpRegex = /^((http|https):\/\/)/,
                lineBreakRegex = /(?:\r\n|\r|\n)/g,
                removeAllTagsExceptBreaks = /<(?!br\s*\/?)[^>]+>/g,
                text = _.escape(text),
                text = _.trimEnd(text),
                text = text.replace(lineBreakRegex, "<br>"),
                urlified = text.replace(urlRegex, function(url) {
                    var href;
                    return href = url,
                    httpRegex.test(url) || (href = "//" + url),
                    "<a href='" + href + "' style='-webkit-user-select: auto' target='_blank'>" + url + "</a>"
                })
            }
            ,
            this.description = new ShareLayer({
                parent: this.info,
                y: this.credentials.maxY + 10,
                style: {
                    lineHeight: "1.5",
                    wordWrap: "break-word",
                    color: "#111"
                }
            }),
            descriptionStyle = {
                fontSize: "14px",
                fontFamily: "Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
                lineHeight: "1.5",
                wordWrap: "break-word"
            },
            this.descriptionSize = Utils.textSize(parseDescription(this.shareInfo.description), descriptionStyle, {
                width: "" + this.description.width
            }),
            showFullDescription = function(_this) {
                return function() {
                    var ref;
                    return _this.options.truncatedDescription = !1,
                    _this.description.height = _this.descriptionSize.height,
                    _this.description.html = parseDescription(_this.shareInfo.description),
                    _this.shareInfo.openInFramerURL && (null != (ref = _this.date) && (ref.y = _this.description.maxY + 12),
                    _this.buttons.y = (_this.date ? _this.date : _this.description).maxY + 18),
                    _this._updateHeight(),
                    _this._calculateAvailableSpace(),
                    _this._enableUserSelect(_this.description)
                }
            }(this),
            this.shareInfo.description.length > this.options.maxDescriptionLength ? (this.options.truncatedDescription = !0,
            this.options.shortDescription = _.truncate(this.shareInfo.description, {
                length: this.options.maxDescriptionLength,
                separator: " "
            }),
            this.descriptionTruncatedSize = Utils.textSize(parseDescription(this.options.shortDescription), descriptionStyle, {
                width: "" + this.description.width
            }),
            this.description.height = this.descriptionTruncatedSize.height,
            this.description.html = parseDescription(this.options.shortDescription),
            this.description.once(Events.TapEnd, showFullDescription),
            this._showPointer(this.description)) : (this.description.height = this.descriptionSize.height,
            this.description.html = parseDescription(this.shareInfo.description),
            this._enableUserSelect(this.description))
        }
        ,
        ShareComponent.prototype._renderButtons = function() {
            var tweet, verticalPosition;
            return verticalPosition = this.date ? this.date.maxY : this.descripion ? this.descripion.maxY : this.credentials.maxY,
            this.buttons = new ShareLayer({
                height: 33,
                parent: this.info,
                y: verticalPosition + 16
            }),
            this.buttonOpen = new Button({
                url: this.shareInfo.openInFramerURL,
                newWindow: !1,
                html: "Open in Framer",
                color: "#FFF",
                parent: this.buttons,
                width: 139,
                borderRadius: 3,
                backgroundColor: "00AAFF"
            }),
            this.buttonFacebook = new Button({
                shareButton: !0,
                url: "https://www.facebook.com/sharer/sharer.php?u=" + window.location.href,
                parent: this.buttons,
                borderWidth: 1,
                borderColor: "#D5D5D5",
                width: 33,
                x: this.buttonOpen.maxX + 6,
                style: {
                    borderRadius: "3px 0 0 3px"
                }
            }),
            this.buttonFacebookIcon = new Layer({
                parent: this.buttonFacebook,
                width: 7,
                height: 14,
                point: Align.center(),
                backgroundColor: null,
                style: {
                    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAABGdBTUEAALGPC/xhBQAAAO1JREFUOBFjZMABWltbJX///l0GlDYAYg1GRkZxIP3n////P4E0EyOQwABNTU05QAVtQMyLIQkVwNDY3Nzs9vfv3524NMDEmWAMED1z5kyuf//+zUEWw8VG0fjq1SsnoPNkcSlGFmdB5gA16SHzQWxgoPxnZma2UVNTOxkWFvYXJo+uUQwmAaOBhn2tqak5BuPDaBSnAhXJwySQaB4kNpyJohEoqgCXIcAgWyNjQ0PDfwKGY0gDA+w5uo0YirAJAMPiLFkagTaeIUsjExMTeTaCNGIkcmyBBRTDUEeWU0EBNqoRW7KBio0GDi0CBwAHJ0YrwGtXbwAAAABJRU5ErkJggg==')"
                }
            }),
            tweet = "",
            (this.shareInfo.twitter || this.shareInfo.author) && (tweet += this.shareInfo.twitter ? "A prototype by @" + this.shareInfo.twitter + ". Design without limitations in @framerjs — " : this.shareInfo.author ? "A prototype by " + this.shareInfo.author + ". Design without limitations in @framerjs — " : "A @framerjs prototype by @" + this.shareInfo.author + ". Design without limitations — "),
            tweet += window.location.href,
            tweet = encodeURIComponent(tweet),
            this.buttonTwitter = new Button({
                shareButton: !0,
                url: "https://twitter.com/home?status=" + tweet,
                parent: this.buttons,
                borderWidth: 1,
                borderColor: "#D5D5D5",
                width: 33,
                x: this.buttonFacebook.maxX - 1,
                style: {
                    borderRadius: "0 3px 3px 0"
                }
            }),
            this.buttonTwitterIcon = new Layer({
                parent: this.buttonTwitter,
                width: 14,
                height: 11,
                point: Align.center(),
                backgroundColor: null,
                style: {
                    backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAWCAYAAADTlvzyAAAABGdBTUEAALGPC/xhBQAAAr5JREFUSA2tlUloU1EUhpuhITFCAnUTR1zVgsQUF1pw4UbETUAq7tTiogUDKkiJSUjaTBvdFCliF5KVazdKigu3BYsjlEIcIOKEEgewTVoz+J2HCa8378UOuXC494z/O+e8e4+lZ4srk8kcq1arVywWyxChvI1Go8g573Q6p8Lh8IdmeOyO1uv1vZamYDN7MpnMABDB16r6A1qGLlut1gIfFOfsHhgYOK4BplKpq6APut3uS+Pj40uqsxGPzyg+M0Y6VQbYS4CHsfc3v+w5RueXl5efEuiw6qDy6XR6P5lNqXIT/hW2c4Dle3t7FzRA0N+JMYp+FE8mJydz1HyXSQCxOwe5zPSK3E+Gw9CFaDRa0AAB2a0zEtkIdS/Qo9tGGQN2Vmff8QjQfX6gQCKRmBNDrYe5XM5ZLBY/w3tNvF/g+BDdPM7zlUplGtDTJrZrxD6fzzE2NvanKbTLoVQqbaesN8k021QoewCAgMjK5bKi6syurKxI6VuAWkkR7iTgGRSPO7tvXEs1tum9tAwdDscXeuZHYdMru3Be9Xg8JX0cLUPu3lcyzOsV3TjT90V9/ySmBqgdrNbr7K2nSGRdWM/UGC1AftsFl8t1BINpvuytarhJ/p7q1wIUBY/tJzbpZVX4La4CSbT9hGsABYDsluhn/xbBJM4NqKHGaQPkPsqo+aUabpB/NDExcdfIpw0wHo+/ttlshzC+A72Bfhs5dpB9t9vtF830HechD/g+7uctnINmAfRyKvMNOknvZPoYLkNAgPbUarVreIzSz3VNBYA+0o4TVGjREOmf0MI0GMT4J7yDtzQIQBB+iH29r04d+xleq1gkEvnRCUx08rStks0Iu4ycA5DMO9n+tyoYzDJU07FYrO2CmzmvKWk2m/XTs1MAymQ4CO2AvGQgr73cUaH38LN9fX0PQqHQRn+onr9RuQfzn9jjeAAAAABJRU5ErkJggg==')"
                }
            })
        }
        ,
        ShareComponent.prototype._openIfEnoughSpace = function() {
            return this.availableSpace < this.threshold && !this.options.fixed ? this._closeSheet() : this._openSheet()
        }
        ,
        ShareComponent.prototype._calculateAvailableSpace = _.debounce(function() {
            return this.__calculateAvailableSpace()
        }, 100, {
            maxWait: 100
        }),
        ShareComponent.prototype.__calculateAvailableSpace = function() {
            var canvasHeight, device, verticalSpace;
            if (device = Framer.Device,
            this.threshold = this.options.minAvailableSpaceFullScreen,
            this.availableSpace = Canvas.width,
            "fullscreen" !== device.deviceType && (this.threshold = this.options.minAvailableSpace,
            this.availableSpace = Screen.canvasFrame.x),
            canvasHeight = Canvas.height - this.options.padding,
            this.description && canvasHeight < this.sheet.maxHeight && canvasHeight > this.sheet.minHeight && (this.sheet.height = canvasHeight,
            verticalSpace = this.sheet.height - this.cta.height - this.credentials.height,
            this.shareInfo.openInFramerURL ? (verticalSpace -= this.buttons.height,
            verticalSpace -= this.date.height,
            verticalSpace -= 95) : verticalSpace -= 36,
            this.description.height = verticalSpace,
            this.description.style.overflow = "scroll",
            this.shareInfo.openInFramerURL && (this.date.y = this.description.maxY + 12,
            this.buttons.y = this.date.maxY + 18)),
            this.description && canvasHeight > this.sheet.maxHeight && (this.sheet.height = this.sheet.maxHeight,
            this.options.truncatedDescription ? this.description.height = this.descriptionTruncatedSize.height : this.description.height = this.descriptionSize.height,
            this.description.style.overflow = "visible",
            this.shareInfo.openInFramerURL))
                return this.date.y = this.description.maxY + 12,
                this.buttons.y = this.date.maxY + 18
        }
        ,
        ShareComponent.prototype._startListening = function() {
            return this._calculateAvailableSpace(),
            this.sheet.onMouseOver(function() {
                return this.style = {
                    cursor: "default"
                }
            }),
            this.close.onClick(function(_this) {
                return function() {
                    return _this._closeSheet(),
                    _this.options.fixed = !0,
                    localStorage.setItem("framerShareSheetState-" + _this.options.id, "closed")
                }
            }(this)),
            this.sheet.onTouchStart(function(event) {
                return event.stopPropagation()
            }),
            this.sheet.onTouchEnd(function(event) {
                return event.stopPropagation()
            }),
            this.sheet.onTouchMove(function(event) {
                return event.stopPropagation()
            }),
            this.open.onClick(function(_this) {
                return function(event) {
                    return event.stopPropagation(),
                    _this._openSheet(),
                    _this.options.fixed = !0,
                    localStorage.setItem("framerShareSheetState-" + _this.options.id, "open")
                }
            }(this)),
            Canvas.onResize(function(_this) {
                return function() {
                    if (_this._calculateAvailableSpace(),
                    !_this.options.fixed)
                        return _this._openIfEnoughSpace()
                }
            }(this))
        }
        ,
        ShareComponent.prototype._showPointer = function(layer) {
            return layer.onMouseOver(function() {
                return this.style = {
                    cursor: "pointer"
                }
            })
        }
        ,
        ShareComponent.prototype._updateHeight = function() {
            return this.credentials.height = this.credentials.contentFrame().height,
            this.info.height = this.info.contentFrame().height,
            this.sheet.height = this.sheet.contentFrame().height + this.options.padding,
            this.sheet.maxHeight = this.sheet.height
        }
        ,
        ShareComponent.prototype._closeSheet = function() {
            return this.sheet.visible = !1,
            this.sheet.ignoreEvents = !0,
            this.open.visible = !0,
            this.open.ignoreEvents = !1
        }
        ,
        ShareComponent.prototype._openSheet = function() {
            return this.sheet.visible = !0,
            this.sheet.ignoreEvents = !1,
            this.open.visible = !1,
            this.open.ignoreEvents = !0
        }
        ,
        ShareComponent
    }(),
    exports.ShareComponent = ShareComponent
}
, function(module, exports, __webpack_require__) {
    var DOMEventManager, GestureInputDoubleTapTime, GestureInputEdgeSwipeDistance, GestureInputForceTapDesktop, GestureInputForceTapMobile, GestureInputForceTapMobilePollTime, GestureInputLongPressTime, GestureInputMinimumFingerDistance, GestureInputSwipeThreshold, GestureInputVelocityTime, Utils, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    };
    Utils = __webpack_require__(4),
    GestureInputLongPressTime = .5,
    GestureInputDoubleTapTime = .25,
    GestureInputSwipeThreshold = 30,
    GestureInputEdgeSwipeDistance = 30,
    GestureInputVelocityTime = .1,
    GestureInputForceTapDesktop = MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN,
    GestureInputForceTapMobile = .7,
    GestureInputForceTapMobilePollTime = 1 / 30,
    GestureInputMinimumFingerDistance = 30,
    DOMEventManager = __webpack_require__(43).DOMEventManager,
    exports.GestureInputRecognizer = function() {
        function GestureInputRecognizer() {
            this._process = bind(this._process, this),
            this.edgeswipedirectionend = bind(this.edgeswipedirectionend, this),
            this.edgeswipedirectionstart = bind(this.edgeswipedirectionstart, this),
            this.edgeswipedirection = bind(this.edgeswipedirection, this),
            this.swipedirectionend = bind(this.swipedirectionend, this),
            this.swipedirection = bind(this.swipedirection, this),
            this.swipedirectionstart = bind(this.swipedirectionstart, this),
            this.swipeend = bind(this.swipeend, this),
            this.swipe = bind(this.swipe, this),
            this.swipestart = bind(this.swipestart, this),
            this.rotateend = bind(this.rotateend, this),
            this.rotate = bind(this.rotate, this),
            this.rotatestart = bind(this.rotatestart, this),
            this.scaleend = bind(this.scaleend, this),
            this.scale = bind(this.scale, this),
            this.scalestart = bind(this.scalestart, this),
            this.pinchend = bind(this.pinchend, this),
            this.pinch = bind(this.pinch, this),
            this.pinchstart = bind(this.pinchstart, this),
            this.panright = bind(this.panright, this),
            this.panleft = bind(this.panleft, this),
            this.pandown = bind(this.pandown, this),
            this.panup = bind(this.panup, this),
            this.panend = bind(this.panend, this),
            this.pan = bind(this.pan, this),
            this.panstart = bind(this.panstart, this),
            this.forcetapend = bind(this.forcetapend, this),
            this.forcetapstart = bind(this.forcetapstart, this),
            this.forcetapchange = bind(this.forcetapchange, this),
            this._updateMacForce = bind(this._updateMacForce, this),
            this._updateTouchForce = bind(this._updateTouchForce, this),
            this.longpressend = bind(this.longpressend, this),
            this.longpressstart = bind(this.longpressstart, this),
            this.doubletap = bind(this.doubletap, this),
            this.tapend = bind(this.tapend, this),
            this.tapstart = bind(this.tapstart, this),
            this.tap = bind(this.tap, this),
            this.touchend = bind(this.touchend, this),
            this.touchmove = bind(this.touchmove, this),
            this.touchstart = bind(this.touchstart, this),
            this.startTouch = bind(this.startTouch, this),
            this.startMouse = bind(this.startMouse, this),
            this.em = new DOMEventManager,
            this.em.wrap(window).addEventListener("mousedown", this.startMouse),
            this.em.wrap(window).addEventListener("touchstart", this.startTouch)
        }
        return GestureInputRecognizer.prototype.destroy = function() {
            return this.em.removeAllListeners()
        }
        ,
        GestureInputRecognizer.prototype.cancel = function() {
            return window.clearTimeout(this.session.pressTimer),
            this.session = null
        }
        ,
        GestureInputRecognizer.prototype.startMouse = function(event) {
            if (!this.session)
                return this.em.wrap(window).addEventListener("mousemove", this.touchmove),
                this.em.wrap(window).addEventListener("mouseup", this.touchend),
                this.touchstart(event)
        }
        ,
        GestureInputRecognizer.prototype.startTouch = function(event) {
            if (!this.session)
                return this.em.wrap(window).addEventListener("touchmove", this.touchmove),
                this.em.wrap(window).addEventListener("touchend", this.touchend),
                this.touchstart(event)
        }
        ,
        GestureInputRecognizer.prototype.touchstart = function(event) {
            if (!this.session)
                return this.em.wrap(window).addEventListener("webkitmouseforcechanged", this._updateMacForce),
                this.session = {
                    startEvent: this._getGestureEvent(event),
                    lastEvent: null,
                    startMultiEvent: null,
                    startTime: Date.now(),
                    pressTimer: window.setTimeout(this.longpressstart, 1e3 * GestureInputLongPressTime),
                    started: {},
                    events: [],
                    eventCount: 0
                },
                event = this._getGestureEvent(event),
                this.tapstart(event),
                Date.now() - this.doubleTapTime < 1e3 * GestureInputDoubleTapTime ? this.doubletap(event) : this.doubleTapTime = Date.now(),
                this._process(event),
                Utils.isTouch() ? this._updateTouchForce() : void 0
        }
        ,
        GestureInputRecognizer.prototype.touchmove = function(event) {
            return this._process(this._getGestureEvent(event))
        }
        ,
        GestureInputRecognizer.prototype.touchend = function(event) {
            var eventName, ref, ref1, value;
            if (null != event.touches)
                if (Utils.isTouch()) {
                    if (0 !== event.touches.length)
                        return
                } else if (event.touches.length !== event.changedTouches.length)
                    return;
            this.em.wrap(window).removeEventListener("mousemove", this.touchmove),
            this.em.wrap(window).removeEventListener("mouseup", this.touchend),
            this.em.wrap(window).removeEventListener("touchmove", this.touchmove),
            this.em.wrap(window).removeEventListener("touchend", this.touchend),
            this.em.wrap(window).addEventListener("webkitmouseforcechanged", this._updateMacForce),
            event = this._getGestureEvent(event),
            ref = this.session.started;
            for (eventName in ref)
                value = ref[eventName],
                value && this[eventName + "end"](event);
            return (null != (ref1 = this.session) ? ref1.startEvent : void 0) ? this.session.startEvent.target === event.target && this.tap(event) : this.tap(event),
            this.tapend(event),
            this.cancel()
        }
        ,
        GestureInputRecognizer.prototype.tap = function(event) {
            return this._dispatchEvent("tap", event)
        }
        ,
        GestureInputRecognizer.prototype.tapstart = function(event) {
            return this._dispatchEvent("tapstart", event)
        }
        ,
        GestureInputRecognizer.prototype.tapend = function(event) {
            return this._dispatchEvent("tapend", event)
        }
        ,
        GestureInputRecognizer.prototype.doubletap = function(event) {
            return this._dispatchEvent("doubletap", event)
        }
        ,
        GestureInputRecognizer.prototype.longpressstart = function() {
            var event;
            if (this.session && !this.session.started.longpress)
                return event = this._getGestureEvent(this.session.startEvent),
                this.session.started.longpress = event,
                this._dispatchEvent("longpressstart", event),
                this._dispatchEvent("longpress", event)
        }
        ,
        GestureInputRecognizer.prototype.longpressend = function(event) {
            return this._dispatchEvent("longpressend", event)
        }
        ,
        GestureInputRecognizer.prototype._updateTouchForce = function() {
            var event, ref, ref1, ref2;
            if (null != (ref = this.session) && null != (ref1 = ref.lastEvent) && null != (ref2 = ref1.touches) ? ref2.length : void 0)
                return this.session.force = this.session.lastEvent.touches[0].force || 0,
                event = this._getGestureEvent(this.session.lastEvent),
                this.forcetapchange(event),
                this.session.force >= GestureInputForceTapMobile ? this.forcetapstart(event) : this.forcetapend(event),
                setTimeout(this._updateTouchForce, GestureInputForceTapMobilePollTime)
        }
        ,
        GestureInputRecognizer.prototype._updateMacForce = function(event) {
            if (this.session)
                return this.session.force = Utils.modulate(event.webkitForce, [0, 3], [0, 1]),
                this.forcetapchange(this._getGestureEvent(event)),
                event.webkitForce >= GestureInputForceTapDesktop ? this.forcetapstart(event) : this.forcetapend(event)
        }
        ,
        GestureInputRecognizer.prototype.forcetapchange = function(event) {
            return this._dispatchEvent("forcetapchange", event)
        }
        ,
        GestureInputRecognizer.prototype.forcetapstart = function(event) {
            if (this.session && !this.session.started.forcetap)
                return this.session.started.forcetap = event,
                this._dispatchEvent("forcetapstart", event),
                this._dispatchEvent("forcetap", event)
        }
        ,
        GestureInputRecognizer.prototype.forcetapend = function(event) {
            if (this.session && this.session.started.forcetap)
                return this.session.started.forcetap = null,
                this._dispatchEvent("forcetapend", event)
        }
        ,
        GestureInputRecognizer.prototype.panstart = function(event) {
            return this.session.started.pan = event,
            this._dispatchEvent("panstart", event, this.session.started.pan.target)
        }
        ,
        GestureInputRecognizer.prototype.pan = function(event) {
            var direction;
            if (this._dispatchEvent("pan", event, this.session.started.pan.target),
            direction = this._getDirection(event.delta))
                return this["pan" + direction](event)
        }
        ,
        GestureInputRecognizer.prototype.panend = function(event) {
            return this._dispatchEvent("panend", event, this.session.started.pan.target),
            this.session.started.pan = null
        }
        ,
        GestureInputRecognizer.prototype.panup = function(event) {
            return this._dispatchEvent("panup", event, this.session.started.pan.target)
        }
        ,
        GestureInputRecognizer.prototype.pandown = function(event) {
            return this._dispatchEvent("pandown", event, this.session.started.pan.target)
        }
        ,
        GestureInputRecognizer.prototype.panleft = function(event) {
            return this._dispatchEvent("panleft", event, this.session.started.pan.target)
        }
        ,
        GestureInputRecognizer.prototype.panright = function(event) {
            return this._dispatchEvent("panright", event, this.session.started.pan.target)
        }
        ,
        GestureInputRecognizer.prototype.pinchstart = function(event) {
            return this.session.started.pinch = event,
            this.scalestart(event, this.session.started.pinch.target),
            this.rotatestart(event, this.session.started.pinch.target),
            this._dispatchEvent("pinchstart", event)
        }
        ,
        GestureInputRecognizer.prototype.pinch = function(event) {
            return this._dispatchEvent("pinch", event),
            this.scale(event, this.session.started.pinch.target),
            this.rotate(event, this.session.started.pinch.target)
        }
        ,
        GestureInputRecognizer.prototype.pinchend = function(event) {
            return this._dispatchEvent("pinchend", event),
            this.scaleend(event, this.session.started.pinch.target),
            this.rotateend(event, this.session.started.pinch.target),
            this.session.started.pinch = null
        }
        ,
        GestureInputRecognizer.prototype.scalestart = function(event) {
            return this._dispatchEvent("scalestart", event)
        }
        ,
        GestureInputRecognizer.prototype.scale = function(event) {
            return this._dispatchEvent("scale", event)
        }
        ,
        GestureInputRecognizer.prototype.scaleend = function(event) {
            return this._dispatchEvent("scaleend", event)
        }
        ,
        GestureInputRecognizer.prototype.rotatestart = function(event) {
            return this._dispatchEvent("rotatestart", event)
        }
        ,
        GestureInputRecognizer.prototype.rotate = function(event) {
            return this._dispatchEvent("rotate", event)
        }
        ,
        GestureInputRecognizer.prototype.rotateend = function(event) {
            return this._dispatchEvent("rotateend", event)
        }
        ,
        GestureInputRecognizer.prototype.swipestart = function(event) {
            return this._dispatchEvent("swipestart", event),
            this.session.started.swipe = event,
            this.swipedirectionstart(event)
        }
        ,
        GestureInputRecognizer.prototype.swipe = function(event) {
            return this._dispatchEvent("swipe", event),
            this.swipedirection(event)
        }
        ,
        GestureInputRecognizer.prototype.swipeend = function(event) {
            return this._dispatchEvent("swipeend", event)
        }
        ,
        GestureInputRecognizer.prototype.swipedirectionstart = function(event) {
            var direction, ref, ref1, ref2, ref3, swipeEdge;
            if (event.offsetDirection && !this.session.started.swipedirection)
                return this.session.started.swipedirection = event,
                direction = this.session.started.swipedirection.offsetDirection,
                this._dispatchEvent("swipe" + direction + "start", event),
                swipeEdge = this._edgeForSwipeDirection(direction),
                "top" === swipeEdge && 0 < (ref = event.start.y) && ref < GestureInputEdgeSwipeDistance && this.edgeswipedirectionstart(event),
                "right" === swipeEdge && Screen.width - GestureInputEdgeSwipeDistance < (ref1 = event.start.x) && ref1 < Screen.width && this.edgeswipedirectionstart(event),
                "bottom" === swipeEdge && Screen.height - GestureInputEdgeSwipeDistance < (ref2 = event.start.y) && ref2 < Screen.height && this.edgeswipedirectionstart(event),
                "left" === swipeEdge && 0 < (ref3 = event.start.x) && ref3 < GestureInputEdgeSwipeDistance ? this.edgeswipedirectionstart(event) : void 0
        }
        ,
        GestureInputRecognizer.prototype.swipedirection = function(event) {
            var direction;
            if (this.session.started.swipedirection)
                return direction = this.session.started.swipedirection.offsetDirection,
                this._dispatchEvent("swipe" + direction, event),
                this.session.started.edgeswipedirection ? this.edgeswipedirection(event) : void 0
        }
        ,
        GestureInputRecognizer.prototype.swipedirectionend = function(event) {
            var direction;
            if (this.session.started.swipedirection)
                return direction = this.session.started.swipedirection.offsetDirection,
                this._dispatchEvent("swipe" + direction + "end", event)
        }
        ,
        GestureInputRecognizer.prototype.edgeswipedirection = function(event) {
            var swipeEdge;
            return swipeEdge = this._edgeForSwipeDirection(this.session.started.edgeswipedirection.offsetDirection),
            Screen.emit("edgeswipe", this._createEvent("edgeswipe", event)),
            Screen.emit("edgeswipe" + swipeEdge, this._createEvent("edgeswipe" + swipeEdge, event))
        }
        ,
        GestureInputRecognizer.prototype.edgeswipedirectionstart = function(event) {
            var swipeEdge;
            if (!this.session.started.edgeswipedirection)
                return this.session.started.edgeswipedirection = event,
                swipeEdge = this._edgeForSwipeDirection(this.session.started.edgeswipedirection.offsetDirection),
                Screen.emit("edgeswipestart", this._createEvent("edgeswipestart", event)),
                Screen.emit("edgeswipe" + swipeEdge + "start", this._createEvent("edgeswipe" + swipeEdge + "start", event))
        }
        ,
        GestureInputRecognizer.prototype.edgeswipedirectionend = function(event) {
            var swipeEdge;
            return swipeEdge = this._edgeForSwipeDirection(this.session.started.edgeswipedirection.offsetDirection),
            Screen.emit("edgeswipeend", this._createEvent("edgeswipeend", event)),
            Screen.emit("edgeswipe" + swipeEdge + "end", this._createEvent("edgeswipe" + swipeEdge + "end", event))
        }
        ,
        GestureInputRecognizer.prototype._process = function(event) {
            if (this.session)
                return this.session.events.push(event),
                event.eventCount = this.session.eventCount++,
                (Math.abs(event.delta.x) > 0 || Math.abs(event.delta.y) > 0) && (this.session.started.pan ? this.pan(event) : this.panstart(event)),
                this.session.started.pinch && 1 === event.fingers ? this.pinchend(event) : this.session.started.pinch || 2 !== event.fingers ? this.session.started.pinch && this.pinch(event) : this.pinchstart(event),
                !this.session.started.swipe && (Math.abs(event.offset.x) > GestureInputSwipeThreshold || Math.abs(event.offset.y) > GestureInputSwipeThreshold) ? this.swipestart(event) : this.session.started.swipe && this.swipe(event),
                this.session.lastEvent = event
        }
        ,
        GestureInputRecognizer.prototype._getEventPoint = function(event) {
            var ref;
            return (null != (ref = event.touches) ? ref.length : void 0) ? this._getTouchPoint(event, 0) : {
                x: event.pageX,
                y: event.pageY
            }
        }
        ,
        GestureInputRecognizer.prototype._getGestureEvent = function(event) {
            var eventPoint, events, i, len, pointKey, ref, ref1, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, touchPointA, touchPointB;
            for (eventPoint = Utils.convertPointFromContext(this._getEventPoint(event), Framer.CurrentContext, !0, !0),
            _.extend(event, {
                time: Date.now(),
                point: eventPoint,
                start: eventPoint,
                previous: eventPoint,
                offset: {
                    x: 0,
                    y: 0
                },
                offsetTime: 0,
                offsetAngle: 0,
                offsetDirection: null,
                delta: {
                    x: 0,
                    y: 0
                },
                deltaTime: 0,
                deltaAngle: 0,
                deltaDirection: null,
                force: 0,
                velocity: {
                    x: 0,
                    y: 0
                },
                fingers: (null != (ref = event.touches) ? ref.length : void 0) || 0,
                touchCenter: eventPoint,
                touchOffset: {
                    x: 0,
                    y: 0
                },
                touchDistance: 0,
                scale: 1,
                scaleDirection: null,
                rotation: 0
            }),
            (null != (ref1 = this.session) ? ref1.startEvent : void 0) && (event.start = this.session.startEvent.point,
            event.offset = Utils.pointSubtract(event.point, event.start),
            event.offsetTime = event.time - this.session.startEvent.time,
            event.offsetAngle = Utils.pointAngle(this.session.startEvent.point, event.point),
            event.offsetDirection = this._getDirection(event.offset),
            event.touchCenterStart = this.session.startEvent.touchCenter),
            (null != (ref2 = this.session) ? ref2.lastEvent : void 0) && (event.previous = this.session.lastEvent.point,
            event.deltaTime = event.time - this.session.lastEvent.time,
            event.delta = Utils.pointSubtract(event.point, this.session.lastEvent.point),
            event.deltaAngle = Utils.pointAngle(event.point, this.session.lastEvent.point),
            event.deltaDirection = this._getDirection(event.delta)),
            event.fingers > 1 && (touchPointA = this._getTouchPoint(event, 0),
            touchPointB = this._getTouchPoint(event, 1),
            event.touchCenter = Utils.pointCenter(touchPointB, touchPointA),
            event.touchOffset = Utils.pointSubtract(touchPointB, touchPointA),
            event.touchDistance = _.max([GestureInputMinimumFingerDistance, Utils.pointDistance(touchPointA, touchPointB)]),
            event.rotation = Utils.pointAngle(touchPointA, touchPointB)),
            (null != (ref3 = this.session) ? ref3.events : void 0) && (events = _.filter(this.session.events, function(e) {
                return 0 !== e.eventCount && e.time > event.time - 1e3 * GestureInputVelocityTime
            }),
            event.velocity = this._getVelocity(events)),
            (null != (ref4 = this.session) ? ref4.started.pinch : void 0) && (event.scale = event.touchDistance / this.session.started.pinch.touchDistance,
            event.scaleDirection = this._getScaleDirection(event.scale - this.session.lastEvent.scale),
            !event.scaleDirection && (null != (ref5 = this.session) ? ref5.lastEvent : void 0) && (event.scaleDirection = this.session.lastEvent.scaleDirection)),
            (null != (ref6 = this.session) ? ref6.lastEvent : void 0) && (event.fingers !== (ref7 = this.session.lastEvent.fingers) && 2 === ref7 && (event.delta = {
                x: 0,
                y: 0
            }),
            2 === event.fingers && 2 === this.session.lastEvent.fingers && (event.delta = Utils.pointSubtract(event.touchCenter, this.session.lastEvent.touchCenter))),
            (null != (ref8 = this.session) ? ref8.lastEvent : void 0) && this.session.force && (event.force = this.session.force),
            ref9 = ["point", "start", "previous", "offset", "delta", "velocity", "touchCenter", "touchOffset"],
            i = 0,
            len = ref9.length; i < len; i++)
                pointKey = ref9[i],
                event[pointKey + "X"] = event[pointKey].x,
                event[pointKey + "Y"] = event[pointKey].y;
            return event
        }
        ,
        GestureInputRecognizer.prototype._getTouchPoint = function(event, index) {
            var point;
            return point = {
                x: event.touches[index].pageX,
                y: event.touches[index].pageY
            }
        }
        ,
        GestureInputRecognizer.prototype._getDirection = function(offset) {
            if (Math.abs(offset.x) > Math.abs(offset.y)) {
                if (offset.x > 0)
                    return "right";
                if (offset.x < 0)
                    return "left"
            }
            if (Math.abs(offset.x) < Math.abs(offset.y)) {
                if (offset.y < 0)
                    return "up";
                if (offset.y > 0)
                    return "down"
            }
            return null
        }
        ,
        GestureInputRecognizer.prototype._edgeForSwipeDirection = function(direction) {
            return "down" === direction ? "top" : "left" === direction ? "right" : "up" === direction ? "bottom" : "right" === direction ? "left" : null
        }
        ,
        GestureInputRecognizer.prototype._getScaleDirection = function(offset) {
            return offset > 0 ? "up" : offset < 0 ? "down" : null
        }
        ,
        GestureInputRecognizer.prototype._createEvent = function(type, event) {
            var k, touchEvent, v;
            touchEvent = document.createEvent("MouseEvent"),
            touchEvent.initMouseEvent(type, !0, !0, window, event.detail, event.screenX, event.screenY, event.clientX, event.clientY, event.ctrlKey, event.shiftKey, event.altKey, event.metaKey, event.button, event.relatedTarget),
            touchEvent.touches = event.touches,
            touchEvent.changedTouches = event.touches,
            touchEvent.targetTouches = event.touches;
            for (k in event)
                v = event[k],
                touchEvent[k] = v;
            return touchEvent
        }
        ,
        GestureInputRecognizer.prototype._dispatchEvent = function(type, event, target) {
            var ref, ref1, touchEvent;
            return touchEvent = this._createEvent(type, event),
            null == target && (target = null != (ref = this.session) && null != (ref1 = ref.startEvent) ? ref1.target : void 0),
            null == target && (target = event.target),
            target.dispatchEvent(touchEvent)
        }
        ,
        GestureInputRecognizer.prototype._getVelocity = function(events) {
            var current, first, time, velocity;
            return events.length < 2 ? {
                x: 0,
                y: 0
            } : (current = events[events.length - 1],
            first = events[0],
            time = current.time - first.time,
            velocity = {
                x: (current.point.x - first.point.x) / time,
                y: (current.point.y - first.point.y) / time
            },
            Infinity === velocity.x && (velocity.x = 0),
            Infinity === velocity.y && (velocity.y = 0),
            velocity)
        }
        ,
        GestureInputRecognizer
    }()
}
, function(module, exports) {
    exports.date = 1480608608,
    exports.branch = "master",
    exports.hash = "e9d7ba1",
    exports.build = 2456,
    exports.version = exports.branch + "/" + exports.hash
}
, function(module, exports, __webpack_require__) {
    var BaseClass, Canvas, Events, bind = function(fn, me) {
        return function() {
            return fn.apply(me, arguments)
        }
    }, extend = function(child, parent) {
        function ctor() {
            this.constructor = child
        }
        for (var key in parent)
            hasProp.call(parent, key) && (child[key] = parent[key]);
        return ctor.prototype = parent.prototype,
        child.prototype = new ctor,
        child.__super__ = parent.prototype,
        child
    }, hasProp = {}.hasOwnProperty;
    BaseClass = __webpack_require__(6).BaseClass,
    Events = __webpack_require__(15).Events,
    Canvas = function(superClass) {
        function Canvas(options) {
            null == options && (options = {}),
            this._handleResize = bind(this._handleResize, this),
            Canvas.__super__.constructor.call(this, options),
            Events.wrap(window).addEventListener("resize", this._handleResize)
        }
        return extend(Canvas, superClass),
        Canvas.define("width", {
            get: function() {
                return window.innerWidth
            }
        }),
        Canvas.define("height", {
            get: function() {
                return window.innerHeight
            }
        }),
        Canvas.define("size", {
            get: function() {
                return Utils.size(this)
            }
        }),
        Canvas.define("frame", {
            get: function() {
                return Utils.frame(this)
            }
        }),
        Canvas.define("backgroundColor", {
            importable: !1,
            exportable: !1,
            get: function() {
                return Framer.Device.background.backgroundColor
            },
            set: function(value) {
                return Framer.Device.background.backgroundColor = value
            }
        }),
        Canvas.define("image", {
            importable: !1,
            exportable: !1,
            get: function() {
                return Framer.Device.background.image
            },
            set: function(value) {
                return Framer.Device.background.image = value
            }
        }),
        Canvas.prototype.onResize = function(cb) {
            return this.on("resize", cb)
        }
        ,
        Canvas.prototype._handleResize = function(event) {
            return this.emit("resize"),
            this.emit("change:width"),
            this.emit("change:height"),
            this.emit("change:size"),
            this.emit("change:frame")
        }
        ,
        Canvas.prototype.toInspect = function() {
            return "<" + this.constructor.name + " " + this.width + "x" + this.height + ">"
        }
        ,
        Canvas.prototype.convertPointToLayer = function(point, layer) {
            return Utils.convertPointFromContext(point, layer, !0, !0)
        }
        ,
        Canvas.prototype.convertPointToScreen = function(point) {
            var ctx;
            return ctx = Framer.Device.context,
            Utils.convertPointFromContext(point, ctx, !0, !0)
        }
        ,
        Canvas
    }(BaseClass),
    exports.Canvas = Canvas
}
]);
//# sourceMappingURL=framer.js.map
