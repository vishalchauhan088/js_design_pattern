<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Design Patterns</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            line-height: 1.6;
            color:white;
        }
        .container {
            display: flex;
            gap: 20px;
            background-color:#ffb3be;
            padding: 10px 20px;
            overflow:auto;
        }
        .column {
            flex: 1;
            padding: 10px;
            border: 1px solid pink;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            background-color: #FBF2C0;
            color:black;
        }
        .column h3 {
            text-align: center;
            border-bottom: 2px solid #646cff;
            padding-bottom: 5px;
            margin-bottom: 15px;
        }
        .column ul {
            list-style: none;
            padding: 0;
        }
        .column ul li {
            margin: 8px 0;
            padding: 4px;
        }
    </style>
</head>
<body>
    <h1>Design Patterns</h1>
    <div class="container">
        <div class="column">
            <h3>Creational Patterns</h3>
            <ul>
                <li>1. Singleton</li>
                <li>2. Prototype</li>
                <li>3. Factory Method</li>
                <li>4. Builder</li>
                <li>5. Abstract</li>
            </ul>
        </div>
        <div class="column">
            <h3>Structural Patterns</h3>
            <ul>
                <li>1. Adapter</li>
                <li>2. Bridge</li>
                <li>3. Composite</li>
                <li>4. Decorator</li>
                <li>5. Facade</li>
                <li>6. Flyweight</li>
                <li>7. Proxy</li>
            </ul>
        </div>
        <div class="column">
            <h3>Behavioral Patterns</h3>
            <ul>
                <li>1. Chain of Responsibility</li>
                <li>2. Command</li>
                <li>3. Interpreter</li>
                <li>4. Mediator</li>
                <li>5. Memento</li>
                <li>6. Observer</li>
                <li>7. State</li>
                <li>8. Strategy</li>
                <li>9. Template Method</li>
                <li>10. Visitor</li>
            </ul>
        </div>
        <div class="column">
            <h3>Others</h3>
            <ul>
                <li>1. Reactor</li>
                <li>2. Blockchain</li>
                <li>3. Scheduler</li>
                <li>4. Pub-Sub</li>
            </ul>
        </div>
    </div>
</body>
</html>
