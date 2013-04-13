<h1>tablesort.js</h1>
<p>Tablesort is a small &amp; simple sorting component for tables written in Javascript. It has no dependencies and should have no interference with other libraries.</p>
<h2>Basic usage</h2>
<pre><code class="lang-html">&lt;script src=&#39;tablesort.min.js&#39;&gt;&lt;/script&gt;
&lt;script&gt;
  new Tablesort(document.getElementById(&#39;table-id&#39;));
&lt;/script&gt;</code></pre>
<h2>Sort Types</h2>
<ul>
<li>strings</li>
<li>numbers</li>
<li>currency</li>
<li>Basic dates in <code>dd/mm/yy</code> or <code>dd-mm-yy</code> format. Years can be 4 digits. Days and Months can be 1 or 2 digits.</li>
</ul>
<h2>Additional options</h2>
<p><strong>Ascending/Descending</strong><br>You can pass in options as a second parameter. Currently one option is supported: <code>descending: true</code>. By default, sort is set to ascending.</p>
<pre><code class="lang-html">new Tablesort(document.getElementById(&#39;table-id&#39;), {
  descending: true
});</code></pre>
<p><strong>Exclude columns or rows</strong><br>For columns or rows that do not require sorting, you can add a class of <code>no-sort</code> to a columns <code>th</code> or a <code>tr</code> element.</p>
<pre><code class="lang-html">&lt;th class=&#39;no-sort&#39;&gt;Name&lt;/th&gt;

&lt;tr class=&#39;no-sort&#39;&gt;
  &lt;td&gt;1&lt;/td&gt;
  &lt;td&gt;Gonzo the Great&lt;/td&gt;
  &lt;td&gt;12-2-70&lt;/td&gt;
  &lt;td&gt;Radishes&lt;/td&gt;
  &lt;td&gt;$0.63&lt;/td&gt;
&lt;/tr&gt;</code></pre>
<p><strong>Override data that is sorted on</strong><br>Sometimes text inside cells is not normalized. Using a <code>data-sort</code> attribute you can use optional data to sort on.</p>
<pre><code class="lang-html">&lt;tr&gt;
  &lt;td&gt;1&lt;/td&gt;
  &lt;td data-sort=&#39;1357656438&#39;&gt;01/08/13 @ 8:47:18am EST&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td&gt;2&lt;/td&gt;
  &lt;td data-sort=&#39;1078673085&#39;&gt;3/7/2004 @ 9:24:45 EST&lt;/td&gt;
&lt;/tr&gt;</code></pre>
<p><strong>Refresh sort on appended data</strong><br>Tablesort supports sorting when new data has been added. Simply call the refresh method.</p>
<pre><code class="lang-js">var table = document.getElementById(&#39;table-id&#39;);
var sort = new Tablesort(table);

// Make some Ajax request to fetch new data and on success:
sort.refresh();</code></pre>
<p><a href="http://tristen.ca/tablesort/demo/#refresh">See homepage for example</a></p>
<h2>Ender support</h2>
<p>Add <code>tablesort</code> as an internal chain method to your <a href="http://ender.no.de">Ender</a> compilation.</p>
<pre><code class="lang-shell">$ ender add tablesort</code></pre>
<p>Use it:</p>
<pre><code class="lang-js">$(&#39;.table&#39;).tablesort();</code></pre>
<h2>Default style</h2>
<p>Add the styling below to your CSS or roll with your own.</p>
<pre><code class="lang-css">th.sort-header {
  cursor:pointer;
  }
th.sort-header::-moz-selection,
th.sort-header::selection {
  background:transparent;
  }
table th.sort-header:after {
  content:&#39;&#39;;
  float:right;
  margin-top:7px;
  border-width:0 4px 4px;
  border-style:solid;
  border-color:#404040 transparent;
  visibility:hidden;
  }
table th.sort-header:hover:after {
  visibility:visible;
  }
table th.sort-up:after,
table th.sort-down:after,
table th.sort-down:hover:after {
  visibility:visible;
  opacity:0.4;
  }
table th.sort-up:after {
  border-bottom:none;
  border-width:4px 4px 0;
  }</code></pre>
<h2>Building</h2>
<p>Tablesort relies on <a href="http://gruntjs.com">Grunt</a> as its build tool. Simply run <code>grunt</code> to package code
from any contributions you make to <code>src/tablesort.js</code> before submitting pull requests.</p>
<h2>TODOs</h2>
<ul>
<li>Tests</li>
<li>Pass in an options object to:<ul>
<li>EventListener to rebuild the table in Ender.</li>
</ul>
</li>
</ul>
<h2>Licence</h2>
<p>MIT</p>
<h2>Bugs?</h2>
<p><a href="https://github.com/tristen/tablesort/issues">Create an issue</a></p>
