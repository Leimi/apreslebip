<?php
// Routes

$app->get('/', function ($request, $response, $args) {
	return $this->renderer->render($response, 'index.phtml', $args);
});

$app->get('/laisserunmessage', function ($request, $response, $args) {
	return $this->renderer->render($response, 'index.phtml', $args);
});

function getRandomSound($dir) {
	$files = glob($dir . '/*.wav');
	$file = array_rand($files);
	return $files[$file];
}

$app->get('/unmessage', function($request, $response, $args) {
	$randomMessage = '/messages/' . basename(getRandomSound(__DIR__ . '/../public/messages'));
	return $response->withJson(['file' => $randomMessage]);
});

$app->post('/laisserunmessage', function ($request, $response, $args) {
	$parsedBody = $request->getParsedBody();
	if (empty($parsedBody['data']) || empty($parsedBody['fname'])) {
		die;
	}
	$data = substr($parsedBody['data'], strpos($parsedBody['data'], ",") + 1);
	$audioData = base64_decode($data);
	$filename = $parsedBody['fname'];
	$filepath = __DIR__ . '/../public/messages/' . $filename;
	$fp = fopen($filepath, 'wb');
	fwrite($fp, $audioData);
	fclose($fp);
	$data = realpath($filepath)
		? ['status' => 'success']
		: ['status' => 'error'];
    return $response->withJson($data);
});
