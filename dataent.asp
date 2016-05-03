<%@LANGUAGE="VBSCRIPT"%>
<% option Explicit %>
<%
dim a
set a = server.CreateObject("ADODB.Connection")
a.open "Provider=Microsoft.Jet.OLEDB.4.0;Data source=feedback.mdb"
%>
<%
dim b
set b = server.CreateObject("ADODB.recordset")
b.open"feeddata",a,1,3
%>
<html>
<body>
<%
dim n,c
n = request.Form("name")
c = request.Form("message")
else
response.Write "Hello "& c & " Following people have commented this website"
b.addnew
b("name") = request.Form("name")
b("email") = request.Form("email")
b("website") = request.Form("website")
b("message") = request.Form("message")
b.update

%>
<table width="100%" cellpadding="2" cellspacing="2" border="0">
<tr>
<th><% dim fieldname
b.movefirst
response.write("Sl.No") %></th>
<% for each fieldname in b.fields %>
<th><% response.write(fieldname.Name) %></th>
<% next %></tr>
<% 
dim sln
sln = 1
do while not b.EOF %>
<tr>
<td><% response.Write(sln) %></td>
<% for each fieldname in b.fields %>
<td><% response.write fieldname.value %></td>
<% next %>
<% b.movenext
sln = sln+1
loop 
end if
%>
</tr></table>
<% b.close
a.close
set b = nothing
set a = nothing %>
</body>
</html>


