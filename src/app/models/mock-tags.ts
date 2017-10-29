import { Tag } from './tag';

export const MockedTags: Tag[] = [
    {
        id: 1,
        name: 'JavaScript',
        postCount: 999888,
        excerpt:
        `<p>
        JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, weakly-typed language used for both client-side and server-side scripting. Use this tag for questions regarding ECMAScript and its various dialects/implementations (excluding ActionScript and Google-Apps-Script).
Unless another tag for a framework/library is also included, a pure JavaScript answer is expected.
    </p>`,
        description:
        `
    <div class="post-text">
    

    
    <div class="welovestackoverflow" id="wiki-excerpt">
          <p>
              JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, weakly-typed language used for both client-side and server-side scripting. Use this tag for questions regarding ECMAScript and its various dialects/implementations (excluding ActionScript and Google-Apps-Script).
Unless another tag for a framework/library is also included, a pure JavaScript answer is expected.
          </p>
    </div>

<p><strong><a href="https://en.wikipedia.org/wiki/JavaScript" rel="nofollow noreferrer">JavaScript</a></strong> is a high-level, dynamic, multi-paradigm, object-oriented, <a href="https://en.wikipedia.org/wiki/Prototype-based_programming" rel="nofollow noreferrer">prototype-based</a>, weakly-typed language traditionally used for client-side scripting in web browsers. JavaScript can also be run outside of the browser with the use of a framework like node.js, Nashorn, Wakanda, or Google Apps Script. Despite the name, it is unrelated to the <a href="https://en.wikipedia.org/wiki/Java_programming_language" rel="nofollow noreferrer">Java programming language</a> and shares only superficial similarities. </p>

<p>Unless a tag for a framework or library is also included, a pure JavaScript answer is expected for questions with the <a href="/questions/tagged/javascript" class="post-tag" title="show questions tagged 'javascript'" rel="tag">javascript</a> tag.</p>

<p>JavaScript runs on nearly every operating system, and an engine is included in mainstream web browsers. Developed in 1995 by <a href="https://en.wikipedia.org/wiki/Brendan_Eich" rel="nofollow noreferrer">Brendan Eich</a> at Netscape Communications, it was originally called <a href="https://livescript.net/" rel="nofollow noreferrer">LiveScript</a> but was renamed to JavaScript due to Netscape's friendly relationship with <a href="https://en.wikipedia.org/wiki/Sun_Microsystems" rel="nofollow noreferrer">Sun Microsystems</a> at the time.</p>

<p>Standalone JavaScript engines or interpreters are available as well, including:</p>

<ul>
<li>Mozilla's SpiderMonkey, the first JavaScript engine ever written, currently used in Mozilla Firefox.</li>
<li>V8, Google's JavaScript engine, used in Google Chrome.</li>
<li>Google Apps Script, a cloud-based/server-side interpreter that provides programmatic "macro-like" control of Google Apps services and documents.</li>
<li>Node.js, built on top of V8, a platform which enables server-side applications to be written in JavaScript.</li>
<li>Windows includes JScript, a JavaScript variant in <a href="http://en.wikipedia.org/wiki/Windows_Script_Host" rel="nofollow noreferrer">Windows Script Host</a>.</li>
<li>Chakra, a fork of Jscript, is developed by Microsoft and used in their Edge browser.</li>
<li>Mozilla also offers Rhino, an implementation of JavaScript built in Java, typically embedded into Java applications to provide scripting to end users.</li>
<li>WebKit (except for the Chromium project) implements the JavaScriptCore engine.</li>
<li>ActionScript (originally derived from <a href="https://en.wikipedia.org/wiki/HyperTalk" rel="nofollow noreferrer">HyperTalk</a>) is now an ECMAScript dialect and uses a lot of ECMAScript APIs.</li>
<li>Duktape Embeddable, portable ECMAScript engine in C with small memory footprint.</li>
<li>Wakanda, a framework, IDE, and Server built on V8 supporting server-side JavaScript</li>
<li>MeteorJS; a Meteor application is a mix of client-side JavaScript that runs inside a web browser or PhoneGap mobile app, server-side JavaScript that runs on the Meteor server inside a Node.js container. (according to <a href="http://docs.meteor.com/#/full/resources" rel="nofollow noreferrer">MeteorJS docs</a>)</li>
</ul>

<p>The <a href="https://developer.mozilla.org/en-US/" rel="nofollow noreferrer">Mozilla Developer Network</a> contains high-quality <a href="https://developer.mozilla.org/en/JavaScript" rel="nofollow noreferrer">documentation on JavaScript</a>.</p>

<p>JavaScript is typically used to manipulate the <a href="http://www.w3.org/DOM/DOMTR.html" rel="nofollow noreferrer">Document Object Model</a> (DOM) and <a href="https://en.wikipedia.org/wiki/Cascading_Style_Sheets" rel="nofollow noreferrer">Cascading Style Sheets</a> (CSS) within the browser. This allows user interface scripting, animation, automation, client-side validation, and much more.</p>

<p>With the recent emergence of platforms such as <a href="https://nodejs.org/" rel="nofollow noreferrer">Node.js</a>, JavaScript can now be used to write server-side applications. In addition, it is also used in environments that aren't web-based, like PDF documents, site-specific browsers, desktop widgets etc.</p>

<h2>Nomenclature</h2>

<p>Although it was developed under the name <strong>Mocha</strong>, the language was officially called LiveScript when it first shipped in beta releases of Netscape Navigator 2.0 in September 1995, but it was renamed JavaScript when it was deployed in the Netscape browser version 2.0B3.</p>

<p><strong>The change of name from LiveScript to JavaScript roughly coincided with Netscape adding support for Java technology in its Netscape Navigator web browser</strong>. The final choice of name caused confusion, giving the impression that the language was a spin-off of the Java programming language, and the choice has been characterized as a marketing ploy by Netscape to give JavaScript the cachet of what was then the hot new web-programming language.</p>

<p>People often use the term <em>JavaScript</em> informally. The language and the term originated from <a href="https://en.wikipedia.org/wiki/Netscape" rel="nofollow noreferrer">Netscape</a>. <strong>ECMAScript</strong>, <strong>JavaScript</strong>, and <strong>JScript</strong> are terms that are easy to confuse.</p>

<p><strong><a href="https://en.wikipedia.org/wiki/ECMAScript" rel="nofollow noreferrer">ECMAScript</a></strong> was developed as a standardization of Netscape's <a href="https://en.wikipedia.org/wiki/JavaScript" rel="nofollow noreferrer">JavaScript</a> and Microsoft's independently-developed <a href="https://msdn.microsoft.com/en-us/library/yek4tbz0.aspx" rel="nofollow noreferrer">JScript</a>. The canonical reference is the <a href="http://www.ecma-international.org/ecma-262/6.0/" rel="nofollow noreferrer">ECMAScript® 2015 Language Specification</a>. While JavaScript and JScript aim to be compatible with ECMAScript, they also provide additional features (and <a href="http://wiki.ecmascript.org/lib/exe/fetch.php?id=resources:resources&amp;cache=cache&amp;media=resources:jscriptdeviationsfromes3.pdf" rel="nofollow noreferrer">other deviations</a>) not described in the ECMA specifications. <a href="https://en.wikipedia.org/wiki/ECMAScript#Dialects" rel="nofollow noreferrer">Other implementations</a> of ECMAScript also exist.</p>

<p>The differences today for those who use JavaScript are negligible; people generally do not distinguish the JavaScript and JScript variations from ECMAScript.</p>

<h3>ECMAScript versions</h3>

<p>Most modern browsers implement JavaScript based on the ECMAScript 6 specification, although some fail to implement some ES6 features. However, older browsers such as Internet Explorer 8 implement the ECMAScript 3 specification, which does not contain functions such as <code>Function.prototype.bind</code> and even <code>JSON.parse</code>, amongst others.</p>

<p>The current version of ECMAScript is version 8, properly known as ECMAScript 2017, which was finalized in June 2017.</p>

<hr>

<h3>When asking a JavaScript question, you should:</h3>

<ol>
<li>Debug your JavaScript code (see <a href="http://www.creativebloq.com/javascript/javascript-debugging-beginners-3122820" rel="nofollow noreferrer">Creativebloq</a>, <a href="https://developer.mozilla.org/en-US/docs/Tools/Debugger" rel="nofollow noreferrer">MDN</a>, <a href="https://developers.google.com/chrome-developer-tools/docs/javascript-debugging" rel="nofollow noreferrer">Google</a>, &amp; <a href="https://msdn.microsoft.com/en-us/library/gg699336(v=vs.85).aspx" rel="nofollow noreferrer">MSDN</a>).</li>
<li>Isolate the problematic code and reproduce it in a <a href="https://blog.stackoverflow.com/2014/09/introducing-runnable-javascript-css-and-html-code-snippets/"><strong>Stackoverflow code snippet</strong></a> or an external online environment such as <a href="https://jsfiddle.net/" rel="nofollow noreferrer"><strong>JSFiddle</strong></a> or <a href="https://jsbin.com/" rel="nofollow noreferrer"><strong>JS Bin</strong></a> (remember to also include the code in the question itself).</li>
<li>If a library or framework is used, then tag the question with the appropriate tags: <a href="/questions/tagged/jquery" class="post-tag" title="show questions tagged 'jquery'" rel="tag">jquery</a> for jQuery, <a href="/questions/tagged/prototypejs" class="post-tag" title="show questions tagged 'prototypejs'" rel="tag">prototypejs</a> for Prototype, <a href="/questions/tagged/mootools" class="post-tag" title="show questions tagged 'mootools'" rel="tag">mootools</a> for MooTools, and so on. However, if a framework is not used or necessary, do not include these tags.</li>
<li>If the issue is client-side, mention which browser the code is having problems on, and what error messages, if any, were thrown by the browser.  Use the Developer Tools for your browser (see "Useful Tools" below) to see these messages.  If the question is browser-specific, use tags <a href="/questions/tagged/firefox" class="post-tag" title="show questions tagged 'firefox'" rel="tag">firefox</a>, <a href="/questions/tagged/google-chrome" class="post-tag" title="show questions tagged 'google-chrome'" rel="tag"><img src="https://i.stack.imgur.com/EdUwb.png" height="16" width="18" alt="" class="sponsor-tag-img">google-chrome</a>, <a href="/questions/tagged/internet-explorer" class="post-tag" title="show questions tagged 'internet-explorer'" rel="tag">internet-explorer</a>, <a href="/questions/tagged/opera" class="post-tag" title="show questions tagged 'opera'" rel="tag">opera</a>, <a href="/questions/tagged/safari" class="post-tag" title="show questions tagged 'safari'" rel="tag">safari</a>, <a href="/questions/tagged/microsoft-edge" class="post-tag" title="show questions tagged 'microsoft-edge'" rel="tag">microsoft-edge</a>, etc.</li>
<li>Only tag the question as <a href="/questions/tagged/css" class="post-tag" title="show questions tagged 'css'" rel="tag">css</a> or <a href="/questions/tagged/html" class="post-tag" title="show questions tagged 'html'" rel="tag">html</a> if you are asking about an issue that concerns the combination of one of those with JavaScript and could only be answered with information specifically regarding either of those subjects.</li>
</ol>

<hr>

<h3>Learning JavaScript</h3>

<ul>
<li><a href="http://eloquentjavascript.net/" rel="nofollow noreferrer">Eloquent JavaScript</a>: A Modern Introduction to Programming</li>
<li><a href="https://github.com/getify/You-Dont-Know-JS" rel="nofollow noreferrer">You Don't Know JS</a>: An in-depth book series covering all main topics</li>
<li><a href="https://developer.mozilla.org/en/JavaScript/Guide" rel="nofollow noreferrer">The MDN JavaScript Guide</a>: A Comprehensive JavaScript Guide at the Mozilla Developer Network</li>
<li><a href="http://quirksmode.org/js/contents.html" rel="nofollow noreferrer">quirksmode.org - JavaScript</a>: Good introduction to JavaScript and other technologies used in the browser (e.g. DOM).</li>
<li><a href="https://javascript.info/" rel="nofollow noreferrer">JavaScript Tutorial</a>: A pure JavaScript book that covers <em>nearly</em> everything.</li>
<li><a href="http://www.javascripthive.info/" rel="nofollow noreferrer">JavaScript Tutorial &amp; Sample Codes</a>: A pure JavaScript tutorial and sample codes for real life problems faced in the JavaScript.</li>
<li><a href="https://dev.opera.com/articles/programming-the-real-basics/" rel="nofollow noreferrer">JavaScript Core Skills</a>: An introduction covering the basic fundamentals of programming.</li>
<li><a href="http://www.quirksmode.org/js/introevents.html" rel="nofollow noreferrer">quirksmode.org | Introduction to Events</a>: A comprehensive description of the various types of event  handling. Includes overview of different ways to attach event handlers and points out quirks between different browsers. A must-read if you want to understand event handling.</li>
<li><a href="https://www.w3.org/wiki/Category:Tutorials" rel="nofollow noreferrer">W3C Wiki | JavaScript basics, DOM</a>: A comprehensive list of links to W3C educational materials.</li>
<li><a href="http://www.creativebloq.com/javascript/javascript-debugging-beginners-3122820" rel="nofollow noreferrer">JavaScript Debugging for Beginners</a>: A good introduction to debugging JavaScript. A must-read!</li>
<li><a href="http://www.larryullman.com/books/modern-javascript-develop-and-design/" rel="nofollow noreferrer">Modern JavaScript: Develop and Design</a>: A modern guide to learning JavaScript using practical examples and approaches that should be used today.</li>
<li><a href="http://ejohn.org/apps/learn/" rel="nofollow noreferrer">Learning Advanced JavaScript</a>: A set of interactive exercises that guide you through some of the fundamental concepts of JavaScript.</li>
<li><a href="https://github.com/airbnb/javascript" rel="nofollow noreferrer">JavaScript Style Guide</a>: Easy to follow guide that provides insight to styling JavaScript code.</li>
<li><a href="http://zero.milosz.ca" rel="nofollow noreferrer">Zeros in JavaScript</a>: Easy to check what is returned when comparing any two values.</li>
<li><a href="http://javascript.pl" rel="nofollow noreferrer">JavaScript in Polish</a>: A popular site about JavaScript in Polish language.</li>
<li><a href="http://www.w3schools.com/js/default.asp" rel="nofollow noreferrer">W3 Schools Javascript Tutorials</a>: A beginner's level tutorial in JavaScript including "Try it Yourself" examples. Also provides insight into advanced topics.</li>
<li><a href="https://github.com/sorrycc/awesome-javascript" rel="nofollow noreferrer">Awesome JS</a>: A collection of awesome browser-side JavaScript libraries, resources and shiny things for beginners to advanced programmers</li>
</ul>

<h3>Security</h3>

<p>JavaScript and the DOM provide the potential for malicious authors to deliver scripts to run on a client computer via the Web. Browser authors contain this risk using two restrictions. First, scripts run in a sandbox in which they can only perform web-related actions, not general-purpose programming tasks like creating files. Second, scripts are constrained by the same origin policy: scripts from one Web site do not have access to information such as usernames, passwords, or cookies sent to another site. Most JavaScript-related security bugs are breaches of either the same origin policy or the sandbox.</p>

<p><strong>Content Security Policy</strong> is the main intended method of ensuring that only trusted code is executed on a Web page.</p>

<h3>Useful Tools</h3>

<ul>
<li>Browser Developer Tools

<ul>
<li><a href="https://getfirebug.com/" rel="nofollow noreferrer">Firebug</a> Add-on for Firefox</li>
<li><a href="https://developer.mozilla.org/en-US/docs/Tools" rel="nofollow noreferrer">Firefox Developer Tools</a> for Firefox</li>
<li><a href="https://msdn.microsoft.com/en-us/library/gg589507(v=vs.85).aspx" rel="nofollow noreferrer">Developer Tools</a> for IE</li>
<li><a href="https://developer.chrome.com/devtools/index" rel="nofollow noreferrer">Chrome Developer Tools</a> for Chrome</li>
<li><a href="https://developer.apple.com/safari/tools/" rel="nofollow noreferrer">Web Inspector</a> for Safari</li>
</ul></li>
<li>Ways to provide live demos

<ul>
<li><a href="https://blog.stackoverflow.com/2014/09/introducing-runnable-javascript-css-and-html-code-snippets/">Snippets</a> for including live demos in questions</li>
<li><a href="https://jsfiddle.net" rel="nofollow noreferrer">JSFiddle</a> for testing snippets (online)</li>
<li><a href="http://plnkr.co/" rel="nofollow noreferrer">Plunker</a> for testing snippets (online)</li>
<li><a href="https://jsbin.com" rel="nofollow noreferrer">JSBin</a> for testing snippets (online/offline)</li>
<li><a href="http://codepen.io/" rel="nofollow noreferrer">CodePen</a> for testing snippets (online)</li>
<li><a href="http://liveweave.com/" rel="nofollow noreferrer">Liveweave</a> for testing snippets (online)</li>
</ul></li>
<li>Error detection and best practice testing

<ul>
<li><a href="http://jshint.com/" rel="nofollow noreferrer">JSHint</a></li>
<li><a href="http://eslint.org/" rel="nofollow noreferrer">ESLint</a></li>
<li><a href="http://standardjs.com/" rel="nofollow noreferrer">StandardJS</a></li>
</ul></li>
<li>Code formatting

<ul>
<li><a href="http://jsbeautifier.org/" rel="nofollow noreferrer">Beautifier for JavaScript</a></li>
</ul></li>
</ul>

<h3>Interactive JavaScript learning</h3>

<ul>
<li><a href="https://www.codecademy.com/en/tracks/javascript" rel="nofollow noreferrer">Codecademy | JavaScript</a>: Learn the fundamentals of JavaScript and dynamic programming.</li>
<li><a href="https://www.udacity.com/course/cs262" rel="nofollow noreferrer">Udacity | Programming Languages</a>: Key concepts include specifying and processing valid strings, sentences, and program structures.</li>
<li><a href="https://www.codeschool.com/" rel="nofollow noreferrer">Code School</a>: Learn the fundamentals of JavaScript and dynamic programming.</li>
<li><a href="http://khanacademy.com" rel="nofollow noreferrer">Khan Academy</a>: Best to learn about animations.</li>
<li><a href="http://www.codewars.com/" rel="nofollow noreferrer">Codewars</a>: Learn patterns and train on quizzes posted from community members</li>
</ul>

<h3>Wisdom from the Stack</h3>

<ul>
<li><a href="https://stackoverflow.com/questions/2628672/what-should-every-javascript-programmer-know">What should every JavaScript programmer know?</a></li>
<li><a href="https://stackoverflow.com/questions/61088/hidden-features-of-javascript">Hidden Features of JavaScript?</a></li>
<li><a href="https://stackoverflow.com/questions/111102/how-do-javascript-closures-work">How do JavaScript closures work?</a></li>
<li><a href="https://stackoverflow.com/questions/562412/return-value-from-function-with-an-ajax-call">Return value from function with an Ajax call</a></li>
<li><a href="https://stackoverflow.com/questions/336859/javascript-var-functionname-function-vs-function-functionname">var functionName = function() {} vs function functionName() {}</a></li>
<li><a href="https://stackoverflow.com/questions/1639180/how-does-the-function-construct-work-and-why-do-people-use-it">How does the (function() {})() construct work and why do people use it?</a></li>
<li><a href="https://stackoverflow.com/questions/500431/what-is-the-scope-of-variables-in-javascript">What is the scope of variables in JavaScript?</a></li>
<li><a href="https://stackoverflow.com/questions/9549780/what-does-this-symbol-mean-in-javascript">What does this symbol mean in JavaScript?</a></li>
<li><a href="https://stackoverflow.com/questions/988363/how-can-i-debug-my-javascript-code">How can I debug my JavaScript code?</a></li>
</ul>

<h3>Useful links</h3>

<ul>
<li><a href="https://en.wikipedia.org/wiki/JavaScript" rel="nofollow noreferrer">Wikipedia reference</a> </li>
<li><a href="http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/" rel="nofollow noreferrer">Native JavaScript Equivalents of jQuery Methods</a> </li>
<li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference" rel="nofollow noreferrer">MDN JavaScript Reference</a></li>
<li><a href="http://www.quirksmode.org/dom/w3c_core.html" rel="nofollow noreferrer">W3C DOM Core</a>, <a href="http://www.quirksmode.org/dom/w3c_html.html" rel="nofollow noreferrer">HTML</a>, <a href="http://www.quirksmode.org/dom/events/index.html" rel="nofollow noreferrer">events</a> and <a href="http://www.quirksmode.org/dom/w3c_css.html" rel="nofollow noreferrer">CSS</a> compatibility tables from <a href="http://www.quirksmode.org" rel="nofollow noreferrer">http://www.quirksmode.org</a></li>
<li><a href="http://www.jslint.com" rel="nofollow noreferrer">JSLint</a> Code Quality Tool by <a href="http://www.crockford.com/" rel="nofollow noreferrer">Douglas Crockford</a> (and <a href="https://jshint.com" rel="nofollow noreferrer">JSHint</a>, a community-driven branch of the original)</li>
<li>Code minifiers/obfuscators: <a href="http://dean.edwards.name/packer/" rel="nofollow noreferrer">/packer/</a>, <a href="https://yui.github.io/yuicompressor/" rel="nofollow noreferrer">YUI Compressor</a>, <a href="https://closure-compiler.appspot.com/home" rel="nofollow noreferrer">Google Closure Compiler</a>, <a href="https://github.com/mishoo/UglifyJS/#readme" rel="nofollow noreferrer">UglifyJS</a></li>
<li>Code formatter/deobfuscator: <a href="http://jsbeautifier.org/" rel="nofollow noreferrer">JSBeautifier</a></li>
<li>Idioms and Gotchas: <a href="http://www.merlyn.demon.co.uk/js-round.htm" rel="nofollow noreferrer">Rounding</a>, <a href="http://www.merlyn.demon.co.uk/js-date8.htm" rel="nofollow noreferrer">Date Object</a>, <a href="http://www.hunlock.com/blogs/The_Complete_Javascript_Number_Reference" rel="nofollow noreferrer">Number Object</a>, <a href="http://dmitrysoshnikov.com/ecmascript/chapter-4-scope-chain/" rel="nofollow noreferrer">Scope Chain</a></li>
<li><a href="http://bonsaiden.github.com/JavaScript-Garden" rel="nofollow noreferrer">JavaScript Garden</a></li>
<li><a href="http://www.fortybelow.ca/hosted/comp-lang-javascript/faq/" rel="nofollow noreferrer">comp.lang.javascript FAQ</a>: Very extensive guide on JavaScript quirks created by Usenet's <a href="https://groups.google.com/group/comp.lang.javascript/topics" rel="nofollow noreferrer">comp.lang.javascript</a></li>
<li><a href="http://www.ecma-international.org/ecma-262/5.1/" rel="nofollow noreferrer">ECMA 262-5 Online</a>: HTML version of the ECMAScript 5 specification.</li>
<li><a href="https://es5.github.io/" rel="nofollow noreferrer">Annotated ES5</a>: Annotated and hyperlinked HTML derivative of the ECMAScript 5 specification.</li>
<li><a href="https://www.ecma-international.org/ecma-262/6.0/" rel="nofollow noreferrer">HTML ECMAScript 6 specification.</a></li>
<li><a href="http://pointedears.de/scripts/test/es-matrix/" rel="nofollow noreferrer">ECMAScript Support Matrix</a>: In-depth feature list for ECMAScript implementations.</li>
<li><a href="http://kangax.github.io/es5-compat-table/es6/" rel="nofollow noreferrer">ES6 compatibility table</a></li>
<li><a href="http://www.javascriptweekly.com" rel="nofollow noreferrer">JavaScript Weekly</a>: A free, weekly newsletter curated by Peter Cooper</li>
<li><a href="http://nodeweekly.com/" rel="nofollow noreferrer">Node Weekly</a>: A free, weekly newsletter </li>
<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence" rel="nofollow noreferrer">Operator Precedence</a>: Operator Precedence table, Associativity</li>
</ul>

<h3>Free JavaScript Programming Books</h3>

<ul>
<li><a href="http://www.crockford.com/javascript/" rel="nofollow noreferrer">Crockford's JavaScript</a></li>
<li><a href="http://eloquentjavascript.net/" rel="nofollow noreferrer">Eloquent JavaScript</a></li>
<li><a href="https://github.com/getify/You-Dont-Know-JS" rel="nofollow noreferrer">You Don't Know JS</a></li>
<li><a href="http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/" rel="nofollow noreferrer">Essential JavaScript &amp; jQuery Design Patterns for Beginners</a></li>
<li><a href="http://www.techotopia.com/index.php/JavaScript_Essentials" rel="nofollow noreferrer">JavaScript Essentials</a></li>
<li><a href="http://jqfundamentals.com/legacy/" rel="nofollow noreferrer">jQuery Fundamentals</a> (starts with JavaScript basics)</li>
<li><a href="https://developer.mozilla.org/en/JavaScript/Guide" rel="nofollow noreferrer">Mozilla Developer Network's JavaScript Guide</a></li>
<li><a href="http://enterprisewebbook.com/" rel="nofollow noreferrer">Enterprise Web Development: From Desktop to Mobile</a></li>
<li><a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" rel="nofollow noreferrer">Learning JavaScript Design Patterns - Addy Osmani</a></li>
<li><a href="https://addyosmani.com/largescalejavascript" rel="nofollow noreferrer">Patterns For Large-Scale JavaScript Development - Addy Osmani</a></li>
<li><a href="http://jsbooks.revolunet.com/" rel="nofollow noreferrer">JS Books - Free JavaScript Books</a></li>
</ul>

<h3>Videos</h3>

<ul>
<li><a href="https://www.youtube.com/user/yuilibrary/playlists" rel="nofollow noreferrer">YUI Library</a></li>
<li><a href="https://www.youtube.com/user/angularjs/playlists" rel="nofollow noreferrer">AngularJS Channel</a></li>
<li><a href="https://www.youtube.com/user/learncodeacademy/playlists" rel="nofollow noreferrer">LearnCode.academy</a></li>
<li><a href="https://www.youtube.com/channel/UCzVnCG4ItKitN1SCBM7-AbA/playlists" rel="nofollow noreferrer">JavaScript Planet</a></li>
<li><a href="https://developer.chrome.com/devtools/docs/videos" rel="nofollow noreferrer">Google Chrome Developer Tools</a></li>
<li><a href="https://www.codeschool.com/paths/javascript" rel="nofollow noreferrer">Codeschool JavaScript</a></li>
</ul>

<hr>

<h2>Example JavaScript code</h2>

<p>This script displays "Hello World" on your screen.</p>

<pre class="lang-js prettyprint prettyprinted" style=""><code><span class="pln">window</span><span class="pun">.</span><span class="pln">onload </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
 alert</span><span class="pun">(</span><span class="str">'Hello World!'</span><span class="pun">);</span><span class="pln">
</span><span class="pun">}</span></code></pre>

<p><a href="https://jsfiddle.net/YSQ56/" rel="nofollow noreferrer">Demo!</a></p>

<hr>

<h2>Frequently Asked Questions</h2>

<p>Find some answers to some of the more frequently asked questions about JavaScript and related technology below.</p>

<p><strong>Q:</strong> I have this JSON structure, how can I access property <code>x.y.z</code>?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/q/11922383">Access / process (nested) objects, arrays or JSON</a></p>

<p><strong>Q:</strong> I'm adding events in a for loop but all handlers do the same thing, why?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example">JavaScript closure inside loops – simple practical example</a></p>

<p><strong>Q:</strong> I want to compare something against multiple values, is there an easy way to do it?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/13737091/concise-way-to-compare-against-multiple-values">Concise way to compare against multiple values</a></p>

<p><strong>Q:</strong> How to set up proper inheritance?<br>
<strong>A:</strong>  <a href="https://stackoverflow.com/questions/11072556/objects-dont-inherit-prototyped-functions/11072626">Objects don't inherit prototyped functions</a></p>

<p><strong>Q:</strong> How do JavaScript closures work?<br>
<strong>A:</strong>  <a href="https://stackoverflow.com/questions/111102/how-do-javascript-closures-work/">How do JavaScript closures work?</a></p>

<p><strong>Q:</strong> Why does <code>setTimeout()</code> inside a <code>for</code> loop always use the latest value?<br>
<strong>A:</strong>  <a href="https://stackoverflow.com/questions/5226285">setTimeout in for-loop does not print consecutive values</a></p>

<p><strong>Q:</strong> How to return the response from an AJAX call from a function?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/14220321">How do I return the response from an asynchronous call?</a></p>

<p><strong>Q:</strong> Why don't my handlers hooked up in a loop work correctly, and what can I do about it?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/16794707/javascript-generate-dynamically-handler/16794762#16794762">Javascript: generate dynamically handler</a></p>

<p><strong>Q:</strong> How can I get query string values?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/901115">How can I get query string values in JavaScript?</a></p>

<p><strong>Q:</strong> What does <code>use strict</code> do in JavaScript?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/1335851/what-does-use-strict-do-in-javascript-and-what-is-the-reasoning-behind-it">What does "use strict" do in JavaScript, and what is the reasoning behind it?</a></p>

<p><strong>Q:</strong> How can I make a redirect page in jQuery/JavaScript?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/503093/how-can-i-make-a-redirect-page-in-jquery-javascript">How to redirect to another webpage?</a></p>

<p><strong>Q:</strong> How to sort an array of objects by a property value?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/1129216/sorting-objects-in-an-array-by-a-field-value-in-javascript">Sort array of objects by string property value in JavaScript</a></p>

<p><strong>Q:</strong> I'm adding elements with JavaScript or jQuery at a later point and adding events but they're not firing, why?<br>
<strong>A:</strong>  You might want <a href="https://stackoverflow.com/questions/1687296/what-is-dom-event-delegation">event delegation</a>.</p>

<p><strong>Q:</strong> How can I only keep items of an array that match a certain condition?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/27131984/how-can-i-only-keep-items-of-an-array-that-match-a-certain-condition">How can I only keep items of an array that match a certain condition?</a></p>

<p><strong>Q:</strong> How can I debug my JavaScript code?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/988363/how-can-i-debug-my-javascript-code">How can I debug my JavaScript code?</a></p>

<p><strong>Q:</strong> What does this symbol mean in JavaScript?<br>
<strong>A:</strong> <a href="https://stackoverflow.com/questions/9549780/what-does-this-symbol-mean-in-javascript">What does this symbol mean in JavaScript?</a></p>

<h2>More information:</h2>

<ul>
<li><a href="https://en.wikipedia.org/wiki/JavaScript" rel="nofollow noreferrer">Wikipedia on JavaScript</a></li>
<li><a href="https://developer.mozilla.org/en-US/learn/javascript" rel="nofollow noreferrer">MDN - Learn JavaScript</a></li>
<li><a href="https://www.youtube.com/watch?feature=player_embedded&amp;v=IPxQ9kEaF8c" rel="nofollow noreferrer">Creator of JavaScript, Brendan Eich, explains the origin</a></li>
</ul>

<h2>Chat Room</h2>

<ul>
<li><a href="https://chat.stackoverflow.com/rooms/17/javascript">Stack Overflow chat room for JavaScript</a></li>
</ul>
    
  </div>
    `
    },
    {
        id: 2,
        name: 'TypeScript',
        postCount: 333,
        excerpt:
        `<p>TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. This tag is for questions specific to TypeScript. It is not used for general JavaScript questions.</p>
        `,
        description:
        `
        <div class="post-text">
        
  
        
        <div class="welovestackoverflow" id="wiki-excerpt">
              <p>
                  TypeScript is a typed superset of JavaScript created by Microsoft that adds optional types, classes, async/await, and many other features, and compiles to plain JavaScript. This tag is for questions specific to TypeScript. It is not used for general JavaScript questions.
              </p>
        </div>
  
  <p><a href="http://typescriptlang.org/" rel="nofollow noreferrer">TypeScript</a> is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional types, classes, interfaces, and modules to JavaScript. It was developed by Microsoft and is <a href="https://www.github.com/Microsoft/TypeScript" rel="nofollow noreferrer">open source</a>.</p>
  
  <ul>
  <li>TypeScript offers classes, modules, and interfaces to help developers build robust components.</li>
  <li>TypeScript types let developer define interfaces between software components and to gain insight into the behavior of existing JavaScript libraries.</li>
  <li>TypeScript starts from the syntax and semantics that millions of JavaScript developers know today.</li>
  <li>With TypeScript, developers can use existing JavaScript code, incorporate popular JavaScript libraries, and be called from other JavaScript code.</li>
  <li>TypeScript compiles to JavaScript code which runs on any browser, in Node.js, or in any other ES3-compatible environment. </li>
  <li>TypeScript as a language extension adds (amongst others) the following features: 
  
  <ul>
  <li>Type annotations and compile-time type checking</li>
  <li>Namespaces</li>
  <li>Enums (to define a set of named constants)</li>
  <li>Generics (classes, types, and functions that can work over a variety of types)</li>
  <li>Await (suspends the execution until an asynchronous function return promise is fulfilled)</li>
  <li>Abbreviated "arrow" syntax for anonymous functions</li>
  <li>Optional parameters and default parameters</li>
  </ul></li>
  </ul>
  
  <p>&ensp;</p>
  
  <h2>Useful Links</h2>
  
  <ul>
  <li><a href="https://github.com/Microsoft/TypeScript/raw/master/doc/TypeScript%20Language%20Specification.docx" rel="nofollow noreferrer">TypeScript Specification <sup>[doc]</sup></a> <a href="https://github.com/Microsoft/TypeScript/raw/master/doc/TypeScript%20Language%20Specification.pdf" rel="nofollow noreferrer"><sup>[pdf]</sup></a> <a href="https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md" rel="nofollow noreferrer"><sup>[latest]</sup></a></li>
  <li><a href="http://www.typescriptlang.org/" rel="nofollow noreferrer">TypeScript Home</a>: Main landing page for TypeScript Language.</li>
  <li><a href="http://www.typescriptlang.org/Playground/" rel="nofollow noreferrer">TypeScript Playground</a>: An online TypeScript editor by Microsoft.</li>
  <li><a href="http://www.typescriptlang.org/Samples/" rel="nofollow noreferrer">TypeScript Samples</a>: Code samples and demos of complete applications written in TypeScript</li>
  <li><a href="https://www.github.com/Microsoft/TypeScript" rel="nofollow noreferrer">TypeScript GitHub Project</a>: Issue tracker and source code</li>
  <li><a href="http://blogs.msdn.com/b/typescript/" rel="nofollow noreferrer">TypeScript Blog</a>: Official TypeScript Blog </li>
  <li><a href="https://github.com/Microsoft/TypeScript/wiki/Roadmap" rel="nofollow noreferrer">TypeScript Roadmap</a>: The planned future of TypeScript</li>
  <li><a href="http://www.typescriptlang.org/Handbook" rel="nofollow noreferrer">TypeScript Handbook</a>: User-oriented documentation for TypeScript</li>
  <li><a href="https://basarat.gitbooks.io/typescript/" rel="nofollow noreferrer">TypeScript Deep Dive</a>: An open source book on TypeScript targeted at beginners - advanced developers.</li>
  <li><a class="doc-link" href="https://stackoverflow.com/documentation/typescript/topics">Stack Overflow documentation</a></li>
  </ul>
  
  <p>&ensp;</p>
  
  <h2>Videos</h2>
  
  <ul>
  <li><a href="http://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript" rel="nofollow noreferrer">Anders Hejlsberg: Introducing TypeScript</a></li>
  <li><a href="http://channel9.msdn.com/posts/Anders-Hejlsberg-Steve-Lucco-and-Luke-Hoban-Inside-TypeScript" rel="nofollow noreferrer">Anders Hejlsberg, Steve Lucco, and Luke Hoban: Inside TypeScript</a></li>
  <li><a href="http://channel9.msdn.com/Events/Build/2013/3-314" rel="nofollow noreferrer">Anders Hejlsberg, Steve Lucco: TypeScript: Application-Scale JavaScript</a></li>
  <li><a href="http://channel9.msdn.com/Events/Build/2013/9-006" rel="nofollow noreferrer">Anders Hejlsberg: TypeScript Q&amp;A</a></li>
  </ul>
        
      </div>
        `
    },
    {
        id: 3,
        name: 'Angular',
        excerpt:
        `
        <p>
        Questions about Angular, the web framework from Google. Use this tag for Angular questions which are not specific to an individual version. For the older AngularJS (1.x) web framework, use the angularjs tag.
        </p>
        `,
        description:
        `
        <div class="post-text">
        
  
        
        <div class="welovestackoverflow" id="wiki-excerpt">
              <p>
                  Questions about Angular, the web framework from Google. Use this tag for Angular questions which are not specific to an individual version. For the older AngularJS (1.x) web framework, use the angularjs tag.
              </p>
        </div>
  
  <p>The spiritual successor to the older AngularJS web framework.</p>
  
  <p><strong>Features and Benefits</strong></p>
  
  <ul>
  <li>Mobile First</li>
  <li>Future Ready</li>
  <li>Flexible Development</li>
  <li>Speed and Performance</li>
  <li>Supports server-side pre-rendering</li>
  <li>Simple and Expressive</li>
  <li>Comprehensive Routing</li>
  <li>Animations</li>
  <li>Hierarchical <a href="http://en.wikipedia.org/wiki/Dependency_injection" rel="nofollow noreferrer">Dependency Injection</a></li>
  <li>Support for Web Components</li>
  <li><a href="http://en.wikipedia.org/wiki/Internationalization_and_localization" rel="nofollow noreferrer">Internationalisation and localisation</a> (i18n) &amp; Accessibility</li>
  <li><a href="https://angular.io/features.html" rel="nofollow noreferrer">More information</a></li>
  </ul>
  
  <hr>
  
  <h3>Building Blocks of Angular Apps</h3>
  
  <ul>
  <li><strong>Module</strong>: A typical module is a cohesive block of code dedicated to a single purpose. A module exports something of value in that code, typically one thing such as a class. </li>
  <li><strong>Component</strong>: A component is a building block with component metadata. In TypeScript we'd apply the <code>@Component</code> decorator to attach metadata to the class. This metadata mainly consists of the template or templateUrl, the selector, and the attached styling.</li>
  <li><strong>Template</strong>: We define a Component's view with its companion template. A template is a form of HTML that tells Angular how to render the Component.</li>
  <li><strong>Metadata</strong>: Metadata tells Angular how to process a class.</li>
  <li><p><strong>Data Binding</strong>: Angular supports data binding, a mechanism for coordinating parts of a template with parts of a component. 
  There are four forms of data-binding syntax:</p>
  
  <ul>
  <li>Interpolation: <code>{{value}}</code></li>
  <li>Property binding : <code>[property]="value"</code></li>
  <li>Event Binding : <code>(event)="handler"</code></li>
  <li>Two-way data binding: <code>[(ngModel)]="property"</code></li>
  </ul></li>
  <li><p><strong>Service</strong>: "Service" is a broad category encompassing any value, function or feature that our application needs.</p></li>
  <li><strong>Directive</strong>: A directive is a class with directive metadata. In TypeScript we'd apply the <code>@Directive</code> decorator to attach metadata to the class.</li>
  <li><strong>Dependency Injection</strong>: "Dependency Injection" is a way to supply a new instance of a class with the fully-formed dependencies it requires. Most dependencies are services. Angular uses dependency injection to provide new components with the services they need.</li>
  <li><strong>Pipes</strong>: Pipes are used to transform values from one form to another. Angular offers many built-in pipes. Also, you can create custom pipes too. </li>
  </ul>
  
  <hr>
  
  <p>See the <a href="https://github.com/angular/angular/blob/master/CHANGELOG.md" rel="nofollow noreferrer">changelog</a> for latest version information.</p>
  
  <p>As of September 2017, the current version is 4, with 5 in beta. Angular versioning follows <a href="http://angularjs.blogspot.de/2016/10/versioning-and-releasing-angular.html" rel="nofollow noreferrer">Semantic Versioning principles</a>; version 4 is a breaking change over version 2.</p>
  
  <p>Consider using the <a href="https://angular-update-guide.firebaseapp.com/" rel="nofollow noreferrer">Update Guide (beta)</a> for tips before changing version.</p>
  
  <hr>
  
  <h3>Browser Support</h3>
  
  <ul>
  <li>Latest versions of Chrome, Edge, Firefox, IE and Safari</li>
  <li>Tested for older browsers including IE9+ and Android 4.1+</li>
  </ul>
  
  <hr>
  
  <h3>Useful links</h3>
  
  <ul>
  <li><a href="https://angular.io/" rel="nofollow noreferrer">Official website</a></li>
  <li><a href="https://github.com/angular/angular" rel="nofollow noreferrer">Github repository</a></li>
  <li><a href="https://github.com/angular/angular/blob/master/CHANGELOG.md#500-beta7-2017-09-13" rel="nofollow noreferrer">ChangeLog</a></li>
  <li><a href="http://www.angular2.com/" rel="nofollow noreferrer">List of resources for learning how to Angular</a></li>
  <li><a href="https://github.com/AngularClass/awesome-angular" rel="nofollow noreferrer">Awesome Angular - comprehensive list of resources</a></li>
  <li><a href="https://github.com/brillout/awesome-angular-components" rel="nofollow noreferrer">Angular 2+ Components &amp; Libraries</a></li>
  </ul>
  
  <hr>
  
  <h3>Books</h3>
  
  <ul>
  <li><a href="https://www.ng-book.com/2/" rel="nofollow noreferrer">ng-book 2</a></li>
  <li><a href="https://rads.stackoverflow.com/amzn/click/1617293121" rel="nofollow noreferrer">Angular 2 Development with TypeScript</a> </li>
  </ul>
  
  <hr>
  
  <h3>Code Editors &amp; IDEs</h3>
  
  <ul>
  <li><a href="https://atom.io/" rel="nofollow noreferrer">Atom</a></li>
  <li><a href="https://stackblitz.com/fork/angular" rel="nofollow noreferrer">StackBlitz, online code editor</a></li>
  <li><a href="https://code.visualstudio.com/" rel="nofollow noreferrer">VisualStudio Code</a></li>
  <li><a href="https://www.jetbrains.com/webstorm" rel="nofollow noreferrer">WebStorm</a></li>
  <li><a href="https://www.sublimetext.com/3" rel="nofollow noreferrer">Sublime Text</a></li>
  </ul>
  
  <hr>
        
      </div>
        `,
        postCount: 2
    }];