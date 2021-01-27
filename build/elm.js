(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}




var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log = F2(function(tag, value)
{
	return value;
});

var _Debug_log_UNUSED = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString(value)
{
	return '<internals>';
}

function _Debug_toString_UNUSED(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash_UNUSED(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.Y.J === region.ae.J)
	{
		return 'on line ' + region.Y.J;
	}
	return 'on lines ' + region.Y.J + ' through ' + region.ae.J;
}



// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**_UNUSED/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**_UNUSED/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**/
	if (typeof x.$ === 'undefined')
	//*/
	/**_UNUSED/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0 = 0;
var _Utils_Tuple0_UNUSED = { $: '#0' };

function _Utils_Tuple2(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2_UNUSED(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3_UNUSED(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr(c) { return c; }
function _Utils_chr_UNUSED(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil = { $: 0 };
var _List_Nil_UNUSED = { $: '[]' };

function _List_Cons(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons_UNUSED(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**_UNUSED/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap_UNUSED(value) { return { $: 0, a: value }; }
function _Json_unwrap_UNUSED(value) { return value.a; }

function _Json_wrap(value) { return value; }
function _Json_unwrap(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aP,
		impl.a2,
		impl.a_,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**_UNUSED/, _Json_errorToString(result.a) /**/);
	var managers = {};
	var initPair = init(result.a);
	var model = initPair.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		var pair = A2(update, msg, model);
		stepper(model = pair.a, viewMetadata);
		_Platform_enqueueEffects(managers, pair.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, initPair.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**/
	var node = args['node'];
	//*/
	/**_UNUSED/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		x: func(record.x),
		Z: record.Z,
		W: record.W
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.x;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.Z;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.W) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aP,
		impl.a2,
		impl.a_,
		function(sendToApp, initialModel) {
			var view = impl.a3;
			/**/
			var domNode = args['node'];
			//*/
			/**_UNUSED/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.aP,
		impl.a2,
		impl.a_,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.X && impl.X(sendToApp)
			var view = impl.a3;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.ab);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.a0) && (_VirtualDom_doc.title = title = doc.a0);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.aR;
	var onUrlRequest = impl.aS;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };

	return _Browser_document({
		X: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.aq === next.aq
							&& curr.ah === next.ah
							&& curr.an.a === next.an.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		aP: function(flags)
		{
			return A3(impl.aP, flags, _Browser_getUrl(), key);
		},
		a3: impl.a3,
		a2: impl.a2,
		a_: impl.a_
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { aN: 'hidden', aG: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { aN: 'mozHidden', aG: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { aN: 'msHidden', aG: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { aN: 'webkitHidden', aG: 'webkitvisibilitychange' }
		: { aN: 'hidden', aG: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		aW: _Browser_getScene(),
		az: {
			aB: _Browser_window.pageXOffset,
			aC: _Browser_window.pageYOffset,
			aA: _Browser_doc.documentElement.clientWidth,
			aM: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		aA: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		aM: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			aW: {
				aA: node.scrollWidth,
				aM: node.scrollHeight
			},
			az: {
				aB: node.scrollLeft,
				aC: node.scrollTop,
				aA: node.clientWidth,
				aM: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			aW: _Browser_getScene(),
			az: {
				aB: x,
				aC: y,
				aA: _Browser_doc.documentElement.clientWidth,
				aM: _Browser_doc.documentElement.clientHeight
			},
			aI: {
				aB: x + rect.left,
				aC: y + rect.top,
				aA: rect.width,
				aM: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


// BYTES

function _Bytes_width(bytes)
{
	return bytes.byteLength;
}

var _Bytes_getHostEndianness = F2(function(le, be)
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(new Uint8Array(new Uint32Array([1]))[0] === 1 ? le : be));
	});
});


// ENCODERS

function _Bytes_encode(encoder)
{
	var mutableBytes = new DataView(new ArrayBuffer($elm$bytes$Bytes$Encode$getWidth(encoder)));
	$elm$bytes$Bytes$Encode$write(encoder)(mutableBytes)(0);
	return mutableBytes;
}


// SIGNED INTEGERS

var _Bytes_write_i8  = F3(function(mb, i, n) { mb.setInt8(i, n); return i + 1; });
var _Bytes_write_i16 = F4(function(mb, i, n, isLE) { mb.setInt16(i, n, isLE); return i + 2; });
var _Bytes_write_i32 = F4(function(mb, i, n, isLE) { mb.setInt32(i, n, isLE); return i + 4; });


// UNSIGNED INTEGERS

var _Bytes_write_u8  = F3(function(mb, i, n) { mb.setUint8(i, n); return i + 1 ;});
var _Bytes_write_u16 = F4(function(mb, i, n, isLE) { mb.setUint16(i, n, isLE); return i + 2; });
var _Bytes_write_u32 = F4(function(mb, i, n, isLE) { mb.setUint32(i, n, isLE); return i + 4; });


// FLOATS

var _Bytes_write_f32 = F4(function(mb, i, n, isLE) { mb.setFloat32(i, n, isLE); return i + 4; });
var _Bytes_write_f64 = F4(function(mb, i, n, isLE) { mb.setFloat64(i, n, isLE); return i + 8; });


// BYTES

var _Bytes_write_bytes = F3(function(mb, offset, bytes)
{
	for (var i = 0, len = bytes.byteLength, limit = len - 4; i <= limit; i += 4)
	{
		mb.setUint32(offset + i, bytes.getUint32(i));
	}
	for (; i < len; i++)
	{
		mb.setUint8(offset + i, bytes.getUint8(i));
	}
	return offset + len;
});


// STRINGS

function _Bytes_getStringWidth(string)
{
	for (var width = 0, i = 0; i < string.length; i++)
	{
		var code = string.charCodeAt(i);
		width +=
			(code < 0x80) ? 1 :
			(code < 0x800) ? 2 :
			(code < 0xD800 || 0xDBFF < code) ? 3 : (i++, 4);
	}
	return width;
}

var _Bytes_write_string = F3(function(mb, offset, string)
{
	for (var i = 0; i < string.length; i++)
	{
		var code = string.charCodeAt(i);
		offset +=
			(code < 0x80)
				? (mb.setUint8(offset, code)
				, 1
				)
				:
			(code < 0x800)
				? (mb.setUint16(offset, 0xC080 /* 0b1100000010000000 */
					| (code >>> 6 & 0x1F /* 0b00011111 */) << 8
					| code & 0x3F /* 0b00111111 */)
				, 2
				)
				:
			(code < 0xD800 || 0xDBFF < code)
				? (mb.setUint16(offset, 0xE080 /* 0b1110000010000000 */
					| (code >>> 12 & 0xF /* 0b00001111 */) << 8
					| code >>> 6 & 0x3F /* 0b00111111 */)
				, mb.setUint8(offset + 2, 0x80 /* 0b10000000 */
					| code & 0x3F /* 0b00111111 */)
				, 3
				)
				:
			(code = (code - 0xD800) * 0x400 + string.charCodeAt(++i) - 0xDC00 + 0x10000
			, mb.setUint32(offset, 0xF0808080 /* 0b11110000100000001000000010000000 */
				| (code >>> 18 & 0x7 /* 0b00000111 */) << 24
				| (code >>> 12 & 0x3F /* 0b00111111 */) << 16
				| (code >>> 6 & 0x3F /* 0b00111111 */) << 8
				| code & 0x3F /* 0b00111111 */)
			, 4
			);
	}
	return offset;
});


// DECODER

var _Bytes_decode = F2(function(decoder, bytes)
{
	try {
		return $elm$core$Maybe$Just(A2(decoder, bytes, 0).b);
	} catch(e) {
		return $elm$core$Maybe$Nothing;
	}
});

var _Bytes_read_i8  = F2(function(      bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getInt8(offset)); });
var _Bytes_read_i16 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getInt16(offset, isLE)); });
var _Bytes_read_i32 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getInt32(offset, isLE)); });
var _Bytes_read_u8  = F2(function(      bytes, offset) { return _Utils_Tuple2(offset + 1, bytes.getUint8(offset)); });
var _Bytes_read_u16 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 2, bytes.getUint16(offset, isLE)); });
var _Bytes_read_u32 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getUint32(offset, isLE)); });
var _Bytes_read_f32 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 4, bytes.getFloat32(offset, isLE)); });
var _Bytes_read_f64 = F3(function(isLE, bytes, offset) { return _Utils_Tuple2(offset + 8, bytes.getFloat64(offset, isLE)); });

var _Bytes_read_bytes = F3(function(len, bytes, offset)
{
	return _Utils_Tuple2(offset + len, new DataView(bytes.buffer, bytes.byteOffset + offset, len));
});

var _Bytes_read_string = F3(function(len, bytes, offset)
{
	var string = '';
	var end = offset + len;
	for (; offset < end;)
	{
		var byte = bytes.getUint8(offset++);
		string +=
			(byte < 128)
				? String.fromCharCode(byte)
				:
			((byte & 0xE0 /* 0b11100000 */) === 0xC0 /* 0b11000000 */)
				? String.fromCharCode((byte & 0x1F /* 0b00011111 */) << 6 | bytes.getUint8(offset++) & 0x3F /* 0b00111111 */)
				:
			((byte & 0xF0 /* 0b11110000 */) === 0xE0 /* 0b11100000 */)
				? String.fromCharCode(
					(byte & 0xF /* 0b00001111 */) << 12
					| (bytes.getUint8(offset++) & 0x3F /* 0b00111111 */) << 6
					| bytes.getUint8(offset++) & 0x3F /* 0b00111111 */
				)
				:
				(byte =
					((byte & 0x7 /* 0b00000111 */) << 18
						| (bytes.getUint8(offset++) & 0x3F /* 0b00111111 */) << 12
						| (bytes.getUint8(offset++) & 0x3F /* 0b00111111 */) << 6
						| bytes.getUint8(offset++) & 0x3F /* 0b00111111 */
					) - 0x10000
				, String.fromCharCode(Math.floor(byte / 0x400) + 0xD800, byte % 0x400 + 0xDC00)
				);
	}
	return _Utils_Tuple2(offset, string);
});

var _Bytes_decodeFailure = F2(function() { throw 0; });



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});



// SEND REQUEST

var _Http_toTask = F3(function(router, toTask, request)
{
	return _Scheduler_binding(function(callback)
	{
		function done(response) {
			callback(toTask(request.aJ.a(response)));
		}

		var xhr = new XMLHttpRequest();
		xhr.addEventListener('error', function() { done($elm$http$Http$NetworkError_); });
		xhr.addEventListener('timeout', function() { done($elm$http$Http$Timeout_); });
		xhr.addEventListener('load', function() { done(_Http_toResponse(request.aJ.b, xhr)); });
		$elm$core$Maybe$isJust(request.a1) && _Http_track(router, xhr, request.a1.a);

		try {
			xhr.open(request.aQ, request.d, true);
		} catch (e) {
			return done($elm$http$Http$BadUrl_(request.d));
		}

		_Http_configureRequest(xhr, request);

		request.ab.a && xhr.setRequestHeader('Content-Type', request.ab.a);
		xhr.send(request.ab.b);

		return function() { xhr.c = true; xhr.abort(); };
	});
});


// CONFIGURE

function _Http_configureRequest(xhr, request)
{
	for (var headers = request.aL; headers.b; headers = headers.b) // WHILE_CONS
	{
		xhr.setRequestHeader(headers.a.a, headers.a.b);
	}
	xhr.timeout = request.a$.a || 0;
	xhr.responseType = request.aJ.d;
	xhr.withCredentials = request.aE;
}


// RESPONSES

function _Http_toResponse(toBody, xhr)
{
	return A2(
		200 <= xhr.status && xhr.status < 300 ? $elm$http$Http$GoodStatus_ : $elm$http$Http$BadStatus_,
		_Http_toMetadata(xhr),
		toBody(xhr.response)
	);
}


// METADATA

function _Http_toMetadata(xhr)
{
	return {
		d: xhr.responseURL,
		aY: xhr.status,
		aZ: xhr.statusText,
		aL: _Http_parseHeaders(xhr.getAllResponseHeaders())
	};
}


// HEADERS

function _Http_parseHeaders(rawHeaders)
{
	if (!rawHeaders)
	{
		return $elm$core$Dict$empty;
	}

	var headers = $elm$core$Dict$empty;
	var headerPairs = rawHeaders.split('\r\n');
	for (var i = headerPairs.length; i--; )
	{
		var headerPair = headerPairs[i];
		var index = headerPair.indexOf(': ');
		if (index > 0)
		{
			var key = headerPair.substring(0, index);
			var value = headerPair.substring(index + 2);

			headers = A3($elm$core$Dict$update, key, function(oldValue) {
				return $elm$core$Maybe$Just($elm$core$Maybe$isJust(oldValue)
					? value + ', ' + oldValue.a
					: value
				);
			}, headers);
		}
	}
	return headers;
}


// EXPECT

var _Http_expect = F3(function(type, toBody, toValue)
{
	return {
		$: 0,
		d: type,
		b: toBody,
		a: toValue
	};
});

var _Http_mapExpect = F2(function(func, expect)
{
	return {
		$: 0,
		d: expect.d,
		b: expect.b,
		a: function(x) { return func(expect.a(x)); }
	};
});

function _Http_toDataView(arrayBuffer)
{
	return new DataView(arrayBuffer);
}


// BODY and PARTS

var _Http_emptyBody = { $: 0 };
var _Http_pair = F2(function(a, b) { return { $: 0, a: a, b: b }; });

function _Http_toFormData(parts)
{
	for (var formData = new FormData(); parts.b; parts = parts.b) // WHILE_CONS
	{
		var part = parts.a;
		formData.append(part.a, part.b);
	}
	return formData;
}

var _Http_bytesToBlob = F2(function(mime, bytes)
{
	return new Blob([bytes], { type: mime });
});


// PROGRESS

function _Http_track(router, xhr, tracker)
{
	// TODO check out lengthComputable on loadstart event

	xhr.upload.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Sending({
			aX: event.loaded,
			aw: event.total
		}))));
	});
	xhr.addEventListener('progress', function(event) {
		if (xhr.c) { return; }
		_Scheduler_rawSpawn(A2($elm$core$Platform$sendToSelf, router, _Utils_Tuple2(tracker, $elm$http$Http$Receiving({
			aU: event.loaded,
			aw: event.lengthComputable ? $elm$core$Maybe$Just(event.total) : $elm$core$Maybe$Nothing
		}))));
	});
}var $elm$core$Maybe$Just = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Maybe$Nothing = {$: 1};
var $elm$core$List$cons = _List_cons;
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (!node.$) {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === -2) {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Basics$EQ = 1;
var $elm$core$Basics$GT = 2;
var $elm$core$Basics$LT = 0;
var $elm$core$Result$Err = function (a) {
	return {$: 1, a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 1, a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 0, a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 2, a: a};
};
var $elm$core$Basics$False = 1;
var $elm$core$Basics$add = _Basics_add;
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 0:
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 1) {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 1:
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 2:
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 0, a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 1, a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.i) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.j),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.j);
		} else {
			var treeLen = builder.i * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.k) : builder.k;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.i);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.j) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.j);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{k: nodeList, i: (len / $elm$core$Array$branchFactor) | 0, j: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = 0;
var $elm$core$Result$isOk = function (result) {
	if (!result.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$andThen = _Json_andThen;
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 0:
			return 0;
		case 1:
			return 1;
		case 2:
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Browser$External = function (a) {
	return {$: 1, a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$browser$Browser$Dom$NotFound = $elm$core$Basics$identity;
var $elm$url$Url$Http = 0;
var $elm$url$Url$Https = 1;
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {ag: fragment, ah: host, al: path, an: port_, aq: protocol, ar: query};
	});
var $elm$core$String$contains = _String_contains;
var $elm$core$String$length = _String_length;
var $elm$core$String$slice = _String_slice;
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$toInt = _String_toInt;
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 1) {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		0,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		1,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$core$Task$Perform = $elm$core$Basics$identity;
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(0);
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return 0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0;
		return A2($elm$core$Task$map, tagger, task);
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			A2($elm$core$Task$map, toMessage, task));
	});
var $elm$browser$Browser$document = _Browser_document;
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		if (!maybeValue.$) {
			var value = maybeValue.a;
			return callback(value);
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$core$Result$toMaybe = function (result) {
	if (!result.$) {
		var v = result.a;
		return $elm$core$Maybe$Just(v);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$bytes$Bytes$Encode$getWidth = function (builder) {
	switch (builder.$) {
		case 0:
			return 1;
		case 1:
			return 2;
		case 2:
			return 4;
		case 3:
			return 1;
		case 4:
			return 2;
		case 5:
			return 4;
		case 6:
			return 4;
		case 7:
			return 8;
		case 8:
			var w = builder.a;
			return w;
		case 9:
			var w = builder.a;
			return w;
		default:
			var bs = builder.a;
			return _Bytes_width(bs);
	}
};
var $elm$bytes$Bytes$LE = 0;
var $elm$bytes$Bytes$Encode$write = F3(
	function (builder, mb, offset) {
		switch (builder.$) {
			case 0:
				var n = builder.a;
				return A3(_Bytes_write_i8, mb, offset, n);
			case 1:
				var e = builder.a;
				var n = builder.b;
				return A4(_Bytes_write_i16, mb, offset, n, !e);
			case 2:
				var e = builder.a;
				var n = builder.b;
				return A4(_Bytes_write_i32, mb, offset, n, !e);
			case 3:
				var n = builder.a;
				return A3(_Bytes_write_u8, mb, offset, n);
			case 4:
				var e = builder.a;
				var n = builder.b;
				return A4(_Bytes_write_u16, mb, offset, n, !e);
			case 5:
				var e = builder.a;
				var n = builder.b;
				return A4(_Bytes_write_u32, mb, offset, n, !e);
			case 6:
				var e = builder.a;
				var n = builder.b;
				return A4(_Bytes_write_f32, mb, offset, n, !e);
			case 7:
				var e = builder.a;
				var n = builder.b;
				return A4(_Bytes_write_f64, mb, offset, n, !e);
			case 8:
				var bs = builder.b;
				return A3($elm$bytes$Bytes$Encode$writeSequence, bs, mb, offset);
			case 9:
				var s = builder.b;
				return A3(_Bytes_write_string, mb, offset, s);
			default:
				var bs = builder.a;
				return A3(_Bytes_write_bytes, mb, offset, bs);
		}
	});
var $elm$bytes$Bytes$Encode$writeSequence = F3(
	function (builders, mb, offset) {
		writeSequence:
		while (true) {
			if (!builders.b) {
				return offset;
			} else {
				var b = builders.a;
				var bs = builders.b;
				var $temp$builders = bs,
					$temp$mb = mb,
					$temp$offset = A3($elm$bytes$Bytes$Encode$write, b, mb, offset);
				builders = $temp$builders;
				mb = $temp$mb;
				offset = $temp$offset;
				continue writeSequence;
			}
		}
	});
var $elm$bytes$Bytes$Decode$decode = F2(
	function (_v0, bs) {
		var decoder = _v0;
		return A2(_Bytes_decode, decoder, bs);
	});
var $elm$bytes$Bytes$Decode$Decoder = $elm$core$Basics$identity;
var $elm$bytes$Bytes$Decode$string = function (n) {
	return _Bytes_read_string(n);
};
var $elm$bytes$Bytes$Encode$encode = _Bytes_encode;
var $elm$bytes$Bytes$BE = 1;
var $danfishgold$base64_bytes$Encode$isValidChar = function (c) {
	if ($elm$core$Char$isAlphaNum(c)) {
		return true;
	} else {
		switch (c) {
			case '+':
				return true;
			case '/':
				return true;
			default:
				return false;
		}
	}
};
var $elm$core$Bitwise$or = _Bitwise_or;
var $elm$bytes$Bytes$Encode$Seq = F2(
	function (a, b) {
		return {$: 8, a: a, b: b};
	});
var $elm$bytes$Bytes$Encode$getWidths = F2(
	function (width, builders) {
		getWidths:
		while (true) {
			if (!builders.b) {
				return width;
			} else {
				var b = builders.a;
				var bs = builders.b;
				var $temp$width = width + $elm$bytes$Bytes$Encode$getWidth(b),
					$temp$builders = bs;
				width = $temp$width;
				builders = $temp$builders;
				continue getWidths;
			}
		}
	});
var $elm$bytes$Bytes$Encode$sequence = function (builders) {
	return A2(
		$elm$bytes$Bytes$Encode$Seq,
		A2($elm$bytes$Bytes$Encode$getWidths, 0, builders),
		builders);
};
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Bitwise$shiftRightBy = _Bitwise_shiftRightBy;
var $elm$core$Basics$ge = _Utils_ge;
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $danfishgold$base64_bytes$Encode$unsafeConvertChar = function (_char) {
	var key = $elm$core$Char$toCode(_char);
	if ((key >= 65) && (key <= 90)) {
		return key - 65;
	} else {
		if ((key >= 97) && (key <= 122)) {
			return (key - 97) + 26;
		} else {
			if ((key >= 48) && (key <= 57)) {
				return ((key - 48) + 26) + 26;
			} else {
				switch (_char) {
					case '+':
						return 62;
					case '/':
						return 63;
					default:
						return -1;
				}
			}
		}
	}
};
var $elm$bytes$Bytes$Encode$U16 = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$bytes$Bytes$Encode$unsignedInt16 = $elm$bytes$Bytes$Encode$U16;
var $elm$bytes$Bytes$Encode$U8 = function (a) {
	return {$: 3, a: a};
};
var $elm$bytes$Bytes$Encode$unsignedInt8 = $elm$bytes$Bytes$Encode$U8;
var $danfishgold$base64_bytes$Encode$encodeCharacters = F4(
	function (a, b, c, d) {
		if ($danfishgold$base64_bytes$Encode$isValidChar(a) && $danfishgold$base64_bytes$Encode$isValidChar(b)) {
			var n2 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(b);
			var n1 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(a);
			if ('=' === d) {
				if ('=' === c) {
					var n = (n1 << 18) | (n2 << 12);
					var b1 = n >> 16;
					return $elm$core$Maybe$Just(
						$elm$bytes$Bytes$Encode$unsignedInt8(b1));
				} else {
					if ($danfishgold$base64_bytes$Encode$isValidChar(c)) {
						var n3 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(c);
						var n = ((n1 << 18) | (n2 << 12)) | (n3 << 6);
						var combined = n >> 8;
						return $elm$core$Maybe$Just(
							A2($elm$bytes$Bytes$Encode$unsignedInt16, 1, combined));
					} else {
						return $elm$core$Maybe$Nothing;
					}
				}
			} else {
				if ($danfishgold$base64_bytes$Encode$isValidChar(c) && $danfishgold$base64_bytes$Encode$isValidChar(d)) {
					var n4 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(d);
					var n3 = $danfishgold$base64_bytes$Encode$unsafeConvertChar(c);
					var n = ((n1 << 18) | (n2 << 12)) | ((n3 << 6) | n4);
					var combined = n >> 8;
					var b3 = n;
					return $elm$core$Maybe$Just(
						$elm$bytes$Bytes$Encode$sequence(
							_List_fromArray(
								[
									A2($elm$bytes$Bytes$Encode$unsignedInt16, 1, combined),
									$elm$bytes$Bytes$Encode$unsignedInt8(b3)
								])));
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$String$foldr = _String_foldr;
var $elm$core$String$toList = function (string) {
	return A3($elm$core$String$foldr, $elm$core$List$cons, _List_Nil, string);
};
var $danfishgold$base64_bytes$Encode$encodeChunks = F2(
	function (input, accum) {
		encodeChunks:
		while (true) {
			var _v0 = $elm$core$String$toList(
				A2($elm$core$String$left, 4, input));
			_v0$4:
			while (true) {
				if (!_v0.b) {
					return $elm$core$Maybe$Just(accum);
				} else {
					if (_v0.b.b) {
						if (_v0.b.b.b) {
							if (_v0.b.b.b.b) {
								if (!_v0.b.b.b.b.b) {
									var a = _v0.a;
									var _v1 = _v0.b;
									var b = _v1.a;
									var _v2 = _v1.b;
									var c = _v2.a;
									var _v3 = _v2.b;
									var d = _v3.a;
									var _v4 = A4($danfishgold$base64_bytes$Encode$encodeCharacters, a, b, c, d);
									if (!_v4.$) {
										var enc = _v4.a;
										var $temp$input = A2($elm$core$String$dropLeft, 4, input),
											$temp$accum = A2($elm$core$List$cons, enc, accum);
										input = $temp$input;
										accum = $temp$accum;
										continue encodeChunks;
									} else {
										return $elm$core$Maybe$Nothing;
									}
								} else {
									break _v0$4;
								}
							} else {
								var a = _v0.a;
								var _v5 = _v0.b;
								var b = _v5.a;
								var _v6 = _v5.b;
								var c = _v6.a;
								var _v7 = A4($danfishgold$base64_bytes$Encode$encodeCharacters, a, b, c, '=');
								if (_v7.$ === 1) {
									return $elm$core$Maybe$Nothing;
								} else {
									var enc = _v7.a;
									return $elm$core$Maybe$Just(
										A2($elm$core$List$cons, enc, accum));
								}
							}
						} else {
							var a = _v0.a;
							var _v8 = _v0.b;
							var b = _v8.a;
							var _v9 = A4($danfishgold$base64_bytes$Encode$encodeCharacters, a, b, '=', '=');
							if (_v9.$ === 1) {
								return $elm$core$Maybe$Nothing;
							} else {
								var enc = _v9.a;
								return $elm$core$Maybe$Just(
									A2($elm$core$List$cons, enc, accum));
							}
						}
					} else {
						break _v0$4;
					}
				}
			}
			return $elm$core$Maybe$Nothing;
		}
	});
var $elm$core$Maybe$map = F2(
	function (f, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return $elm$core$Maybe$Just(
				f(value));
		} else {
			return $elm$core$Maybe$Nothing;
		}
	});
var $danfishgold$base64_bytes$Encode$encoder = function (string) {
	return A2(
		$elm$core$Maybe$map,
		A2($elm$core$Basics$composeR, $elm$core$List$reverse, $elm$bytes$Bytes$Encode$sequence),
		A2($danfishgold$base64_bytes$Encode$encodeChunks, string, _List_Nil));
};
var $danfishgold$base64_bytes$Encode$toBytes = function (string) {
	return A2(
		$elm$core$Maybe$map,
		$elm$bytes$Bytes$Encode$encode,
		$danfishgold$base64_bytes$Encode$encoder(string));
};
var $danfishgold$base64_bytes$Base64$toBytes = $danfishgold$base64_bytes$Encode$toBytes;
var $elm$bytes$Bytes$width = _Bytes_width;
var $danfishgold$base64_bytes$Base64$toString = function (b64String) {
	var _v0 = $danfishgold$base64_bytes$Base64$toBytes(b64String);
	if (_v0.$ === 1) {
		return $elm$core$Maybe$Nothing;
	} else {
		var b64Bytes = _v0.a;
		return A2(
			$elm$bytes$Bytes$Decode$decode,
			$elm$bytes$Bytes$Decode$string(
				$elm$bytes$Bytes$width(b64Bytes)),
			b64Bytes);
	}
};
var $author$project$Main$UrlData = F2(
	function (state, log) {
		return {q: log, z: state};
	});
var $author$project$Main$Expr = F2(
	function (input, output) {
		return {a: input, b: output};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$json$Json$Decode$string = _Json_decodeString;
var $author$project$Main$exprDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Main$Expr,
	A2($elm$json$Json$Decode$field, 'input', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'output',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
var $author$project$Main$TryAPLState = F3(
	function (environment, length, hash) {
		return {O: environment, Q: hash, R: length};
	});
var $elm$json$Json$Decode$index = _Json_decodeIndex;
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map3 = _Json_map3;
var $author$project$Main$stateDecoder = A4(
	$elm$json$Json$Decode$map3,
	$author$project$Main$TryAPLState,
	A2($elm$json$Json$Decode$index, 0, $elm$json$Json$Decode$string),
	A2($elm$json$Json$Decode$index, 1, $elm$json$Json$Decode$int),
	A2($elm$json$Json$Decode$index, 2, $elm$json$Json$Decode$string));
var $author$project$Main$urlDataDecoder = A3(
	$elm$json$Json$Decode$map2,
	$author$project$Main$UrlData,
	A2($elm$json$Json$Decode$field, 'state', $author$project$Main$stateDecoder),
	A2(
		$elm$json$Json$Decode$field,
		'log',
		$elm$json$Json$Decode$list($author$project$Main$exprDecoder)));
var $author$project$Main$hashToData = function (hash) {
	return A2(
		$elm$core$Maybe$andThen,
		A2(
			$elm$core$Basics$composeR,
			$elm$json$Json$Decode$decodeString($author$project$Main$urlDataDecoder),
			$elm$core$Result$toMaybe),
		$danfishgold$base64_bytes$Base64$toString(hash));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (!maybe.$) {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $author$project$Main$tryApplyHash = F2(
	function (maybeHash, _v0) {
		var model = _v0.a;
		var cmd = _v0.b;
		return A2(
			$elm$core$Maybe$withDefault,
			_Utils_Tuple2(model, cmd),
			A2(
				$elm$core$Maybe$map,
				function (data) {
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{q: data.q, z: data.z}),
						cmd);
				},
				A2($elm$core$Maybe$andThen, $author$project$Main$hashToData, maybeHash)));
	});
var $author$project$Main$init = function (flags) {
	return A2(
		$author$project$Main$tryApplyHash,
		flags._,
		_Utils_Tuple2(
			{
				P: '+',
				a: '',
				r: false,
				q: _List_Nil,
				z: {O: '', Q: '', R: 0}
			},
			$elm$core$Platform$Cmd$none));
};
var $elm$json$Json$Decode$null = _Json_decodeNull;
var $elm$json$Json$Decode$oneOf = _Json_oneOf;
var $author$project$Main$LangBarCharClicked = function (a) {
	return {$: 6, a: a};
};
var $author$project$Main$LangBarCharHovered = function (a) {
	return {$: 5, a: a};
};
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $author$project$Main$langBarCharClicked = _Platform_incomingPort('langBarCharClicked', $elm$json$Json$Decode$string);
var $author$project$Main$langBarCharHovered = _Platform_incomingPort('langBarCharHovered', $elm$json$Json$Decode$string);
var $author$project$Main$subscriptions = function (model) {
	return $elm$core$Platform$Sub$batch(
		_List_fromArray(
			[
				$author$project$Main$langBarCharClicked($author$project$Main$LangBarCharClicked),
				$author$project$Main$langBarCharHovered($author$project$Main$LangBarCharHovered)
			]));
};
var $author$project$Main$ReceivedResponse = function (a) {
	return {$: 2, a: a};
};
var $Janiczek$cmd_extra$Cmd$Extra$andThen = F2(
	function (fn, _v0) {
		var model = _v0.a;
		var cmd = _v0.b;
		var _v1 = fn(model);
		var newModel = _v1.a;
		var newCmd = _v1.b;
		return _Utils_Tuple2(
			newModel,
			$elm$core$Platform$Cmd$batch(
				_List_fromArray(
					[cmd, newCmd])));
	});
var $elm$json$Json$Encode$int = _Json_wrap;
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(0),
				entries));
	});
var $elm$json$Json$Encode$string = _Json_wrap;
var $author$project$Main$encodeStateAndInput = F2(
	function (state, input) {
		return A2(
			$elm$json$Json$Encode$list,
			$elm$core$Basics$identity,
			_List_fromArray(
				[
					$elm$json$Json$Encode$string(state.O),
					$elm$json$Json$Encode$int(state.R),
					$elm$json$Json$Encode$string(state.Q),
					$elm$json$Json$Encode$string(input)
				]));
	});
var $elm$http$Http$BadStatus_ = F2(
	function (a, b) {
		return {$: 3, a: a, b: b};
	});
var $elm$http$Http$BadUrl_ = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$GoodStatus_ = F2(
	function (a, b) {
		return {$: 4, a: a, b: b};
	});
var $elm$http$Http$NetworkError_ = {$: 2};
var $elm$http$Http$Receiving = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$Sending = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$Timeout_ = {$: 1};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: -2};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Maybe$isJust = function (maybe) {
	if (!maybe.$) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Platform$sendToSelf = _Platform_sendToSelf;
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === -2) {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1) {
					case 0:
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 1:
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$core$Dict$Black = 1;
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: -1, a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = 0;
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === -1) && (!right.a)) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === -1) && (!left.a)) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === -1) && (!left.a)) && (left.d.$ === -1)) && (!left.d.a)) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					0,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 1, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === -2) {
			return A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1) {
				case 0:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 1:
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === -1) && (dict.d.$ === -1)) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.e.d.$ === -1) && (!dict.e.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, 1, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === -1) && (dict.d.$ === -1)) && (dict.e.$ === -1)) {
		if ((dict.d.d.$ === -1) && (!dict.d.d.a)) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				0,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, 1, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr === 1) {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					1,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, 0, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, 0, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === -1) && (!left.a)) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, 0, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === -1) && (right.a === 1)) {
					if (right.d.$ === -1) {
						if (right.d.a === 1) {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === -1) && (dict.d.$ === -1)) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor === 1) {
			if ((lLeft.$ === -1) && (!lLeft.a)) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === -1) {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === -2) {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === -1) && (left.a === 1)) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === -1) && (!lLeft.a)) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === -1) {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === -1) {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === -1) {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === -1) && (!_v0.a)) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, 1, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (!_v0.$) {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$http$Http$expectStringResponse = F2(
	function (toMsg, toResult) {
		return A3(
			_Http_expect,
			'',
			$elm$core$Basics$identity,
			A2($elm$core$Basics$composeR, toResult, toMsg));
	});
var $elm$core$Result$mapError = F2(
	function (f, result) {
		if (!result.$) {
			var v = result.a;
			return $elm$core$Result$Ok(v);
		} else {
			var e = result.a;
			return $elm$core$Result$Err(
				f(e));
		}
	});
var $elm$http$Http$BadBody = function (a) {
	return {$: 4, a: a};
};
var $elm$http$Http$BadStatus = function (a) {
	return {$: 3, a: a};
};
var $elm$http$Http$BadUrl = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$NetworkError = {$: 2};
var $elm$http$Http$Timeout = {$: 1};
var $elm$http$Http$resolve = F2(
	function (toResult, response) {
		switch (response.$) {
			case 0:
				var url = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadUrl(url));
			case 1:
				return $elm$core$Result$Err($elm$http$Http$Timeout);
			case 2:
				return $elm$core$Result$Err($elm$http$Http$NetworkError);
			case 3:
				var metadata = response.a;
				return $elm$core$Result$Err(
					$elm$http$Http$BadStatus(metadata.aY));
			default:
				var body = response.b;
				return A2(
					$elm$core$Result$mapError,
					$elm$http$Http$BadBody,
					toResult(body));
		}
	});
var $elm$http$Http$expectJson = F2(
	function (toMsg, decoder) {
		return A2(
			$elm$http$Http$expectStringResponse,
			toMsg,
			$elm$http$Http$resolve(
				function (string) {
					return A2(
						$elm$core$Result$mapError,
						$elm$json$Json$Decode$errorToString,
						A2($elm$json$Json$Decode$decodeString, decoder, string));
				}));
	});
var $author$project$Main$FocusAttempted = function (a) {
	return {$: 4, a: a};
};
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$core$Task$onError = _Scheduler_onError;
var $elm$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return $elm$core$Task$command(
			A2(
				$elm$core$Task$onError,
				A2(
					$elm$core$Basics$composeL,
					A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
					$elm$core$Result$Err),
				A2(
					$elm$core$Task$andThen,
					A2(
						$elm$core$Basics$composeL,
						A2($elm$core$Basics$composeL, $elm$core$Task$succeed, resultToMessage),
						$elm$core$Result$Ok),
					task)));
	});
var $elm$browser$Browser$Dom$focus = _Browser_call('focus');
var $author$project$Main$inputId = 'input';
var $author$project$Main$focusInput = A2(
	$elm$core$Task$attempt,
	$author$project$Main$FocusAttempted,
	$elm$browser$Browser$Dom$focus($author$project$Main$inputId));
var $author$project$Main$logId = 'log';
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(0),
			pairs));
};
var $author$project$Main$encodeExpr = function (_v0) {
	var input = _v0.a;
	var output = _v0.b;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'input',
				$elm$json$Json$Encode$string(input)),
				_Utils_Tuple2(
				'output',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, output))
			]));
};
var $author$project$Main$encodeState = function (state) {
	return A2(
		$elm$json$Json$Encode$list,
		$elm$core$Basics$identity,
		_List_fromArray(
			[
				$elm$json$Json$Encode$string(state.O),
				$elm$json$Json$Encode$int(state.R),
				$elm$json$Json$Encode$string(state.Q)
			]));
};
var $elm$bytes$Bytes$Decode$loopHelp = F4(
	function (state, callback, bites, offset) {
		loopHelp:
		while (true) {
			var _v0 = callback(state);
			var decoder = _v0;
			var _v1 = A2(decoder, bites, offset);
			var newOffset = _v1.a;
			var step = _v1.b;
			if (!step.$) {
				var newState = step.a;
				var $temp$state = newState,
					$temp$callback = callback,
					$temp$bites = bites,
					$temp$offset = newOffset;
				state = $temp$state;
				callback = $temp$callback;
				bites = $temp$bites;
				offset = $temp$offset;
				continue loopHelp;
			} else {
				var result = step.a;
				return _Utils_Tuple2(newOffset, result);
			}
		}
	});
var $elm$bytes$Bytes$Decode$loop = F2(
	function (state, callback) {
		return A2($elm$bytes$Bytes$Decode$loopHelp, state, callback);
	});
var $elm$bytes$Bytes$Decode$Done = function (a) {
	return {$: 1, a: a};
};
var $elm$bytes$Bytes$Decode$Loop = function (a) {
	return {$: 0, a: a};
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$String$cons = _String_cons;
var $elm$core$String$fromChar = function (_char) {
	return A2($elm$core$String$cons, _char, '');
};
var $danfishgold$base64_bytes$Decode$lowest6BitsMask = 63;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Char$fromCode = _Char_fromCode;
var $danfishgold$base64_bytes$Decode$unsafeToChar = function (n) {
	if (n <= 25) {
		return $elm$core$Char$fromCode(65 + n);
	} else {
		if (n <= 51) {
			return $elm$core$Char$fromCode(97 + (n - 26));
		} else {
			if (n <= 61) {
				return $elm$core$Char$fromCode(48 + (n - 52));
			} else {
				switch (n) {
					case 62:
						return '+';
					case 63:
						return '/';
					default:
						return '\u0000';
				}
			}
		}
	}
};
var $danfishgold$base64_bytes$Decode$bitsToChars = F2(
	function (bits, missing) {
		var s = $danfishgold$base64_bytes$Decode$unsafeToChar(bits & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var r = $danfishgold$base64_bytes$Decode$unsafeToChar((bits >>> 6) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var q = $danfishgold$base64_bytes$Decode$unsafeToChar((bits >>> 12) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var p = $danfishgold$base64_bytes$Decode$unsafeToChar(bits >>> 18);
		switch (missing) {
			case 0:
				return A2(
					$elm$core$String$cons,
					p,
					A2(
						$elm$core$String$cons,
						q,
						A2(
							$elm$core$String$cons,
							r,
							$elm$core$String$fromChar(s))));
			case 1:
				return A2(
					$elm$core$String$cons,
					p,
					A2(
						$elm$core$String$cons,
						q,
						A2($elm$core$String$cons, r, '=')));
			case 2:
				return A2(
					$elm$core$String$cons,
					p,
					A2($elm$core$String$cons, q, '=='));
			default:
				return '';
		}
	});
var $danfishgold$base64_bytes$Decode$bitsToCharSpecialized = F4(
	function (bits1, bits2, bits3, accum) {
		var z = $danfishgold$base64_bytes$Decode$unsafeToChar((bits3 >>> 6) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var y = $danfishgold$base64_bytes$Decode$unsafeToChar((bits3 >>> 12) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var x = $danfishgold$base64_bytes$Decode$unsafeToChar(bits3 >>> 18);
		var w = $danfishgold$base64_bytes$Decode$unsafeToChar(bits3 & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var s = $danfishgold$base64_bytes$Decode$unsafeToChar(bits1 & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var r = $danfishgold$base64_bytes$Decode$unsafeToChar((bits1 >>> 6) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var q = $danfishgold$base64_bytes$Decode$unsafeToChar((bits1 >>> 12) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var p = $danfishgold$base64_bytes$Decode$unsafeToChar(bits1 >>> 18);
		var d = $danfishgold$base64_bytes$Decode$unsafeToChar(bits2 & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var c = $danfishgold$base64_bytes$Decode$unsafeToChar((bits2 >>> 6) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var b = $danfishgold$base64_bytes$Decode$unsafeToChar((bits2 >>> 12) & $danfishgold$base64_bytes$Decode$lowest6BitsMask);
		var a = $danfishgold$base64_bytes$Decode$unsafeToChar(bits2 >>> 18);
		return A2(
			$elm$core$String$cons,
			x,
			A2(
				$elm$core$String$cons,
				y,
				A2(
					$elm$core$String$cons,
					z,
					A2(
						$elm$core$String$cons,
						w,
						A2(
							$elm$core$String$cons,
							a,
							A2(
								$elm$core$String$cons,
								b,
								A2(
									$elm$core$String$cons,
									c,
									A2(
										$elm$core$String$cons,
										d,
										A2(
											$elm$core$String$cons,
											p,
											A2(
												$elm$core$String$cons,
												q,
												A2(
													$elm$core$String$cons,
													r,
													A2($elm$core$String$cons, s, accum))))))))))));
	});
var $danfishgold$base64_bytes$Decode$decode18Help = F5(
	function (a, b, c, d, e) {
		var combined6 = ((255 & d) << 16) | e;
		var combined5 = d >>> 8;
		var combined4 = 16777215 & c;
		var combined3 = ((65535 & b) << 8) | (c >>> 24);
		var combined2 = ((255 & a) << 16) | (b >>> 16);
		var combined1 = a >>> 8;
		return A4(
			$danfishgold$base64_bytes$Decode$bitsToCharSpecialized,
			combined3,
			combined2,
			combined1,
			A4($danfishgold$base64_bytes$Decode$bitsToCharSpecialized, combined6, combined5, combined4, ''));
	});
var $elm$bytes$Bytes$Decode$map5 = F6(
	function (func, _v0, _v1, _v2, _v3, _v4) {
		var decodeA = _v0;
		var decodeB = _v1;
		var decodeC = _v2;
		var decodeD = _v3;
		var decodeE = _v4;
		return F2(
			function (bites, offset) {
				var _v5 = A2(decodeA, bites, offset);
				var aOffset = _v5.a;
				var a = _v5.b;
				var _v6 = A2(decodeB, bites, aOffset);
				var bOffset = _v6.a;
				var b = _v6.b;
				var _v7 = A2(decodeC, bites, bOffset);
				var cOffset = _v7.a;
				var c = _v7.b;
				var _v8 = A2(decodeD, bites, cOffset);
				var dOffset = _v8.a;
				var d = _v8.b;
				var _v9 = A2(decodeE, bites, dOffset);
				var eOffset = _v9.a;
				var e = _v9.b;
				return _Utils_Tuple2(
					eOffset,
					A5(func, a, b, c, d, e));
			});
	});
var $elm$bytes$Bytes$Decode$unsignedInt16 = function (endianness) {
	return _Bytes_read_u16(!endianness);
};
var $danfishgold$base64_bytes$Decode$u16BE = $elm$bytes$Bytes$Decode$unsignedInt16(1);
var $elm$bytes$Bytes$Decode$unsignedInt32 = function (endianness) {
	return _Bytes_read_u32(!endianness);
};
var $danfishgold$base64_bytes$Decode$u32BE = $elm$bytes$Bytes$Decode$unsignedInt32(1);
var $danfishgold$base64_bytes$Decode$decode18Bytes = A6($elm$bytes$Bytes$Decode$map5, $danfishgold$base64_bytes$Decode$decode18Help, $danfishgold$base64_bytes$Decode$u32BE, $danfishgold$base64_bytes$Decode$u32BE, $danfishgold$base64_bytes$Decode$u32BE, $danfishgold$base64_bytes$Decode$u32BE, $danfishgold$base64_bytes$Decode$u16BE);
var $elm$bytes$Bytes$Decode$map = F2(
	function (func, _v0) {
		var decodeA = _v0;
		return F2(
			function (bites, offset) {
				var _v1 = A2(decodeA, bites, offset);
				var aOffset = _v1.a;
				var a = _v1.b;
				return _Utils_Tuple2(
					aOffset,
					func(a));
			});
	});
var $elm$bytes$Bytes$Decode$map2 = F3(
	function (func, _v0, _v1) {
		var decodeA = _v0;
		var decodeB = _v1;
		return F2(
			function (bites, offset) {
				var _v2 = A2(decodeA, bites, offset);
				var aOffset = _v2.a;
				var a = _v2.b;
				var _v3 = A2(decodeB, bites, aOffset);
				var bOffset = _v3.a;
				var b = _v3.b;
				return _Utils_Tuple2(
					bOffset,
					A2(func, a, b));
			});
	});
var $elm$bytes$Bytes$Decode$map3 = F4(
	function (func, _v0, _v1, _v2) {
		var decodeA = _v0;
		var decodeB = _v1;
		var decodeC = _v2;
		return F2(
			function (bites, offset) {
				var _v3 = A2(decodeA, bites, offset);
				var aOffset = _v3.a;
				var a = _v3.b;
				var _v4 = A2(decodeB, bites, aOffset);
				var bOffset = _v4.a;
				var b = _v4.b;
				var _v5 = A2(decodeC, bites, bOffset);
				var cOffset = _v5.a;
				var c = _v5.b;
				return _Utils_Tuple2(
					cOffset,
					A3(func, a, b, c));
			});
	});
var $elm$bytes$Bytes$Decode$succeed = function (a) {
	return F2(
		function (_v0, offset) {
			return _Utils_Tuple2(offset, a);
		});
};
var $elm$bytes$Bytes$Decode$unsignedInt8 = _Bytes_read_u8;
var $danfishgold$base64_bytes$Decode$loopHelp = function (_v0) {
	var remaining = _v0.S;
	var string = _v0.T;
	if (remaining >= 18) {
		return A2(
			$elm$bytes$Bytes$Decode$map,
			function (result) {
				return $elm$bytes$Bytes$Decode$Loop(
					{
						S: remaining - 18,
						T: _Utils_ap(string, result)
					});
			},
			$danfishgold$base64_bytes$Decode$decode18Bytes);
	} else {
		if (remaining >= 3) {
			var helper = F3(
				function (a, b, c) {
					var combined = ((a << 16) | (b << 8)) | c;
					return $elm$bytes$Bytes$Decode$Loop(
						{
							S: remaining - 3,
							T: _Utils_ap(
								string,
								A2($danfishgold$base64_bytes$Decode$bitsToChars, combined, 0))
						});
				});
			return A4($elm$bytes$Bytes$Decode$map3, helper, $elm$bytes$Bytes$Decode$unsignedInt8, $elm$bytes$Bytes$Decode$unsignedInt8, $elm$bytes$Bytes$Decode$unsignedInt8);
		} else {
			if (!remaining) {
				return $elm$bytes$Bytes$Decode$succeed(
					$elm$bytes$Bytes$Decode$Done(string));
			} else {
				if (remaining === 2) {
					var helper = F2(
						function (a, b) {
							var combined = (a << 16) | (b << 8);
							return $elm$bytes$Bytes$Decode$Done(
								_Utils_ap(
									string,
									A2($danfishgold$base64_bytes$Decode$bitsToChars, combined, 1)));
						});
					return A3($elm$bytes$Bytes$Decode$map2, helper, $elm$bytes$Bytes$Decode$unsignedInt8, $elm$bytes$Bytes$Decode$unsignedInt8);
				} else {
					return A2(
						$elm$bytes$Bytes$Decode$map,
						function (a) {
							return $elm$bytes$Bytes$Decode$Done(
								_Utils_ap(
									string,
									A2($danfishgold$base64_bytes$Decode$bitsToChars, a << 16, 2)));
						},
						$elm$bytes$Bytes$Decode$unsignedInt8);
				}
			}
		}
	}
};
var $danfishgold$base64_bytes$Decode$decoder = function (width) {
	return A2(
		$elm$bytes$Bytes$Decode$loop,
		{S: width, T: ''},
		$danfishgold$base64_bytes$Decode$loopHelp);
};
var $danfishgold$base64_bytes$Decode$fromBytes = function (bytes) {
	return A2(
		$elm$bytes$Bytes$Decode$decode,
		$danfishgold$base64_bytes$Decode$decoder(
			$elm$bytes$Bytes$width(bytes)),
		bytes);
};
var $danfishgold$base64_bytes$Base64$fromBytes = $danfishgold$base64_bytes$Decode$fromBytes;
var $elm$bytes$Bytes$Encode$Utf8 = F2(
	function (a, b) {
		return {$: 9, a: a, b: b};
	});
var $elm$bytes$Bytes$Encode$string = function (str) {
	return A2(
		$elm$bytes$Bytes$Encode$Utf8,
		_Bytes_getStringWidth(str),
		str);
};
var $danfishgold$base64_bytes$Base64$fromString = function (string) {
	return $danfishgold$base64_bytes$Base64$fromBytes(
		$elm$bytes$Bytes$Encode$encode(
			$elm$bytes$Bytes$Encode$string(string)));
};
var $author$project$Main$modelToHash = function (model) {
	return A2(
		$elm$core$Maybe$withDefault,
		'',
		$danfishgold$base64_bytes$Base64$fromString(
			A2(
				$elm$json$Json$Encode$encode,
				0,
				$elm$json$Json$Encode$object(
					_List_fromArray(
						[
							_Utils_Tuple2(
							'state',
							$author$project$Main$encodeState(model.z)),
							_Utils_Tuple2(
							'log',
							A2($elm$json$Json$Encode$list, $author$project$Main$encodeExpr, model.q))
						])))));
};
var $author$project$Main$setUrlHash = _Platform_outgoingPort('setUrlHash', $elm$json$Json$Encode$string);
var $author$project$Main$persistStateToUrl = function (model) {
	return _Utils_Tuple2(
		model,
		$author$project$Main$setUrlHash(
			$author$project$Main$modelToHash(model)));
};
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$List$takeReverse = F3(
	function (n, list, kept) {
		takeReverse:
		while (true) {
			if (n <= 0) {
				return kept;
			} else {
				if (!list.b) {
					return kept;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs,
						$temp$kept = A2($elm$core$List$cons, x, kept);
					n = $temp$n;
					list = $temp$list;
					kept = $temp$kept;
					continue takeReverse;
				}
			}
		}
	});
var $elm$core$List$takeTailRec = F2(
	function (n, list) {
		return $elm$core$List$reverse(
			A3($elm$core$List$takeReverse, n, list, _List_Nil));
	});
var $elm$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (n <= 0) {
			return _List_Nil;
		} else {
			var _v0 = _Utils_Tuple2(n, list);
			_v0$1:
			while (true) {
				_v0$5:
				while (true) {
					if (!_v0.b.b) {
						return list;
					} else {
						if (_v0.b.b.b) {
							switch (_v0.a) {
								case 1:
									break _v0$1;
								case 2:
									var _v2 = _v0.b;
									var x = _v2.a;
									var _v3 = _v2.b;
									var y = _v3.a;
									return _List_fromArray(
										[x, y]);
								case 3:
									if (_v0.b.b.b.b) {
										var _v4 = _v0.b;
										var x = _v4.a;
										var _v5 = _v4.b;
										var y = _v5.a;
										var _v6 = _v5.b;
										var z = _v6.a;
										return _List_fromArray(
											[x, y, z]);
									} else {
										break _v0$5;
									}
								default:
									if (_v0.b.b.b.b && _v0.b.b.b.b.b) {
										var _v7 = _v0.b;
										var x = _v7.a;
										var _v8 = _v7.b;
										var y = _v8.a;
										var _v9 = _v8.b;
										var z = _v9.a;
										var _v10 = _v9.b;
										var w = _v10.a;
										var tl = _v10.b;
										return (ctr > 1000) ? A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A2($elm$core$List$takeTailRec, n - 4, tl))))) : A2(
											$elm$core$List$cons,
											x,
											A2(
												$elm$core$List$cons,
												y,
												A2(
													$elm$core$List$cons,
													z,
													A2(
														$elm$core$List$cons,
														w,
														A3($elm$core$List$takeFast, ctr + 1, n - 4, tl)))));
									} else {
										break _v0$5;
									}
							}
						} else {
							if (_v0.a === 1) {
								break _v0$1;
							} else {
								break _v0$5;
							}
						}
					}
				}
				return list;
			}
			var _v1 = _v0.b;
			var x = _v1.a;
			return _List_fromArray(
				[x]);
		}
	});
var $elm$core$List$take = F2(
	function (n, list) {
		return A3($elm$core$List$takeFast, 0, n, list);
	});
var $elm_community$list_extra$List$Extra$removeAt = F2(
	function (index, l) {
		if (index < 0) {
			return l;
		} else {
			var _v0 = A2($elm$core$List$drop, index, l);
			if (!_v0.b) {
				return l;
			} else {
				var rest = _v0.b;
				return _Utils_ap(
					A2($elm$core$List$take, index, l),
					rest);
			}
		}
	});
var $elm$core$String$replace = F3(
	function (before, after, string) {
		return A2(
			$elm$core$String$join,
			after,
			A2($elm$core$String$split, before, string));
	});
var $elm$http$Http$Request = function (a) {
	return {$: 1, a: a};
};
var $elm$http$Http$State = F2(
	function (reqs, subs) {
		return {at: reqs, ax: subs};
	});
var $elm$http$Http$init = $elm$core$Task$succeed(
	A2($elm$http$Http$State, $elm$core$Dict$empty, _List_Nil));
var $elm$core$Process$kill = _Scheduler_kill;
var $elm$core$Process$spawn = _Scheduler_spawn;
var $elm$http$Http$updateReqs = F3(
	function (router, cmds, reqs) {
		updateReqs:
		while (true) {
			if (!cmds.b) {
				return $elm$core$Task$succeed(reqs);
			} else {
				var cmd = cmds.a;
				var otherCmds = cmds.b;
				if (!cmd.$) {
					var tracker = cmd.a;
					var _v2 = A2($elm$core$Dict$get, tracker, reqs);
					if (_v2.$ === 1) {
						var $temp$router = router,
							$temp$cmds = otherCmds,
							$temp$reqs = reqs;
						router = $temp$router;
						cmds = $temp$cmds;
						reqs = $temp$reqs;
						continue updateReqs;
					} else {
						var pid = _v2.a;
						return A2(
							$elm$core$Task$andThen,
							function (_v3) {
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A2($elm$core$Dict$remove, tracker, reqs));
							},
							$elm$core$Process$kill(pid));
					}
				} else {
					var req = cmd.a;
					return A2(
						$elm$core$Task$andThen,
						function (pid) {
							var _v4 = req.a1;
							if (_v4.$ === 1) {
								return A3($elm$http$Http$updateReqs, router, otherCmds, reqs);
							} else {
								var tracker = _v4.a;
								return A3(
									$elm$http$Http$updateReqs,
									router,
									otherCmds,
									A3($elm$core$Dict$insert, tracker, pid, reqs));
							}
						},
						$elm$core$Process$spawn(
							A3(
								_Http_toTask,
								router,
								$elm$core$Platform$sendToApp(router),
								req)));
				}
			}
		}
	});
var $elm$http$Http$onEffects = F4(
	function (router, cmds, subs, state) {
		return A2(
			$elm$core$Task$andThen,
			function (reqs) {
				return $elm$core$Task$succeed(
					A2($elm$http$Http$State, reqs, subs));
			},
			A3($elm$http$Http$updateReqs, router, cmds, state.at));
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (!_v0.$) {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$http$Http$maybeSend = F4(
	function (router, desiredTracker, progress, _v0) {
		var actualTracker = _v0.a;
		var toMsg = _v0.b;
		return _Utils_eq(desiredTracker, actualTracker) ? $elm$core$Maybe$Just(
			A2(
				$elm$core$Platform$sendToApp,
				router,
				toMsg(progress))) : $elm$core$Maybe$Nothing;
	});
var $elm$http$Http$onSelfMsg = F3(
	function (router, _v0, state) {
		var tracker = _v0.a;
		var progress = _v0.b;
		return A2(
			$elm$core$Task$andThen,
			function (_v1) {
				return $elm$core$Task$succeed(state);
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$filterMap,
					A3($elm$http$Http$maybeSend, router, tracker, progress),
					state.ax)));
	});
var $elm$http$Http$Cancel = function (a) {
	return {$: 0, a: a};
};
var $elm$http$Http$cmdMap = F2(
	function (func, cmd) {
		if (!cmd.$) {
			var tracker = cmd.a;
			return $elm$http$Http$Cancel(tracker);
		} else {
			var r = cmd.a;
			return $elm$http$Http$Request(
				{
					aE: r.aE,
					ab: r.ab,
					aJ: A2(_Http_mapExpect, func, r.aJ),
					aL: r.aL,
					aQ: r.aQ,
					a$: r.a$,
					a1: r.a1,
					d: r.d
				});
		}
	});
var $elm$http$Http$MySub = F2(
	function (a, b) {
		return {$: 0, a: a, b: b};
	});
var $elm$http$Http$subMap = F2(
	function (func, _v0) {
		var tracker = _v0.a;
		var toMsg = _v0.b;
		return A2(
			$elm$http$Http$MySub,
			tracker,
			A2($elm$core$Basics$composeR, toMsg, func));
	});
_Platform_effectManagers['Http'] = _Platform_createManager($elm$http$Http$init, $elm$http$Http$onEffects, $elm$http$Http$onSelfMsg, $elm$http$Http$cmdMap, $elm$http$Http$subMap);
var $elm$http$Http$command = _Platform_leaf('Http');
var $elm$http$Http$subscription = _Platform_leaf('Http');
var $elm$http$Http$request = function (r) {
	return $elm$http$Http$command(
		$elm$http$Http$Request(
			{aE: false, ab: r.ab, aJ: r.aJ, aL: r.aL, aQ: r.aQ, a$: r.a$, a1: r.a1, d: r.d}));
};
var $author$project$Main$ScrollAttempted = function (a) {
	return {$: 3, a: a};
};
var $elm$browser$Browser$Dom$getViewportOf = _Browser_getViewportOf;
var $elm$browser$Browser$Dom$setViewportOf = _Browser_setViewportOf;
var $author$project$Main$scrollToBottom = function (id) {
	return A2(
		$elm$core$Task$attempt,
		$author$project$Main$ScrollAttempted,
		A2(
			$elm$core$Task$andThen,
			function (viewport) {
				var bottom = viewport.aW.aM;
				return A3($elm$browser$Browser$Dom$setViewportOf, id, 0, bottom);
			},
			$elm$browser$Browser$Dom$getViewportOf(id)));
};
var $elm$core$Tuple$pair = F2(
	function (a, b) {
		return _Utils_Tuple2(a, b);
	});
var $author$project$Main$stateAndOutputDecoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$core$Tuple$pair,
	$author$project$Main$stateDecoder,
	A2(
		$elm$json$Json$Decode$index,
		3,
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)));
var $elm$http$Http$stringBody = _Http_pair;
var $author$project$Main$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 0:
				var input = msg.a;
				return model.r ? _Utils_Tuple2(model, $elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{a: input}),
					$author$project$Main$focusInput);
			case 6:
				var stringToAdd = msg.a;
				return model.r ? _Utils_Tuple2(model, $elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{
							a: _Utils_ap(model.a, stringToAdd)
						}),
					$author$project$Main$focusInput);
			case 5:
				var string = msg.a;
				var _v1 = $elm$core$String$uncons(string);
				if (_v1.$ === 1) {
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				} else {
					var _v2 = _v1.a;
					var _char = _v2.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{P: _char}),
						$elm$core$Platform$Cmd$none);
				}
			case 1:
				return model.r ? _Utils_Tuple2(model, $elm$core$Platform$Cmd$none) : _Utils_Tuple2(
					_Utils_update(
						model,
						{r: true}),
					$elm$http$Http$request(
						{
							ab: A2(
								$elm$http$Http$stringBody,
								'application/json;charset=UTF-8',
								A2(
									$elm$json$Json$Encode$encode,
									0,
									A2($author$project$Main$encodeStateAndInput, model.z, model.a))),
							aJ: A2($elm$http$Http$expectJson, $author$project$Main$ReceivedResponse, $author$project$Main$stateAndOutputDecoder),
							aL: _List_Nil,
							aQ: 'POST',
							a$: $elm$core$Maybe$Nothing,
							a1: $elm$core$Maybe$Nothing,
							d: 'https://tryapl.org/Exec'
						}));
			case 2:
				if (msg.a.$ === 1) {
					var err = msg.a.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{r: false}),
						$author$project$Main$focusInput);
				} else {
					var _v3 = msg.a.a;
					var state = _v3.a;
					var output = _v3.b;
					var sanitizedOutput = A2(
						$elm$core$List$map,
						A2($elm$core$String$replace, '\u0008', '\n'),
						output);
					return A2(
						$Janiczek$cmd_extra$Cmd$Extra$andThen,
						$author$project$Main$persistStateToUrl,
						_Utils_Tuple2(
							_Utils_update(
								model,
								{
									a: '',
									r: false,
									q: _Utils_ap(
										model.q,
										_List_fromArray(
											[
												{a: model.a, b: sanitizedOutput}
											])),
									z: state
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										$author$project$Main$scrollToBottom($author$project$Main$logId),
										$author$project$Main$focusInput
									]))));
				}
			case 3:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 4:
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			default:
				var index = msg.a;
				return A2(
					$Janiczek$cmd_extra$Cmd$Extra$andThen,
					$author$project$Main$persistStateToUrl,
					_Utils_Tuple2(
						_Utils_update(
							model,
							{
								q: A2($elm_community$list_extra$List$Extra$removeAt, index, model.q)
							}),
						$elm$core$Platform$Cmd$none));
		}
	});
var $author$project$Main$RemoveLog = function (a) {
	return {$: 7, a: a};
};
var $author$project$Main$SendRequest = {$: 1};
var $author$project$Main$SetInput = function (a) {
	return {$: 0, a: a};
};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$json$Json$Encode$bool = _Json_wrap;
var $elm$html$Html$Attributes$boolProperty = F2(
	function (key, bool) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$bool(bool));
	});
var $elm$html$Html$Attributes$disabled = $elm$html$Html$Attributes$boolProperty('disabled');
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$html$Html$input = _VirtualDom_node('input');
var $author$project$CharInfo$Backquote = function (a) {
	return {$: 1, a: a};
};
var $author$project$CharInfo$Category = function (a) {
	return {$: 1, a: a};
};
var $author$project$CharInfo$Example = function (a) {
	return {$: 5, a: a};
};
var $author$project$CharInfo$Heading = function (a) {
	return {$: 0, a: a};
};
var $author$project$CharInfo$Tab = function (a) {
	return {$: 0, a: a};
};
var $author$project$CharInfo$alpha = {
	e: '⍺',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('aa'),
			$author$project$CharInfo$Backquote('a')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Alpha (⍺): Left argument of a dfn'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 {⍺+1} 5']),
				b: _List_fromArray(
					['3'])
			}),
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Double-Alpha (⍺⍺): Left Operand of a dop'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 +{⍺ ⍺⍺ ⍵} 4']),
				b: _List_fromArray(
					['7'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Dfns & Dops', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Functions%20and%20Operators.htm'},
			{c: 'Dops', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Operators.htm'}
		]),
	c: 'Alpha'
};
var $author$project$CharInfo$ampersand = {
	e: '&',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Spawn'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['delay←{\'Delayed: \',⎕DL ⍵}    ⍝ delay function', '', 'delay 10    ⍝ delay for 10 seconds']),
				b: _List_fromArray(
					['Delayed:  10.2228'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⎕←delay&10  ⍝ delay for 10 seconds in new thread 1']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2+3 4       ⍝ execute something in current thread']),
				b: _List_fromArray(
					['5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['            ⍝ thread 1 completes:']),
				b: _List_fromArray(
					['Delayed:  10.03183'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Spawn', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Spawn.htm'}
		]),
	c: 'Ampersand'
};
var $author$project$CharInfo$at = {
	e: '@',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('At'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(0@2 4) 1 2 3 4 5']),
				b: _List_fromArray(
					['1 0 3 0 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['10 (×@2 4) 1 2 3 4 5']),
				b: _List_fromArray(
					['1 20 3 40 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(÷@2 4) 1 2 3 4 5']),
				b: _List_fromArray(
					['1 0.5 3 0.25 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'*\'@(2∘|) 1 2 3 4 5   ⍝ Boolean selection 1 0 1 0 1']),
				b: _List_fromArray(
					['* 2 * 4 *'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌽@(2∘|) 1 2 3 4 5     ⍝ Reversal of sub-array 1 3 5']),
				b: _List_fromArray(
					['5 2 3 4 1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'At', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/At.htm'}
		]),
	c: 'At'
};
var $author$project$CharInfo$backslash = {
	e: '\\',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Expand'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 ¯2 4 \\ 7 8']),
				b: _List_fromArray(
					['7 7 7 0 0 8 8 8 8'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 0 1 0 1 \\ \'Hat\'']),
				b: _List_fromArray(
					['H a t'])
			}),
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Scan'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+\\ 1 2 3 4 5']),
				b: _List_fromArray(
					['1 3 6 10 15'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+\\ mat']),
				b: _List_fromArray(
					['1  3  6 10', '5 11 18 26', '9 19 30 42'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+\\[1] mat']),
				b: _List_fromArray(
					[' 1  2  3  4', ' 6  8 10 12', '15 18 21 24'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Expand', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Expand.htm'},
			{c: 'Scan', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Scan.htm'}
		]),
	c: 'Backslash'
};
var $author$project$CharInfo$backslashBar = {
	e: '⍀',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('\\-'),
			$author$project$CharInfo$Backquote('.')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Expand First'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 0 2 1 ⍀ mat']),
				b: _List_fromArray(
					['1  2  3  4', '0  0  0  0', '5  6  7  8', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Scan First'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+⍀ mat']),
				b: _List_fromArray(
					[' 1  2  3  4', ' 6  8 10 12', '15 18 21 24'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Expand First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Expand%20First.htm'},
			{c: 'Scan First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Scan%20First.htm'}
		]),
	c: 'Backslash Bar'
};
var $author$project$CharInfo$Plain = function (a) {
	return {$: 2, a: a};
};
var $author$project$CharInfo$Verbatim = function (a) {
	return {$: 3, a: a};
};
var $author$project$CharInfo$circle = {
	e: '○',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('OO'),
			$author$project$CharInfo$Backquote('o')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Pi Times'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['○ 0 1 2']),
				b: _List_fromArray(
					['0 3.14159 6.28319'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Circular Functions (Trig)'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Note: Angles are in radians'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['radians ← ○ degrees ÷ 180', '', '1 ○ 0 1.5707963 3.1415927']),
				b: _List_fromArray(
					['0 1 ¯4.64102E¯8'])
			}),
			$author$project$CharInfo$Verbatim(
			_List_fromArray(
				[' ⍺   ⍺ ○ ⍵         ⍺   ⍺ ○ ⍵', '                   0   (1-⍵*2)*0.5', '¯1   Arcsin ⍵      1   Sine ⍵', '¯2   Arccos ⍵      2   Cosine ⍵', '¯3   Arctan ⍵      3   Tangent ⍵', '¯4   (¯1+⍵*2)*0.5  4   (1+⍵*2)*0.5', '¯5   Arcsinh ⍵     5   Sinh ⍵', '¯6   Arccosh ⍵     6   Cosh ⍵', '¯7   Arctanh ⍵     7   Tanh ⍵', '¯8   -8○⍵          8   (-1+⍵*2)*0.5', '¯9   ⍵             9   real part of ⍵', '¯10  +⍵           10   |⍵', '¯11  ⍵×0J1        11   imaginary part of ⍵', '¯12  *⍵×0J1       12   phase of ⍵']))
		]),
	h: _List_fromArray(
		[
			{c: 'Pi Times', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Pi%20Times.htm'},
			{c: 'Circular', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Circular.htm'}
		]),
	c: 'Circle'
};
var $author$project$CharInfo$circleBar = {
	e: '⊖',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('O-'),
			$author$project$CharInfo$Backquote('&')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Reverse First'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊖ mat']),
				b: _List_fromArray(
					['9 10 11 12', '5  6  7  8', '1  2  3  4'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Rotate First'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 2 ¯1 ⊖ mat']),
				b: _List_fromArray(
					['1  6 11 12', '5 10  3  4', '9  2  7  8'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Reverse First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reverse%20First.htm'},
			{c: 'Rotate First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Rotate%20First.htm'}
		]),
	c: 'Circle Bar'
};
var $author$project$CharInfo$circleDiaeresis = {
	e: '⍥',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('O:'),
			$author$project$CharInfo$Tab('O\"'),
			$author$project$CharInfo$Backquote('O')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('Over'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['-⍥⌊ 3.6                 ⍝ Same as ∘ or ⍤ monadically']),
				b: _List_fromArray(
					['¯3'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['5.1 -⍥⌊ 3.6             ⍝ Applies ⌊ to both arguments']),
				b: _List_fromArray(
					['2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Dyalog\' ≡⍥⎕C \'DYALOG\'  ⍝ Case-insensitive match']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Dyalog\' ≡⍥⎕C \'IBM\'']),
				b: _List_fromArray(
					['0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Over', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Over.htm'}
		]),
	c: 'Circle Diaeresis'
};
var $author$project$CharInfo$circleStile = {
	e: '⌽',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('O|'),
			$author$project$CharInfo$Backquote('%')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Reverse'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌽ \'trams\'']),
				b: _List_fromArray(
					['smart'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌽ mat']),
				b: _List_fromArray(
					[' 4  3  2 1', ' 8  7  6 5', '12 11 10 9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌽[1] mat']),
				b: _List_fromArray(
					['9 10 11 12', '5  6  7  8', '1  2  3  4'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Rotate'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 ⌽ \'HatStand\'']),
				b: _List_fromArray(
					['StandHat'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯2 ⌽ 1 2 3 4 5 6']),
				b: _List_fromArray(
					['5 6 1 2 3 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯1 ⌽ mat']),
				b: _List_fromArray(
					[' 4 1  2  3', ' 8 5  6  7', '12 9 10 11'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 ¯1 2 ⌽ mat']),
				b: _List_fromArray(
					[' 2  3 4  1', ' 8  5 6  7', '11 12 9 10'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 2 ¯1 ⌽[1] mat']),
				b: _List_fromArray(
					['1  6 11 12', '5 10  3  4', '9  2  7  8'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Reverse', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reverse.htm'},
			{c: 'Rotate', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Rotate.htm'}
		]),
	c: 'Circle Stile'
};
var $author$project$CharInfo$comma = {
	e: ',',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Ravel'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cube ← 2 2 2 ⍴ ⍳8', 'cube    ⍝ 3D array']),
				b: _List_fromArray(
					['1 2', '3 4', '', '5 6', '7 8'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					[', cube']),
				b: _List_fromArray(
					['1 2 3 4 5 6 7 8'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					[',[2 3] cube    ⍝ Ravel with axes']),
				b: _List_fromArray(
					['1 2 3 4', '5 6 7 8'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Catenate/Laminate (Join)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 , 4 5 6']),
				b: _List_fromArray(
					['1 2 3 4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cube , 99']),
				b: _List_fromArray(
					['1 2 99', '3 4 99', '', '5 6 99', '7 8 99'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ,[0.5] 4 5 6   ⍝ Laminate']),
				b: _List_fromArray(
					['1 2 3', '4 5 6'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Ravel', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Ravel.htm'},
			{c: 'Ravel with Axes', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Ravel%20with%20Axes.htm'},
			{c: 'Catenate Laminate', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Catenate%20Laminate.htm'}
		]),
	c: 'Comma'
};
var $author$project$CharInfo$commaBar = {
	e: '⍪',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab(',-'),
			$author$project$CharInfo$Backquote('<')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Table'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍪ 2 3 4']),
				b: _List_fromArray(
					['2', '3', '4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cube ← 2 2 2 ⍴ ⍳8', 'cube    ⍝ 3D array']),
				b: _List_fromArray(
					['1 2', '3 4', '', '5 6', '7 8'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍪ cube']),
				b: _List_fromArray(
					['1 2 3 4', '5 6 7 8'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Catenate First/Laminate'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 3 ⍴ ⍳6', 'mat']),
				b: _List_fromArray(
					['1 2 3', '4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ⍪ 0']),
				b: _List_fromArray(
					['1 2 3', '4 5 6', '0 0 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ⍪ 7 8 9']),
				b: _List_fromArray(
					['1 2 3', '4 5 6', '7 8 9'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Table', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Table.htm'},
			{c: 'Catenate First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Catenate%20First.htm'}
		]),
	c: 'Comma Bar'
};
var $author$project$CharInfo$del = {
	e: '∇',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('VV'),
			$author$project$CharInfo$Tab('v-'),
			$author$project$CharInfo$Backquote('g')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Del (∇): dfn self-reference (recursion)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['fact←{             ⍝ Factorial ⍵.', '    ⍵≤1: 1         ⍝ small ⍵: finished', '    ⍵×∇ ⍵-1        ⍝ otherwise: recurse', '}']),
				b: _List_Nil
			}),
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Double-Del (∇∇): dop self-reference'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['pow←{                ⍝ power operator: apply ⍵⍵ times', '    ⍵⍵=0:⍵           ⍝ ⍵⍵ is 0: finished', '    ⍺⍺ ∇∇(⍵⍵-1)⍺⍺ ⍵  ⍝ otherwise: recurse', '}']),
				b: _List_Nil
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Recursion', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Recursion.htm'}
		]),
	c: 'Del'
};
var $author$project$CharInfo$delta = {
	e: '∆',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('AA'),
			$author$project$CharInfo$Tab('^-'),
			$author$project$CharInfo$Backquote('h')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Heading('Identifier Character')
		]),
	h: _List_Nil,
	c: 'Delta'
};
var $author$project$CharInfo$deltaUnderbar = {
	e: '⍙',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('A_'),
			$author$project$CharInfo$Tab('^='),
			$author$project$CharInfo$Backquote('>')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Heading('Identifier Character')
		]),
	h: _List_Nil,
	c: 'Delta Underbar'
};
var $author$project$CharInfo$diaeresis = {
	e: '¨',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('::'),
			$author$project$CharInfo$Tab('\"\"'),
			$author$project$CharInfo$Backquote('1')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Each (Map)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊃¨ 1 2 3 \'ABC\' (9 8 7)']),
				b: _List_fromArray(
					['1 2 3 A 9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+/¨ (1 2 3 4)(5 6 7)']),
				b: _List_fromArray(
					['10 18'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 ↑¨ 1 2 (3 4) \'V\'']),
				b: _List_fromArray(
					['┌─────┬─────┬─────┬───┐', '│1 0 0│2 0 0│3 4 0│V  │', '└─────┴─────┴─────┴───┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ,¨ 99']),
				b: _List_fromArray(
					['┌────┬────┬────┐', '│1 99│2 99│3 99│', '└────┴────┴────┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Each (with Monadic Operand)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Each%20with%20Monadic%20Operand.htm'},
			{c: 'Each (with Dyadic Operand)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Each%20with%20Dyadic%20Operand.htm'}
		]),
	c: 'Diaeresis'
};
var $author$project$CharInfo$diamond = {
	e: '⋄',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('<>'),
			$author$project$CharInfo$Tab('^v'),
			$author$project$CharInfo$Backquote('`')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Statement Separator'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Statements are evaluated sequentially from left to right.'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['A←4 ⋄ A←A×3 ⋄ A÷2']),
				b: _List_fromArray(
					['6'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Statements', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/TradFns/Statements.htm'}
		]),
	c: 'Diamond'
};
var $author$project$CharInfo$divide = {
	e: '÷',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab(':-'),
			$author$project$CharInfo$Backquote('=')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Reciprocal'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['÷ 1 2 3']),
				b: _List_fromArray(
					['1 0.5 0.333333'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Divide'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ÷ 4 5 7']),
				b: _List_fromArray(
					['0.25 0.4 0.428571'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['10 ÷ ¯2 0.5']),
				b: _List_fromArray(
					['¯5 20'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Divide', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Divide.htm'},
			{c: 'Reciprocal', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reciprocal.htm'}
		]),
	c: 'Divide'
};
var $author$project$CharInfo$domino = {
	e: '⌹',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[-'),
			$author$project$CharInfo$Tab('-]'),
			$author$project$CharInfo$Backquote('+')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Matrix Inverse'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 2 ⍴ ⍳4', 'mat']),
				b: _List_fromArray(
					['1 2', '3 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌹ mat']),
				b: _List_fromArray(
					['¯2    1', ' 1.5 ¯0.5'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Matrix Divide'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['5 6 ⌹ mat']),
				b: _List_fromArray(
					['¯4 4.5'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Matrix Inverse', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Matrix%20Inverse.htm'},
			{c: 'Matrix Divide', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Matrix%20Divide.htm'}
		]),
	c: 'Domino'
};
var $author$project$CharInfo$dot = {
	e: '.',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('Product'),
			$author$project$CharInfo$Heading('Inner Product f.g'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 +.× 4 5 6']),
				b: _List_fromArray(
					['32'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 ∧.= 3 3 3 3']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 2 ⍴ ⍳4', 'mat']),
				b: _List_fromArray(
					['1 2', '3 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat +.× mat   ⍝ matrix product']),
				b: _List_fromArray(
					[' 7 10', '15 22'])
			}),
			$author$project$CharInfo$Heading('Outer Product ∘.g'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ∘.× 4 5 6 7']),
				b: _List_fromArray(
					[' 4  5  6  7', ' 8 10 12 14', '12 15 18 21'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Inner Product', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Inner%20Product.htm'},
			{c: 'Outer Product', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Outer%20Product.htm'}
		]),
	c: 'Dot'
};
var $author$project$CharInfo$downArrow = {
	e: '↓',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('v|'),
			$author$project$CharInfo$Backquote('u')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Split'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['↓ mat']),
				b: _List_fromArray(
					['┌───────┬───────┬──────────┐', '│1 2 3 4│5 6 7 8│9 10 11 12│', '└───────┴───────┴──────────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['↓[1] mat']),
				b: _List_fromArray(
					['┌─────┬──────┬──────┬──────┐', '│1 5 9│2 6 10│3 7 11│4 8 12│', '└─────┴──────┴──────┴──────┘'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Drop'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['4 ↓ \'Pineapple\'']),
				b: _List_fromArray(
					['apple'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯5 ↓ \'Pineapple\'']),
				b: _List_fromArray(
					['Pine'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 ¯2 ↓ mat']),
				b: _List_fromArray(
					['5  6', '9 10'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 ↓ mat']),
				b: _List_fromArray(
					['5  6  7  8', '9 10 11 12'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Split', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Split.htm'},
			{c: 'Drop', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Drop.htm'},
			{c: 'Drop with Axes', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Drop%20with%20Axes.htm'}
		]),
	c: 'Down Arrow'
};
var $author$project$CharInfo$downShoe = {
	e: '∪',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('uu'),
			$author$project$CharInfo$Tab('UU'),
			$author$project$CharInfo$Backquote('v')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Unique'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['∪ \'ab\' \'ba\' \'ab\' 1 1 2']),
				b: _List_fromArray(
					['┌──┬──┬─┬─┐', '│ab│ba│1│2│', '└──┴──┴─┴─┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← ↑ \'flywheel\' \'shyster\' \'flywheel\'', 'mat']),
				b: _List_fromArray(
					['flywheel', 'shyster ', 'flywheel'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['∪mat']),
				b: _List_fromArray(
					['flywheel', 'shyster '])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Union'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'ab\' \'cde\' \'fg\' ∪ \'a\' \'ab\'']),
				b: _List_fromArray(
					['┌──┬───┬──┬─┐', '│ab│cde│fg│a│', '└──┴───┴──┴─┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Unique', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Unique.htm'},
			{c: 'Union', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Union.htm'}
		]),
	c: 'Down Shoe'
};
var $author$project$CharInfo$CodeComment = function (a) {
	return {$: 4, a: a};
};
var $author$project$CharInfo$downTack = {
	e: '⊤',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('TT'),
			$author$project$CharInfo$Backquote('n')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Encode'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 2 2 2 ⊤ 5 7 12   ⍝ binary encode']),
				b: _List_fromArray(
					['0 0 1', '1 1 1', '0 1 0', '1 1 0'])
			}),
			$author$project$CharInfo$CodeComment(
			_List_fromArray(
				['⍝ mixed radix: encode of 10000 seconds', '⍝ to hours, minutes and seconds:'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['24 60 60 ⊤ 10000']),
				b: _List_fromArray(
					['2 46 40'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Encode', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Encode.htm'}
		]),
	c: 'Down Tack'
};
var $author$project$CharInfo$downstile = {
	e: '⌊',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('ll'),
			$author$project$CharInfo$Tab('LL'),
			$author$project$CharInfo$Backquote('d')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Floor (Round Down)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌊ 3.4 ¯3.4 3 0']),
				b: _List_fromArray(
					['3 ¯4 3 0'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Minimum'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1.1 ¯2 ⌊ 8.1 ¯3.4']),
				b: _List_fromArray(
					['1.1 ¯3.4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌊/ 3 1 4 1']),
				b: _List_fromArray(
					['1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Floor', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Floor.htm'},
			{c: 'Minimum', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Minimum.htm'}
		]),
	c: 'Downstile'
};
var $author$project$CharInfo$epsilon = {
	e: '∊',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('ee'),
			$author$project$CharInfo$Backquote('e')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Enlist'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 3 ⍴ ⍳6', 'mat']),
				b: _List_fromArray(
					['1 2 3', '4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['∊ 0 mat (7 8) 9']),
				b: _List_fromArray(
					['0 1 2 3 4 5 6 7 8 9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['∊ 2 3⍴1 \'abc\'']),
				b: _List_fromArray(
					['1 abc 1 abc 1 abc'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Membership'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'abc\' 4 ∊ 4 \'ab\' \'abcd\'']),
				b: _List_fromArray(
					['0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ∊ 6 2 7 4']),
				b: _List_fromArray(
					['0 1 0', '1 0 1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Enlist', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Enlist.htm'},
			{c: 'Type', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Type.htm'},
			{c: 'Membership', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Membership.htm'}
		]),
	c: 'Epsilon'
};
var $author$project$CharInfo$epsilonUnderbar = {
	e: '⍷',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('e_'),
			$author$project$CharInfo$Backquote('E')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Find'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'ana\' ⍷ \'Banana\'']),
				b: _List_fromArray(
					['0 1 0 1 0 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['X Y']),
				b: _List_fromArray(
					['┌───┬───────┐', '│0 1│0 1 0 0│', '│1 0│1 0 0 1│', '│   │0 0 1 0│', '│   │0 1 0 0│', '└───┴───────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['X ⍷ Y']),
				b: _List_fromArray(
					['1 0 0 0', '0 0 1 0', '0 1 0 0', '0 0 0 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Find', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Find.htm'}
		]),
	c: 'Epsilon Underbar'
};
var $author$project$CharInfo$equal = {
	e: '=',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('5')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Equal To'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 = 4 2 ¯1']),
				b: _List_fromArray(
					['0 1 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 = 0 0 1 1']),
				b: _List_fromArray(
					['1 0 0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Banana\' = \'a\'']),
				b: _List_fromArray(
					['0 1 0 1 0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['7 = \'7\'']),
				b: _List_fromArray(
					['0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Equal', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive Functions/Equal.htm'}
		]),
	c: 'Equal'
};
var $author$project$CharInfo$equalUnderbar = {
	e: '≡',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('=='),
			$author$project$CharInfo$Tab('=_'),
			$author$project$CharInfo$Backquote(':')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Depth'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≡ 7']),
				b: _List_fromArray(
					['0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≡ \'abc\'']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≡ (1 2)(3 4)']),
				b: _List_fromArray(
					['2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≡ (1 2)(3 4)5']),
				b: _List_fromArray(
					['¯2'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Match'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'b\' \'e\' \'x\' ≡ \'bex\'']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 ≡ 1 1']),
				b: _List_fromArray(
					['0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Depth', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Depth.htm'},
			{c: 'Match', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Match.htm'}
		]),
	c: 'Equal Underbar'
};
var $author$project$CharInfo$equalUnderbarSlash = {
	e: '≢',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('7='),
			$author$project$CharInfo$Tab('L='),
			$author$project$CharInfo$Backquote('\"')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Tally'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≢ \'a\'']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≢ 7 4 2']),
				b: _List_fromArray(
					['3'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≢ 5 4 3⍴0']),
				b: _List_fromArray(
					['5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≢ (1 2)(3 4)']),
				b: _List_fromArray(
					['2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 3 ⍴ ⍳6', 'mat']),
				b: _List_fromArray(
					['1 2 3', '4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≢ mat   ⍝ note how \"tally\"']),
				b: _List_fromArray(
					['2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴ mat   ⍝ differs from \"shape\"']),
				b: _List_fromArray(
					['2 3'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Not Match'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'bex\' ≢ \'b\',\'e\',\'x\'']),
				b: _List_fromArray(
					['0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 ≢ 1 1']),
				b: _List_fromArray(
					['1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Tally', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Tally.htm'},
			{c: 'Not Match', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Not%20Match.htm'}
		]),
	c: 'Equal Underbar Slash'
};
var $author$project$CharInfo$exclamationMark = {
	e: '!',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('_')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Factorial'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['! 3 9 ¯0.11']),
				b: _List_fromArray(
					['6 362880 1.07683'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Binomial'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 1 3 ! 3 10 ¯0.11']),
				b: _List_fromArray(
					['3 10 ¯0.0429385'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Factorial', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Factorial.htm'},
			{c: 'Binomial', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Binomial.htm'}
		]),
	c: 'Exclamation Mark'
};
var $author$project$CharInfo$gradeDown = {
	e: '⍒',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('V|'),
			$author$project$CharInfo$Backquote('#')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Grade Down'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Indices which would select items in descending order.'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍒ 33 11 44 66 22']),
				b: _List_fromArray(
					['4 3 1 5 2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['names←\'Joe\' \'Sue\' \'Sam\'', 'ages←34 22 25', '', 'names[⍒ages]']),
				b: _List_fromArray(
					['┌───┬───┬───┐', '│Joe│Sam│Sue│', '└───┴───┴───┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍒ \'ABC\' ⎕NULL ⍬ ¯3j4 \'A\'']),
				b: _List_fromArray(
					['1 5 4 2 3'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Dyadic Grade Down'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Provide collating sequence for character data.'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍒ \'Banana\'']),
				b: _List_fromArray(
					['3 5 2 4 6 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'an\' ⍒ \'Banana\'']),
				b: _List_fromArray(
					['1 3 5 2 4 6'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Grade Down (Monadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Down%20Monadic.htm'},
			{c: 'Grade Down (Dyadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Down%20Dyadic.htm'}
		]),
	c: 'Grade Down'
};
var $author$project$CharInfo$gradeUp = {
	e: '⍋',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('A|'),
			$author$project$CharInfo$Backquote('$')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Grade Up'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Indices which would select items in ascending order.'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍋ 33 11 44 66 22']),
				b: _List_fromArray(
					['2 5 1 3 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['names←\'Joe\' \'Sue\' \'Sam\'', 'ages←34 22 25', '', 'names[⍋ages]']),
				b: _List_fromArray(
					['┌───┬───┬───┐', '│Sue│Sam│Joe│', '└───┴───┴───┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍋ \'ABC\' ⎕NULL ⍬ ¯3j4 \'A\'']),
				b: _List_fromArray(
					['3 2 4 5 1'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Dyadic Grade Up'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Provide collating sequence for character data.'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍋ \'Banana\'']),
				b: _List_fromArray(
					['1 2 4 6 3 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'an\' ⍋ \'Banana\'']),
				b: _List_fromArray(
					['2 4 6 3 5 1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Grade Up (Monadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Up%20Monadic.htm'},
			{c: 'Grade Up (Dyadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Grade%20Up%20Dyadic.htm'}
		]),
	c: 'Grade Up'
};
var $author$project$CharInfo$greaterThan = {
	e: '>',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('7')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Greater Than'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 > 4 2 ¯1']),
				b: _List_fromArray(
					['0 0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 > 2']),
				b: _List_fromArray(
					['0 0 1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Greater', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Greater.htm'}
		]),
	c: 'Greater Than'
};
var $author$project$CharInfo$greaterThanOrEqualTo = {
	e: '≥',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('>='),
			$author$project$CharInfo$Tab('>_'),
			$author$project$CharInfo$Backquote('6')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Greater Than or Equal To'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ≥ 4 2 ¯1']),
				b: _List_fromArray(
					['0 1 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ≥ 2']),
				b: _List_fromArray(
					['0 1 1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Greater Or Equal', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Greater%20Or%20Equal.htm'}
		]),
	c: 'Greater Than Or Equal To'
};
var $author$project$CharInfo$highMinus = {
	e: '¯',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('--'),
			$author$project$CharInfo$Backquote('2')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Qualifier for negative number'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 + ¯1 0 1 ¯3']),
				b: _List_fromArray(
					['0 1 2 ¯2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3e¯2']),
				b: _List_fromArray(
					['0.03'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Numbers', d: 'https://help.dyalog.com/18.0/index.htm#Language/Introduction/Variables/Numbers.htm'}
		]),
	c: 'High Minus'
};
var $author$project$CharInfo$hydrant = {
	e: '⍎',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('o_'),
			$author$project$CharInfo$Backquote(';')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Execute'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍎ \'1+1\'']),
				b: _List_fromArray(
					['2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['V ← 1 2 3', '⍎ \'V\'']),
				b: _List_fromArray(
					['1 2 3'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Execute', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Execute.htm'}
		]),
	c: 'Hydrant'
};
var $author$project$CharInfo$iBeam = {
	e: '⌶',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('T_'),
			$author$project$CharInfo$Tab('II'),
			$author$project$CharInfo$Backquote('!')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('I-Beam'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Provides a system-related service determined by the left-operand value.', '(see Dyalog APL Language Reference Guide)']))
		]),
	h: _List_fromArray(
		[
			{c: 'I-Beam (short)', d: 'https://help.dyalog.com/18.0/index.htm#Language/I%20Beam%20Functions/I%20Beam%20(short).htm'},
			{c: 'I-Beam', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/I%20Beam.htm#I-Beam'}
		]),
	c: 'I-Beam'
};
var $author$project$CharInfo$iota = {
	e: '⍳',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('ii'),
			$author$project$CharInfo$Backquote('i')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Index Generator'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍳ 10']),
				b: _List_fromArray(
					['1 2 3 4 5 6 7 8 9 10'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍳ 2 3']),
				b: _List_fromArray(
					['┌───┬───┬───┐', '│1 1│1 2│1 3│', '├───┼───┼───┤', '│2 1│2 2│2 3│', '└───┴───┴───┘'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Index Of'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'ABCDABCDEF\' ⍳ \'ACF\'']),
				b: _List_fromArray(
					['1 3 10'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 2 ⍴ ⍳6', 'mat']),
				b: _List_fromArray(
					['1 2', '3 4', '5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ⍳ 5 6']),
				b: _List_fromArray(
					['3'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Index Generator', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index%20Generator.htm'},
			{c: 'Index Of', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index%20Of.htm'}
		]),
	c: 'Iota'
};
var $author$project$CharInfo$iotaUnderbar = {
	e: '⍸',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('i_'),
			$author$project$CharInfo$Backquote('I')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Where'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍸ 1 0 0 1 1']),
				b: _List_fromArray(
					['1 4 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['bmat ← 2 3 ⍴ 0 1', 'bmat']),
				b: _List_fromArray(
					['0 1 0', '1 0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍸ bmat']),
				b: _List_fromArray(
					['┌───┬───┬───┐', '│1 2│2 1│2 3│', '└───┴───┴───┘'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Interval Index'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'AEIOU\' ⍸ \'DYALOG\'']),
				b: _List_fromArray(
					['1 5 1 3 4 2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 4 6 ⍸ 1 2 3 4 5 6 7']),
				b: _List_fromArray(
					['0 1 1 2 2 3 3'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 2 ⍴ ⍳6', 'mat']),
				b: _List_fromArray(
					['1 2', '3 4', '5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ⍸ 3 3']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ⍸ 3 5']),
				b: _List_fromArray(
					['2'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Where', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Where.htm'},
			{c: 'Interval Index', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Interval%20Index.htm'}
		]),
	c: 'Iota Underbar'
};
var $author$project$CharInfo$jot = {
	e: '∘',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('oo'),
			$author$project$CharInfo$Backquote('j')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('Beside and Bind'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['NB: ∘ is also used in outer product ∘.f - see Dot (.)'])),
			$author$project$CharInfo$Heading('Beside'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌽∘⍳¨ 3 4 5']),
				b: _List_fromArray(
					['┌─────┬───────┬─────────┐', '│3 2 1│4 3 2 1│5 4 3 2 1│', '└─────┴───────┴─────────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯1 ⌽∘⍳¨ 3 4 5']),
				b: _List_fromArray(
					['┌─────┬───────┬─────────┐', '│3 1 2│4 1 2 3│5 1 2 3 4│', '└─────┴───────┴─────────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+∘÷/ 40⍴1    ⍝ continued fraction']),
				b: _List_fromArray(
					['1.61803'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Beside', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Beside.htm'},
			{c: 'Bind', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Bind.htm'}
		]),
	c: 'Jot'
};
var $author$project$CharInfo$jotDiaeresis = {
	e: '⍤',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('o:'),
			$author$project$CharInfo$Tab('o\"'),
			$author$project$CharInfo$Backquote('J')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator (f⍤g)'),
			$author$project$CharInfo$Heading('Atop'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['-⍤÷ 4      ⍝ (  f⍤g y) ≡  f   g y']),
				b: _List_fromArray(
					['¯0.25'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['12 -⍤÷ 4   ⍝ (x f⍤g y) ≡ (f x g y)']),
				b: _List_fromArray(
					['¯3'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 1 4 1 5 ~⍤∊ 1 2 3']),
				b: _List_fromArray(
					['0 0 1 0 1'])
			}),
			$author$project$CharInfo$Category('Dyadic operator (f⍤a)'),
			$author$project$CharInfo$Heading('Rank'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cube ← 2 2 3 ⍴ ⍳12', 'cube    ⍝ 3D array']),
				b: _List_fromArray(
					[' 1  2  3', ' 4  5  6', '', ' 7  8  9', '10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(,⍤2) cube']),
				b: _List_fromArray(
					['1 2 3  4  5  6', '7 8 9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cmat ← 2 3 ⍴ \'abczxy\'', 'cmat    ⍝ character matrix']),
				b: _List_fromArray(
					['abc', 'zxy'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(⍋⍤1) cmat    ⍝ grade-up by row']),
				b: _List_fromArray(
					['1 2 3', '2 3 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['nmat ← 3 4 ⍴ ⍳12', 'nmat     ⍝ numeric matrix']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['10 20 30 (+⍤0 1) nmat  ⍝ scalars plus vectors']),
				b: _List_fromArray(
					['11 12 13 14', '25 26 27 28', '39 40 41 42'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Atop', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Atop.htm'},
			{c: 'Rank', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Rank.htm'}
		]),
	c: 'Jot Diaeresis'
};
var $author$project$CharInfo$lamp = {
	e: '⍝',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('on'),
			$author$project$CharInfo$Backquote(',')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Comment'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Text to the right of ⍝ is ignored.'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2+3  ⍝ this is a comment']),
				b: _List_fromArray(
					['5'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Statements', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/TradFns/Statements.htm'}
		]),
	c: 'Lamp'
};
var $author$project$CharInfo$leftArrow = {
	e: '←',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('<-'),
			$author$project$CharInfo$Backquote('[')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Heading('Assignment'),
			$author$project$CharInfo$Heading('Naming:'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['V ← 5 6 7', '(i(j k)) ← 4(5 6)', 'sum ← +⌿', 'product ← {×/⍵}', 'inverse ← ⍣¯1']),
				b: _List_Nil
			}),
			$author$project$CharInfo$Heading('Modification:'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['V +← 1', 'V[2] ← 0', '(⊃V) ← 2\'']),
				b: _List_Nil
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Assignment', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Assignment.htm'},
			{c: 'Assignment (Indexed)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Assignment%20Indexed.htm'},
			{c: 'Assignment (Selective)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Assignment%20Selective.htm'},
			{c: 'Assignment (Modified)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Assignment%20Modified.htm'},
			{c: 'Assignment (Indexed Modified)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Assignment%20Indexed%20Modified.htm'},
			{c: 'Assignment (Selective Modified)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Assignment%20Selective%20Modified.htm'}
		]),
	c: 'Left Arrow'
};
var $author$project$CharInfo$leftShoe = {
	e: '⊂',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('(('),
			$author$project$CharInfo$Tab('cc'),
			$author$project$CharInfo$Backquote('z')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Enclose'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1(2 3)']),
				b: _List_fromArray(
					['┌─┬───┐', '│1│2 3│', '└─┴───┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊂ 1(2 3)']),
				b: _List_fromArray(
					['┌───────┐', '│┌─┬───┐│', '││1│2 3││', '│└─┴───┘│', '└───────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊂⊂ 1(2 3)']),
				b: _List_fromArray(
					['┌─────────┐', '│┌───────┐│', '││┌─┬───┐││', '│││1│2 3│││', '││└─┴───┘││', '│└───────┘│', '└─────────┘'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Partitioned Enclose'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 ⊂ 1 2 3 4']),
				b: _List_fromArray(
					['┌───┬─┐', '│2 3│4│', '└───┴─┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Enclose', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Enclose.htm'},
			{c: 'Enclose with Axes', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Enclose%20with%20Axes.htm'},
			{c: 'Partitioned Enclose', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Partitioned%20Enclose.htm'}
		]),
	c: 'Left Shoe'
};
var $author$project$CharInfo$leftShoeUnderbar = {
	e: '⊆',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('(_'),
			$author$project$CharInfo$Tab('c_'),
			$author$project$CharInfo$Backquote('Z')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Nest'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊆ \'this\'']),
				b: _List_fromArray(
					['┌────┐', '│this│', '└────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊆ \'this\' \'that\'']),
				b: _List_fromArray(
					['┌────┬────┐', '│this│that│', '└────┴────┘'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Partition'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 0 0 1 1 ⊆ 1 2 3 4 5']),
				b: _List_fromArray(
					['┌─┬───┐', '│1│4 5│', '└─┴───┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 1 2 2 2⊆⍳5']),
				b: _List_fromArray(
					['┌───┬─────┐', '│1 2│3 4 5│', '└───┴─────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\' \' (≠⊆⊢) \' many a  time\'']),
				b: _List_fromArray(
					['┌────┬─┬────┐', '│many│a│time│', '└────┴─┴────┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Nest', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Nest.htm'},
			{c: 'Partition', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Partition.htm'}
		]),
	c: 'Left Shoe Underbar'
};
var $author$project$CharInfo$leftTack = {
	e: '⊣',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('-|'),
			$author$project$CharInfo$Backquote('|')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Same'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊣  1 2 3']),
				b: _List_fromArray(
					['1 2 3'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Left'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'L\' ⊣ \'R\'']),
				b: _List_fromArray(
					['L'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊣/ 1 2 3']),
				b: _List_fromArray(
					['1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Same', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Same.htm'},
			{c: 'Left', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Left.htm'}
		]),
	c: 'Left Tack'
};
var $author$project$CharInfo$lessThan = {
	e: '<',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('3')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Less Than'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 < 4 2 ¯1']),
				b: _List_fromArray(
					['1 0 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 < 2']),
				b: _List_fromArray(
					['1 0 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Less', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Less.htm'}
		]),
	c: 'Less Than'
};
var $author$project$CharInfo$lessThanOrEqualTo = {
	e: '≤',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('<='),
			$author$project$CharInfo$Tab('<_'),
			$author$project$CharInfo$Backquote('4')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Less Than or Equal To'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ≤ 4 2 ¯1']),
				b: _List_fromArray(
					['1 1 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ≤ 2']),
				b: _List_fromArray(
					['1 1 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Less Or Equal', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Less%20Or%20Equal.htm'}
		]),
	c: 'Less Than Or Equal To'
};
var $author$project$CharInfo$log = {
	e: '⍟',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('*O'),
			$author$project$CharInfo$Backquote('*')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Natural Logarithm'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍟ 1 2 3 2.7182818285']),
				b: _List_fromArray(
					['0 0.693147 1.09861 1'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Logarithm'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 10 ⍟ 32 1000']),
				b: _List_fromArray(
					['5 3'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Natural Logarithm', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Natural%20Logarithm.htm'},
			{c: 'Logarithm', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Logarithm.htm'}
		]),
	c: 'Log'
};
var $author$project$CharInfo$logicalAnd = {
	e: '∧',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('^^'),
			$author$project$CharInfo$Backquote('0')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Lowest Common Multiple (AND)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 ∧ 0 0 1 1']),
				b: _List_fromArray(
					['0 0 0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['15 1 2 7 ∧ 35 1 4 0']),
				b: _List_fromArray(
					['105 1 4 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'And, Lowest Common Multiple', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/And%20Lowest%20Common%20Multiple.htm'}
		]),
	c: 'Logical AND'
};
var $author$project$CharInfo$logicalNand = {
	e: '⍲',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('^~'),
			$author$project$CharInfo$Backquote(')')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('NAND'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 ⍲ 0 0 1 1']),
				b: _List_fromArray(
					['1 1 1 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Nand', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Nand.htm'}
		]),
	c: 'Logical NAND'
};
var $author$project$CharInfo$logicalNor = {
	e: '⍱',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('v~'),
			$author$project$CharInfo$Backquote('(')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('NOR'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 ⍱ 0 0 1 1']),
				b: _List_fromArray(
					['1 0 0 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Nor', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Nor.htm'}
		]),
	c: 'Logical NOR'
};
var $author$project$CharInfo$logicalOr = {
	e: '∨',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('vv'),
			$author$project$CharInfo$Backquote('9')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Greatest Common Divisor (OR)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 ∨ 0 0 1 1']),
				b: _List_fromArray(
					['0 1 1 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['15 1 2 7 ∨ 35 1 4 0']),
				b: _List_fromArray(
					['5 1 2 7'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Or, Greatest Common Divisor', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Or%20Greatest%20Common%20Divisor.htm'}
		]),
	c: 'Logical OR'
};
var $author$project$CharInfo$minus = {
	e: '-',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Negate'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['- 3.2 ¯7 0']),
				b: _List_fromArray(
					['¯3.2 7 0'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Minus'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 7 9 - 5']),
				b: _List_fromArray(
					['¯2 2 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['5 1 4 - 2 3 4']),
				b: _List_fromArray(
					['3 ¯2 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Subtract', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Subtract.htm'},
			{c: 'Negative', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Negative.htm'}
		]),
	c: 'Minus'
};
var $author$project$CharInfo$notEqual = {
	e: '≠',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('=/'),
			$author$project$CharInfo$Tab('L-'),
			$author$project$CharInfo$Backquote('8')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Unique Mask'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≠ \'Banana\'']),
				b: _List_fromArray(
					['1 1 1 0 0 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['≠ \'Mississippi\'']),
				b: _List_fromArray(
					['1 1 1 0 0 0 0 0 1 0 0'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Not Equal To'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 ≠ 4 2 ¯1']),
				b: _List_fromArray(
					['1 0 1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['0 1 0 1 ≠ 0 0 1 1']),
				b: _List_fromArray(
					['0 1 1 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Banana\' ≠ \'a\'']),
				b: _List_fromArray(
					['1 0 1 0 1 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['7 ≠ \'7\'']),
				b: _List_fromArray(
					['1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Unique Mask', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Unique%20Mask.htm'},
			{c: 'Not Equal', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Not%20Equal.htm'}
		]),
	c: 'Not Equal'
};
var $author$project$CharInfo$omega = {
	e: '⍵',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('ww'),
			$author$project$CharInfo$Backquote('w')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Omega (⍵): Right argument of a dfn'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 {⍵+1} 5']),
				b: _List_fromArray(
					['6'])
			}),
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Double-Omega (⍵⍵): Right operand of a dop'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 +{⍺ ⍵⍵ ⍵}× 4']),
				b: _List_fromArray(
					['12'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Dfns & Dops', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Functions%20and%20Operators.htm'},
			{c: 'Dops', d: 'https://help.dyalog.com/18.0/index.htm#Language/Defined%20Functions%20and%20Operators/DynamicFunctions/Dynamic%20Operators.htm'}
		]),
	c: 'Omega'
};
var $author$project$CharInfo$plus = {
	e: '+',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Conjugate'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+ 1.2 0j4 ¯5j¯6']),
				b: _List_fromArray(
					['1.2 0J¯4 ¯5J6'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Plus'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 4 + 10']),
				b: _List_fromArray(
					['11 12 13 14'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 2 3 + 2 ¯4 1']),
				b: _List_fromArray(
					['3 ¯2 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+/ 1 2 3']),
				b: _List_fromArray(
					['6'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Add', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Add.htm'},
			{c: 'Conjugate', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Conjugate.htm'}
		]),
	c: 'Plus'
};
var $author$project$CharInfo$quad = {
	e: '⎕',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[]'),
			$author$project$CharInfo$Backquote('l')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Niladic'),
			$author$project$CharInfo$Heading('Evaluated Input/Output'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2+⎕+4']),
				b: _List_fromArray(
					['⎕:'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['8-5']),
				b: _List_fromArray(
					['9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2+⎕←3+4']),
				b: _List_fromArray(
					['7', '9'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Evaluated Input/Output', d: 'https://help.dyalog.com/18.0/index.htm#Language/System%20Functions/Evaluated%20Input%20Output.htm'}
		]),
	c: 'Quad'
};
var $author$project$CharInfo$quadColon = {
	e: '⍠',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[:'),
			$author$project$CharInfo$Tab(':]'),
			$author$project$CharInfo$Backquote('?')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('Variant'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(\'a\' ⎕R \'x\') \'ABC\'           ⍝ \'a\' replaced with \'x\'']),
				b: _List_fromArray(
					['ABC'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(\'a\' ⎕R \'x\' ⍠ \'IC\' 1) \'ABC\'  ⍝ .. Ignoring Case']),
				b: _List_fromArray(
					['xBC'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['IgnCase ← ⍠ \'IC\' 1', '', '\'a\' ⎕R \'x\' IgnCase \'ABC\'']),
				b: _List_fromArray(
					['xBC'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Variant', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Variant.htm'}
		]),
	c: 'Quad Colon'
};
var $author$project$CharInfo$quadDiamond = {
	e: '⌺',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[<'),
			$author$project$CharInfo$Tab('>]'),
			$author$project$CharInfo$Backquote('~')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('Stencil'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 4 4 ⍴ ⍳16', 'mat']),
				b: _List_fromArray(
					[' 1  2  3  4', ' 5  6  7  8', ' 9 10 11 12', '13 14 15 16'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['({⊂⍵}⌺3 3) mat']),
				b: _List_fromArray(
					['┌───────┬────────┬────────┬───────┐', '│0 0 0  │0 0 0   │0 0 0   │0 0 0  │', '│0 1 2  │1 2 3   │2 3 4   │3 4 0  │', '│0 5 6  │5 6 7   │6 7 8   │7 8 0  │', '├───────┼────────┼────────┼───────┤', '│0 1  2 │1  2  3 │ 2  3  4│ 3  4 0│', '│0 5  6 │5  6  7 │ 6  7  8│ 7  8 0│', '│0 9 10 │9 10 11 │10 11 12│11 12 0│', '├───────┼────────┼────────┼───────┤', '│0  5  6│ 5  6  7│ 6  7  8│ 7  8 0│', '│0  9 10│ 9 10 11│10 11 12│11 12 0│', '│0 13 14│13 14 15│14 15 16│15 16 0│', '├───────┼────────┼────────┼───────┤', '│0  9 10│ 9 10 11│10 11 12│11 12 0│', '│0 13 14│13 14 15│14 15 16│15 16 0│', '│0  0  0│ 0  0  0│ 0  0  0│ 0  0 0│', '└───────┴────────┴────────┴───────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['({+/,⍵}⌺3 3) mat']),
				b: _List_fromArray(
					['14 24 30 22', '33 54 63 45', '57 90 99 69', '46 72 78 54'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['{⍺ ⍵}⌸ \'Banana\'  ⍝ (same as above)']),
				b: _List_fromArray(
					['┌─┬─────┐', '│B│1    │', '├─┼─────┤', '│a│2 4 6│', '├─┼─────┤', '│n│3 5  │', '└─┴─────┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Stencil', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Stencil.htm'}
		]),
	c: 'Quad Diamond'
};
var $author$project$CharInfo$quadEqual = {
	e: '⌸',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[='),
			$author$project$CharInfo$Tab('=]'),
			$author$project$CharInfo$Backquote('K')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Key'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Banana\' {⍺ ⍵}⌸ 3 1 4 1 5 9']),
				b: _List_fromArray(
					['┌─┬─────┐', '│B│3    │', '├─┼─────┤', '│a│1 1 9│', '├─┼─────┤', '│n│4 5  │', '└─┴─────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Banana\' {⍺,+/⍵}⌸ 3 1 4 1 5 9']),
				b: _List_fromArray(
					['B  3', 'a 11', 'n  9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'Banana\' {⍺ ⍵}⌸ 1 2 3 4 5 6']),
				b: _List_fromArray(
					['┌─┬─────┐', '│B│1    │', '├─┼─────┤', '│a│2 4 6│', '├─┼─────┤', '│n│3 5  │', '└─┴─────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['{⍺ ⍵}⌸ \'Banana\'  ⍝ (same as above)']),
				b: _List_fromArray(
					['┌─┬─────┐', '│B│1    │', '├─┼─────┤', '│a│2 4 6│', '├─┼─────┤', '│n│3 5  │', '└─┴─────┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Key', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Key.htm'}
		]),
	c: 'Quad Equal'
};
var $author$project$CharInfo$questionMark = {
	e: '?',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('q')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Roll'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['? 6 6 6 6 6']),
				b: _List_fromArray(
					['4 3 6 3 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['? 0 0']),
				b: _List_fromArray(
					['0.260561 0.929928'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Deal'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['13 ? 52']),
				b: _List_fromArray(
					['36 31 44 11 27 42 13 8 2 33 19 34 6'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Roll', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Roll.htm'},
			{c: 'Deal', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Deal.htm'}
		]),
	c: 'Question Mark'
};
var $author$project$CharInfo$quoteQuad = {
	e: '⍞',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[\''),
			$author$project$CharInfo$Tab('\']'),
			$author$project$CharInfo$Backquote('{')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Niladic'),
			$author$project$CharInfo$Heading('Character Input/Output'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['chars ← ⍞     ⍝ input session line']),
				b: _List_fromArray(
					['hello'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['chars']),
				b: _List_fromArray(
					['hello'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍞ ← \'Name:\'   ⍝ places text in session']),
				b: _List_fromArray(
					['Name:'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['ask ← {⍞←⍵ ⋄ (≢⍵)↓⍞}   ⍝ prompt for input:', '', 'name ← ask¨ \'First:  \' \'Second: \'']),
				b: _List_fromArray(
					['First:  John', 'Second: Brown'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['name']),
				b: _List_fromArray(
					['┌────┬─────┐', '│John│Brown│', '└────┴─────┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Character Input/Output', d: 'https://help.dyalog.com/18.0/index.htm#Language/System%20Functions/Character%20Input%20Output.htm'}
		]),
	c: 'Quote Quad'
};
var $author$project$CharInfo$rho = {
	e: '⍴',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('rr'),
			$author$project$CharInfo$Tab('pp'),
			$author$project$CharInfo$Backquote('r')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Shape'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴ mat']),
				b: _List_fromArray(
					['3 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴⍴ mat']),
				b: _List_fromArray(
					['2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴ \'your boat\'']),
				b: _List_fromArray(
					['9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴ 7']),
				b: _List_fromArray(
					[''])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴⍴ 7']),
				b: _List_fromArray(
					['0'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Reshape'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 3 4 ⍴ 1 2 3 4 5 6 7']),
				b: _List_fromArray(
					['1 2 3 4', '5 6 7 1', '2 3 4 5', '', '6 7 1 2', '3 4 5 6', '7 1 2 3'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Shape', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Shape.htm'},
			{c: 'Reshape', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Reshape.htm'}
		]),
	c: 'Rho'
};
var $author$project$CharInfo$rightArrow = {
	e: '→',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('->'),
			$author$project$CharInfo$Backquote(']')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Syntax'),
			$author$project$CharInfo$Heading('Branch (Clear suspension)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['→ Label  ⍝ branch to Label:', '→ ⎕LC    ⍝ resume suspended execution', '→ 0      ⍝ exit current function and resume calling line', '→        ⍝ clear one stack suspension']),
				b: _List_Nil
			}),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Branching is superseded by the more modern control structures such as :If ... :EndIf']))
		]),
	h: _List_fromArray(
		[
			{c: 'Branch', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Branch.htm'},
			{c: 'Abort', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Abort.htm'}
		]),
	c: 'Right Arrow'
};
var $author$project$CharInfo$rightShoe = {
	e: '⊃',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('))'),
			$author$project$CharInfo$Backquote('x')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('First'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊃ \'Word\'']),
				b: _List_fromArray(
					['W'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊃ (1 2)(3 4 5)']),
				b: _List_fromArray(
					['1 2'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Pick'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 ⊃ \'Word\'']),
				b: _List_fromArray(
					['r'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ⊃ (1 2)(3 4 5)']),
				b: _List_fromArray(
					['3 4 5'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 1 ⊃ (1 2)(3 4 5)']),
				b: _List_fromArray(
					['3'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Disclose', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Disclose.htm'},
			{c: 'Pick', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Pick.htm'}
		]),
	c: 'Right Shoe'
};
var $author$project$CharInfo$rightTack = {
	e: '⊢',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('|-'),
			$author$project$CharInfo$Backquote('\\')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Same'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊢  1 2 3']),
				b: _List_fromArray(
					['1 2 3'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Right'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'L\' ⊢ \'R\'']),
				b: _List_fromArray(
					['R'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⊢/ 1 2 3']),
				b: _List_fromArray(
					['3'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Same', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Same.htm'},
			{c: 'Right', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Right.htm'}
		]),
	c: 'Right Tack'
};
var $author$project$CharInfo$slash = {
	e: '/',
	f: _List_Nil,
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Replicate'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 1 ¯2 2 / 6 7 8 9']),
				b: _List_fromArray(
					['6 6 6 7 0 0 9 9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 0 1 0 1 / \'Heart\'']),
				b: _List_fromArray(
					['Hat'])
			}),
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Reduce (Fold, N-Wise Reduce)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+/ 1 2 3 4 5']),
				b: _List_fromArray(
					['15'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 +/ 1 2 3 4 5   ⍝ pair-wise sum']),
				b: _List_fromArray(
					['3 5 7 9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cube ← 2 3 4 ⍴ ⍳24', 'cube    ⍝ 3D array']),
				b: _List_fromArray(
					[' 1  2  3  4', ' 5  6  7  8', ' 9 10 11 12', '           ', '13 14 15 16', '17 18 19 20', '21 22 23 24'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+/ cube']),
				b: _List_fromArray(
					['10 26 42', '58 74 90'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+/[1] cube    ⍝ sum of planes']),
				b: _List_fromArray(
					['14 16 18 20', '22 24 26 28', '30 32 34 36'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+/[2] cube    ⍝ column sums']),
				b: _List_fromArray(
					['15 18 21 24', '51 54 57 60'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Replicate', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Replicate.htm'},
			{c: 'Reduce', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce.htm'},
			{c: 'Reduce N-Wise', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce%20N%20Wise.htm'}
		]),
	c: 'Slash'
};
var $author$project$CharInfo$slashBar = {
	e: '⌿',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('/-'),
			$author$project$CharInfo$Backquote('/')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Replicate First (Compress First)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 0 2 ⌿ mat']),
				b: _List_fromArray(
					['1  2  3  4', '9 10 11 12', '9 10 11 12'])
			}),
			$author$project$CharInfo$Category('Monadic operator'),
			$author$project$CharInfo$Heading('Reduce First'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['+⌿ mat']),
				b: _List_fromArray(
					['15 18 21 24'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 +⌿ mat     ⍝ pair-wise']),
				b: _List_fromArray(
					[' 6  8 10 12', '14 16 18 20'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Replicate First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Replicate%20First.htm'},
			{c: 'Reduce First', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce%20First.htm'},
			{c: 'Reduce First N-Wise', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Reduce%20First%20N%20Wise.htm'}
		]),
	c: 'Slash Bar'
};
var $author$project$CharInfo$squad = {
	e: '⌷',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('[|'),
			$author$project$CharInfo$Tab('|]'),
			$author$project$CharInfo$Backquote('L')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Materialise'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌷ ⍵']),
				b: _List_Nil
			}),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['If ⍵ is an array, returns ⍵.', 'If ⍵ is ref to an instance of a Class with a Numbered Default property, all items of that property are returned.', 'If ⍵ is a collection, returns all elements in the collection as an array.'])),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Index'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 3 ⌷ mat']),
				b: _List_fromArray(
					['7'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ⌷ mat']),
				b: _List_fromArray(
					['5 6 7 8'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ⌷[2] mat']),
				b: _List_fromArray(
					['2 6 10'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Materialise', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Materialise.htm'},
			{c: 'Index', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index.htm'},
			{c: 'Index with Axes', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Index%20with%20Axes.htm'}
		]),
	c: 'Squad'
};
var $author$project$CharInfo$star = {
	e: '*',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('p')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Exponential'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['* 0 1 2']),
				b: _List_fromArray(
					['1 2.71828 7.38906'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Power'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['49 5 ¯4 * 0.5 2 0.5']),
				b: _List_fromArray(
					['7 25 0J2'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Exponential', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Exponential.htm'},
			{c: 'Power', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Power.htm'}
		]),
	c: 'Star'
};
var $author$project$CharInfo$starDiaeresis = {
	e: '⍣',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('*:'),
			$author$project$CharInfo$Tab('*\"'),
			$author$project$CharInfo$Backquote('P')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic operator'),
			$author$project$CharInfo$Heading('Power'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['cube ← 2 2 2 ⍴ ⎕A', 'cube    ⍝ 3D array']),
				b: _List_fromArray(
					['AB', 'CD', '', 'EF', 'GH'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(↓⍣1) cube   ⍝ split once']),
				b: _List_fromArray(
					['┌──┬──┐', '│AB│CD│', '├──┼──┤', '│EF│GH│', '└──┴──┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['(↓⍣2) cube   ⍝ split twice']),
				b: _List_fromArray(
					['┌───────┬───────┐', '│┌──┬──┐│┌──┬──┐│', '││AB│CD│││EF│GH││', '│└──┴──┘│└──┴──┘│', '└───────┴───────┘'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['f ← (32∘+)∘(×∘1.8)   ⍝ Fahrenheit from Celsius', '', 'f ¯273 ¯40 0 100     ⍝ Fahrenheit']),
				b: _List_fromArray(
					['¯459.4 ¯40 32 212'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['c ← f⍣¯1             ⍝ Inverse: Celsius from Fahrenheit', '', 'c ¯459.4 ¯40 32 212  ⍝ Celsius']),
				b: _List_fromArray(
					['¯273 ¯40 0 100'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 +∘÷⍣= 1            ⍝ fixpoint: golden mean']),
				b: _List_fromArray(
					['1.61803'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Power Operator', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Power%20Operator.htm'}
		]),
	c: 'Star Diaeresis'
};
var $author$project$CharInfo$stile = {
	e: '|',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('m')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Magnitude (Absolute value)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['| 2.3 ¯4 0 3j4']),
				b: _List_fromArray(
					['2.3 4 0 5'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Residue (Remainder/Modulus)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 10 ¯2.5 | 7 ¯13 8']),
				b: _List_fromArray(
					['1 7 ¯2'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Magnitude', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Magnitude.htm'},
			{c: 'Residue', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Residue.htm'}
		]),
	c: 'Stile'
};
var $author$project$CharInfo$thorn = {
	e: '⍕',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('oT'),
			$author$project$CharInfo$Tab('o-'),
			$author$project$CharInfo$Backquote('\'')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Format'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['NB: In the following examples space characters are represented by small dots: ···'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['4 5 6          ⍝ numeric vector']),
				b: _List_fromArray(
					['4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍕ 4 5 6        ⍝ equivalent character vector']),
				b: _List_fromArray(
					['4·5·6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 3 ⍴ ⍳6', 'mat            ⍝ numeric matrix']),
				b: _List_fromArray(
					['1 2 3', '4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍕ mat          ⍝ equivalent character matrix']),
				b: _List_fromArray(
					['1·2·3', '4·5·6'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Format By Specification'),
			$author$project$CharInfo$Plain(
			_List_fromArray(
				['Field-width and number of decimal places:'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['6 2 ⍕ 3.125 0.002']),
				b: _List_fromArray(
					['··3.13··0.00'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['6 2 ⍕ mat']),
				b: _List_fromArray(
					['··1.00··2.00··3.00', '··4.00··5.00··6.00'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['6 2 ⍕ 1234   ⍝ (field not wide enough)']),
				b: _List_fromArray(
					['******'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Format (Monadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Format%20Monadic.htm'},
			{c: 'Format (Dyadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Format%20Dyadic.htm'}
		]),
	c: 'Thorn'
};
var $author$project$CharInfo$tilde = {
	e: '~',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Backquote('t')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('NOT'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['~ 0 1 0 1']),
				b: _List_fromArray(
					['1 0 1 0'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Without'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 1 4 1 5 ~ 5 1']),
				b: _List_fromArray(
					['3 4'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'aa\' \'bb\' \'cc\' \'bb\'  ~ \'bb\' \'xx\'']),
				b: _List_fromArray(
					['┌──┬──┐', '│aa│cc│', '└──┴──┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Not', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Not.htm'},
			{c: 'Excluding', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Excluding.htm'}
		]),
	c: 'Tilde'
};
var $author$project$CharInfo$tildeDiaeresis = {
	e: '⍨',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('~:'),
			$author$project$CharInfo$Tab('~\"'),
			$author$project$CharInfo$Backquote('T')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic operator (f⍨)'),
			$author$project$CharInfo$Heading('Commute (Switch)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ⍴ 3     ⍝ ⍺ ⍴ ⍵']),
				b: _List_fromArray(
					['3 3'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ⍴⍨ 3    ⍝ ⍵ ⍴ ⍺']),
				b: _List_fromArray(
					['2 2 2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍴⍨ 3      ⍝ ⍵ ⍴ ⍵']),
				b: _List_fromArray(
					['3 3 3'])
			}),
			$author$project$CharInfo$Category('Monadic operator (a⍨)'),
			$author$project$CharInfo$Heading('Constant'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['\'mu\'⍨ \'any\' ⎕NULL   ⍝ Always returns its operand']),
				b: _List_fromArray(
					['mu'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1E100 (\'mu\'⍨) 1j1']),
				b: _List_fromArray(
					['mu'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯1⍨¨ ⍳2 3']),
				b: _List_fromArray(
					['¯1 ¯1 ¯1', '¯1 ¯1 ¯1'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Commute', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Commute.htm'},
			{c: 'Constant', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Operators/Constant.htm'}
		]),
	c: 'Tilde Diaeresis'
};
var $author$project$CharInfo$times = {
	e: '×',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('xx'),
			$author$project$CharInfo$Tab('/\\'),
			$author$project$CharInfo$Backquote('-')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Direction'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['× 3.1 ¯2 0 3j4']),
				b: _List_fromArray(
					['1 ¯1 0 0.6J0.8'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Times'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ¯3 4.5 × ¯3 ¯4 2']),
				b: _List_fromArray(
					['¯6 12 9'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['3 1 4 × 10']),
				b: _List_fromArray(
					['30 10 40'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['×/ 2 3 4']),
				b: _List_fromArray(
					['24'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Multiply', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Multiply.htm'},
			{c: 'Direction (Signum)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Direction.htm'}
		]),
	c: 'Times'
};
var $author$project$CharInfo$transpose = {
	e: '⍉',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('O\\'),
			$author$project$CharInfo$Backquote('^')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Transpose'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 2 3 ⍴ ⍳6', 'mat']),
				b: _List_fromArray(
					['1 2 3', '4 5 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍉ mat']),
				b: _List_fromArray(
					['1 4', '2 5', '3 6'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Dyadic Transpose'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 1 ⍉ mat']),
				b: _List_fromArray(
					['1 4', '2 5', '3 6'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1 1 ⍉ mat   ⍝ leading diagonal']),
				b: _List_fromArray(
					['1 5'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Transpose (Monadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Transpose%20Monadic.htm'},
			{c: 'Transpose (Dyadic)', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Transpose%20Dyadic.htm'}
		]),
	c: 'Transpose'
};
var $author$project$CharInfo$upArrow = {
	e: '↑',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('^|'),
			$author$project$CharInfo$Backquote('y')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Mix'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['↑ \'Hip\' \'Hop\'']),
				b: _List_fromArray(
					['Hip', 'Hop'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['↑ (6 4) 5 3']),
				b: _List_fromArray(
					['6 4', '5 0', '3 0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['↑[0.5] \'Hip\' \'Hop\'']),
				b: _List_fromArray(
					['HH', 'io', 'pp'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Take'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['4 ↑ \'Pineapple\'']),
				b: _List_fromArray(
					['Pine'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯5 ↑ \'Pineapple\'']),
				b: _List_fromArray(
					['apple'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['mat ← 3 4 ⍴ ⍳12', 'mat']),
				b: _List_fromArray(
					['1  2  3  4', '5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ¯3 ↑ mat']),
				b: _List_fromArray(
					['2 3 4', '6 7 8'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯2 ↑ mat']),
				b: _List_fromArray(
					['5  6  7  8', '9 10 11 12'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['¯2 3 ↑ 7']),
				b: _List_fromArray(
					['0 0 0', '7 0 0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Mix', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Mix.htm'},
			{c: 'Take', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Take.htm'},
			{c: 'Take with Axes', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Take%20with%20Axes.htm'},
			{c: 'Disclose', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Disclose.htm'}
		]),
	c: 'Up Arrow'
};
var $author$project$CharInfo$upShoe = {
	e: '∩',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('nn'),
			$author$project$CharInfo$Backquote('c')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Intersection'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['22 \'ab\' \'fg\' ∩ \'a\' \'ab\' 22']),
				b: _List_fromArray(
					['┌──┬──┐', '│22│ab│', '└──┴──┘'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Intersection', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Intersection.htm'}
		]),
	c: 'Up Shoe'
};
var $author$project$CharInfo$upTack = {
	e: '⊥',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('|_'),
			$author$project$CharInfo$Backquote('b')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Decode'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['2 ⊥ 1 1 0 1   ⍝ binary decode']),
				b: _List_fromArray(
					['13'])
			}),
			$author$project$CharInfo$CodeComment(
			_List_fromArray(
				['⍝ mixed radix: conversion of hours,', '⍝ minutes and seconds to seconds:'])),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['24 60 60 ⊥ 2 46 40']),
				b: _List_fromArray(
					['10000'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Decode', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Decode.htm'}
		]),
	c: 'Up Tack'
};
var $author$project$CharInfo$upstile = {
	e: '⌈',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('77'),
			$author$project$CharInfo$Tab('FF'),
			$author$project$CharInfo$Backquote('s')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Monadic function'),
			$author$project$CharInfo$Heading('Ceiling (Round Up)'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌈ 3.4 ¯3.4 3 0']),
				b: _List_fromArray(
					['4 ¯3 3 0'])
			}),
			$author$project$CharInfo$Category('Dyadic function'),
			$author$project$CharInfo$Heading('Maximum'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['1.1 ¯2 ⌈ 8.1 ¯3.4']),
				b: _List_fromArray(
					['8.1 ¯2'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⌈/ 3 1 4 1']),
				b: _List_fromArray(
					['4'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Ceiling', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Ceiling.htm'},
			{c: 'Maximum', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Maximum.htm'}
		]),
	c: 'Upstile'
};
var $author$project$CharInfo$zilde = {
	e: '⍬',
	f: _List_fromArray(
		[
			$author$project$CharInfo$Tab('0~'),
			$author$project$CharInfo$Backquote('}')
		]),
	g: _List_fromArray(
		[
			$author$project$CharInfo$Category('Niladic'),
			$author$project$CharInfo$Heading('Empty Numeric Vector'),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍬≡⍳0']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍬≡0⍴0']),
				b: _List_fromArray(
					['1'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍬≡0 0⍴0']),
				b: _List_fromArray(
					['0'])
			}),
			$author$project$CharInfo$Example(
			{
				a: _List_fromArray(
					['⍬≡\'\'']),
				b: _List_fromArray(
					['0'])
			})
		]),
	h: _List_fromArray(
		[
			{c: 'Zilde', d: 'https://help.dyalog.com/18.0/index.htm#Language/Primitive%20Functions/Zilde.htm'}
		]),
	c: 'Zilde'
};
var $author$project$CharInfo$allItems = _List_fromArray(
	[$author$project$CharInfo$leftArrow, $author$project$CharInfo$plus, $author$project$CharInfo$minus, $author$project$CharInfo$times, $author$project$CharInfo$divide, $author$project$CharInfo$star, $author$project$CharInfo$log, $author$project$CharInfo$domino, $author$project$CharInfo$circle, $author$project$CharInfo$exclamationMark, $author$project$CharInfo$questionMark, $author$project$CharInfo$stile, $author$project$CharInfo$upstile, $author$project$CharInfo$downstile, $author$project$CharInfo$upTack, $author$project$CharInfo$downTack, $author$project$CharInfo$leftTack, $author$project$CharInfo$rightTack, $author$project$CharInfo$equal, $author$project$CharInfo$notEqual, $author$project$CharInfo$lessThanOrEqualTo, $author$project$CharInfo$lessThan, $author$project$CharInfo$greaterThan, $author$project$CharInfo$greaterThanOrEqualTo, $author$project$CharInfo$equalUnderbar, $author$project$CharInfo$equalUnderbarSlash, $author$project$CharInfo$logicalOr, $author$project$CharInfo$logicalAnd, $author$project$CharInfo$logicalNand, $author$project$CharInfo$logicalNor, $author$project$CharInfo$upArrow, $author$project$CharInfo$downArrow, $author$project$CharInfo$leftShoe, $author$project$CharInfo$rightShoe, $author$project$CharInfo$leftShoeUnderbar, $author$project$CharInfo$squad, $author$project$CharInfo$gradeUp, $author$project$CharInfo$gradeDown, $author$project$CharInfo$iota, $author$project$CharInfo$iotaUnderbar, $author$project$CharInfo$epsilon, $author$project$CharInfo$epsilonUnderbar, $author$project$CharInfo$downShoe, $author$project$CharInfo$upShoe, $author$project$CharInfo$tilde, $author$project$CharInfo$slash, $author$project$CharInfo$backslash, $author$project$CharInfo$slashBar, $author$project$CharInfo$backslashBar, $author$project$CharInfo$comma, $author$project$CharInfo$commaBar, $author$project$CharInfo$rho, $author$project$CharInfo$circleStile, $author$project$CharInfo$circleBar, $author$project$CharInfo$transpose, $author$project$CharInfo$diaeresis, $author$project$CharInfo$tildeDiaeresis, $author$project$CharInfo$starDiaeresis, $author$project$CharInfo$dot, $author$project$CharInfo$jot, $author$project$CharInfo$jotDiaeresis, $author$project$CharInfo$circleDiaeresis, $author$project$CharInfo$at, $author$project$CharInfo$quoteQuad, $author$project$CharInfo$quad, $author$project$CharInfo$quadColon, $author$project$CharInfo$quadEqual, $author$project$CharInfo$quadDiamond, $author$project$CharInfo$iBeam, $author$project$CharInfo$hydrant, $author$project$CharInfo$thorn, $author$project$CharInfo$diamond, $author$project$CharInfo$lamp, $author$project$CharInfo$rightArrow, $author$project$CharInfo$omega, $author$project$CharInfo$alpha, $author$project$CharInfo$del, $author$project$CharInfo$ampersand, $author$project$CharInfo$highMinus, $author$project$CharInfo$zilde, $author$project$CharInfo$delta, $author$project$CharInfo$deltaUnderbar]);
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $author$project$Main$items = $elm$core$Dict$fromList(
	A2(
		$elm$core$List$map,
		function (item) {
			return _Utils_Tuple2(item.e, item);
		},
		$author$project$CharInfo$allItems));
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 0, a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$json$Json$Decode$fail = _Json_fail;
var $elm$html$Html$Events$keyCode = A2($elm$json$Json$Decode$field, 'keyCode', $elm$json$Json$Decode$int);
var $elm_community$html_extra$Html$Events$Extra$onEnter = function (onEnterAction) {
	return A2(
		$elm$html$Html$Events$on,
		'keyup',
		A2(
			$elm$json$Json$Decode$andThen,
			function (keyCode) {
				return (keyCode === 13) ? $elm$json$Json$Decode$succeed(onEnterAction) : $elm$json$Json$Decode$fail(
					$elm$core$String$fromInt(keyCode));
			},
			$elm$html$Html$Events$keyCode));
};
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 1, a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$pre = _VirtualDom_node('pre');
var $elm$core$String$repeatHelp = F3(
	function (n, chunk, result) {
		return (n <= 0) ? result : A3(
			$elm$core$String$repeatHelp,
			n >> 1,
			_Utils_ap(chunk, chunk),
			(!(n & 1)) ? result : _Utils_ap(result, chunk));
	});
var $elm$core$String$repeat = F2(
	function (n, chunk) {
		return A3($elm$core$String$repeatHelp, n, chunk, '');
	});
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$core$List$filter = F2(
	function (isGood, list) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, xs) {
					return isGood(x) ? A2($elm$core$List$cons, x, xs) : xs;
				}),
			_List_Nil,
			list);
	});
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$html$Html$Attributes$classList = function (classes) {
	return $elm$html$Html$Attributes$class(
		A2(
			$elm$core$String$join,
			' ',
			A2(
				$elm$core$List$map,
				$elm$core$Tuple$first,
				A2($elm$core$List$filter, $elm$core$Tuple$second, classes))));
};
var $elm_community$html_extra$Html$Attributes$Extra$empty = $elm$html$Html$Attributes$classList(_List_Nil);
var $elm_community$html_extra$Html$Attributes$Extra$attributeMaybe = function (fn) {
	return A2(
		$elm$core$Basics$composeR,
		$elm$core$Maybe$map(fn),
		$elm$core$Maybe$withDefault($elm_community$html_extra$Html$Attributes$Extra$empty));
};
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$html$Html$h1 = _VirtualDom_node('h1');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$core$List$head = function (list) {
	if (list.b) {
		var x = list.a;
		var xs = list.b;
		return $elm$core$Maybe$Just(x);
	} else {
		return $elm$core$Maybe$Nothing;
	}
};
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$core$Basics$not = _Basics_not;
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$html$Html$Attributes$target = $elm$html$Html$Attributes$stringProperty('target');
var $elm_community$html_extra$Html$Extra$nothing = $elm$html$Html$text('');
var $elm_community$html_extra$Html$Extra$viewIf = F2(
	function (condition, html) {
		return condition ? html : $elm_community$html_extra$Html$Extra$nothing;
	});
var $author$project$Main$viewHelp = function (_v0) {
	var _char = _v0.e;
	var name = _v0.c;
	var docsLinks = _v0.h;
	var completions = _v0.f;
	var description = _v0.g;
	return _List_fromArray(
		[
			A2(
			$elm_community$html_extra$Html$Extra$viewIf,
			!$elm$core$List$isEmpty(completions),
			A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('help-completions')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h2,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('help-completions-title')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Completions:')
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('help-completions-list')
							]),
						A2(
							$elm$core$List$map,
							function (completion) {
								return A2(
									$elm$html$Html$li,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-completion')
										]),
									function () {
										if (!completion.$) {
											var chars = completion.a;
											return _List_fromArray(
												[
													A2(
													$elm$html$Html$span,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$class('help-completion-tab-chars')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text(chars)
														])),
													A2(
													$elm$html$Html$span,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$class('help-completion-tab-tab')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('<tab>')
														]))
												]);
										} else {
											var char_ = completion.a;
											return _List_fromArray(
												[
													A2(
													$elm$html$Html$span,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$class('help-completion-backquote-backquote')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text('`')
														])),
													A2(
													$elm$html$Html$span,
													_List_fromArray(
														[
															$elm$html$Html$Attributes$class('help-completion-backquote-char')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text(
															$elm$core$String$fromChar(char_))
														]))
												]);
										}
									}());
							},
							completions))
					]))),
			A2(
			$elm$html$Html$h1,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('help-title')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('help-name')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(name)
						])),
					$elm$html$Html$text(' ('),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('help-char')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromChar(_char))
						])),
					$elm$html$Html$text(')')
				])),
			A2(
			$elm_community$html_extra$Html$Extra$viewIf,
			!$elm$core$List$isEmpty(docsLinks),
			A2(
				$elm$html$Html$ul,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('help-docs')
					]),
				A2(
					$elm$core$List$map,
					function (link) {
						return A2(
							$elm$html$Html$li,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$class('help-docs-item')
								]),
							_List_fromArray(
								[
									A2(
									$elm$html$Html$span,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-docs-label')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text('Docs: ')
										])),
									A2(
									$elm$html$Html$a,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$href(link.d),
											$elm$html$Html$Attributes$target('_blank'),
											$elm$html$Html$Attributes$class('help-docs-link')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(link.c)
										]))
								]));
					},
					docsLinks))),
			A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('help-description')
				]),
			A2(
				$elm$core$List$concatMap,
				function (item) {
					switch (item.$) {
						case 1:
							var category = item.a;
							return _List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-description-category')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(category)
										]))
								]);
						case 0:
							var heading = item.a;
							return _List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-description-heading')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(heading)
										]))
								]);
						case 2:
							var lines = item.a;
							return A2(
								$elm$core$List$map,
								function (line) {
									return A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('help-description-plain')
											]),
										_List_fromArray(
											[
												$elm$html$Html$text(line)
											]));
								},
								lines);
						case 3:
							var lines = item.a;
							return _List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-description-verbatim')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											A2($elm$core$String$join, '\n', lines))
										]))
								]);
						case 4:
							var lines = item.a;
							return _List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-description-code-comment')
										]),
									_List_fromArray(
										[
											$elm$html$Html$text(
											A2($elm$core$String$join, '\n', lines))
										]))
								]);
						default:
							var input = item.a.a;
							var output = item.a.b;
							var lastInputLine = $elm$core$List$head(
								A2(
									$elm$core$List$filter,
									A2($elm$core$Basics$composeL, $elm$core$Basics$not, $elm$core$String$isEmpty),
									$elm$core$List$reverse(input)));
							return _List_fromArray(
								[
									A2(
									$elm$html$Html$div,
									_List_fromArray(
										[
											$elm$html$Html$Attributes$class('help-description-example')
										]),
									_List_fromArray(
										[
											A2(
											$elm_community$html_extra$Html$Extra$viewIf,
											!$elm$core$List$isEmpty(input),
											A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('help-description-input')
													]),
												A2(
													$elm$core$List$intersperse,
													$elm$html$Html$text('\n'),
													A2(
														$elm$core$List$map,
														function (line) {
															return A2(
																$elm$html$Html$span,
																_List_fromArray(
																	[
																		$elm$html$Html$Events$onClick(
																		$author$project$Main$SetInput(line)),
																		$elm$html$Html$Attributes$class('help-description-input-line')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text(line)
																	]));
														},
														input)))),
											A2(
											$elm_community$html_extra$Html$Extra$viewIf,
											!$elm$core$List$isEmpty(output),
											A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('help-description-output'),
														A2(
														$elm_community$html_extra$Html$Attributes$Extra$attributeMaybe,
														A2($elm$core$Basics$composeL, $elm$html$Html$Events$onClick, $author$project$Main$SetInput),
														lastInputLine)
													]),
												_List_fromArray(
													[
														$elm$html$Html$text(
														A2($elm$core$String$join, '\n', output))
													])))
										]))
								]);
					}
				},
				description))
		]);
};
var $author$project$Main$view = function (model) {
	return {
		ab: _List_fromArray(
			[
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('app')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('help')
							]),
						function () {
							var _v0 = A2($elm$core$Dict$get, model.P, $author$project$Main$items);
							if (_v0.$ === 1) {
								return _List_Nil;
							} else {
								var charInfo = _v0.a;
								return $author$project$Main$viewHelp(charInfo);
							}
						}()),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('content')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('input-row')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$input,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$id($author$project$Main$inputId),
												$elm$html$Html$Events$onInput($author$project$Main$SetInput),
												$elm_community$html_extra$Html$Events$Extra$onEnter($author$project$Main$SendRequest),
												$elm$html$Html$Attributes$class('input'),
												$elm$html$Html$Attributes$value(model.a),
												$elm$html$Html$Attributes$placeholder('Put your APL expression here!'),
												$elm$html$Html$Attributes$disabled(model.r),
												A2(
												$elm$html$Html$Events$on,
												'lang-bar-updated-input-value',
												A2($elm$json$Json$Decode$map, $author$project$Main$SetInput, $elm$html$Html$Events$targetValue))
											]),
										_List_Nil),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('button'),
												$elm$html$Html$Attributes$disabled(model.r),
												$elm$html$Html$Events$onClick($author$project$Main$SendRequest)
											]),
										_List_fromArray(
											[
												$elm$html$Html$text('Submit')
											]))
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('hint')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Click on expressions anywhere (log, examples below, docs on left) to edit them.')
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('hint')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Example expressions:'),
										A2(
										$elm$html$Html$ul,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('example-expressions')
											]),
										A2(
											$elm$core$List$map,
											function (expr) {
												return A2(
													$elm$html$Html$li,
													_List_fromArray(
														[
															$elm$html$Html$Events$onClick(
															$author$project$Main$SetInput(expr)),
															$elm$html$Html$Attributes$class('example-expression')
														]),
													_List_fromArray(
														[
															$elm$html$Html$text(expr)
														]));
											},
											_List_fromArray(
												['3 7⍴10', '¯1+?3 7⍴2', '(~R∊R∘.×R)/R←1↓⍳20', '(+⌿÷≢),¯1+?1000 1000⍴2'])))
									])),
								A2(
								$elm$html$Html$pre,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('log'),
										$elm$html$Html$Attributes$id($author$project$Main$logId)
									]),
								A2(
									$elm$core$List$indexedMap,
									F2(
										function (index, _v1) {
											var input = _v1.a;
											var output = _v1.b;
											return A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Events$onClick(
														$author$project$Main$SetInput(input)),
														$elm$html$Html$Attributes$class('expr')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$div,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('expr-remove-btn'),
																$elm$html$Html$Events$onClick(
																$author$project$Main$RemoveLog(index))
															]),
														_List_fromArray(
															[
																$elm$html$Html$text('×')
															])),
														A2(
														$elm$html$Html$div,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('input')
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(
																_Utils_ap(
																	A2($elm$core$String$repeat, 6, ' '),
																	input))
															])),
														A2(
														$elm$html$Html$div,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('output')
															]),
														_List_fromArray(
															[
																$elm$html$Html$text(
																A2($elm$core$String$join, '\n', output))
															]))
													]));
										}),
									model.q))
							]))
					]))
			]),
		a0: 'TryAPL Mini'
	};
};
var $author$project$Main$main = $elm$browser$Browser$document(
	{aP: $author$project$Main$init, a_: $author$project$Main$subscriptions, a2: $author$project$Main$update, a3: $author$project$Main$view});
_Platform_export({'Main':{'init':$author$project$Main$main(
	A2(
		$elm$json$Json$Decode$andThen,
		function (urlHash) {
			return $elm$json$Json$Decode$succeed(
				{_: urlHash});
		},
		A2(
			$elm$json$Json$Decode$field,
			'urlHash',
			$elm$json$Json$Decode$oneOf(
				_List_fromArray(
					[
						$elm$json$Json$Decode$null($elm$core$Maybe$Nothing),
						A2($elm$json$Json$Decode$map, $elm$core$Maybe$Just, $elm$json$Json$Decode$string)
					])))))(0)}});}(this));