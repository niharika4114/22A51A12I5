async function log(stack, level, packageName, message) {
    const payload = {
        stack: stack,
        level: level,
        package: packageName,
        message: message
    };

    try {
        await fetch('http://20.246.36.144/evaluation-service/logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log('Log sent:', payload);
    } catch (err) {
        console.error('Failed to send log:', err);
    }
}
