
		Progress.calculateProgress = function (from, to, current, total) {
			console.log("progress: ", "from=", from, "to=", to, (from > to ? "<!> (from > to!)" : ""), "current=", current, "total=", total, "percentage=", (from + (current / total) * (to - from)) + "%");

			// THE FIX:
			current = Math.min(total, current);
			//
			Progress.updateProgress(from + (current / total) * (to - from));
		};

