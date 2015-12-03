<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page session="false" %>
<%@page pageEncoding="UTF-8" contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="initial-scale=1" />
    <base href="/new_project/">
	<title>The new project</title>
	
	<!-- custom CSS -->
	<link rel="stylesheet" href="/new_project/s/css/ng/base.css" type="text/css" />
</head>
<body>
	<base-directive inject-args="{a:'some A data', b:'some B data'}"></base-directive>
	<script src="/new_project/s/js/lib/require.js"></script>
	<script src="/new_project/s/js/src/run-app-module.js"></script>
</body>
</html>
