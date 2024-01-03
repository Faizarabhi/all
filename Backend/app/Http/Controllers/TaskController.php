<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use App\Http\Resources\TasksResource;
use App\Models\Task;
use Illuminate\Http\Request;
use Kreait\Laravel\Firebase\Facades\Firebase;
use Kreait\Firebase\Messaging\CloudMessage;
use Kreait\Firebase\Messaging\Notification;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        try {
            $tasks = Task::query();

            if (!is_null($request->search)) {
                $tasks->where('title', 'LIKE', '%' . $request->search . '%')
                    ->orWhere('description', 'LIKE', '%' . $request->search . '%');
            }

            $data = TasksResource::collection($tasks->orderBy('created_at', 'DESC')->paginate(8));

            if ($data->isEmpty()) {
                return response(['status' => 'No Record Found']);
            }

            return $data;
        } catch (\Exception $e) {
            return $e->getMessage();
        }
    }

    public function create()
    {
    }
    public function store(Request $request)
    {
        try {


            $request->validate([
                'title' => 'required',
                // TODO:: after add user login and register (task non duplicate)
                // 'title' => 'required|unique:tasks,title,NULL,id,user_id,' . $user->id . ',completed,0',
                // 'description' => 'required',
                // 'due_date' => 'required',
                // 'completed' => 'required',
            ]);


            $final_push = [
                'title' => $request->title,
                'description' => $request->description,
                'due_date' => $request->due_date,
                'completed' => $request->completed ?? false,
            ];
            $task = Task::create($final_push);
            // Construct a notification
            $notification = Notification::create('Notification title')
                ->body('Notification body');
            if (is_array($notification)) {

                // Construct a CloudMessage with the notification
                $message = CloudMessage::new()
                    ->withNotification($notification);

                // Send the message
                Firebase::messaging()->send($message);
            }
            return new TaskResource($task);
        } catch (\Exception $e) {
            throw $e;
        }
    }

    public function show(Task $task)
    {
        $data = new TaskResource($task);
        if (!$data) {
            return response(['KO' => 'Task not Available due to an error']);
        }
        return $data;
    }

    public function edit(Task $task)
    {
    }

    public function update(Request $request, Task $task)
    {
        $request->validate([
            'title' => 'required',
            // TODO:: after add user login and register (task non duplicate)
            // 'title' => 'required|unique:tasks,title,NULL,id,user_id,' . $user->id . ',completed,0',
            // 'completed' => 'required',
        ]);
        $final_push = [
            'title' => $request->title,
            'description' => $request->description,
            'due_date' => $request->due_date,
            'completed' => $request->completed,
        ];
        $task->update($final_push);
        return new TaskResource($task);
    }

    public function destroy(Task $task)
    {
        $task->delete();
        return response(['status' => 'Task Deleted']);
    }
}
